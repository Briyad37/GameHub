import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PLatformIconList from "./PlatformIconLlist";
import CriticScore from "./criticScore";
import getCroppedImageUrl from "../services/imagrUrl";
import Emoji from "./emoji";

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  return (
    <>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack marginBottom={2} justifyContent={"space-between"}>
            <PLatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />

            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize={"2xl"}>
            {game.name}
            {/* <Emoji rating={game.rating_top} /> */}
          </Heading>
        </CardBody>
      </Card>
    </>
  );
}
