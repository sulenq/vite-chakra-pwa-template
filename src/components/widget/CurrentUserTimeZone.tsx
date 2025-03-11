import { useThemeConfig } from "@/context/useThemeConfig";
import useTimeZone from "@/context/useTimeZone";
import { Icon, Text } from "@chakra-ui/react";
import { IconTimezone } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import BButton from "../ui-custom/BButton";
import { PopoverContent, PopoverRoot, PopoverTrigger } from "../ui/popover";

const CurrentUserTimeZone = () => {
  // Contexts
  const { themeConfig } = useThemeConfig();
  const { timeZone } = useTimeZone();

  // States, Refs

  return (
    <PopoverRoot>
      <PopoverTrigger>
        <BButton iconButton unclicky variant={"ghost"}>
          <Icon>
            <IconTimezone stroke={1.5} />
          </Icon>
        </BButton>
      </PopoverTrigger>

      <PopoverContent mr={2}>
        <Text>{timeZone.key}</Text>
        <Text color={"fg.subtle"}>
          {timeZone.formattedOffset} ({timeZone.localAbbr})
        </Text>

        <Link to={"/settings/preference"}>
          <BButton
            mt={3}
            variant={"outline"}
            size={"sm"}
            w={"full"}
            colorPalette={themeConfig.colorPalette}
          >
            Change
          </BButton>
        </Link>
      </PopoverContent>
    </PopoverRoot>
  );
};

export default CurrentUserTimeZone;
