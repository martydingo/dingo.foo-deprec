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
    if (thElement.innerHTML) {
      returnHeader = thElement.innerHTML!
    } else {
      returnHeader = thElement.textContent!
    }
    return returnHeader
  })

  const tableBodyElement = tableDiv.getElementsByTagName('tbody')[0].getElementsByTagName('tr')

  const tableBody: string[][] = []

  Object.values(tableBodyElement).forEach((trElement) => {
    const tdArray = Array.from(trElement.getElementsByTagName('td')).map(
      (tdElement) => {
        let returnCell
        if (tdElement.firstElementChild) {
          returnCell = tdElement.innerHTML!
        } else {
          returnCell = tdElement.textContent!
        }
        return returnCell
      }
    )
    tableBody.push(tdArray)
  })

  console.log(tableBody)

  return (
    <div>
      <Table>
        {tableCaption && <TableCaption>{tableCaption}</TableCaption>}
        <TableHeader>
          <TableRow>
            {tableHeaders.map((tableHeader, index) => (
              <TableHead key={`th-${index}-${Math.random().toString(36).substring(7)}`}>
                <span dangerouslySetInnerHTML={{ "__html": tableHeader }} />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableBody.map((tableRow, index) => {
            return (
              <TableRow key={`tr-${index}-${Math.random().toString(36).substring(7)}`}>
                {tableRow.map((tableCell) => (
                  <TableCell key={`cell-${index}-${Math.random().toString(36).substring(7)}`}>
                    <span dangerouslySetInnerHTML={{ "__html": tableCell }} />
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
