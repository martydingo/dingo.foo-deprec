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
    return thElement.innerText
  })

  const tableBodyElement = tableDiv.getElementsByTagName('tbody')[0].getElementsByTagName('tr')

  const tableBody: string[][] = []

  Object.values(tableBodyElement).forEach((trElement) => {
    const tdTextArray = Array.from(trElement.getElementsByTagName('td')).map(
      (tdElement) => tdElement.innerText,
    )
    tableBody.push(tdTextArray)
  })

  console.log(tableBody)

  return (
    <div>
      <Table>
        {tableCaption && <TableCaption>{tableCaption}</TableCaption>}
        <TableHeader>
          <TableRow>
            {tableHeaders.map((tableHeader) => (
              <TableHead>{tableHeader}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableBody.map((tableRow) => {
            return (
              <TableRow>
                {tableRow.map((tableCellText) => (
                  <TableCell>{tableCellText}</TableCell>
                ))}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
