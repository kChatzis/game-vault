import { Heading } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";

interface Props {
  gameQuery: Genre | null;
}

export default function GameHeading({ gameQuery }: Props) {
  const heading = `${gameQuery?.name || ""} Games`;
  return (
    <Heading as={"h1"} paddingBottom={5}>
      {heading}
    </Heading>
  );
}
