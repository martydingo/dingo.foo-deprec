import { getPayload } from 'payload'
import payloadConfig from '@payload-config'
import Link from 'next/link'
import ProjectCarousel from '@/components/ui/projects/ProjectCarousel'
import showdown from "showdown"
import TableComponent from '@/components/ui/TableComponent'

export default async function Test() {
  const markdownTable = `
| Chain                                      | Rule                                               |
| ------------------------------------------ | -------------------------------------------------- |
| bgp-kubernetes.dingo.services-in           | accept;                                            |
| ospf-backbone-out-v4                       | if (dst == 95.216.46.70/32) \{ reject; \}          |
| ospf-backbone-out-v4                       | if (dst == 95.216.46.92/32) \{ reject; \}          |
| ospf-backbone-out-v4                       | if (dst == 65.108.22.2/32) \{ reject; \}           |
| ospf-backbone-out-v4                       | if (dst == 65.108.22.3/32) \{ reject; \}           |
| ospf-backbone-out-v4                       | if (dst == 65.108.22.4/32) \{ reject; \}           |
| ospf-backbone-out-v4                       | if (dst == 0.0.0.0/0) \{ reject; \}                |
| ospf-backbone-out-v4                       | accept;                                            |
| ospf-backbone-in-v4                        | if (dst == 95.216.46.64/26) \{ reject; \}          |
| ospf-backbone-in-v4                        | if (dst == 65.108.22.0/29) \{ reject; \}           |
| ospf-backbone-in-v4                        | if (dst == 65.108.23.64/29) \{ reject; \}          |
| ospf-backbone-in-v4                        | accept;                                            |
| ospf-backbone-out-v6                       | if (dst == 2a01:4f9:2a:2cb0::/64) \{ reject; \}    |
| ospf-backbone-out-v6                       | if (dst == ::/0) \{ reject; \}                     |
| ospf-backbone-out-v6                       | accept;                                            |
| ospf-backbone-in-v6                        | if (dst == 2a01:4f9:2a:2cb0::/64 ) \{ reject; \}   |
| ospf-backbone-in-v6                        | accept;                                            |
`
  const markdownConverter = new showdown.Converter()
  markdownConverter.setOption("tables", true)
  const htmlTable = markdownConverter.makeHtml(markdownTable)
  return (
    <div className="container prose dark:prose-invert mt-8">
        <TableComponent htmlTable={htmlTable} />
    </div>
  )
}
