import CContainer from "./CContainer";

const DashboardItemContainer = ({ children, ...props }: any) => {
  return (
    <CContainer
      borderRadius={8}
      bg={"body"}
      {...props}
      // border={"1px solid"}
      // borderColor={"border.muted"}
    >
      {children}
    </CContainer>
  );
};

export default DashboardItemContainer;
