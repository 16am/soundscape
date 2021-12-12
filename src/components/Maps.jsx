import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Center, Flex, Heading } from "@chakra-ui/layout";
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import Map from "./Map";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import { useState } from "react";

const keyMoments = [
  "Before Soundscape",
  "During first lockdown for Covid-19",
  "After 6 months of hydrophone installed",
  "Today w/Soundscape running normally",
];

const bgs = ["#fe6100", "#fe8200", "#fea300", "#fec400"];

export function Maps() {
  const [selectedMap, setSelectedMap] = useState(3);
  const selectedMapColor = useColorModeValue("pink.400", "pink.200");
  const selectedMapBg = useColorModeValue("gray.200", "gray.700");
  return (
    <>
      <Box
        mb={6}
        zIndex="2"
        pos="relative"
        lineHeight="shorter"
        letterSpacing="tight"
        fontWeight="extrabold"
        fontSize={{ base: "3xl", sm: "4xl" }}
        color={useColorModeValue("gray.900", "gray.100")}
      >
        Maps
      </Box>
      <Flex flexDir="column" pos="relative" zIndex="3">
        <Flex mb="4" d="none">
          <Box d="none">
            <Box
              overflow="hidden"
              boxShadow="0 0 40px rgba(255, 255, 255, 0.25)"
              bg="rgba(0, 0, 0, 0.25)"
              borderRadius="2xl"
              mr="4"
            >
              <Center w="230px" h="100px">
                Map 1
              </Center>
              {/* <Map events={false} width={230} height={100} /> */}
            </Box>
            <Box
              overflow="hidden"
              boxShadow="0 0 40px rgba(255, 255, 255, 0.25)"
              bg="rgba(0, 0, 0, 0.25)"
              borderRadius="2xl"
              mr="4"
            >
              <Center w="230px" h="100px">
                Map 2
              </Center>
              {/* <Map events={false} width={230} height={100} /> */}
            </Box>
            <Box
              overflow="hidden"
              boxShadow="0 0 40px rgba(255, 255, 255, 0.25)"
              bg="rgba(0, 0, 0, 0.25)"
              borderRadius="2xl"
            >
              <Center w="230px" h="100px">
                Map 3
              </Center>
              {/* <Map events={false} width={230} height={100} /> */}
            </Box>
          </Box>
        </Flex>
        <Box borderRadius="2xl" overflow="hidden" bg={bgs[selectedMap]}>
          <Center w="full" h="300px" fontWeight="extrabold">
            <Heading>{selectedMap + 1}</Heading>
          </Center>
          {/* <ParentSize>
            {({ width, height }) => <Map width={width} height={height} />}
          </ParentSize> */}
        </Box>
      </Flex>

      <Flex w="full" justifyContent="center" mt="4" fontWeight="extrabold">
        {keyMoments[selectedMap]}
      </Flex>

      <Flex w="full" my="4" justifyContent="center">
        {[0, 1, 2, 3].map((map, i) => (
          <Box
            mx="2"
            key={i}
            borderWidth={2}
            cursor="pointer"
            overflow="hidden"
            borderRadius="2xl"
            bg={bgs[map]}
            onClick={() => setSelectedMap(map)}
            borderColor={selectedMap === map ? "currentcolor" : "transaprent"}
          >
            <Center w="90px" h="60px" fontWeight="extrabold">
              {map + 1}
            </Center>
          </Box>
        ))}
      </Flex>

      <Flex
        d="none"
        px={{ base: "2", sm: "12", md: "36" }}
        w="full"
        mt="4"
        flexDir="column"
      >
        <Slider
          min={0}
          max={3}
          step={1}
          size="sm"
          value={selectedMap}
          aria-label="map-selector"
          onChange={(val) => setSelectedMap(val)}
        >
          <SliderTrack bg={selectedMapBg}>
            <SliderFilledTrack bg="pink.300" />
          </SliderTrack>
          <SliderThumb bg="pink.400" />
        </Slider>
      </Flex>
    </>
  );
}
