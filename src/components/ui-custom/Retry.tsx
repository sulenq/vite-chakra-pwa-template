import { Button, Group, Icon, StackProps } from "@chakra-ui/react";
import { IconAlertTriangle } from "@tabler/icons-react";
import { EmptyState } from "../ui/empty-state";
import CContainer from "./CContainer";

interface Props extends StackProps {
  title?: string;
  description?: string;
}

export default function Retry({
  title = "Data gagal dimuat",
  description = "Cobalah untuk memuat ulang menggunakan tombol di bawah.",
  ...props
}: Props) {
  return (
    <CContainer {...props}>
      <EmptyState
        icon={
          <Icon>
            <IconAlertTriangle />
          </Icon>
        }
        title={title}
        description={description}
        maxW={"500px"}
        minH={"300px"}
        m={"auto"}
      >
        <Group>
          <Button className="clicky">Muat Ulang</Button>
        </Group>
      </EmptyState>
    </CContainer>
  );
}
