import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "./logo.jpg";
import ColorModeSwitch from "./colorModeSwitch";
import SearchInput from "../searchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

export default function NavBar({ onSearch }: Props) {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}
