import { useEffect, useState } from "react";

const useScreen = () => {
  const [screen, setScreen] = useState({
    sw: window.innerWidth,
    sh: window.innerHeight,
  });

  useEffect(() => {
    let resizeTimeout: any;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setScreen({ sw: window.innerWidth, sh: window.innerHeight });
      }, 200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screen;
};

export default useScreen;
