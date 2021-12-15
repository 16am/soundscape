import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Center, Flex, Link, Heading, Text } from "@chakra-ui/layout";
import { useState } from "react";
import { languages } from "../language/languages";

import stage1 from "../data/stage1.png";
import stage2 from "../data/stage2.png";
import stage3 from "../data/stage3.png";
import stage4 from "../data/stage4.png";

const keyMoments = [
  {
    title: "Before Soundscape",
    description:
      "Before the Soundscape Project, data on underwater noise in the north adriatic were scarce and discontinuous. Some sporadic and time-limited monitoring was carried out in past years, such as in the lagoon of Venice, but in practice, until 2020, the soundscape of the north adriatic was almost unknown. An information gap that has made it impossible to carry out extensive actions against noise pollution.",
  },
  {
    title: "During first lockdown for Covid-19",
    description:
      "The Soundscape Project has activated a network of 9 hydrophones, placed at various depths, in correspondence of strategic places for maritime traffic or for the proximity of marine protected areas. The red dots on the map indicate the exact points where the instruments have been placed: 4 in Italy, 4 in Croatia (the two partner countries of the interreg project) and 1 in international waters.",
  },
  {
    title: "After 6 months of hydrophone installed",
    description:
      "Beginning in February 2020, for an entire year, Soundscape Project hydrophones recorded sounds around the clock, the largest sound-related data collection operation ever in this basin. A unique fact also occurred during the sampling period: due to the extended lockdown imposed for the covid-19 emergency in several countries, the hydrophones were able to record a period with large restrictions on vessel traffic",
  },
  {
    title: "Today w/Soundscape running normally",
    description:
      "Starting from the collected data, and cross-referencing them with other data, such as those related to vessel traffic, the researchers produced a model of the sound situation of the entire North Adriatic during the sampling year. This model will represent a fundamental tool to better understand how to intervene for mitigating underwater noise pollution.",
  },
];

const bgs = ["#0082ba", "#0093ba", "#00a4ba", "#00b5ba"];

const maps = [stage1, stage2, stage3, stage4];

function Hydrophone() {
  return (
    <svg width="38" height="38" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#E02020">
        <ellipse
          fill="none"
          opacity=".33"
          cx="18.542"
          cy="18.563"
          rx="18.042"
          ry="18.063"
        />
        <ellipse
          fill="none"
          opacity=".66"
          cx="18.542"
          cy="18.563"
          rx="11.3"
          ry="11.313"
        />
      </g>
      <ellipse fill="#E02020" cx="18.542" cy="18.563" rx="5.057" ry="5.063" />
    </svg>
  );
}

function HydrophoneDot() {
  return (
    <svg width="5" height="5" xmlns="http://www.w3.org/2000/svg">
      <circle cx="1" cy="1" r="2" fill="#E02020" />
    </svg>
  );
}
function CityDot() {
  return (
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7.5" cy="7.5" r="7.5" fill="#FFF" />
    </svg>
  );
}

function LegendItem({ icon, label }) {
  return (
    <Flex alignItems="center" mb="3">
      <Flex w="10" h="10" alignItems="center" justifyContent="center">
        {icon}
      </Flex>
      <Flex
        ml="2"
        fontSize="xs"
        fontWeight="extrabold"
        justifyContent="flex-start"
        textAlign="left"
        lineHeight="shorter"
      >
        {label}
      </Flex>
    </Flex>
  );
}

function Legend({ language, ...rest }) {
  const altTextColor = useColorModeValue("gray.700", "gray.300");
  return (
    <Flex
      borderRadius="0"
      bg="white"
      top="5"
      right="5"
      w="200px"
      h="250px"
      p="4"
      pos="absolute"
      zIndex="20"
      flexDir="column"
      color="gray.700"
      {...rest}
    >
      <Flex flexDir="column">
        <Flex>
          <Heading mb="4" fontSize="md">
            {languages.legend[language]}
          </Heading>
        </Flex>
        <Flex flexDir="column">
          <LegendItem icon={<Hydrophone />} label="Running hydrophone" />
          <LegendItem icon={<HydrophoneDot />} label="Installed hydrophone" />
          <LegendItem icon={<CityDot />} label="City" />
        </Flex>

        <Flex
          top="240px"
          left="0"
          w="200px"
          p="4"
          pos="absolute"
          zIndex="2"
          flexDir="column"
        >
          <Flex
            color={altTextColor}
            fontSize="xs"
            fontWeight="extrabold"
            letterSpacing="tight"
          >
            50 km
          </Flex>
          <Flex h="px" bg={altTextColor} w="100px"></Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export function Maps({ language }) {
  const [selectedMap, setSelectedMap] = useState(0);
  const textColor = useColorModeValue("gray.900", "gray.100");

  return (
    <>
      <Box
        top="0"
        left="0"
        w="100vw"
        h="100vh"
        zIndex="0"
        pos="fixed"
        opacity="0"
        bg={bgs[selectedMap]}
      ></Box>
      <Box pos="relative" zIndex="1">
        <Box
          mb={6}
          zIndex="2"
          pos="relative"
          lineHeight="shorter"
          letterSpacing="tight"
          fontWeight="extrabold"
          fontSize={{ base: "3xl", sm: "4xl" }}
          color={textColor}
        >
          {languages.maps[language]}
        </Box>

        <Flex px={{ base: 0, sm: 16 }} flexDir="column">
          <Flex w="full" justifyContent="center" my="4" fontWeight="extrabold">
            {keyMoments[selectedMap].title}
          </Flex>

          <Flex w="full" justifyContent="center" mb="8" fontWeight="regular">
            {keyMoments[selectedMap].description}
          </Flex>
        </Flex>

        <Flex flexDir="column" pos="relative" zIndex="3">
          <Box
            borderRadius="2xl"
            overflow="hidden"
            bg={bgs[selectedMap]}
            w="full"
            minH="60vh"
            pos="relative"
            zIndex="1"
            bgImage={maps[selectedMap]}
            bgSize="cover"
            bgPos="center"
          >
            <Legend d="none" language={language} />
            <Center w="full" minH="60vh" fontWeight="extrabold">
              <Image src={maps[selectedMap]} alt="" />
            </Center>

            <Flex
              top="5"
              right="0"
              w="340px"
              h="150px"
              p="4"
              pos="absolute"
              zIndex="20"
              flexWrap="wrap"
              textAlign="center"
              justifyContent="center"
            >
              <Heading fontSize="sm" fontWeight="400" mb="2">
                Select a map by clicking on it.
              </Heading>
              {/* <Flex w="full" my="4" justifyContent="center"> */}
              {maps.map((map, i) => (
                <Flex flexDir="column" m="2" flexWrap="nowrap" maxW="32">
                  <Box
                    mb="1"
                    key={i}
                    minH="20"
                    minW="32"
                    as={Button}
                    bg={bgs[map]}
                    bgImage={map}
                    bgSize="cover"
                    borderRadius="2xl"
                    borderWidth={3}
                    borderColor={i === selectedMap ? "cyan.300" : "gray.400"}
                    onClick={() => setSelectedMap(i)}
                    _hover={{ bgImage: map, opacity: 0.8, bgSize: "cover" }}
                  />
                  <Heading fontSize="sm">{keyMoments[i].title}</Heading>
                </Flex>
              ))}
              {/* </Flex> */}
            </Flex>
          </Box>
        </Flex>

        <Link
          d="none"
          fontSize="xs"
          color="gray.500"
          href="https://levelup.gitconnected.com/react-d3-rendering-a-map-5e006b2f4895"
          isExternal
        ></Link>
        <Link
          d="none"
          fontSize="xs"
          color="gray.500"
          href="https://codesandbox.io/s/react-audio-player-demo-zwhoc?file=/src/styles.css"
          isExternal
        ></Link>
      </Box>
    </>
  );
}
