import useTimeZone from "@/context/useTimeZone";
import { Icon, Text } from "@chakra-ui/react";
import { IconTimezone } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import BButton from "../ui-custom/BButton";
import CContainer from "../ui-custom/CContainer";
import { PopoverContent, PopoverRoot, PopoverTrigger } from "../ui/popover";
import HelperText from "../ui-custom/HelperText";
import useLang from "@/context/useLang";
import { Tooltip } from "../ui/tooltip";

const CurrentUserTimeZone = () => {
  // Contexts
  const { timeZone } = useTimeZone();
  const { l } = useLang();

  // States, Refs

  return (
    <PopoverRoot>
      <PopoverTrigger asChild>
        <div>
          <Tooltip content={l.time_zone}>
            <BButton iconButton unclicky variant="ghost">
              <Icon>
                <IconTimezone stroke={1.5} />
              </Icon>
            </BButton>
          </Tooltip>
        </div>
      </PopoverTrigger>

      <PopoverContent mr={2}>
        <CContainer px={1}>
          <HelperText color="fg.subtle">{l.current}</HelperText>
          <Text>{timeZone.key}</Text>
          <Text color="fg.subtle">
            {timeZone.formattedOffset} ({timeZone.localAbbr})
          </Text>
        </CContainer>

        <Link to="/settings/regional">
          <BButton mt={3} variant="outline" size="sm" w="full">
            Change
          </BButton>
        </Link>
      </PopoverContent>
    </PopoverRoot>
  );
};

export default CurrentUserTimeZone;
