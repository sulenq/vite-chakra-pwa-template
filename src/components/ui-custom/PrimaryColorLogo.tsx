import { Image } from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode";
import { SVGProps } from "react";

interface LogoProps extends SVGProps<SVGSVGElement> {
  color?: string;
}

const PrimaryColorLogo = ({ color, ...props }: LogoProps) => {
  const { colorMode } = useColorMode();

  const defaultColor = colorMode === "dark" ? "#FFFFFF" : "#000000";

  return (
    // <svg
    //   height="20px"
    //   viewBox="0 0 100 100"
    //   fill={color || defaultColor}
    //   {...props}
    // ></svg>
    <Image src={"/svgs/logo_color.svg"} />
  );
};

export default PrimaryColorLogo;
