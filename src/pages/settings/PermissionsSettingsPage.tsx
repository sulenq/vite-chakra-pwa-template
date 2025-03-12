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
import { Badge, HStack, Icon, Text, useDisclosure } from "@chakra-ui/react";
import { IconCamera } from "@tabler/icons-react";
import { useRef } from "react";

const Camera = () => {
  // Contexts
  const { themeConfig } = useThemeConfig();
  const { l } = useLang();
  const { cameraPermissionsStatus } = useCameraPermission();

  // Request permissions func
  async function requestCameraMic() {
    try {
      const permission = await navigator.permissions.query({
        name: "camera" as PermissionName,
      });

      if (permission.state === "granted") {
        alert("Izin sudah diberikan. Kamera tidak akan langsung menyala.");
        return;
      }

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
      return "Buka Chrome → Settings → Privacy & Security → Site Settings → Camera";
    } else if (userAgent.includes("Firefox")) {
      return "Buka Firefox → Preferences → Privacy & Security → Permissions → Camera";
    } else if (userAgent.includes("Edg")) {
      return "Buka Edge → Settings → Cookies and site permissions → Camera";
    }
    return "Buka pengaturan browser untuk mengubah izin kamera.";
  };

  // Components
  const Test = () => {
    // Utils
    const { open, onOpen, onClose } = useDisclosure();
    function handleClose() {
      stopCamera(videoRef, streamRef);
      onClose();
    }
    useBackOnClose("camera-test", open, onOpen, handleClose);

    // States, Refs
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const streamRef = useRef<MediaStream | null>(null);

    return (
      <>
        <BButton size={"xs"} variant={"outline"} onClick={onOpen}>
          {l.try_label} {l.camera}
        </BButton>

        <DisclosureRoot open={open} lazyLoad size={"xs"}>
          <DisclosureContent>
            <DisclosureHeader>
              <DisclosureHeaderContent title="Tes Kamera" />
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
                onClick={() => stopCamera(videoRef, streamRef)}
              >
                Tutup Kamera
              </BButton>
              <BButton
                colorPalette={themeConfig.colorPalette}
                onClick={() =>
                  startCamera(videoRef, streamRef, () =>
                    toaster.error({
                      title: l.camera_fail_toast.title,
                      description: l.camera_fail_toast.description,
                    })
                  )
                }
              >
                Buka Kamera
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
          {cameraPermissionsStatus === "denied" && (
            <Badge colorPalette={"red"}>{l.permissions_denied}</Badge>
          )}
          {cameraPermissionsStatus === "granted" && (
            <Badge colorPalette={"green"}>{l.permissions_granted}</Badge>
          )}
        </HStack>

        <Test />
      </ItemHeaderContainer>

      <CContainer gap={4} py={3}>
        {(cameraPermissionsStatus === "granted" ||
          cameraPermissionsStatus === "denied") && (
          <CContainer px={4}>
            <Text>
              {cameraPermissionsStatus === "granted"
                ? l.permissions_granted_helper
                : l.permissions_denied_helper}
            </Text>
            <Text>{getBrowserSettingsLink()}</Text>
          </CContainer>
        )}

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
