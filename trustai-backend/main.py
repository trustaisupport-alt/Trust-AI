from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
from uuid import uuid4
import shutil
import mimetypes


# =========================================================
# TRUST AI BACKEND
# =========================================================

app = FastAPI(
    title="TrustAI Security API",
    description="TrustAI media security and deepfake analysis API",
    version="1.0.0"
)


# =========================================================
# CORS
# =========================================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


# =========================================================
# STORAGE
# =========================================================

UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)


# Maximum upload size
# 100 MB for the first version
MAX_FILE_SIZE = 100 * 1024 * 1024


# =========================================================
# ALLOWED MEDIA
# =========================================================

IMAGE_TYPES = {
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/gif"
}

VIDEO_TYPES = {
    "video/mp4",
    "video/webm",
    "video/quicktime",
    "video/x-matroska"
}

AUDIO_TYPES = {
    "audio/mpeg",
    "audio/wav",
    "audio/x-wav",
    "audio/ogg",
    "audio/webm",
    "audio/mp4",
    "audio/aac"
}


# =========================================================
# HEALTH CHECK
# =========================================================

@app.get("/")
async def root():

    return {
        "service": "TrustAI Security API",
        "status": "online",
        "version": "1.0.0"
    }


@app.get("/health")
async def health():

    return {
        "status": "healthy",
        "service": "TrustAI"
    }


# =========================================================
# MEDIA TYPE DETECTION
# =========================================================

def detect_media_type(content_type: str):

    if content_type in IMAGE_TYPES:
        return "image"

    if content_type in VIDEO_TYPES:
        return "video"

    if content_type in AUDIO_TYPES:
        return "audio"

    return None


# =========================================================
# PRELIMINARY ANALYSIS
# =========================================================

def preliminary_analysis(media_type, filename, size):

    """
    IMPORTANT:

    This function does NOT claim to detect a real deepfake.

    It only performs basic file/security checks.

    A trained forensic AI model will replace this later.
    """

    extension = Path(filename).suffix.lower()

    indicators = []

    if size > 50 * 1024 * 1024:

        indicators.append(
            "Large media file"
        )

    if extension in {
        ".exe",
        ".scr",
        ".bat",
        ".cmd",
        ".js",
        ".apk"
    }:

        indicators.append(
            "Suspicious executable extension"
        )

    if not indicators:

        indicators.append(
            "No basic file-level warning detected"
        )

    return {
        "analysis_stage": "preliminary",
        "ai_detection": "not_available",
        "deepfake_confirmed": False,
        "identity_verified": False,
        "risk_score": 0,
        "risk_level": "UNKNOWN",
        "indicators": indicators,
        "message": (
            "The media was successfully received and "
            "passed basic file validation. A trained "
            "forensic AI model is required for genuine "
            "deepfake detection."
        )
    }


# =========================================================
# ANALYZE MEDIA
# =========================================================

@app.post("/api/analyze")
async def analyze_media(
    file: UploadFile = File(...)
):

    if not file.filename:

        raise HTTPException(
            status_code=400,
            detail="No filename was provided."
        )


    content_type = (
        file.content_type
        or mimetypes.guess_type(file.filename)[0]
        or ""
    ).lower()


    media_type = detect_media_type(
        content_type
    )


    if not media_type:

        raise HTTPException(
            status_code=415,
            detail=(
                "Unsupported media type. "
                "Please upload an image, video or audio file."
            )
        )


    # -----------------------------------------------------
    # Create unique filename
    # -----------------------------------------------------

    safe_extension = Path(
        file.filename
    ).suffix.lower()

    unique_name = (
        f"{uuid4().hex}{safe_extension}"
    )

    destination = UPLOAD_DIR / unique_name


    # -----------------------------------------------------
    # Save upload safely
    # -----------------------------------------------------

    total_size = 0

    try:

        with destination.open("wb") as buffer:

            while True:

                chunk = await file.read(1024 * 1024)

                if not chunk:
                    break

                total_size += len(chunk)


                if total_size > MAX_FILE_SIZE:

                    destination.unlink(
                        missing_ok=True
                    )

                    raise HTTPException(
                        status_code=413,
                        detail=(
                            "File is too large. "
                            "Maximum size is 100 MB."
                        )
                    )


                buffer.write(chunk)


    except HTTPException:

        raise


    except Exception as error:

        destination.unlink(
            missing_ok=True
        )

        raise HTTPException(
            status_code=500,
            detail="Could not save uploaded media."
        )


    finally:

        await file.close()


    # -----------------------------------------------------
    # Preliminary security analysis
    # -----------------------------------------------------

    result = preliminary_analysis(
        media_type,
        file.filename,
        total_size
    )


    return {

        "success": True,

        "service": "TrustAI",

        "analysis_id": uuid4().hex,

        "media": {

            "type": media_type,

            "filename": file.filename,

            "content_type": content_type,

            "size_bytes": total_size

        },

        "result": result

    }


# =========================================================
# API INFORMATION
# =========================================================

@app.get("/api")
async def api_info():

    return {

        "name": "TrustAI Security API",

        "version": "1.0.0",

        "endpoints": {

            "health": "GET /health",

            "analyze": "POST /api/analyze"

        },

        "supported_media": [

            "image",

            "video",

            "audio"

        ]

  }
