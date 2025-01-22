import { Button, Group, Icon, StackProps } from "@chakra-ui/react";
import { IconAlertTriangle } from "@tabler/icons-react";
import { EmptyState } from "../ui/empty-state";
import CContainer from "./CContainer";
import { PRIMARY_COLOR_PALETTE } from "@/constant/paletteConfig";

interface Props extends StackProps {
  title?: string;
  description?: string;
}

export default function FeedbackRetry({
  title = "Data gagal dimuat",
  description = "Cobalah untuk memuat ulang menggunakan tombol di bawah.",
  ...props
}: Props) {
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
        <Group>
          <Button className="clicky" colorPalette={PRIMARY_COLOR_PALETTE}>
            Muat Ulang
          </Button>
        </Group>
      </EmptyState>
    </CContainer>
  );
}
