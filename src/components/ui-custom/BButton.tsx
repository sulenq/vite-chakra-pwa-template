import { Button, ButtonProps } from "@/components/ui/button";
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
  size = "md",
  ...props
}: Props) {
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
      size={size}
      {...props}
    >
      {children}
    </Button>
  );
}
