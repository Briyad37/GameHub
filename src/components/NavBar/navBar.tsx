import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "./logo.jpg";

export default function NavBar() {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>GAME TRAVEL</Text>
    </HStack>
  );
}
