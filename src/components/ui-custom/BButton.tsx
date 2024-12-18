import { IconButton } from "@chakra-ui/react";
import { Button, ButtonProps } from "@/components/ui/button";

interface Props extends ButtonProps {
  children?: any;
  unclicky?: boolean;
  iconButton?: boolean;
}

export default function BButton({
  children,
  unclicky = false,
  iconButton = false,
  className = "",
  ...props
}: Props) {
  const finalClassName = `${!unclicky ? "clicky" : ""} ${className}`.trim();

  return iconButton ? (
    <IconButton className={finalClassName} {...props}>
      {children}
    </IconButton>
  ) : (
    <Button className={finalClassName} {...props}>
      {children}
    </Button>
  );
}
