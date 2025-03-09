import { HStack, StackProps } from "@chakra-ui/react";
import CContainer from "../ui-custom/CContainer";

interface Props extends StackProps {
  borderLess?: boolean;
}
const ItemHeaderContainer = ({
  children,
  borderLess = false,
  ...props
}: Props) => {
  return (
    <CContainer px={3} pt={2} pb={0}>
      <HStack
        borderBottom={borderLess ? "" : "1px solid"}
        borderColor={borderLess ? "" : "border.muted"}
        justify={"space-between"}
        pb={borderLess ? 0 : 2}
        pl={1}
        gap={4}
        minH={"50px"}
        wrap={"wrap"}
        {...props}
      >
        {children}
      </HStack>
    </CContainer>
  );
};

export default ItemHeaderContainer;
