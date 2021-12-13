import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import logo from "../theme/logo_13.svg";
import { languages } from "../language/languages";

export function Welcome({ language }) {
  return (
    <>
      <Image
        src={logo}
        alt="logo"
        w="48"
        mb="3"
        mx="auto"
        pos="relative"
        zIndex="2"
      />
      <Box
        fontSize={{ base: "3xl", sm: "4xl" }}
        fontWeight="extrabold"
        letterSpacing="tight"
        lineHeight="1"
        color={useColorModeValue("gray.900", "gray.100")}
        mb={8}
        pos="relative"
        zIndex="2"
      >
        <Box>Soundscape</Box>
        <Box color={useColorModeValue("gray.400", "gray.500")}>
          {languages.ready[language]}
        </Box>
      </Box>
      <Box
        color={useColorModeValue("gray.500", "gray.500")}
        px={{ base: 0, sm: 4, md: 12, lg: 14, xl: 20 }}
      >
        {languages["description"][language]}
      </Box>
      <Button
        size="lg"
        variant="outline"
        borderRadius="full"
        colorScheme={useColorModeValue("blackAlpha", "gray")}
        mt="8"
        as={Link}
        to="/hydrophones"
      >
        {languages["enter"][language]}
      </Button>
    </>
  );
}
