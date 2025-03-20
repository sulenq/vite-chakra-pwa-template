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
import { SETTINGS_NAVS } from "@/constant/navs";
import { Link } from "react-router-dom";
import BButton from "../ui-custom/BButton";
import { IconChevronRight } from "@tabler/icons-react";
import useIsSmScreenWidth from "@/hooks/useIsSmScreenWidth";
import useLang from "@/context/useLang";
import pluck from "@/utils/pluck";
import { useThemeConfig } from "@/context/useThemeConfig";
import PageContainer from "./PageContainer";

interface Props extends StackProps {
  children?: any;
  activePath?: string;
}

const SettingsNavsContainer = ({ children, activePath, ...props }: Props) => {
  // Contexts
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
      pl={!iss ? 4 : ""}
      align={"start"}
      gap={0}
      overflowY={"auto"}
      {...props}
    >
      {/* Settings Navs */}
      {(!iss || settingsRoute) && (
        <CContainer
          px={iss && settingsRoute ? 2 : 0}
          pt={iss ? 4 : ""}
          pb={4}
          w={iss ? "full" : "200px"}
          flexShrink={0}
          overflowY={"auto"}
          maxH={"full"}
        >
          <CContainer
            bg={"body"}
            borderRadius={themeConfig.radii.container}
            pt={3}
            pb={2}
            border={"1px solid"}
            borderColor={"border.subtle"}
            h={"fit"}
            overflowY={"auto"}
            maxH={"full"}
          >
            <CContainer overflowY={"auto"} px={2} gap={4}>
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
        </CContainer>
      )}

      {/* Content */}
      <PageContainer
        display={iss && settingsRoute ? "none" : "flex"}
        overflowY={"auto"}
        maxH={"full"}
      >
        {children}
      </PageContainer>
    </HStack>
  );
};

export default SettingsNavsContainer;
