import BButton from "@/components/ui-custom/BButton";
import CContainer from "@/components/ui-custom/CContainer";
import {
  DisclosureBody,
  DisclosureContent,
  DisclosureFooter,
  DisclosureHeader,
  DisclosureRoot,
} from "@/components/ui-custom/Disclosure";
import DisclosureHeaderContent from "@/components/ui-custom/DisclosureHeaderContent";
import HelperText from "@/components/ui-custom/HelperText";
import ItemContainer from "@/components/ui-custom/ItemContainer";
import ItemHeaderContainer from "@/components/ui-custom/ItemHeaderContainer";
import { Switch } from "@/components/ui/switch";
import { toaster } from "@/components/ui/toaster";
import SettingsItemContainer from "@/components/widget/SettingsItemContainer";
import SettingsNavsContainer from "@/components/widget/SettingsNavsContainer";
import useCameraPermission from "@/context/useCameraPermissions";
import useLang from "@/context/useLang";
import { useThemeConfig } from "@/context/useThemeConfig";
import useBackOnClose from "@/hooks/useBackOnClose";
import { startCamera, stopCamera } from "@/utils/camera";
import { HStack, Icon, Text, useDisclosure } from "@chakra-ui/react";
import { IconCamera } from "@tabler/icons-react";
import { useRef, useState } from "react";

const Camera = () => {
  // Contexts
  const { themeConfig } = useThemeConfig();
  const { l } = useLang();
  const { cameraPermissionsStatus } = useCameraPermission();

  // Request permissions func
  async function requestCameraMic() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      stream.getTracks().forEach((track) => track.stop());
    } catch (error) {
      console.error("Akses ditolak:", error);
    }
  }

  // Status helper text
  const getBrowserSettingsLink = () => {
    const userAgent = navigator.userAgent;
    if (userAgent.includes("Chrome")) {
      return l.chrome_settings_link;
    } else if (userAgent.includes("Firefox")) {
      return l.firefox_settings_link;
    } else if (userAgent.includes("Edg")) {
      return l.edge_settings_link;
    }
    return l.default_settings_link;
  };

  // Components
  const Test = () => {
    // Utils
    const { open, onOpen, onClose } = useDisclosure();
    function handleClose() {
      stopCamera(videoRef, streamRef, () => setCameraOpen(false));
      onClose();
    }
    useBackOnClose("camera-test", open, onOpen, handleClose);

    // States, Refs
    const [cameraOpen, setCameraOpen] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const streamRef = useRef<MediaStream | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    return (
      <>
        <BButton size={"xs"} variant={"outline"} onClick={onOpen}>
          {l.try_label} {l.camera.toLowerCase()}
        </BButton>

        <DisclosureRoot open={open} lazyLoad size={"xs"}>
          <DisclosureContent>
            <DisclosureHeader>
              <DisclosureHeaderContent title={`${l.try_label} ${l.camera}`} />
            </DisclosureHeader>

            <DisclosureBody p={"0 !important"}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingBottom: "100%",
                  backgroundColor: "black",
                }}
              >
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    transform: "scaleX(-1)", // Mirror
                    objectFit: "cover",
                  }}
                />
              </div>
            </DisclosureBody>

            <DisclosureFooter>
              <BButton
                variant="outline"
                onClick={() =>
                  stopCamera(videoRef, streamRef, () => setCameraOpen(false))
                }
                disabled={!cameraOpen}
              >
                {l.close} {l.camera.toLowerCase()}
              </BButton>
              <BButton
                colorPalette={themeConfig.colorPalette}
                disabled={cameraOpen}
                loading={loading}
                onClick={() => {
                  setLoading(true);
                  if (!loading) {
                    startCamera(
                      videoRef,
                      streamRef,
                      () => {
                        setLoading(false);
                        setCameraOpen(true);
                      },
                      () =>
                        toaster.error({
                          title: l.camera_fail_toast.title,
                          description: l.camera_fail_toast.description,
                          action: {
                            label: "Close",
                            onClick: () => {},
                          },
                        })
                    );
                  }
                }}
              >
                {l.open} {l.camera.toLowerCase()}
              </BButton>
            </DisclosureFooter>
          </DisclosureContent>
        </DisclosureRoot>
      </>
    );
  };

  return (
    <ItemContainer>
      <ItemHeaderContainer>
        <HStack>
          <Icon maxW={"20px"}>
            <IconCamera />
          </Icon>
          <Text fontWeight={"bold"}>{l.camera}</Text>
        </HStack>

        <Test />
      </ItemHeaderContainer>

      <CContainer gap={4} py={3}>
        <SettingsItemContainer>
          <CContainer>
            <Text>{l.camera_permissions_settings.label}</Text>
            <Text color={"fg.subtle"}>
              {l.camera_permissions_settings.description}
            </Text>
          </CContainer>

          <Switch
            checked={cameraPermissionsStatus === "granted"}
            disabled={
              cameraPermissionsStatus === "granted" ||
              cameraPermissionsStatus === "denied"
            }
            onChange={requestCameraMic}
            colorPalette={themeConfig.colorPalette}
          />
        </SettingsItemContainer>

        {(cameraPermissionsStatus === "granted" ||
          cameraPermissionsStatus === "denied") && (
          <CContainer px={4}>
            <Text color={"fg.subtle"}>
              {cameraPermissionsStatus === "granted"
                ? l.permissions_granted_helper
                : l.permissions_denied_helper}
            </Text>
            <Text color={"fg.subtle"}>{getBrowserSettingsLink()}</Text>
          </CContainer>
        )}
      </CContainer>
    </ItemContainer>
  );
};

const PermissionsSettingsPage = () => {
  // Contexts
  const { l } = useLang();

  return (
    <SettingsNavsContainer align={"stretch"} activePath="/settings/permissions">
      <CContainer gap={4}>
        <Camera />
      </CContainer>

      <HelperText px={2} mt={4}>
        {l.permissions_settings_helper_text}
      </HelperText>
    </SettingsNavsContainer>
  );
};

export default PermissionsSettingsPage;
