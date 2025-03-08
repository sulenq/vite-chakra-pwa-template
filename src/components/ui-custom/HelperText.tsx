import { Text, TextProps } from "@chakra-ui/react";

interface Props extends TextProps {
  children?: any;
}
const HelperText = ({ children, ...props }: Props) => {
  return (
    <Text fontSize={"sm"} color={"fg.subtle"} {...props}>
      {children}
    </Text>
  );
};

export default HelperText;
