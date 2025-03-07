import ItemContainer from "@/components/ui-custom/ItemContainer";
import { EmptyState } from "@/components/ui/empty-state";
import SettingsNavsContainer from "@/components/widget/SettingsNavsContainer";
import { Icon } from "@chakra-ui/react";
import { IconSettings } from "@tabler/icons-react";

const MerchantSettingsPage = () => {
  return (
    <SettingsNavsContainer align={"stretch"}>
      <ItemContainer minH={"full"}>
        <EmptyState
          icon={
            <Icon>
              <IconSettings />
            </Icon>
          }
          title="Pengaturan"
          description="Silahkan pilih menu pengaturan"
          m={"auto"}
        />
      </ItemContainer>
    </SettingsNavsContainer>
  );
};

export default MerchantSettingsPage;
