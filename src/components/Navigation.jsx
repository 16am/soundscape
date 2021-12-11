import { Button } from "@chakra-ui/button";
import { Box, Flex } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/color-mode";
import { useNavigate } from "react-router";

export function Navigation() {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      zIndex="2"
      fontWeight="extrabold"
      letterSpacing="tight"
      lineHeight="shorter"
      pos="fixed"
      top="-6"
      px="6"
      justifyContent="space-between"
      w="100%"
    >
      <Box>
        <Button
          size="sm"
          variant="outline"
          borderRadius="full"
          colorScheme="gray"
          mt="12"
          onClick={() => navigate("/")}
        >
          Home
        </Button>
        <Button
          size="sm"
          ml="4"
          variant="outline"
          borderRadius="full"
          colorScheme="gray"
          mt="12"
          onClick={() => navigate("/maps")}
        >
          Maps
        </Button>
        <Button
          size="sm"
          ml="4"
          variant="outline"
          borderRadius="full"
          colorScheme="gray"
          mt="12"
          onClick={() => navigate("/credits")}
        >
          Credits
        </Button>
      </Box>
      <Box>
        <Button
          size="sm"
          ml="4"
          variant="outline"
          borderRadius="full"
          colorScheme="gray"
          mt="12"
          onClick={toggleColorMode}
        >
          {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </Box>
    </Flex>
  );
}
