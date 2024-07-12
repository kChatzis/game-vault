import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
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
        <GridItem area={"side"}>side</GridItem>
      </Show>
      <GridItem area={"main"}>main</GridItem>
    </Grid>
  );
}
