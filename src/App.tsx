import { Grid, GridItem, Show } from "@chakra-ui/react";
export default function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "side main"`,
      }}
    >
      <GridItem area={"nav"}>nav</GridItem>
      <Show above="lg">
        <GridItem area={"side"}>side</GridItem>
      </Show>
      <GridItem area={"main"}>main</GridItem>
    </Grid>
  );
}
