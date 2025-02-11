import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../../hooks/useGenre";
import getCroppedImageUrl from "../../services/imagrUrl";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
}

export default function GenreList({ onSelectedGenre }: Props) {
  const { data, isLoading, error } = useGenre();

  if (error) return null;
  if (isLoading) return <Spinner />;

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
              <Button
                variant="link"
                fontSize="lg"
                onClick={() => onSelectedGenre(data)}
              >
                {data.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}
