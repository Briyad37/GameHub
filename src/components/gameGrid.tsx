import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";

export default function GameGrid() {
  const { games, error } = useGame();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10} padding="10px">
        {games.map((item) => (
          <GameCard key={item.id} game={item} />
        ))}
      </SimpleGrid>
    </>
  );
}
