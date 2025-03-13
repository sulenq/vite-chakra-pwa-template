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
import MicVolumeBar from "@/components/widget/MicVolumeBar";
import SettingsItemContainer from "@/components/widget/SettingsItemContainer";
import SettingsNavsContainer from "@/components/widget/SettingsNavsContainer";
import useCameraPermission from "@/context/useCameraPermissions";
import useLang from "@/context/useLang";
import useMicPermissions from "@/context/useMicPermissions";
import { useThemeConfig } from "@/context/useThemeConfig";
import useBackOnClose from "@/hooks/useBackOnClose";
import { startCamera, stopCamera } from "@/utils/camera";
import getLocation from "@/utils/getLocation";
import { HStack, Icon, Text, useDisclosure } from "@chakra-ui/react";
import { IconCamera, IconMapPin, IconMicrophone } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";

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
      return l.chrome_permissions_settings_link;
    } else if (userAgent.includes("Firefox")) {
      return l.firefox_permissions_settings_link;
    } else if (userAgent.includes("Edg")) {
      return l.edge_permissions_settings_link;
    }
    return l.default_permissions_settings_link;
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
        <BButton
          size={"xs"}
          variant={"outline"}
          onClick={onOpen}
          disabled={cameraPermissionsStatus !== "granted"}
        >
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
            <Text color={"fg.subtle"}>
              {getBrowserSettingsLink()}
              {l.camera}
            </Text>
          </CContainer>
        )}
      </CContainer>
    </ItemContainer>
  );
};

const Microphone = () => {
  // Contexts
  const { themeConfig } = useThemeConfig();
  const { l } = useLang();
  const { micPermissionsStatus } = useMicPermissions();

  // Request permissions func
  async function requestMicPermission() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      stream.getTracks().forEach((track) => track.stop());
    } catch (error) {
      console.error("Akses mikrofon ditolak:", error);
    }
  }

  // Status helper text
  const getBrowserSettingsLink = () => {
    const userAgent = navigator.userAgent;
    if (userAgent.includes("Chrome")) {
      return l.chrome_permissions_settings_link;
    } else if (userAgent.includes("Firefox")) {
      return l.firefox_permissions_settings_link;
    } else if (userAgent.includes("Edg")) {
      return l.edge_permissions_settings_link;
    }
    return l.default_permissions_settings_link;
  };

  // Components
  const TestMic = () => {
    // States, Refs
    const [micOpen, setMicOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);
    const streamRef = useRef<MediaStream | null>(null);
    const audioContextRef = useRef<AudioContext | null>(null);

    // Utils
    const { open, onOpen, onClose } = useDisclosure();
    function handleClose() {
      stopMicTest();
      onClose();
    }
    useBackOnClose("mic-test", open, onOpen, handleClose);

    // Handle test mic
    const startMicTest = async () => {
      try {
        setLoading(true);
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        streamRef.current = stream;
        setMicOpen(true);

        // Setup audio context
        audioContextRef.current = new AudioContext();
        const source = audioContextRef.current.createMediaStreamSource(stream);
        const analyserNode = audioContextRef.current.createAnalyser();
        analyserNode.fftSize = 512;
        source.connect(analyserNode);
        setAnalyser(analyserNode); // Update state analyser

        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Gagal mengakses mikrofon:", error);
      }
    };

    const stopMicTest = () => {
      if (streamRef.current)
        streamRef.current.getTracks().forEach((t) => t.stop());
      if (audioContextRef.current) audioContextRef.current.close();
      setMicOpen(false);
      setAnalyser(null);
    };

    return (
      <>
        <BButton
          size="xs"
          variant="outline"
          onClick={onOpen}
          disabled={micPermissionsStatus !== "granted"}
        >
          {l.try_label} {l.mic.toLowerCase()}
        </BButton>

        <DisclosureRoot open={open} lazyLoad size="xs">
          <DisclosureContent>
            <DisclosureHeader>
              <DisclosureHeaderContent title={`${l.try_label} ${l.mic}`} />
            </DisclosureHeader>

            <DisclosureBody>
              <CContainer py={4}>
                <Text mb={2}>Volume</Text>

                {/* Ini progress bar real-time */}
                <MicVolumeBar analyser={analyser} />
              </CContainer>
            </DisclosureBody>

            <DisclosureFooter>
              <BButton
                variant="outline"
                onClick={stopMicTest}
                disabled={!micOpen}
              >
                {l.close} {l.mic.toLowerCase()}
              </BButton>
              <BButton
                colorPalette={themeConfig.colorPalette}
                disabled={micOpen}
                loading={loading}
                onClick={startMicTest}
              >
                {l.open} {l.mic.toLowerCase()}
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
            <IconMicrophone />
          </Icon>
          <Text fontWeight={"bold"}>{l.mic}</Text>
        </HStack>

        <TestMic />
      </ItemHeaderContainer>

      <CContainer gap={4} py={3}>
        <SettingsItemContainer>
          <CContainer>
            <Text>{l.mic_permissions_settings.label}</Text>
            <Text color={"fg.subtle"}>
              {l.mic_permissions_settings.description}
            </Text>
          </CContainer>

          <Switch
            checked={micPermissionsStatus === "granted"}
            disabled={
              micPermissionsStatus === "granted" ||
              micPermissionsStatus === "denied"
            }
            onChange={requestMicPermission}
            colorPalette={themeConfig.colorPalette}
          />
        </SettingsItemContainer>

        {(micPermissionsStatus === "granted" ||
          micPermissionsStatus === "denied") && (
          <CContainer px={4}>
            <Text color={"fg.subtle"}>
              {micPermissionsStatus === "granted"
                ? l.permissions_granted_helper
                : l.permissions_denied_helper}
            </Text>
            <Text color={"fg.subtle"}>
              {getBrowserSettingsLink()}
              {l.mic}
            </Text>
          </CContainer>
        )}
      </CContainer>
    </ItemContainer>
  );
};

const Location = () => {
  // Contexts
  const { themeConfig } = useThemeConfig();
  const { l } = useLang();
  const [locationStatus, setLocationStatus] = useState<PermissionState | null>(
    null
  );
  const [coords, setCoords] = useState<{ lat: number; long: number } | null>(
    null
  );
  const [address, setAddress] = useState<string | null>(null);

  // Permissions status
  useEffect(() => {
    if (!navigator.permissions) return;

    navigator.permissions.query({ name: "geolocation" }).then((result) => {
      setLocationStatus(result.state);
      result.onchange = () => setLocationStatus(result.state);
    });
  }, []);

  // Request permissions func
  const requestLocationPermission = () => {
    if (!navigator.geolocation) {
      alert("Geolocation tidak didukung di browser ini.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ lat: latitude, long: longitude });
        fetchAddress(latitude, longitude);
      },
      (error) => {
        console.error("Gagal mendapatkan lokasi:", error);
      }
    );
  };

  // Status helper text
  const getBrowserSettingsLink = () => {
    const userAgent = navigator.userAgent;
    if (userAgent.includes("Chrome")) {
      return l.chrome_permissions_settings_link;
    } else if (userAgent.includes("Firefox")) {
      return l.firefox_permissions_settings_link;
    } else if (userAgent.includes("Edg")) {
      return l.edge_permissions_settings_link;
    }
    return l.default_permissions_settings_link;
  };

  // Get address
  const fetchAddress = async (lat: number, lon: number) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
      );
      const data = await res.json();
      setAddress(data.display_name || "Alamat tidak ditemukan");
    } catch (error) {
      console.error("Gagal mendapatkan alamat:", error);
      setAddress("Gagal mengambil alamat");
    }
  };
  useEffect(() => {
    if (!coords) {
      getLocation().then(({ coords }) => {
        setCoords({ lat: coords.latitude, long: coords.longitude });
      });
    }
  }, [coords]);
  useEffect(() => {
    if (!address && coords) {
      fetchAddress(coords.lat, coords.long);
    }
  }, [address]);

  return (
    <ItemContainer>
      <ItemHeaderContainer>
        <HStack>
          <Icon maxW={"20px"}>
            <IconMapPin />
          </Icon>
          <Text fontWeight={"bold"}>{l.location}</Text>
        </HStack>
      </ItemHeaderContainer>

      <CContainer gap={4} py={3}>
        <SettingsItemContainer>
          <CContainer>
            <Text>{l.location_permissions_settings.label}</Text>
            <Text color={"fg.subtle"}>
              {l.location_permissions_settings.description}
            </Text>
          </CContainer>

          <Switch
            checked={locationStatus === "granted"}
            disabled={
              locationStatus === "granted" || locationStatus === "denied"
            }
            onChange={requestLocationPermission}
            colorPalette={themeConfig.colorPalette}
          />
        </SettingsItemContainer>

        {(locationStatus === "granted" || locationStatus === "denied") && (
          <CContainer px={4}>
            <Text color={"fg.subtle"}>
              {locationStatus === "granted"
                ? l.permissions_granted_helper
                : l.permissions_denied_helper}
            </Text>
            <Text color={"fg.subtle"}>
              {getBrowserSettingsLink()} {l.location}
            </Text>
          </CContainer>
        )}

        {coords && (
          <CContainer px={4}>
            <Text>Latitude: {coords.lat}</Text>
            <Text>Longitude: {coords.long}</Text>
            <Text>Alamat: {address || "Loading..."}</Text>
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

        <Microphone />

        <Location />
      </CContainer>

      <HelperText px={2} mt={4}>
        {l.permissions_settings_helper_text}
      </HelperText>
    </SettingsNavsContainer>
  );
};

export default PermissionsSettingsPage;
