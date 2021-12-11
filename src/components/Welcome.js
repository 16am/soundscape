import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import logo from "../theme/logo.svg";

export function Welcome() {
  return (
    <>
      <Image src={logo} alt="logo" w="48" mb="3" pos="relative" zIndex="2" />
      <Box
        fontSize={{ base: "3xl", sm: "4xl" }}
        fontWeight="extrabold"
        letterSpacing="tight"
        lineHeight="1"
        color={useColorModeValue("gray.900", "gray.100")}
        mb={6}
        pos="relative"
        zIndex="2"
      >
        <Box>Soundscape</Box>
        <Box color={useColorModeValue("brand.600", "gray.500")}>
          Ready to dive in?
        </Box>
        <Button
          size="lg"
          variant="outline"
          borderRadius="full"
          colorScheme="gray"
          mt="12"
          as={Link}
          to="/maps"
        >
          Enter
        </Button>
      </Box>
    </>
  );
}
