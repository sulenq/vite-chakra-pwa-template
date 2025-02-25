import { HStack } from "@chakra-ui/react";
import CContainer from "../ui-custom/CContainer";

const ItemHeaderContainer = ({ children, ...props }: any) => {
  return (
    <CContainer px={3} pt={2} pb={0}>
      <HStack
        borderBottom={"1px solid"}
        borderColor={"border.muted"}
        justify={"space-between"}
        pb={2}
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
