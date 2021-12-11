import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Text } from "@chakra-ui/layout";

export function Credits() {
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
        <Box>Credits</Box>
      </Box>

      <Text
        pos="fixed"
        zIndex="2"
        bottom="2"
        left="2"
        fontSize="10px"
        opacity="0.5"
        fontWeight="extrabold"
        letterSpacing="tight"
        lineHeight="shorter"
      >
        Photo by Fernando Jorge on Unsplash
      </Text>
    </>
  );
}
