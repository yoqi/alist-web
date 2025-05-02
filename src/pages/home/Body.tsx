import { HStack, VStack } from "@hope-ui/solid"
import { Obj } from "./Obj"
import { Readme } from "./Readme"
import { Container } from "./Container"
import { Sidebar } from "./Sidebar"
import { Show } from "solid-js"
import { isMobile } from "~/utils/compatibility"

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
        <Show when={!isMobile}>
          <Sidebar />
        </Show>
        <VStack class="content" w="$full" h="100%" px="$2" gap="$4">
          <Readme files={["header.md", "top.md"]} fromMeta="header" />
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
