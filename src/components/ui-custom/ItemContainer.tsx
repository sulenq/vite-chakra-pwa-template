import { StackProps } from "@chakra-ui/react";
import CContainer from "../ui-custom/CContainer";
import { useThemeConfig } from "@/context/useThemeConfig";

interface Props extends StackProps {
  children?: any;
}
const ItemContainer = ({ children, ...props }: Props) => {
  const { themeConfig } = useThemeConfig();

  return (
    <CContainer
      borderRadius={themeConfig.radii.container}
      bg={"body"}
      flex={"1 1 300px"}
      overflow={"clip"}
      {...props}
    >
      {children}
    </CContainer>
  );
};

export default ItemContainer;
