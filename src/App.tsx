import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
export default function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "side main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area={"side"}>
          <GenreList></GenreList>
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}
