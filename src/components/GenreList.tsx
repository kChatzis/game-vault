//prettier-ignore
import { Button, Heading, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

export default function GenreList({ onSelectGenre, selectedGenre }: Props) {
  const { genres, error, isLoading } = useGenres();
  return (
    <>
      <Heading>Genres</Heading>
      <List>
        {isLoading && <Spinner></Spinner>}
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY={"8px"}>
            <HStack>
              <Image
                boxSize={"40px"}
                borderRadius={"8px"}
                objectFit={"cover"}
                src={genre.image_background}
              ></Image>
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                fontSize={"lg"}
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}
