import { Image, ImageProps } from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode";
import { SVGS_PATH } from "@/constant/path";

interface Props extends ImageProps {}

const Logo = ({ ...props }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Image
      src={`${SVGS_PATH}/${
        colorMode === "dark" ? "logo_light" : "logo_dark"
      }.svg`}
      h={"20px"}
      {...props}
    ></Image>
  );
};

export default Logo;
