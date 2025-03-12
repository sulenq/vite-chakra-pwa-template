export function startCamera(
  videoRef: React.RefObject<HTMLVideoElement>,
  streamRef: React.MutableRefObject<MediaStream | null>,
  onError: (error: Error) => void
) {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((stream) => {
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    })
    .catch((error) => {
      onError(error);
      console.error("Gagal mengakses kamera:", error);
    });
}

export function stopCamera(
  videoRef: React.RefObject<HTMLVideoElement>,
  streamRef: React.MutableRefObject<MediaStream | null>
) {
  if (streamRef.current) {
    streamRef.current.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
  }
  if (videoRef.current) {
    videoRef.current.srcObject = null;
  }
}
