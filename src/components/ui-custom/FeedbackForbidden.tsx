import { Icon, StackProps } from "@chakra-ui/react";
import { IconBan } from "@tabler/icons-react";
import { EmptyState } from "../ui/empty-state";
import CContainer from "./CContainer";

interface Props extends StackProps {
  title?: string;
  description?: string;
}

export default function FeedbackForbidden({
  title = "Tidak memiliki akses",
  description = "Jika memerlukan akses, hubungi tim admin untuk menyesuaikan izin Anda.",
  ...props
}: Props) {
  return (
    <CContainer {...props}>
      <EmptyState
        icon={
          <Icon>
            <IconBan stroke={2} />
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
