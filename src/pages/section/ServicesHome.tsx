import BButton from "@/components/ui-custom/BButton";
import CContainer from "@/components/ui-custom/CContainer";
import Heading6 from "@/components/ui-custom/Heading6";
import {
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from "@/components/ui/popover";
import contents from "@/constant/contents";
import { responsiveSpacing, responsiveSpacing2 } from "@/constant/sizes";
import { useLang } from "@/hooks/useLang";
import {
  Grid,
  GridItem,
  HStack,
  Icon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Container from "./Container";

const Problem = () => {
  const { lang } = useLang();

  return (
    <CContainer py={20} bg={"var(--divider)"}>
      <Container>
        <Grid
          gap={responsiveSpacing2}
          templateColumns={["repeat(1, 1fr)", null, "repeat(3, 1fr)"]}
        >
          <GridItem>
            <Heading6 color={"fg.subtle"}>
              {contents.home.services.title[lang]}
            </Heading6>
          </GridItem>

          <GridItem colSpan={2}>
            <Text fontSize={20} fontWeight={"normal"} mb={responsiveSpacing}>
              {contents.home.services.intro[lang]}
            </Text>

            <SimpleGrid columns={[1, null, 2]} gap={responsiveSpacing}>
              {contents.home.services.services.map((service, i) => (
                <CContainer
                  key={i}
                  border={"1px solid"}
                  borderColor={"border.emphasized"}
                  borderRadius={8}
                  p={5}
                  gap={5}
                >
                  <Icon fontSize={52} color={"fg.subtle"}>
                    <service.icon />
                  </Icon>
                  <Heading6 fontWeight={"semibold"} lineHeight={"moderate"}>
                    {service.problem[lang]}
                  </Heading6>
                  <Text fontSize={"1rem"} color={"fg.muted"}>
                    #{service.solution[lang]}
                  </Text>
                  <Text fontSize={"1rem"}>{service.description[lang]}</Text>

                  <HStack wrap={"wrap"} mt={"auto"}>
                    {service.notes.map((note, ii) => (
                      <PopoverRoot>
                        <PopoverTrigger asChild>
                          <BButton key={ii} variant={"surface"} size={"sm"}>
                            {note.label[lang]}
                          </BButton>
                        </PopoverTrigger>
                        <PopoverContent>
                          {/* <PopoverArrow bg={"darktrans !important"} /> */}
                          <PopoverBody>
                            <Text>{note.description[lang]}</Text>
                          </PopoverBody>
                        </PopoverContent>
                      </PopoverRoot>
                    ))}
                  </HStack>
                </CContainer>
              ))}
            </SimpleGrid>
          </GridItem>
        </Grid>
      </Container>
    </CContainer>
  );
};

export default Problem;
