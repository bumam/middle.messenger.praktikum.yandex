import Block from "../components/block/block"

export function renderBlock(query: string, block: Block<any>) {
  const root = document.querySelector(query)
  root!.innerHTML = ""
  root!.appendChild(block.getContent()!)
  return root
}
