import { Icon } from "@chakra-ui/react";
import {
  PopoverContent,
  PopoverDescription,
  PopoverRoot,
  PopoverTrigger,
} from "../ui/popover";
import BButton from "./BButton";
import { ButtonProps } from "../ui/button";
import { IconInfoCircle } from "@tabler/icons-react";

interface Props extends ButtonProps {
  children?: any;
}

const InfoPopover = ({ children, ...props }: Props) => {
  return (
    <PopoverRoot>
      <PopoverTrigger asChild>
        <BButton
          iconButton
          size={"3xs"}
          p={0}
          variant={"ghost"}
          color={"fg.subtle"}
          {...props}
        >
          <Icon fontSize={"md"} flexShrink={0}>
            <IconInfoCircle />
          </Icon>
        </BButton>
      </PopoverTrigger>

      <PopoverContent w={"fit"}>
        <PopoverDescription px={3} py={2}>
          {children}
        </PopoverDescription>
      </PopoverContent>
    </PopoverRoot>
  );
};

export default InfoPopover;
