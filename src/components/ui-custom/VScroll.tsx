import { StackProps } from "@chakra-ui/react";
import CContainer from "./CContainer";

const VScroll = ({ children, ...props }: StackProps) => {
  return (
    <CContainer className={`scrollY ${props.className}`} {...props}>
      {children}
    </CContainer>
  );
};

export default VScroll;
