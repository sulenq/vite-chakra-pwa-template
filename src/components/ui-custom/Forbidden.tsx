import { Icon, StackProps } from "@chakra-ui/react";
import { Prohibit } from "@phosphor-icons/react";
import { EmptyState } from "../ui/empty-state";
import CContainer from "./CContainer";

interface Props extends StackProps {
  title?: string;
  description?: string;
}

export default function Forbidden({
  title = "Tidak memiliki akses",
  description = "Jika memerlukan akses, hubungi tim admin untuk menyesuaikan izin Anda.",
  ...props
}: Props) {
  return (
    <CContainer {...props}>
      <EmptyState
        icon={
          <Icon>
            <Prohibit />
          </Icon>
        }
        title={title}
        description={description}
        maxW={"500px"}
        m={"auto"}
      />
    </CContainer>
  );
}
