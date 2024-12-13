"use client"

// import { BarChart2, Download, RefreshCcw, Settings } from 'lucide-react'
import {  Download, RefreshCcw, Settings } from 'lucide-react'
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
//   TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const columns = [
  "RFQ",
  "QUOTE",
  "ORDER",
  "JOB",
  "CONTACT",
  "DO#",
  "REQ#",
  "CREATED",
  "STATUS",
]

export function TransactionsTable() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [pageSize, setPageSize] = React.useState("25")

  return (
    <div className="space-y-4">
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
          <Select value={pageSize} onValueChange={setPageSize}>
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
          <span>Search:</span>
          <Input
            type="search"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-sm"
          />
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column}>{column}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Add table rows here when you have data */}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

