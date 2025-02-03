import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "../../hooks/useGenre";
import getCroppedImageUrl from "../../services/imagrUrl";

export default function GenreList() {
  const { data } = useGenre();

  return (
    <>
      <List>
        {data.map((data) => (
          <ListItem key={data.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(data.image_background)}
              ></Image>
              <Text fontSize="lg">{data.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}
