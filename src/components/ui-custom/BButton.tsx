import { Button, ButtonProps } from "@/components/ui/button";
import { IconButton } from "@chakra-ui/react";

interface Props extends ButtonProps {
  children?: any;
  unclicky?: boolean;
  iconButton?: boolean;
  size?: any;
}

export default function BButton({
  children,
  unclicky = false,
  iconButton = false,
  className = "",
  size = "md",
  ...props
}: Props) {
  const finalClassName = `${!unclicky ? "clicky" : ""} ${className}`.trim();

  return iconButton ? (
    <IconButton className={finalClassName} size={size} {...props}>
      {children}
    </IconButton>
  ) : (
    <Button className={finalClassName} size={size} {...props}>
      {children}
    </Button>
  );
}
