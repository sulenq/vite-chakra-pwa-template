import { useThemeConfig } from "@/context/useThemeConfig";
import { Icon, IconProps } from "@chakra-ui/react";
import { IconCheck } from "@tabler/icons-react";

interface Props extends IconProps {}
const CheckIndicator = ({ ...props }: Props) => {
  // Context
  const { themeConfig } = useThemeConfig();

  return (
    <Icon color={themeConfig.primaryColor} {...props}>
      <IconCheck size={"1rem"} />
    </Icon>
  );
};

export default CheckIndicator;
