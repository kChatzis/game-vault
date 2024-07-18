import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image}></Image>
      <CardBody>
        <HStack justifyContent={"space-between"}>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
}
