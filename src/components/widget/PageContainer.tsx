import useIsSmScreenWidth from "@/hooks/useIsSmScreenWidth";
import CContainer from "../ui-custom/CContainer";
import { StackProps } from "@chakra-ui/react";

interface Props extends StackProps {}
const PageContainer = ({ children, ...props }: Props) => {
  const iss = useIsSmScreenWidth();

  return (
    <CContainer
      pt={iss ? 4 : ""}
      pl={[2, null, 4]}
      pr={["2px", null, "10px"]}
      pb={4}
      {...props}
    >
      {children}
    </CContainer>
  );
};

export default PageContainer;
