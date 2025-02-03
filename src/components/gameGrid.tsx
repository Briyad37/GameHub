import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameSkeleton from "./gameCardSkeleton";

export default function GameGrid() {
  const { games, error, isLoading } = useGame();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10} padding="10px">
        {isLoading &&
          skeletons.map((skeleton) => <GameSkeleton key={skeleton} />)}

        {games.map((item) => (
          <GameCard key={item.id} game={item} />
        ))}
      </SimpleGrid>
    </>
  );
}
