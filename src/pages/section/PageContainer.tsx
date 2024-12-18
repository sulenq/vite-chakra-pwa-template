import CContainer from "@/components/ui-custom/CContainer";
import { StackProps } from "@chakra-ui/react";
import TopNav from "./TopNav";

type Props = {
  children?: any;
  activeNavIndex?: number;
  withNav?: boolean;
} & StackProps;
const PageContainer = ({ children, activeNavIndex, withNav = true }: Props) => {
  return (
    <CContainer minH={"100dvh"}>
      {withNav && <TopNav activeNavIndex={activeNavIndex} />}

      <CContainer
        pt={"56px"}
        minH={`calc(100dvh - ${withNav ? "56px" : "0px"})`}
      >
        {children}
      </CContainer>
    </CContainer>
  );
};

export default PageContainer;
