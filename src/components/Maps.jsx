import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Center, Flex, Heading, Link, Text } from "@chakra-ui/layout";
import { ParentSize } from "@visx/responsive";
import { useState } from "react";
import Map from "./Map";
import { NivoMap } from "./NivoMap";

const keyMoments = [
  "Before Soundscape",
  "During first lockdown for Covid-19",
  "After 6 months of hydrophone installed",
  "Today w/Soundscape running normally",
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
          {keyMoments[selectedMap]}
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
        >
          https://levelup.gitconnected.com/react-d3-rendering-a-map-5e006b2f4895
        </Link>
      </Box>
    </>
  );
}

// <Flex mb="4" d="none">
//             <Box d="none">
//               <Box
//                 overflow="hidden"
//                 boxShadow="0 0 40px rgba(255, 255, 255, 0.25)"
//                 bg="rgba(0, 0, 0, 0.25)"
//                 borderRadius="2xl"
//                 mr="4"
//               >
//                 <Center w="230px" h="100px">
//                   Map 1
//                 </Center>
//                 {/* <Map events={false} width={230} height={100} /> */}
//               </Box>
//               <Box
//                 overflow="hidden"
//                 boxShadow="0 0 40px rgba(255, 255, 255, 0.25)"
//                 bg="rgba(0, 0, 0, 0.25)"
//                 borderRadius="2xl"
//                 mr="4"
//               >
//                 <Center w="230px" h="100px">
//                   Map 2
//                 </Center>
//                 {/* <Map events={false} width={230} height={100} /> */}
//               </Box>
//               <Box
//                 overflow="hidden"
//                 boxShadow="0 0 40px rgba(255, 255, 255, 0.25)"
//                 bg="rgba(0, 0, 0, 0.25)"
//                 borderRadius="2xl"
//               >
//                 <Center w="230px" h="100px">
//                   Map 3
//                 </Center>
//                 {/* <Map events={false} width={230} height={100} /> */}
//               </Box>
//             </Box>
//           </Flex>

// <Flex
//           d="none"
//           px={{ base: "2", sm: "12", md: "36" }}
//           w="full"
//           mt="4"
//           flexDir="column"
//         >
//           <Slider
//             min={0}
//             max={3}
//             step={1}
//             size="sm"
//             value={selectedMap}
//             aria-label="map-selector"
//             onChange={(val) => setSelectedMap(val)}
//           >
//             <SliderTrack bg={selectedMapBg}>
//               <SliderFilledTrack bg="pink.300" />
//             </SliderTrack>
//             <SliderThumb bg="pink.400" />
//           </Slider>
//         </Flex>
