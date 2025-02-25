import BButton from "@/components/ui-custom/BButton";
import CContainer from "@/components/ui-custom/CContainer";
import InfoPopover from "@/components/ui-custom/InfoPopover";
import ItemContainer from "@/components/ui-custom/ItemContainer";
import ItemHeaderContainer from "@/components/ui-custom/ItemHeaderContainer";
import SearchInput from "@/components/ui-custom/SearchInput";
import TableComponent from "@/components/ui-custom/TableComponent";
import { Avatar } from "@/components/ui/avatar";
import { Status } from "@/components/ui/status";
import { PRICING_BENEFITS } from "@/constant/pricing";
import useIsSmScreenWidth from "@/hooks/useIsSmScreenWidth";
import useScreen from "@/hooks/useScreen";
import formatCount from "@/utils/formatCount";
import formatDate from "@/utils/formatDate";
import formatNumber from "@/utils/formatNumber";
import getUserFromLocalStorage from "@/utils/getUserFromLocalStorage";
import { Badge, Group, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import {
  IconBuildingSkyscraper,
  IconCheck,
  IconDiscount2,
  IconHistory,
  IconLogout,
  IconReceipt2,
  IconX,
} from "@tabler/icons-react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const ClientHomePage = () => {
  // States, Refs
  const BILLING_CYCLES: Record<string, { label: string }> = {
    monthly: {
      label: "Ditagih setiap bulan",
    },
    yearly: {
      label: "Ditagih setiap tahun",
    },
  };
  const PRICING_LIST: Record<
    string,
    { name: string; monthly_base_price: number }
  > = {
    essential: {
      name: "Essential",
      monthly_base_price: 500000,
    },
    business: {
      name: "Business",
      monthly_base_price: 500000,
    },
    enterprise: {
      name: "Enterprise",
      monthly_base_price: 0,
    },
  };
  const ACTIVITY_TYPES: Record<string, { title: string; description: string }> =
    {
      subscription_purchase: {
        title: "Pembelian Berlangganan",
        description: "melakukan pembelian berlangganan",
      },
      payment: {
        title: "Pembayaran",
        description: "melakukan pembelian berlangganan",
      },
      name_update: {
        title: "Update Nama",
        description: "melakukan pembelian berlangganan",
      },
      email_update: {
        title: "Update Email",
        description: "melakukan update email",
      },
      pasword_update: {
        title: "Update Password",
        description: "melakukan update password",
      },
    };

  const dummy_user = {
    name: "Sulenq Wazawsky",
    avatar: "https://bit.ly/sage-adebayo",
    email: "sulengpol@gmail.com",
    permissions: [], // number array
  };
  const dummy_data = {
    plan: {
      id: 1,
      label: "Essential",
      monthly_price: 0,
      yearly_price: 0,
      description:
        "Paket esensial dengan fitur - fitur utama untuk kebutuhan pokok manajemen karyawan.",
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
    activities: [
      {
        activity_type: "subscription_purchase",
        created_at: "2025-01-25T10:00:00Z",
      },
      {
        activity_type: "payment",
        created_at: "2025-01-25T10:00:00Z",
      },
      {
        activity_type: "payment",
        created_at: "2025-01-25T10:00:00Z",
      },
      {
        activity_type: "payment",
        created_at: "2025-01-25T10:00:00Z",
      },
      {
        activity_type: "subscription_purchase",
        created_at: "2025-01-25T10:00:00Z",
      },
      {
        activity_type: "payment",
        created_at: "2025-01-25T10:00:00Z",
      },
      {
        activity_type: "payment",
        created_at: "2025-01-25T10:00:00Z",
      },
      {
        activity_type: "payment",
        created_at: "2025-01-25T10:00:00Z",
      },
    ],
    invoice: [
      {
        id: 5,
        pricing: "enterprise",
        subscription_start_date: new Date("2023-11-20T00:00:00Z").toISOString(),
        subscription_end_date: new Date("2024-11-20T00:00:00Z").toISOString(),
        billing_cycle: "yearly",
        paid: false,
        total: 5000000,
      },
      {
        id: 4,
        pricing: "business",
        subscription_start_date: new Date("2024-03-01T00:00:00Z").toISOString(),
        subscription_end_date: new Date("2024-04-01T00:00:00Z").toISOString(),
        billing_cycle: "monthly",
        paid: true,
        total: 250000,
      },
      {
        id: 3,
        pricing: "essential",
        subscription_start_date: new Date("2023-12-10T00:00:00Z").toISOString(),
        subscription_end_date: new Date("2024-12-10T00:00:00Z").toISOString(),
        billing_cycle: "yearly",
        paid: true,
        total: 2400000,
      },
      {
        id: 2,
        pricing: "essential",
        subscription_start_date: new Date("2024-02-15T00:00:00Z").toISOString(),
        subscription_end_date: new Date("2024-03-15T00:00:00Z").toISOString(),
        billing_cycle: "monthly",
        paid: true,
        total: 100000,
      },
      {
        id: 1,
        pricing: "essential",
        subscription_start_date: new Date("2024-01-01T00:00:00Z").toISOString(),
        subscription_end_date: new Date("2025-01-01T00:00:00Z").toISOString(),
        billing_cycle: "yearly",
        paid: true,
        total: 1200000,
      },
    ],
  };
  const user = getUserFromLocalStorage() || dummy_user;
  const data = dummy_data;
  const leftContainerRef = useRef<HTMLDivElement>(null);
  const ths = [
    {
      th: "Pricing",
      sortable: true,
    },
    {
      th: "Berlangganan",
      sortable: true,
    },
    {
      th: "Berakhir",
      sortable: true,
    },
    {
      th: "Siklus Penagihan",
      sortable: true,
    },
    {
      th: "Status Pembayaran",
      sortable: true,
    },
    {
      th: "Total",
      sortable: true,
    },
  ];
  const tds = data?.invoice.map((item) => {
    return {
      id: item.id,
      columnsFormat: [
        {
          value: item.pricing,
          td: <Text>{PRICING_LIST[item.pricing].name}</Text>,
        },
        {
          value: item.subscription_start_date,
          td: <Text>{formatDate(item.subscription_start_date)}</Text>,
        },
        {
          value: item.subscription_end_date,
          td: <Text>{formatDate(item.subscription_end_date)}</Text>,
        },
        {
          value: item.billing_cycle,
          td: <Text>{BILLING_CYCLES[item.billing_cycle].label}</Text>,
        },
        {
          value: item.paid,
          td: (
            <Status colorPalette={item.paid ? "green" : "red"}>
              {item.paid ? "Terbayar" : "Belum Dibayar"}
            </Status>
          ),
        },
        {
          value: item.total,
          td: <Text>Rp {formatNumber(item.total)}</Text>,
        },
      ],
    };
  });

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
                <Icon mb={"2px"}>
                  <IconBuildingSkyscraper size={18} />
                </Icon>
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
                  <IconDiscount2 size={20} />
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
                    {data.plan.label}
                  </Text>
                  {data.plan.best && (
                    <Badge colorPalette={"orange"}>Best Value</Badge>
                  )}
                </HStack>

                <HStack>
                  <Text fontSize={"2xl"} fontWeight={"bold"}>
                    IDR {formatCount(data.plan.monthly_price)}
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
                        {data.plan.benefits[benefit.id as any] ? (
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
            iss
              ? "calc(100dvh - 200px)"
              : sw < 1620
              ? "740px"
              : `${leftContainerRef?.current?.offsetHeight}px`
          }
        >
          <ItemHeaderContainer>
            <HStack>
              <Icon>
                <IconHistory size={20} />
              </Icon>

              <Text fontWeight={"bold"}>Aktivitas</Text>
            </HStack>

            <BButton variant={"outline"} size={"xs"}>
              Lihat Semua
            </BButton>
          </ItemHeaderContainer>

          <CContainer p={2} px={1} overflowY={"auto"} className="scrollY">
            {data.activities.map((item: any, i: number) => {
              return (
                <CContainer
                  key={i}
                  _hover={{ bg: "bg.muted" }}
                  p={2}
                  px={3}
                  borderRadius={6}
                  transition={"200ms"}
                  cursor={"pointer"}
                >
                  <HStack>
                    <Text>
                      <b>{ACTIVITY_TYPES[item.activity_type].title}</b>,{" "}
                      {ACTIVITY_TYPES[item.activity_type].description}
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

      <CContainer px={4} pb={4}>
        <ItemContainer>
          <ItemHeaderContainer>
            <HStack flex={"1 1 0"}>
              <Icon>
                <IconReceipt2 size={20} />
              </Icon>

              <Text fontWeight={"bold"}>Invoice</Text>
            </HStack>

            <SearchInput
              maxW={sw < 360 ? "" : "200px"}
              inputProps={{ size: "xs" }}
              pb={sw < 360 ? "6px" : ""}
            />
          </ItemHeaderContainer>

          <TableComponent originalData={data?.invoice} ths={ths} tds={tds} />
        </ItemContainer>
      </CContainer>
    </CContainer>
  );
};

export default ClientHomePage;
