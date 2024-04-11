'use client'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shadcn-ui/table'

export default function TableComponent({
  tableCaption,
  htmlTable,
}: {
  tableCaption: string | null | undefined
  htmlTable: string
}) {
  const tableDiv = document.createElement('div')
  tableDiv.innerHTML = htmlTable
  const tableHeaders = Array.from(
    tableDiv.getElementsByTagName('thead')[0].getElementsByTagName('th'),
  ).map((thElement) => {
    let returnHeader
    if(thElement.firstElementChild){
      returnHeader = thElement.firstElementChild!.innerHTML
    } else {
      returnHeader = thElement.innerText
    }
    return returnHeader
  })

  const tableBodyElement = tableDiv.getElementsByTagName('tbody')[0].getElementsByTagName('tr')

  const tableBody: string[][] = []

  Object.values(tableBodyElement).forEach((trElement) => {
    const tdArray = Array.from(trElement.getElementsByTagName('td')).map(
      (tdElement) => {
        let returnCell
        if(tdElement.children[0]){
          returnCell = tdElement.children[0].innerHTML
        } else {
          returnCell = tdElement.innerText
        }
        return returnCell
      }
    )
    tableBody.push(tdArray)
  })
  console.log(tableBodyElement)

  console.log(tableBody)

  return (
    <div>
      <Table>
        {tableCaption && <TableCaption>{tableCaption}</TableCaption>}
        <TableHeader>
          <TableRow>
            {tableHeaders.map((tableHeader) => (
              <TableHead>
                <span dangerouslySetInnerHTML={{"__html": tableHeader}}/>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableBody.map((tableRow) => {
            return (
              <TableRow>
                {tableRow.map((tableCell) => (
                  <TableCell>
                    <span dangerouslySetInnerHTML={{"__html": tableCell}}/>
                    {tableCell}
                    </TableCell>
                ))}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
