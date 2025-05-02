import { HStack, VStack } from "@hope-ui/solid"
import { Nav } from "./Nav"
import { Obj } from "./Obj"
import { Readme } from "./Readme"
import { Container } from "./Container"
import { Sidebar } from "./Sidebar"

export const Body = () => {
  return (
    <Container>
      <HStack
        class="body"
        mt="$1"
        py="$2"
        px="0"
        minH="80vh"
        w="$full"
        spacing="$0"
        alignItems="flex-start"
      >
        <Sidebar />
        <VStack class="content" w="$full" h="100%" px="$2" gap="$4">
          <Readme files={["header.md", "top.md"]} fromMeta="header" />
          <Nav />
          <Obj />
          <Readme
            files={["readme.md", "footer.md", "bottom.md"]}
            fromMeta="readme"
          />
        </VStack>
      </HStack>
    </Container>
  )
}
