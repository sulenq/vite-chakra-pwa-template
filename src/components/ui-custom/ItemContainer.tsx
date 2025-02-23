import { StackProps } from "@chakra-ui/react";
import CContainer from "../ui-custom/CContainer";

interface Props extends StackProps {
  children?: any;
}
const ItemContainer = ({ children, ...props }: Props) => {
  return (
    <CContainer
      borderRadius={8}
      bg={"body"}
      border={"1px solid"}
      borderColor={"border.muted"}
      {...props}
    >
      {children}
    </CContainer>
  );
};

export default ItemContainer;
