import { HStack } from "@chakra-ui/react";
import CContainer from "./CContainer";

const DashboardItemHeaderContainer = ({ children, ...props }: any) => {
  return (
    <CContainer p={4} pb={0}>
      <HStack
        borderBottom={"1px solid"}
        borderColor={"border.muted"}
        justify={"space-between"}
        pb={4}
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

export default DashboardItemHeaderContainer;
