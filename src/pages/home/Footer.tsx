import { Anchor, HStack, VStack, Image, Text } from "@hope-ui/solid"
import { Link } from "@solidjs/router"
import { AnchorWithBase } from "~/components"
import { useT } from "~/hooks"
import { me } from "~/store"
import { UserMethods } from "~/types"

export const Footer = () => {
  const t = useT()
  return (
    <VStack class="footer" w="$full" py="$4" spacing="$2">
      <HStack spacing="$1">
        <Anchor
          href="https://watch.666901.xyz/fileshare/zzopen"
          target="_blank"
          rel="noopener noreferrer"
          display="flex"
          alignItems="center"
        >
          <Image
            src="https://watch.666901.xyz/api/badge/25/uptime/30d?label=30day"
            alt="系统状态监控"
            h="20px"
          />
        </Anchor>
      </HStack>
      <HStack spacing="$1">
        <Text fontSize="$sm" color="$neutral10">
          赣ICP备15012626号-1
        </Text>
      </HStack>
    </VStack>
  )
}
