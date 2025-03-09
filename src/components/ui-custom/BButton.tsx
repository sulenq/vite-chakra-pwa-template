import { Button, ButtonProps } from "@/components/ui/button";
import { MAIN_BUTTON_SIZE } from "@/constant/sizes";
import { useThemeConfig } from "@/context/useThemeConfig";
import { IconButton } from "@chakra-ui/react";

interface Props extends ButtonProps {
  fRef?: any;
  children?: any;
  unclicky?: boolean;
  iconButton?: boolean;
  size?: any;
}

export default function BButton({
  fRef,
  children,
  unclicky = false,
  iconButton = false,
  className = "",
  size,
  ...props
}: Props) {
  const { themeConfig } = useThemeConfig();

  const finalClassName = `${!unclicky ? "clicky" : ""} ${className}`.trim();

  return iconButton ? (
    <IconButton ref={fRef} className={finalClassName} size={size} {...props}>
      {children}
    </IconButton>
  ) : (
    <Button
      ref={fRef}
      className={finalClassName}
      fontWeight={"semibold"}
      size={size || MAIN_BUTTON_SIZE}
      borderRadius={themeConfig.radii.component}
      {...props}
    >
      {children}
    </Button>
  );
}
