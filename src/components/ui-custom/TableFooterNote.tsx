import { Text, TextProps } from "@chakra-ui/react";

interface Props extends TextProps {
  children?: any;
}

const TableFooterNote = ({ children }: Props) => {
  return (
    <Text opacity={0.5} my={"auto"} textAlign={["left", null, "center"]}>
      {children}
    </Text>
  );
};

export default TableFooterNote;
