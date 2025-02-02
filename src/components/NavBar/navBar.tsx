import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "./logo.jpg";
import ColorModeSwitch from "./colorModeSwitch";

export default function NavBar() {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
}
