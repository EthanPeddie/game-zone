import {Grid, GridItem, Show } from "@chakra-ui/react"


const App = () => {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem  bg='yellow' area={'nav'}>
      Yellow
      </GridItem>
      <Show above="lg">
        <GridItem  bg='green' area={'aside'}>
        Green
        </GridItem>
      </Show>
      <GridItem  bg='red' area={'main'}>
      Red
      </GridItem>
    </Grid>
  )
}

export default App