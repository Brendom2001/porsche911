import os
import sys
import subprocess

VIDEO_PATH = "Black_Porsche_911_animation_202605271043.mp4"
OUTPUT_DIR = "public/frames/loop"
TARGET_FPS = 24
WEBP_QUALITY = 82


def check_and_install_opencv():
    try:
        import cv2
        return cv2
    except ImportError:
        print("OpenCV não encontrado. Instalando...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", "opencv-python"])
        import cv2
        return cv2


def extract_frames():
    cv2 = check_and_install_opencv()
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    cap = cv2.VideoCapture(VIDEO_PATH)
    if not cap.isOpened():
        print(f"Erro: não foi possível abrir '{VIDEO_PATH}'")
        return

    source_fps = cap.get(cv2.CAP_PROP_FPS)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    duration = total_frames / source_fps if source_fps > 0 else 0
    frame_interval = source_fps / TARGET_FPS

    print(f"Vídeo: {VIDEO_PATH}")
    print(f"FPS original: {source_fps:.2f} | Total frames: {total_frames} | Duração: {duration:.2f}s")
    print(f"Extraindo a {TARGET_FPS} FPS → destino: {OUTPUT_DIR}")

    frame_index = 0
    saved_count = 0

    while True:
        ret, frame = cap.read()
        if not ret:
            break
        if frame_index % frame_interval < 1:
            filename = os.path.join(OUTPUT_DIR, f"frame_{saved_count + 1:04d}.webp")
            cv2.imwrite(filename, frame, [cv2.IMWRITE_WEBP_QUALITY, WEBP_QUALITY])
            saved_count += 1
        frame_index += 1

    cap.release()
    print(f"\n✓ Concluído! {saved_count} frames salvos em '{OUTPUT_DIR}'.")
    print(f"\n⚠  Atualize o TOTAL_FRAMES em src/app/page.tsx para: {saved_count}")


if __name__ == "__main__":
    extract_frames()
