import { HStack, StackProps } from "@chakra-ui/react";

interface Props extends StackProps {
  children?: any;
}

const HScroll = ({ children, ...props }: Props) => {
  return (
    <HStack
      className="scrollX"
      overflowX={"auto"}
      overflowY={"clip"}
      w={"full"}
      {...props}
    >
      {children}
    </HStack>
  );
};

export default HScroll;
