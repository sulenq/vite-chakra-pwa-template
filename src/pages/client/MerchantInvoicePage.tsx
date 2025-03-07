import BButton from "@/components/ui-custom/BButton";
import CContainer from "@/components/ui-custom/CContainer";
import HScroll from "@/components/ui-custom/HScroll";
import ItemContainer from "@/components/ui-custom/ItemContainer";
import SearchInput from "@/components/ui-custom/SearchInput";
import TableComponent from "@/components/ui-custom/TableComponent";
import { Status } from "@/components/ui/status";
import { BILLING_CYCLES } from "@/constant/gens/pricing";
import { useThemeConfig } from "@/context/useThemeConfig";
import formatDate from "@/utils/formatDate";
import formatNumber from "@/utils/formatNumber";
import { Text } from "@chakra-ui/react";
import { IconCreditCardPay } from "@tabler/icons-react";

const MerchantInvoicePage = () => {
  // Context
  const { themeConfig } = useThemeConfig();

  // States, Refs
  const data = [
    {
      id: 5,
      merchant: {
        pricing: {
          name: "Enterprise",
          monthly_base_price: 0,
        },
        subscription_start_date: "2023-11-20T00:00:00Z",
        subscription_end_date: "2024-11-20T00:00:00Z",
        billing_cycle: "yearly",
      },
      paid: false,
      total: 5000000,
    },
    {
      id: 4,
      merchant: {
        pricing: {
          name: "Business",
          monthly_base_price: 250000,
        },
        subscription_start_date: "2024-03-01T00:00:00Z",
        subscription_end_date: "2024-04-01T00:00:00Z",
        billing_cycle: "monthly",
      },
      paid: true,
      total: 250000,
    },
    {
      id: 3,
      merchant: {
        pricing: {
          name: "Essential",
          monthly_base_price: 200000,
        },
        subscription_start_date: "2023-12-10T00:00:00Z",
        subscription_end_date: "2024-12-10T00:00:00Z",
        billing_cycle: "yearly",
      },
      paid: true,
      total: 2400000,
    },
    {
      id: 2,
      merchant: {
        pricing: {
          name: "Essential",
          monthly_base_price: 100000,
        },
        subscription_start_date: "2024-02-15T00:00:00Z",
        subscription_end_date: "2024-03-15T00:00:00Z",
        billing_cycle: "monthly",
      },
      paid: true,
      total: 100000,
    },
    {
      id: 1,
      merchant: {
        pricing: {
          name: "Essential",
          monthly_base_price: 120000,
        },
        subscription_start_date: "2024-01-01T00:00:00Z",
        subscription_end_date: "2025-01-01T00:00:00Z",
        billing_cycle: "yearly",
      },
      paid: true,
      total: 1200000,
    },
  ];
  const ths = [
    {
      th: "Paket Langganan",
      sortable: true,
    },
    {
      th: "Tanggal Mulai",
      sortable: true,
    },
    {
      th: "Tanggal Berakhir",
      sortable: true,
    },
    {
      th: "Siklus Pembayaran",
      sortable: true,
    },
    {
      th: "Status Pembayaran",
      sortable: true,
    },
    {
      th: "Total Pembayaran",
      sortable: true,
      stackProps: {
        justify: "end",
      },
    },
  ];
  const tds = data.map((item) => {
    return {
      id: item.id,
      columnsFormat: [
        {
          value: item.merchant.pricing.name,
          td: <Text>{item.merchant.pricing.name}</Text>,
        },
        {
          value: item.merchant.subscription_start_date,
          td: <Text>{formatDate(item.merchant.subscription_start_date)}</Text>,
          dataType: "date",
        },
        {
          value: item.merchant.subscription_end_date,
          td: <Text>{formatDate(item.merchant.subscription_end_date)}</Text>,
          dataType: "date",
        },
        {
          value: item.merchant.billing_cycle,
          td: <Text>{BILLING_CYCLES[item.merchant.billing_cycle].label}</Text>,
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
          dataType: "number",
          stackProps: {
            justify: "end",
          },
        },
      ],
    };
  });

  return (
    <CContainer p={[2, null, 4]} pt={"0 !important"}>
      <ItemContainer pt={4}>
        <HScroll px={4} pb={4}>
          <SearchInput />
          <BButton colorPalette={themeConfig.colorPalette}>
            <IconCreditCardPay />
            Bayar
          </BButton>
        </HScroll>

        <TableComponent originalData={data} ths={ths} tds={tds} />
      </ItemContainer>
    </CContainer>
  );
};

export default MerchantInvoicePage;
