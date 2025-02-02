import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PLatformIconList from "./PlatformIconLlist";

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  return (
    <>
      <Card borderRadius={10} overflow={"hidden"}>
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          <PLatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </CardBody>
      </Card>
    </>
  );
}
