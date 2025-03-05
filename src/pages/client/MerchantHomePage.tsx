import BackButton from "@/components/ui-custom/BackButton";
import BButton from "@/components/ui-custom/BButton";
import CContainer from "@/components/ui-custom/CContainer";
import ConfirmationDisclosure from "@/components/ui-custom/ConfirmationDisclosure";
import {
  DisclosureBody,
  DisclosureContent,
  DisclosureFooter,
  DisclosureHeader,
  DisclosureRoot,
} from "@/components/ui-custom/Disclosure";
import DisclosureHeaderContent from "@/components/ui-custom/DisclosureHeaderContent";
import ItemContainer from "@/components/ui-custom/ItemContainer";
import ItemHeaderContainer from "@/components/ui-custom/ItemHeaderContainer";
import { Avatar } from "@/components/ui/avatar";
import AllMerchantActivitiesDisclosure from "@/components/widget/AllMerchantActivitiesDisclosure";
import MerchantActivityItem from "@/components/widget/MerchantActivityItem";
import { BILLING_CYCLES } from "@/constant/parameters/pricing";
import { SVGS_PATH } from "@/constant/path";
import useBackOnClose from "@/hooks/useBackOnClose";
import useIsSmScreenWidth from "@/hooks/useIsSmScreenWidth";
import formatCount from "@/utils/formatCount";
import formatDate from "@/utils/formatDate";
import formatNumber from "@/utils/formatNumber";
import getUserFromLocalStorage from "@/utils/getUserFromLocalStorage";
import {
  Badge,
  Group,
  HStack,
  Icon,
  Image,
  Stack,
  StackProps,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  IconBuildingSkyscraper,
  IconCheck,
  IconDiscount2,
  IconHistory,
  IconLogout,
  IconReceipt2,
  IconX,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Profile = ({ ...props }: StackProps) => {
  // States, Refs
  const dummy_user = {
    name: "Sulenq Wazawsky",
    avatar: "https://bit.ly/sage-adebayo",
    email: "sulengpol@gmail.com",
    permissions: [], // number array
  };
  const user = getUserFromLocalStorage() || dummy_user;

  // Utils
  const iss = useIsSmScreenWidth();

  return (
    <ItemContainer flex={0} {...props}>
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
              <ConfirmationDisclosure
                id="loggingout"
                title="Log out?"
                description="Pastikan tidak ada proses ke server sebelum logout dikonfirmasi untuk menghindari error autentikasi."
                confirmLabel="Logout"
                confirmButtonProps={{ colorPalette: "red" }}
                confirmCallback={() => {}}
              >
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
              </ConfirmationDisclosure>
            </Group>
          </CContainer>
        </Stack>
      </CContainer>
    </ItemContainer>
  );
};

const Activities = ({ ...props }: StackProps) => {
  // States, Refs
  const data = [
    {
      id: 1,
      activity_type: "subscription_purchase",
      created_at: "2025-01-25T10:00:00Z",
    },
    {
      id: 2,
      activity_type: "payment",
      created_at: "2025-01-25T10:00:00Z",
    },
    {
      id: 3,
      activity_type: "payment",
      created_at: "2025-01-25T10:00:00Z",
    },
    {
      id: 4,
      activity_type: "payment",
      created_at: "2025-01-25T10:00:00Z",
    },
    {
      id: 5,
      activity_type: "subscription_purchase",
      created_at: "2025-01-25T10:00:00Z",
    },
    {
      id: 6,
      activity_type: "payment",
      created_at: "2025-01-25T10:00:00Z",
    },
    {
      id: 7,
      activity_type: "payment",
      created_at: "2025-01-25T10:00:00Z",
    },
    {
      id: 8,
      activity_type: "payment",
      created_at: "2025-01-25T10:00:00Z",
    },
    {
      id: 9,
      activity_type: "payment",
      created_at: "2025-01-25T10:00:00Z",
    },
    {
      id: 10,
      activity_type: "payment",
      created_at: "2025-01-25T10:00:00Z",
    },
  ];

  return (
    <ItemContainer {...props}>
      <ItemHeaderContainer>
        <HStack>
          <Icon>
            <IconHistory size={20} />
          </Icon>

          <Text fontWeight={"bold"}>Aktivitas</Text>
        </HStack>

        <AllMerchantActivitiesDisclosure>
          <BButton variant={"outline"} size={"xs"}>
            Lihat Semua
          </BButton>
        </AllMerchantActivitiesDisclosure>
      </ItemHeaderContainer>

      <CContainer p={1} overflowY={"auto"} className="scrollY">
        {data.map((item: any, i: number) => {
          return <MerchantActivityItem key={i} item={item} />;
        })}
      </CContainer>
    </ItemContainer>
  );
};

const CurrentInvoice = ({ ...props }: StackProps) => {
  // States, Refs
  const data = {
    id: 5,
    merchant: {
      pricing: {
        name: "Essential",
        monthly_base_price: 300000,
      },
      subscription_start_date: "2023-11-20T00:00:00Z",
      subscription_end_date: "2024-11-20T00:00:00Z",
      billing_cycle: "yearly",
    },
    paid: true,
    total: 5000000,
  };

  return (
    <ItemContainer flex={0} {...props}>
      <ItemHeaderContainer>
        <HStack>
          <Icon fontSize={"xl"}>
            <IconReceipt2 size={20} />
          </Icon>

          <Text fontWeight={"bold"}>Tagihan Saat Ini</Text>
        </HStack>

        <Link to={"/payment"}>
          <BButton variant={"outline"} size={"xs"}>
            Bayar
          </BButton>
        </Link>
      </ItemHeaderContainer>

      <CContainer p={4} position={"relative"}>
        <HStack>
          <Text fontSize={"md"} fontWeight={"semibold"} mb={1}>
            Total tagihan
          </Text>

          <Badge colorPalette={data.paid ? "green" : "red"} size={"xs"}>
            {data.paid ? "Terbayar" : "Belum dibayar"}
          </Badge>
        </HStack>

        <Text fontSize={"2xl"} fontWeight={"bold"} mb={1}>
          Rp {formatNumber(data.total)}
        </Text>

        <Text color={"fg.muted"}>
          {BILLING_CYCLES[data.merchant.billing_cycle].label}
        </Text>

        {/* Payment status stamp */}
        {data.paid && (
          <Image
            src={`${SVGS_PATH}/paid_stample.svg`}
            position={"absolute"}
            w={"120px"}
            bottom={-5}
            right={-1}
            rotate={"-20deg"}
            opacity={0.2}
          />
        )}
      </CContainer>
    </ItemContainer>
  );
};

const SubscriptionInfo = ({ ...props }: StackProps) => {
  const data = {
    id: 1,
    label: "Essential",
    monthly_base_price: 250000,
    description:
      "Paket esensial dengan fitur - fitur utama untuk kebutuhan pokok manajemen karyawan.",
    moduls: [1, 2, 3, 4, 5, 6, 7, 8],
  };
  const FEATURES = [
    {
      id: 1,
      name: `Manajemen Rekrutmen`,
      price: 1000000,
    },
    {
      id: 2,
      name: `Manajemen Karyawan`,
      price: 1000000,
    },
    {
      id: 3,
      name: `Penjadwalan & Tukar Jadwal`,
      price: 1000000,
    },
    {
      id: 4,
      name: `Presensi`,
      price: 1000000,
    },
    {
      id: 5,
      name: `Manajemen Cuti`,
      price: 1000000,
    },
    {
      id: 6,
      name: `Manajemen Lembur`,
      price: 1000000,
    },
    {
      id: 7,
      name: `Manajemen Izin`,
      price: 1000000,
    },
    {
      id: 8,
      name: `Payroll & THR`,
      price: 1000000,
    },
    {
      id: 9,
      name: `Tagihan`,
      price: 1000000,
    },
    {
      id: 10,
      name: `Diklat`,
      price: 1000000,
    },
    {
      id: 11,
      name: `Reimburs`,
      price: 1000000,
    },
    {
      id: 12,
      name: `Rapat`,
      price: 1000000,
    },
    {
      id: 13,
      name: `Koperasi`,
      price: 1000000,
    },
  ];
  const sortedFeatures = FEATURES.sort((a, b) => {
    const indexA = data.moduls.indexOf(a.id);
    const indexB = data.moduls.indexOf(b.id);

    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  });

  // Component
  const FeatureItem = ({ item, include }: any) => {
    return (
      <HStack>
        {include ? (
          <Icon color={"green.500"}>
            <IconCheck />
          </Icon>
        ) : (
          <Icon opacity={0.2}>
            <IconX />
          </Icon>
        )}

        <HStack wrap={"wrap"}>
          <Text>{item.name}</Text>
        </HStack>
      </HStack>
    );
  };
  const AllMerchantSubcriptionFeatures = () => {
    const { open, onOpen, onClose } = useDisclosure();
    useBackOnClose("all-merchant-subcription-features", open, onOpen, onClose);

    return (
      <>
        <BButton
          w={"fit"}
          variant={"outline"}
          size={"xs"}
          mt={2}
          onClick={onOpen}
        >
          Lihat lebih detail
        </BButton>

        <DisclosureRoot open={open} lazyLoad size={"xs"}>
          <DisclosureContent>
            <DisclosureHeader>
              <DisclosureHeaderContent />
            </DisclosureHeader>

            <DisclosureBody>
              <HStack ml={1} mb={4} justify={"space-between"}>
                <Text fontSize={"lg"} fontWeight={"semibold"}>
                  {data.label}
                </Text>
              </HStack>

              <HStack ml={1} mb={4}>
                <Text fontSize={"2xl"} fontWeight={"bold"}>
                  IDR {formatCount(data.monthly_base_price)}
                </Text>
                <Text fontSize={"lg"} color={"fg.muted"}>
                  /bulan
                </Text>
              </HStack>

              <Text ml={1} mb={6} color={"fg.muted"}>
                {data.description}
              </Text>

              <CContainer gap={2} ml={1} mt={1}>
                {sortedFeatures.map((item, ii) => {
                  const include = data.moduls.includes(item.id);
                  const valid = ii > 0;

                  return (
                    valid && (
                      <FeatureItem key={ii} item={item} include={include} />
                    )
                  );
                })}
              </CContainer>
            </DisclosureBody>

            <DisclosureFooter>
              <BackButton />
            </DisclosureFooter>
          </DisclosureContent>
        </DisclosureRoot>
      </>
    );
  };

  return (
    <ItemContainer {...props}>
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

      <CContainer flex={1} p={4}>
        <CContainer
          px={1}
          bg={"body"}
          borderColor={"gray.subtle"}
          borderRadius={6}
        >
          <HStack mb={1} justify={"space-between"}>
            <Text fontSize={"lg"} fontWeight={"semibold"}>
              {data.label}
            </Text>
          </HStack>

          <HStack mb={4}>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              IDR {formatCount(data.monthly_base_price)}
            </Text>
            <Text fontSize={"lg"} color={"fg.muted"}>
              /bulan
            </Text>
          </HStack>

          {/* Fitur */}
          <CContainer gap={2}>
            {sortedFeatures.map((item, ii) => {
              const include = data.moduls.includes(item.id);
              const valid = ii < 12;

              return (
                valid && <FeatureItem key={ii} item={item} include={include} />
              );
            })}

            <AllMerchantSubcriptionFeatures />
          </CContainer>
        </CContainer>

        <CContainer mt={"auto"} pt={5} gap={2} px={1}>
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
  );
};

const MerchantHomePage = () => {
  return (
    <CContainer>
      <HStack
        wrap={"wrap"}
        gap={4}
        p={[2, null, 4]}
        pt={"0 !important"}
        align={"stretch"}
      >
        <CContainer gap={4} flex={"1 1 350px"} w={"50%"}>
          <Profile />

          <Activities />
        </CContainer>

        <CContainer gap={4} flex={"1 1 350px"} w={"50%"}>
          <CurrentInvoice />

          <SubscriptionInfo />
        </CContainer>
      </HStack>
    </CContainer>
  );
};

export default MerchantHomePage;
