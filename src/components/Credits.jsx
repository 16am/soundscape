import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Link } from "@chakra-ui/layout";

export function Credits() {
  const linkColor = useColorModeValue("pink.500", "pink.200");
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
      <Box mt="4">
        Idea, Texts & Pictures
        <Box>
          <b>Elisabetta Zavoli</b>
          <Link to="#" color={linkColor} isExternal ml="2">
            @elizavoli
          </Link>
        </Box>
        <Box>
          <b>Francesco ####</b>
          <Link to="#" color={linkColor} isExternal ml="2">
            @fra####
          </Link>
        </Box>
      </Box>
      <Box mt="4">
        Web design
        <Box>
          <b>Alessandro D'Alfonso</b>
          <Link to="#" color={linkColor} isExternal ml="2">
            @16amdotnet
          </Link>
        </Box>
      </Box>
    </>
  );
}
