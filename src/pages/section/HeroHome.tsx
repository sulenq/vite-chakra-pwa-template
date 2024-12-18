import BButton from "@/components/ui-custom/BButton";
import CContainer from "@/components/ui-custom/CContainer";
import Heading1 from "@/components/ui-custom/Heading1";
import Heading5 from "@/components/ui-custom/Heading5";
import contents from "@/constant/contents";
import { responsiveSpacing, responsiveSpacing2 } from "@/constant/sizes";
import { useLang } from "@/hooks/useLang";
import { HStack, Icon, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { ArrowRight } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import Container from "./Container";

const Clock = () => {
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setClock(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: any) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 0-23 to 1-12 format
    const minutesStr = minutes < 10 ? `0${minutes}` : minutes; // Add leading zero to minutes

    return `${hours}:${minutesStr} ${ampm}`;
  };

  return (
    <HStack justify={"end"}>
      <Heading5 textAlign="right">{formatTime(clock)}</Heading5>
    </HStack>
  );
};

const Hero = () => {
  const { lang } = useLang();

  return (
    <CContainer minH={"calc(100dvh - 56px)"}>
      <Container flex={1} px={0} py={responsiveSpacing}>
        <SimpleGrid
          columns={[1, null, null, 3]}
          gap={responsiveSpacing2}
          p={responsiveSpacing}
          flex={1}
        >
          <CContainer justify={"space-between"} gap={responsiveSpacing}>
            <HStack gap={0}>
              <Heading1 fontWeight={800} fontSize={72}>
                Exium
              </Heading1>
              <Text fontSize={"2.5rem"}>®</Text>
            </HStack>

            <HStack color={"fg.subtle"}>
              <Text fontSize={"1rem"}>#Innovative</Text>
              <Text fontSize={"1rem"}>#Vissionary</Text>
              <Text fontSize={"1rem"}>#Engineering</Text>
            </HStack>

            <Text fontSize={20} mt={"auto"}>
              {contents.home.hero.intro[lang]}
            </Text>
          </CContainer>

          <CContainer position={"relative"} my={responsiveSpacing}>
            {Array.from({ length: 2 }).map((_, i) => (
              <Image
                key={i}
                alt="Exium Hero Image"
                src="/assets/images/hero.png"
                w={"100%"}
                m={"auto"}
                position={"absolute"}
                opacity={0.1}
                left={"50%"}
                transform={"translateX(-50%)"}
                zIndex={i + 1}
                animation={`hero-top-${i} infinite 8s`}
              />
            ))}

            {Array.from({ length: 2 }).map((_, i) => (
              <Image
                key={i}
                alt="Exium Hero Image"
                src="/assets/images/hero.png"
                w={"100%"}
                m={"auto"}
                position={"absolute"}
                opacity={0.1}
                left={"50%"}
                transform={"translateX(-50%)"}
                zIndex={i + 1}
                animation={`hero-bottom-${i} infinite 8s`}
              />
            ))}

            {/* Main image */}
            <Image
              alt="Exium Hero Image"
              src="/assets/images/hero.png"
              w={"100%"}
              m={"auto"}
              zIndex={15}
            />
          </CContainer>

          <CContainer gap={responsiveSpacing}>
            <CContainer gap={2}>
              <Heading5 textAlign={"right"} color={"fg.subtle"}>
                Semarang, Indonesia
              </Heading5>
              <Clock />
            </CContainer>

            <CContainer flex={0} align={"flex-end"} mt={"auto"}>
              {contents.sosmeds.sosmeds.map((sosmed, i) => (
                <BButton key={i} variant={"ghost"} fontSize={"1rem !important"}>
                  {sosmed.name}
                </BButton>
              ))}
            </CContainer>

            <HStack wrap={"wrap"} gap={5}>
              <Text
                textAlign={"right"}
                flex={"1 1 150px"}
                minW={"100px"}
                color={"fg.subtle"}
              >
                {contents.home.hero.ctaDescription[lang]}
              </Text>

              <BButton
                w={"fit"}
                h={"52px"}
                px={6}
                size={"xl"}
                fontSize={"1rem !important"}
                flex={"1 1 150px"}
              >
                {contents.home.hero.cta[lang]}
                <Icon fontSize={"lg"}>
                  <ArrowRight />
                </Icon>
              </BButton>
            </HStack>
          </CContainer>
        </SimpleGrid>
      </Container>
    </CContainer>
  );
};

export default Hero;
