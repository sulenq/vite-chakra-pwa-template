import { Circle, CircleProps, Float, FloatProps } from "@chakra-ui/react";

interface Props extends FloatProps {
  children?: any;
  circleProps?: CircleProps;
}

const FloatCounter = ({ children, circleProps, ...props }: Props) => {
  return (
    <Float {...props}>
      <Circle
        px={"5px"}
        bg="red"
        color="white"
        fontSize={"xs"}
        h={"18px"}
        mt={"18px"}
        mr={"18px"}
        {...circleProps}
      >
        {children}
      </Circle>
    </Float>
  );
};

export default FloatCounter;
