import BButton from "@/components/ui-custom/BButton";
import CContainer from "@/components/ui-custom/CContainer";
import InfoPopover from "@/components/ui-custom/InfoPopover";
import ItemContainer from "@/components/ui-custom/ItemContainer";
import ItemHeaderContainer from "@/components/ui-custom/ItemHeaderContainer";
import { Avatar } from "@/components/ui/avatar";
import { PRICING_BENEFITS } from "@/constant/pricing";
import useIsSmScreenWidth from "@/hooks/useIsSmScreenWidth";
import useScreen from "@/hooks/useScreen";
import formatCount from "@/utils/formatCount";
import formatDate from "@/utils/formatDate";
import getUserFromLocalStorage from "@/utils/getUserFromLocalStorage";
import { Badge, Group, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import {
  IconBuilding,
  IconCheck,
  IconDiscount2,
  IconHistory,
  IconLogout,
  IconX,
} from "@tabler/icons-react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  // States, Refs
  const user_dummy = {
    name: "Sulenq Wazawsky",
    avatar: "https://bit.ly/sage-adebayo",
    email: "sulengpol@gmail.com",
    permissions: [],
    plan: {
      id: 1,
      label: "Basic",
      monthly_price: 0,
      yearly_price: 0,
      description: "Paket gratis.",
      benefits: {
        gap_overlap_detection: true,
        dashboard_access: true,
        data_analysis: false,
        priority_support: false,
        report_export: false,
        api_integration: false,
        customization: false,
      },
      best: false,
    },
    current_activity: [
      {
        activity_type: {
          type: "menambahkan data bidang",
          description: "menambahkan data bidang.",
        },
        description_addition: "Total ditambahkan: 1",
        created_at: "2025-01-25T10:00:00Z",
      },
      {
        activity_type: {
          type: "mengubah data bidang",
          description: "mengubah data bidang.",
        },
        description_addition: "Bidang id: 2, no sertifikat: 123456789",
        created_at: "2025-01-25T10:05:00Z",
      },
      {
        activity_type: {
          type: "menghapus data bidang",
          description: "menghapus data bidang.",
        },
        description_addition: "Bidang id: 3, no sertifikat: 987654321",
        created_at: "2025-01-25T10:10:00Z",
      },
      {
        activity_type: {
          type: "upgrade ke plan",
          description: "melakukan upgrade plan.",
        },
        description_addition: "Plan: Premium",
        created_at: "2025-01-25T10:15:00Z",
      },
      {
        activity_type: {
          type: "upgrade ke plan",
          description: "melakukan upgrade plan.",
        },
        description_addition: "Plan: Premium",
        created_at: "2025-01-25T10:15:00Z",
      },
      {
        activity_type: {
          type: "upgrade ke plan",
          description: "melakukan upgrade plan.",
        },
        description_addition: "Plan: Premium",
        created_at: "2025-01-25T10:15:00Z",
      },
      {
        activity_type: {
          type: "upgrade ke plan",
          description: "melakukan upgrade plan.",
        },
        description_addition: "Plan: Premium",
        created_at: "2025-01-25T10:15:00Z",
      },
      {
        activity_type: {
          type: "upgrade ke plan",
          description: "melakukan upgrade plan.",
        },
        description_addition: "Plan: Premium",
        created_at: "2025-01-25T10:15:00Z",
      },
      {
        activity_type: {
          type: "upgrade ke plan",
          description: "melakukan upgrade plan.",
        },
        description_addition: "Plan: Premium",
        created_at: "2025-01-25T10:15:00Z",
      },
      {
        activity_type: {
          type: "upgrade ke plan",
          description: "melakukan upgrade plan.",
        },
        description_addition: "Plan: Premium",
        created_at: "2025-01-25T10:15:00Z",
      },
      {
        activity_type: {
          type: "upgrade ke plan",
          description: "melakukan upgrade plan.",
        },
        description_addition: "Plan: Premium",
        created_at: "2025-01-25T10:15:00Z",
      },
      {
        activity_type: {
          type: "upgrade ke plan",
          description: "melakukan upgrade plan.",
        },
        description_addition: "Plan: Premium",
        created_at: "2025-01-25T10:15:00Z",
      },
      {
        activity_type: {
          type: "upgrade ke plan",
          description: "melakukan upgrade plan.",
        },
        description_addition: "Plan: Premium",
        created_at: "2025-01-25T10:15:00Z",
      },
      {
        activity_type: {
          type: "upgrade ke plan",
          description: "melakukan upgrade plan.",
        },
        description_addition: "Plan: Premium",
        created_at: "2025-01-25T10:15:00Z",
      },
      {
        activity_type: {
          type: "upgrade ke plan",
          description: "melakukan upgrade plan.",
        },
        description_addition: "Plan: Premium",
        created_at: "2025-01-25T10:15:00Z",
      },
    ],
  };
  const user = getUserFromLocalStorage() || user_dummy;
  const leftContainerRef = useRef<HTMLDivElement>(null);

  // Utils
  const iss = useIsSmScreenWidth();
  const { sw } = useScreen();

  return (
    <CContainer>
      <HStack wrap={"wrap"} gap={4} px={4} align={"stretch"} pb={4}>
        <CContainer fRef={leftContainerRef} gap={4} flex={"1 1 350px"}>
          <ItemContainer flex={0}>
            <ItemHeaderContainer>
              <HStack>
                <IconBuilding size={20} />
                <Text fontWeight={"bold"}>Profil</Text>
              </HStack>

              <BButton variant={"outline"} size={"xs"}>
                Edit
              </BButton>
            </ItemHeaderContainer>

            <CContainer p={4}>
              <Stack gap={6} flexDir={iss ? "column" : "row"}>
                <Avatar
                  name={user.name}
                  src={user.avatar}
                  size={"2xl"}
                  w={"140px"}
                  h={"140px"}
                  mt={1}
                  mx={"auto"}
                />

                <CContainer align={iss ? "center" : ""} justify={"center"}>
                  <Text
                    textAlign={iss ? "center" : ""}
                    fontSize={"xl"}
                    fontWeight={"bold"}
                    lineHeight={1.2}
                    mb={1}
                  >
                    {user.name}
                  </Text>

                  <Text textAlign={iss ? "center" : ""} fontSize={"md"} mb={1}>
                    {user.email || "-"}
                  </Text>

                  <Text
                    textAlign={iss ? "center" : ""}
                    color={"fg.muted"}
                    fontSize={"sm"}
                  >
                    Registrasi : {formatDate(new Date())}
                  </Text>

                  <Group mt={4}>
                    <BButton
                      variant={"surface"}
                      colorPalette={"red"}
                      w={"fit"}
                      size={"xs"}
                    >
                      <Icon>
                        <IconLogout />
                      </Icon>
                      Log out
                    </BButton>
                  </Group>
                </CContainer>
              </Stack>
            </CContainer>
          </ItemContainer>

          <ItemContainer>
            <ItemHeaderContainer>
              <HStack>
                <Icon fontSize={"xl"}>
                  <IconDiscount2 size={20} stroke={1.5} />
                </Icon>

                <Text fontWeight={"bold"}>Informasi Langganan</Text>
              </HStack>

              <Link to={"/pricing"}>
                <BButton variant={"outline"} size={"xs"}>
                  Upgrade
                </BButton>
              </Link>
            </ItemHeaderContainer>

            <CContainer p={4}>
              <CContainer
                px={1}
                bg={"body"}
                // border={"1px solid"}
                borderColor={"gray.subtle"}
                borderRadius={6}
              >
                <HStack mb={2} justify={"space-between"}>
                  <Text fontSize={"lg"} fontWeight={"semibold"}>
                    {user.plan.label}
                  </Text>
                  {user.plan.best && (
                    <Badge colorPalette={"orange"}>Best Value</Badge>
                  )}
                </HStack>

                <HStack>
                  <Text fontSize={"2xl"} fontWeight={"bold"}>
                    IDR {formatCount(user.plan.monthly_price)}
                  </Text>
                  <Text fontSize={"lg"} color={"fg.muted"}>
                    /bulan
                  </Text>
                </HStack>
                <Text color={"fg.muted"} mb={4}>
                  Ditagih setiap bulan
                </Text>

                {/* Benefits */}
                <CContainer gap={2}>
                  {PRICING_BENEFITS.map((benefit, ii) => {
                    return (
                      <HStack key={ii}>
                        {/* @ts-ignore */}
                        {user.plan.benefits[benefit.id as any] ? (
                          <Icon color={"green.500"}>
                            <IconCheck />
                          </Icon>
                        ) : (
                          <Icon opacity={0.2}>
                            <IconX />
                          </Icon>
                        )}

                        <HStack wrap={"wrap"}>
                          <Text>{benefit.label}</Text>
                          <InfoPopover>{benefit.description}</InfoPopover>
                        </HStack>
                      </HStack>
                    );
                  })}
                </CContainer>
              </CContainer>

              <CContainer mt={6} gap={2} px={1}>
                <HStack>
                  <Text minW={"150px"} color={"fg.muted"}>
                    Tanggal berlangganan
                  </Text>
                  <Text fontWeight={"semibold"}>{formatDate(new Date())}</Text>
                </HStack>

                <HStack>
                  <Text minW={"150px"} color={"fg.muted"}>
                    Tanggal berakhir
                  </Text>
                  <Text fontWeight={"semibold"}>{formatDate(new Date())}</Text>
                </HStack>
              </CContainer>
            </CContainer>
          </ItemContainer>
        </CContainer>

        <ItemContainer
          flex={"1 1 350px"}
          maxH={
            sw < 1620 ? "800px" : `${leftContainerRef?.current?.offsetHeight}px`
          }
        >
          <ItemHeaderContainer>
            <HStack>
              <Icon fontSize={"xl"}>
                <IconHistory />
              </Icon>

              <Text fontWeight={"bold"}>Aktivitas</Text>
            </HStack>

            <BButton variant={"outline"} size={"xs"}>
              Lihat Semua
            </BButton>
          </ItemHeaderContainer>

          <CContainer p={4} gap={4} overflowY={"auto"} className="scrollY">
            {user.current_activity.map((item: any, i: number) => {
              return (
                <CContainer key={i}>
                  <HStack>
                    <Text>
                      <b>{user.name}</b>, {item.activity_type.description}{" "}
                      {item.description_addition}
                    </Text>
                  </HStack>
                  <Text fontSize={"xs"} color={"fg.subtle"}>
                    {formatDate(item.created_at, "dmy-hm")}
                  </Text>
                </CContainer>
              );
            })}
          </CContainer>
        </ItemContainer>
      </HStack>
    </CContainer>
  );
};

export default HomePage;
