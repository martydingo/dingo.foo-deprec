'use client'
import React from 'react'
import { createRoot } from 'react-dom/client';
import TableComponent from './TableComponent';


export default function TableWrapper() {
  React.useEffect(() => {
    const tableElements = document.getElementsByTagName('table')
    Object.values(tableElements).forEach((tableElement) => {
      const tableUUID = tableElement.parentElement!.id
      const tableCaption = tableElement.parentElement!.getAttribute('tablename')
      const tableContainer = document.getElementById(tableUUID)
      const root = createRoot(tableContainer!)
      root.render(<TableComponent tableCaption={tableCaption} htmlTable={tableContainer!.innerHTML} />)
    })
  })
  return <div />
}
