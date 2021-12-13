import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Center, Flex, Heading, Link, Text } from "@chakra-ui/layout";
import { ParentSize } from "@visx/responsive";
import { useState } from "react";
import Map from "./Map";
import { NivoMap } from "./NivoMap";

const keyMoments = [
  { title: "Before Soundscape", description: "" },
  { title: "During first lockdown for Covid-19", description: "" },
  { title: "After 6 months of hydrophone installed", description: "" },
  { title: "Today w/Soundscape running normally", description: "" },
];

const bgs = ["#0082ba", "#0093ba", "#00a4ba", "#00b5ba"];

export function Maps() {
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
          Maps
        </Box>

        <Flex w="full" justifyContent="center" my="4" fontWeight="extrabold">
          {keyMoments[selectedMap].title}
        </Flex>

        <Flex w="full" justifyContent="center" my="4" fontWeight="extrabold">
          {keyMoments[selectedMap].description}
        </Flex>

        <Flex flexDir="column" pos="relative" zIndex="3">
          <Box
            borderRadius="2xl"
            overflow="hidden"
            bg={bgs[selectedMap]}
            opacity="0.8"
            w="full"
            h="320px"
          >
            <Center w="full" h="300px" fontWeight="extrabold">
              <NivoMap />
            </Center>
          </Box>
        </Flex>

        <Flex w="full" my="4" justifyContent="center">
          {[0, 1, 2, 3].map((map, i) => (
            <Box
              mx="2"
              key={i}
              minH="16"
              as={Button}
              bg={bgs[map]}
              opacity="0.7"
              borderRadius="2xl"
              onClick={() => setSelectedMap(map)}
              _hover={{ bg: bgs[map], opacity: 0.8 }}
            >
              <Center
                w="90px"
                h="60px"
                fontWeight="extrabold"
                color={textColor}
              >
                {map + 1}
              </Center>
            </Box>
          ))}
        </Flex>
        <Link
          fontSize="xs"
          color="gray.500"
          href="https://levelup.gitconnected.com/react-d3-rendering-a-map-5e006b2f4895"
          isExternal
        ></Link>
      </Box>
    </>
  );
}
