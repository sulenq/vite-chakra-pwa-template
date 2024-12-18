import useScreenWidth from "./useScreen";

const useIsSmScreenWidth = () => {
  const { sw } = useScreenWidth();

  return sw < 768;
};

export default useIsSmScreenWidth;
