import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@hope-ui/solid"
import { Link } from "@solidjs/router"
import { createMemo, For, Show } from "solid-js"
import { usePath, useRouter, useT } from "~/hooks"
import { getSetting } from "~/store"
import { encodePath, hoverColor, joinBase } from "~/utils"

export const Nav = () => {
  const { pathname, isShare } = useRouter()
  const paths = createMemo(() => {
    if (!isShare()) {
      return ["", ...pathname().split("/").filter(Boolean)]
    } else {
      const p = pathname().split("/").filter(Boolean)
      return [`@s/${p[1] ?? ""}`, ...p.slice(2)]
    }
  })
  const t = useT()
  const { setPathAs } = usePath()

  return (
    <Breadcrumb
      class="nav"
      w="$full"
      fontSize="$sm"
      h="40px"
      alignItems="center"
      display="flex"
      overflow="hidden"
    >
      <For each={paths()}>
        {(name, i) => {
          const isLast = createMemo(() => i() === paths().length - 1)
          const path = paths()
            .slice(0, i() + 1)
            .join("/")
          const href = encodePath(path)
          let text = () => name
          if (!isShare() && text() === "") {
            text = () => getSetting("home_icon") + t("manage.sidemenu.home")
          } else if (isShare() && i() === 0) {
            text = () => getSetting("share_icon") + t("manage.sidemenu.shares")
          }
          return (
            <BreadcrumbItem class="nav-item">
              <BreadcrumbLink
                class="nav-link"
                css={{
                  wordBreak: "break-all",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  maxWidth: "200px",
                }}
                color="unset"
                _hover={{ backgroundColor: hoverColor(), color: "unset" }}
                _active={{ transform: "scale(.95)", transition: "0.1s" }}
                cursor="pointer"
                p="$1"
                rounded="$sm"
                currentPage={isLast()}
                as={isLast() ? undefined : Link}
                href={joinBase(href)}
                onMouseEnter={() => setPathAs(path)}
              >
                {text()}
              </BreadcrumbLink>
              <Show when={!isLast()}>
                <BreadcrumbSeparator class="nav-separator" />
              </Show>
            </BreadcrumbItem>
          )
        }}
      </For>
    </Breadcrumb>
  )
}
