import { Button } from "@chakra-ui/button";
import { Box, Flex } from "@chakra-ui/layout";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { useNavigate } from "react-router";
import { RiHome2Fill } from "react-icons/ri";
import { languages } from "../language/languages";

export function Navigation({ onLanguageChange, language }) {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      zIndex="1080"
      fontWeight="extrabold"
      letterSpacing="tight"
      lineHeight="shorter"
      pos="fixed"
      top="3"
      px="4"
      justifyContent="space-between"
      w="100%"
    >
      <Box>
        <Button
          size="sm"
          mr="-1"
          variant="ghost"
          title={languages["home"][language]}
          borderRadius="full"
          colorScheme={useColorModeValue("blackAlpha", "gray")}
          onClick={() => navigate("/")}
        >
          <RiHome2Fill />
        </Button>
        <Button
          size="sm"
          ml="3"
          variant="outline"
          borderRadius="full"
          colorScheme={useColorModeValue("blackAlpha", "gray")}
          onClick={() => navigate("/hydrophones")}
        >
          {languages["hydrophones"][language]}
        </Button>
        <Button
          size="sm"
          ml="3"
          variant="outline"
          borderRadius="full"
          colorScheme={useColorModeValue("blackAlpha", "gray")}
          onClick={() => navigate("/maps")}
        >
          {languages["maps"][language]}
        </Button>
        <Button
          size="sm"
          ml="3"
          variant="outline"
          borderRadius="full"
          colorScheme={useColorModeValue("blackAlpha", "gray")}
          onClick={() => navigate("/credits")}
        >
          {languages["credits"][language]}
        </Button>
      </Box>
      <Box>
        <Button
          size="sm"
          ml="3"
          variant="outline"
          borderRadius="full"
          colorScheme={useColorModeValue("blackAlpha", "gray")}
          onClick={toggleColorMode}
        >
          {colorMode === "light"
            ? languages["dark"][language]
            : languages["light"][language]}
        </Button>
        <Button
          d="n"
          size="sm"
          ml="3"
          minW="12"
          variant="outline"
          borderRadius="full"
          colorScheme={useColorModeValue("blackAlpha", "gray")}
          onClick={onLanguageChange}
        >
          {language === "EN" ? "IT" : "EN"}
        </Button>
      </Box>
    </Flex>
  );
}
