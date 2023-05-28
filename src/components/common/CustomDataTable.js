import React, { useState, useEffect } from 'react'
import { DataTable } from 'react-native-paper'

const optionsPerPage = [2, 3, 4]

const CustomDataTable = ({ columnsDefinition, items }) => {
  const [page, setPage] = useState(0)
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0])
  const from = page * itemsPerPage
  const to = Math.min((page + 1) * itemsPerPage, items.length)

  useEffect(() => {
    setPage(0)
  }, [itemsPerPage])

  return (
    <DataTable>
      <DataTable.Header>
        {columnsDefinition.map((column, index) => {
          return (
            <DataTable.Title key={index} sortDirection={column.sortDirection}>
              {column.title}
            </DataTable.Title>
          )
        })}
      </DataTable.Header>

      {items.map((value, index) => {
        return (
          <DataTable.Row key={index}>
            {Object.values(value).map((val, i) => {
              return <DataTable.Cell key={i}> {val}</DataTable.Cell>
            })}
          </DataTable.Row>
        )
      })}

      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(items.length / itemsPerPage)}
        onPageChange={(page) => setPage(page)}
        label={`${from + 1}-${to} of ${items.length}`}
        numberOfItemsPerPageList={optionsPerPage}
        numberOfItemsPerPage={itemsPerPage}
        onItemsPerPageChange={setItemsPerPage}
        selectPageDropdownLabel={'Rows per page'}
        showFastPaginationControls={true}
      />
    </DataTable>
  )
}

export default CustomDataTable
