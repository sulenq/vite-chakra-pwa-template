import { useEffect, useRef, useState } from "react";
import { Text, TextProps } from "@chakra-ui/react";
import {
  PopoverContent,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
} from "../ui/popover";

interface Props extends TextProps {
  children: string;
}

const TruncatedText = ({ children, ...props }: Props) => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const [overflow, setOverflow] = useState(false);

  useEffect(() => {
    if (textRef.current) {
      const { scrollWidth, clientWidth } = textRef.current;
      setOverflow(scrollWidth > clientWidth);
    }
  }, [children]);

  if (!overflow) {
    return (
      <Text minW={"200px"} textAlign={"left"} truncate {...props}>
        {children}
      </Text>
    );
  }

  console.log(overflow);

  return (
    <PopoverRoot positioning={{ placement: "bottom-start" }}>
      <PopoverTrigger cursor={"pointer"}>
        <Text
          ref={textRef}
          minW={"200px"}
          textAlign={"left"}
          truncate
          {...props}
        >
          {children}
        </Text>
      </PopoverTrigger>
      <PopoverContent w={"fit"}>
        <PopoverTitle px={3} py={2}>
          <Text>{children}</Text>
        </PopoverTitle>
      </PopoverContent>
    </PopoverRoot>
  );
};

export default TruncatedText;
