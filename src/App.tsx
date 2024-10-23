import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "side main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar onSearch={(searchText) => setSearchText(searchText)} />
      </GridItem>
      <Show above="lg">
        <GridItem area={"side"} paddingX={"15px"}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameHeading gameQuery={selectedGenre}></GameHeading>
        <HStack paddingLeft={2} marginBottom={5}>
          <SortSelector
            sortorder={sortOrder}
            onSelectSortOrder={(order) => setSortOrder(order)}
          />
        </HStack>
        <GameGrid
          selectedGenre={selectedGenre}
          sortOrder={sortOrder}
          searchText={searchText}
        />
      </GridItem>
    </Grid>
  );
}
