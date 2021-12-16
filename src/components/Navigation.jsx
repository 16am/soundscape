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
      top="0"
      py="3"
      px="4"
      justifyContent="space-between"
      w="100%"
      bg="gray.800"
      boxShadow="0 0 2px #345"
    >
      <Box>
        <Button
          mr="-1"
          size="sm"
          variant="ghost"
          borderRadius="full"
          onClick={() => navigate("/")}
          title={languages["home"][language]}
          colorScheme={useColorModeValue("blackAlpha", "gray")}
        >
          <RiHome2Fill />
        </Button>
        <Button
          ml="3"
          d="none"
          size="sm"
          variant="outline"
          borderRadius="full"
          onClick={() => navigate("/hydrophones")}
          colorScheme={useColorModeValue("blackAlpha", "gray")}
        >
          {languages["hydrophones"][language]}
        </Button>
        <Button
          ml="3"
          size="sm"
          variant="outline"
          borderRadius="full"
          onClick={() => navigate("/maps")}
          colorScheme={useColorModeValue("blackAlpha", "gray")}
        >
          {languages["maps"][language]}
        </Button>
        <Button
          ml="3"
          size="sm"
          variant="outline"
          borderRadius="full"
          onClick={() => navigate("/credits")}
          colorScheme={useColorModeValue("blackAlpha", "gray")}
        >
          {languages["credits"][language]}
        </Button>
      </Box>
      <Box>
        <Button
          ml="3"
          d="none"
          size="sm"
          variant="outline"
          borderRadius="full"
          onClick={toggleColorMode}
          colorScheme={useColorModeValue("blackAlpha", "gray")}
        >
          {colorMode === "light"
            ? languages["dark"][language]
            : languages["light"][language]}
        </Button>
        <Button
          ml="3"
          d="none"
          minW="12"
          size="sm"
          variant="outline"
          borderRadius="full"
          onClick={onLanguageChange}
          colorScheme={useColorModeValue("blackAlpha", "gray")}
        >
          {language === "EN" ? "IT" : "EN"}
        </Button>
      </Box>
    </Flex>
  );
}
