import { createResource } from "solid-js"
import { Markdown, MaybeLoading } from "~/components"

const fetchReadme = async () =>
  await (
    await fetch("https://baidu.com")
  ).text()

const About = () => {
  const [readme] = createResource(fetchReadme)
  return (
    <MaybeLoading loading={readme.loading}>
      <Markdown children={readme()} />
    </MaybeLoading>
  )
}

export default About
