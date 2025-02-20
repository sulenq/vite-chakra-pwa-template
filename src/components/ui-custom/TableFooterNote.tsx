import { Text, TextProps } from "@chakra-ui/react";

interface Props extends TextProps {
  children?: any;
}

const TableFooterNote = ({ children }: Props) => {
  return (
    <Text color={"fg.subtle"} textAlign={["left", null, "center"]}>
      {children}
    </Text>
  );
};

export default TableFooterNote;
