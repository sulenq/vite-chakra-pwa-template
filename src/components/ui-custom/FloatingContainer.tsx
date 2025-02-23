import { Presence, PresenceProps, StackProps } from "@chakra-ui/react";
import CContainer from "./CContainer";

interface Props extends PresenceProps {
  children?: any;
  open?: boolean;
  containerProps?: StackProps;
}
const FloatingContainer = ({
  children,
  open,
  containerProps,
  ...props
}: Props) => {
  return (
    <Presence
      lazyMount
      present={open}
      animationName={{
        _open: "slide-from-top, fade-in",
        _closed: "slide-to-top, fade-out",
      }}
      animationDuration="moderate"
      {...props}
    >
      <CContainer
        bg={"body"}
        border={"1px solid"}
        borderColor={"border.muted"}
        borderRadius={8}
        p={1}
        transition={"140ms"}
        pointerEvents={open ? "auto" : "none"}
        {...containerProps}
      >
        {children}
      </CContainer>
    </Presence>
  );
};

export default FloatingContainer;
