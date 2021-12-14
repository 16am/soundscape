import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Center, Flex, Link } from "@chakra-ui/layout";
import { useState } from "react";
import { languages } from "../language/languages";

import stage1 from "../data/stage1.png";
import stage2 from "../data/stage2.png";
import stage3 from "../data/stage3.png";
import stage4 from "../data/stage4.png";

const keyMoments = [
  { title: "Before Soundscape", description: "" },
  { title: "During first lockdown for Covid-19", description: "" },
  { title: "After 6 months of hydrophone installed", description: "" },
  { title: "Today w/Soundscape running normally", description: "" },
];

const bgs = ["#0082ba", "#0093ba", "#00a4ba", "#00b5ba"];

const maps = [stage1, stage2, stage3, stage4];

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
            minH="60vh"
          >
            <Center w="full" minH="60vh" fontWeight="extrabold">
              <Image src={maps[selectedMap]} alt="" />
            </Center>
          </Box>
        </Flex>

        <Flex w="full" my="4" justifyContent="center">
          {maps.map((map, i) => (
            <Box
              mx="2"
              key={i}
              minH="16"
              minW="32"
              as={Button}
              bg={bgs[map]}
              opacity="0.7"
              bgImage={map}
              bgSize="cover"
              borderRadius="2xl"
              borderColor={i === selectedMap ? "red.300" : "red.400"}
              onClick={() => setSelectedMap(i)}
              _hover={{ bgImage: map, opacity: 0.8, bgSize: "cover" }}
            />
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
