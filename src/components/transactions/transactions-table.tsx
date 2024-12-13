"use client"

import { ChevronDown, ChevronUp, Download, RefreshCcw, Settings } from 'lucide-react'
import * as React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Transaction } from '@/models/Transaction'

const columns = [
  { key: "RFQ", label: "RFQ" },
  { key: "QUOTE", label: "QUOTE" },
  { key: "ORDER", label: "ORDER" },
  { key: "JOB", label: "JOB" },
  { key: "CONTACT", label: "CONTACT" },
  { key: "DO", label: "DO#" },
  { key: "REQ", label: "REQ#" },
  { key: "CREATED", label: "CREATED" },
  { key: "STATUS", label: "STATUS" },
]

const transactionsData: Transaction[] = [
  {
    RFQ: 'RFQ-001',
    QUOTE: 'QUOTE-001',
    ORDER: 'ORDER-001',
    JOB: 'JOB-001',
    CONTACT: 'John Doe',
    DO: 'DO-001',
    REQ: 'REQ-001',
    CREATED: '2024-12-12',
    STATUS: 'Pending',
  },
  {
    RFQ: 'RFQ-002',
    QUOTE: 'QUOTE-002',
    ORDER: 'ORDER-002',
    JOB: 'JOB-002',
    CONTACT: 'Jane Smith',
    DO: 'DO-002',
    REQ: 'REQ-002',
    CREATED: '2024-12-11',
    STATUS: 'Completed',
  },
  {
    RFQ: 'RFQ-003',
    QUOTE: 'QUOTE-003',
    ORDER: 'ORDER-003',
    JOB: 'JOB-003',
    CONTACT: 'Bob Johnson',
    DO: 'DO-003',
    REQ: 'REQ-003',
    CREATED: '2024-12-10',
    STATUS: 'In Progress',
  },
  {
    RFQ: 'RFQ-004',
    QUOTE: 'QUOTE-004',
    ORDER: 'ORDER-004',
    JOB: 'JOB-004',
    CONTACT: 'Alice Brown',
    DO: 'DO-004',
    REQ: 'REQ-004',
    CREATED: '2024-12-09',
    STATUS: 'Pending',
  },
  {
    RFQ: 'RFQ-005',
    QUOTE: 'QUOTE-005',
    ORDER: 'ORDER-005',
    JOB: 'JOB-005',
    CONTACT: 'Charlie Davis',
    DO: 'DO-005',
    REQ: 'REQ-005',
    CREATED: '2024-12-08',
    STATUS: 'Completed',
  },
]

export function TransactionsTable() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [pageSize, setPageSize] = React.useState(25)
  const [currentPage, setCurrentPage] = React.useState(1)
  const [sortColumn, setSortColumn] = React.useState("")
  const [sortDirection, setSortDirection] = React.useState<"asc" | "desc">("asc")

  const filteredData = React.useMemo(() => {
    const search = searchQuery.toLowerCase();
    return transactionsData.filter((transaction) =>
      Object.values(transaction).some((value) =>
        value.toLowerCase().includes(search)
      )
    );
  }, [searchQuery, transactionsData]);

  const sortedData = React.useMemo(() => {
    if (!sortColumn) return filteredData
    return [...filteredData].sort((a, b) => {
      const aValue = a[sortColumn as keyof Transaction];
      const bValue = b[sortColumn as keyof Transaction];
      if (aValue < bValue) return sortDirection === "asc" ? -1 : 1
      if (aValue > bValue) return sortDirection === "asc" ? 1 : -1
      return 0
    })
  }, [filteredData, sortColumn, sortDirection])

  const paginatedData = React.useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize
    return sortedData.slice(startIndex, startIndex + pageSize)
  }, [sortedData, currentPage, pageSize])

  const totalPages = Math.ceil(sortedData.length / pageSize)

  const handleSort = (column: string) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  return (
    <div className="h-[calc(100vh-4rem)] overflow-y-auto pl-6 pt-16 pr-6"> 
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">All Transactions</h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <RefreshCcw className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export to CSV
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span>Show</span>
              <Select
                value={pageSize.toString()}
                onValueChange={(value) => {
                  setPageSize(Number(value))
                  setCurrentPage(1)
                }}
              >
                <SelectTrigger className="w-[80px]">
                  <SelectValue placeholder="25" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="25">25</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                  <SelectItem value="100">100</SelectItem>
                </SelectContent>
              </Select>
              <span>entries</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-700">Search:</span> 
              <Input
                type="search"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setCurrentPage(1)
                }}
                className="max-w-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((column) => (
                  <TableHead
                    key={column.key}
                    className="cursor-pointer text-gray-700 font-medium bg-gray-100 px-4 py-3" 
                    onClick={() => handleSort(column.key)}
                  >
                    <div className="flex items-center">
                      {column.label}
                      {sortColumn === column.key && (
                        sortDirection === "asc" ? <ChevronUp className="ml-1 h-4 w-4 text-gray-500" /> : <ChevronDown className="ml-1 h-4 w-4 text-gray-500" />
                      )}
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData.map((transaction, index) => (
                <TableRow key={index} className="border-b border-gray-200"> 
                  {columns.map((column) => (
                    <TableCell key={column.key} className="px-4 py-2">
                      {transaction[column.key as keyof Transaction]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-between p-4">
          <div>
            Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSize, sortedData.length)} of {sortedData.length} entries
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}