import useIsSmScreenWidth from "@/hooks/useIsSmScreenWidth";
import CContainer from "../ui-custom/CContainer";
import { StackProps } from "@chakra-ui/react";

interface Props extends StackProps {}
const PageContainer = ({ children, ...props }: Props) => {
  const iss = useIsSmScreenWidth();

  return (
    <CContainer
      pt={iss ? 4 : ""}
      px={[2, null, 4]}
      pb={[2, null, 4]}
      {...props}
    >
      {children}
    </CContainer>
  );
};

export default PageContainer;
