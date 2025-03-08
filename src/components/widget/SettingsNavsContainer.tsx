import { useSettingsContent } from "@/hooks/useSettingsContent";
import {
  Circle,
  CircleProps,
  HStack,
  Icon,
  StackProps,
  Text,
} from "@chakra-ui/react";
import CContainer from "../ui-custom/CContainer";
import SETTINGS_NAVS from "@/constant/settingsNavs";
import { Link } from "react-router-dom";
import BButton from "../ui-custom/BButton";
import { IconChevronRight } from "@tabler/icons-react";
import useIsSmScreenWidth from "@/hooks/useIsSmScreenWidth";
import useLang from "@/context/useLang";
import pluck from "@/utils/pluck";
import { useThemeConfig } from "@/context/useThemeConfig";

interface Props extends StackProps {
  children?: any;
  activePath?: string;
}

const SettingsNavsContainer = ({ children, activePath, ...props }: Props) => {
  // Context
  const { themeConfig } = useThemeConfig();
  const { l } = useLang();

  // Utils
  const iss = useIsSmScreenWidth();
  const { settingsRoute } = useSettingsContent();

  // Components
  const ActiveNavIndicator = ({ ...props }: CircleProps) => {
    return (
      <Circle
        w={"2px"}
        h={"12px"}
        bg={themeConfig.primaryColor}
        position={"absolute"}
        left={0}
        {...props}
      />
    );
  };

  return (
    <HStack
      id="settingsNavsContainer"
      w={"full"}
      h={"full"}
      align={"start"}
      pl={4}
      pr={iss && settingsRoute ? 4 : 0}
      gap={4}
      overflowY={"auto"}
      {...props}
    >
      {/* Settings Navs */}
      {(!iss || settingsRoute) && (
        <CContainer
          pb={4}
          w={iss ? "full" : "200px"}
          flexShrink={0}
          maxH={"full"}
          overflowY={"auto"}
        >
          <CContainer
            bg={"body"}
            borderRadius={themeConfig.radii.container}
            p={2}
            pt={3}
            gap={4}
            border={"1px solid"}
            borderColor={"border.subtle"}
            h={"fit"}
            maxH={"full"}
            overflowY={"auto"}
          >
            {SETTINGS_NAVS.map((item, i) => {
              return (
                <CContainer key={i}>
                  <Text fontWeight={"bold"} color={"fg.subtle"} mx={2} mb={2}>
                    {pluck(l, item.groupLabelKey)}
                  </Text>

                  {item.list.map((nav, ii) => {
                    const active = activePath === nav.path;

                    return (
                      <Link key={ii} to={nav.path}>
                        <BButton
                          unclicky
                          variant={"ghost"}
                          w={"full"}
                          justifyContent={"start"}
                          px={2}
                          position={"relative"}
                        >
                          {active && <ActiveNavIndicator />}

                          <Icon>
                            <nav.icon />
                          </Icon>

                          {pluck(l, nav.labelKey)}

                          {iss && (
                            <Icon ml={"auto"}>
                              <IconChevronRight />
                            </Icon>
                          )}
                        </BButton>
                      </Link>
                    );
                  })}
                </CContainer>
              );
            })}

            {SETTINGS_NAVS.map((item, i) => {
              return (
                <CContainer key={i}>
                  <Text fontWeight={"bold"} color={"fg.subtle"} mx={2} mb={2}>
                    {pluck(l, item.groupLabelKey)}
                  </Text>

                  {item.list.map((nav, ii) => {
                    const active = activePath === nav.path;

                    return (
                      <Link key={ii} to={nav.path}>
                        <BButton
                          unclicky
                          variant={"ghost"}
                          w={"full"}
                          justifyContent={"start"}
                          px={2}
                          position={"relative"}
                        >
                          {active && <ActiveNavIndicator />}

                          <Icon>
                            <nav.icon />
                          </Icon>

                          {pluck(l, nav.labelKey)}

                          {iss && (
                            <Icon ml={"auto"}>
                              <IconChevronRight />
                            </Icon>
                          )}
                        </BButton>
                      </Link>
                    );
                  })}
                </CContainer>
              );
            })}
          </CContainer>
        </CContainer>
      )}

      {/* Content */}
      <CContainer
        display={iss && settingsRoute ? "none" : "flex"}
        overflowY={"auto"}
        maxH={"full"}
        pr={4}
        pb={4}
        // border={"1px solid red"}
      >
        {children}
      </CContainer>
    </HStack>
  );
};

export default SettingsNavsContainer;
