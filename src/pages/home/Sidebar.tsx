import { Box, VStack } from "@hope-ui/solid"
import { useLocation } from "@solidjs/router"
import {
  Show,
  createEffect,
  createMemo,
  createSignal,
  on,
  onCleanup,
  onMount,
} from "solid-js"
import { FolderTree, FolderTreeHandler } from "~/components"
import { useRouter } from "~/hooks"
import { local, objStore } from "~/store"
import { objBoxRef } from "./Obj"

function SidebarPanel() {
  const { to } = useRouter()
  const location = useLocation()

  const [folderTreeHandler, setFolderTreeHandler] =
    createSignal<FolderTreeHandler>()

  onMount(() => {
    const handler = folderTreeHandler()
    handler?.setPath(location.pathname)
  })

  createEffect(
    on(
      () => location.pathname,
      () => {
        const handler = folderTreeHandler()
        handler?.setPath(location.pathname)
      },
    ),
  )

  return (
    <VStack
      minW="250px"
      maxW="250px"
      h="100vh"
      p="$2"
      borderRight="1px solid $neutral6"
      overflow="auto"
      spacing="$2"
      bgColor="$background"
      _dark={{ bgColor: "$neutral2" }}
    >
      <FolderTree
        autoOpen
        showEmptyIcon
        showHiddenFolder={false}
        onChange={(path) => to(path)}
        handle={(handler) => setFolderTreeHandler(handler)}
      />
    </VStack>
  )
}

export function Sidebar() {
  return <SidebarPanel />
}
