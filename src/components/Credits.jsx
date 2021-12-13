import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Link, Text } from "@chakra-ui/layout";

export function Credits() {
  const linkColor = useColorModeValue("cyan.400", "cyan.700");
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
      <Box mb="8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus,
        ante vitae sollicitudin rutrum, sem nisl porttitor nunc, id dignissim
        libero dui non lectus. Pellentesque eu aliquet sapien, in consequat
        tortor. Nulla lacinia, orci non sagittis fermentum, tellus dolor
        pellentesque tellus, vel pellentesque libero eros ac odio. Morbi ac
        purus ac risus ultrices vulputate sit amet quis leo. Morbi sed leo nec
        risus scelerisque congue et eget mauris. In nec sapien nunc. Etiam
        iaculis urna id mollis viverra.
      </Box>
      <Box mt="20">
        <Text mb="2">Words and pictures</Text>
        <Box>
          <b>Francesco Martinelli</b>
          <Link to="#" color={linkColor} isExternal ml="2">
            @fra####
          </Link>
        </Box>
        <Box>
          <b>Elisabetta Zavoli</b>
          <Link to="#" color={linkColor} isExternal ml="2">
            @elizavoli
          </Link>
        </Box>
      </Box>
      <Box mt="8">
        <Text mb="2">Web design</Text>
        <Box>
          <b>Alessandro D'Alfonso</b>
          <Link to="#" color={linkColor} isExternal ml="2">
            @16amdotnet
          </Link>
        </Box>
      </Box>
      <Box mt="8">
        <Text mb="2">More credits</Text>
        <Box>
          <b>Lorem Institute</b>
          <Link to="#" color={linkColor} isExternal ml="2">
            @twitter_account
          </Link>
        </Box>
      </Box>
      <Box mt="12"></Box>
    </>
  );
}
