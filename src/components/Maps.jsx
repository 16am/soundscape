import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Flex } from "@chakra-ui/layout";
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import Map from "./Map";

export function Maps() {
  return (
    <>
      <Box
        fontSize={{ base: "3xl", sm: "4xl" }}
        fontWeight="extrabold"
        letterSpacing="tight"
        lineHeight="shorter"
        color={useColorModeValue("gray.900", "gray.100")}
        mb={6}
        pos="relative"
        zIndex="2"
      >
        Maps
      </Box>
      <Flex flexDir="column" pos="relative" zIndex="3">
        <Flex mb="4">
          <Box
            overflow="hidden"
            boxShadow="0 0 40px rgba(255, 255, 255, 0.25)"
            bg="rgba(0, 0, 0, 0.25)"
            borderRadius="2xl"
            mr="4"
          >
            <Map width={230} height={120} />
          </Box>
          <Box
            overflow="hidden"
            boxShadow="0 0 40px rgba(255, 255, 255, 0.25)"
            bg="rgba(0, 0, 0, 0.25)"
            borderRadius="2xl"
            mr="4"
          >
            <Map width={230} height={120} />
          </Box>
          <Box
            overflow="hidden"
            boxShadow="0 0 40px rgba(255, 255, 255, 0.25)"
            bg="rgba(0, 0, 0, 0.25)"
            borderRadius="2xl"
          >
            <Map width={230} height={120} />
          </Box>
        </Flex>
        <Box
          w="50vw"
          h="50vh"
          overflow="hidden"
          boxShadow="0 0 40px rgba(255, 255, 255, 0.25)"
          bg="rgba(0, 0, 0, 0.25)"
          borderRadius="2xl"
        >
          <ParentSize>
            {({ width, height }) => <Map width={width} height={height} />}
          </ParentSize>
        </Box>
      </Flex>
    </>
  );
}
