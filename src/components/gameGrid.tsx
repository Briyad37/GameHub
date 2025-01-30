import { Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";

export default function GameGrid() {
  const { games, error } = useGame();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}
