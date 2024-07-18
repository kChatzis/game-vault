import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

export default function GenreList() {
  const { genres, error, isLoading } = useGenres();

  return (
    <>
      <List>
        {isLoading && <Spinner></Spinner>}
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY={"8px"}>
            <HStack>
              <Image
                boxSize={"40px"}
                borderRadius={"8px"}
                src={genre.image_background}
              ></Image>
              <Text fontSize={"lg"}>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}
