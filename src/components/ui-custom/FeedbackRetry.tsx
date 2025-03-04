import { useThemeConfig } from "@/context/useThemeConfig";
import { Icon, StackProps } from "@chakra-ui/react";
import { IconAlertTriangle } from "@tabler/icons-react";
import { EmptyState } from "../ui/empty-state";
import BButton from "./BButton";
import CContainer from "./CContainer";

interface Props extends StackProps {
  title?: string;
  description?: string;
}

export default function FeedbackRetry({
  title = "Data gagal dimuat",
  description = "Cobalah untuk memuat ulang menggunakan tombol di bawah.",
  ...props
}: Props) {
  const { themeConfig } = useThemeConfig();

  return (
    <CContainer w={"fit"} m={"auto"} {...props}>
      <EmptyState
        icon={
          <Icon>
            <IconAlertTriangle stroke={2} />
          </Icon>
        }
        title={title}
        description={description}
        maxW={"500px"}
      >
        <BButton className="clicky" colorPalette={themeConfig.colorPalette}>
          Muat Ulang
        </BButton>
      </EmptyState>
    </CContainer>
  );
}
