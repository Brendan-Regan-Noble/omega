"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Upload } from 'lucide-react'

export default function NewRFQPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    jobNumber: '',
    status: '',
    submittedByName: '',
    submittedByEmail: '',
    approvingOfficialEmail: '',
    contactPhoneNumber: '',
    urgency: '',
    endOfYearBuy: false,
    rdd: '',
    localOconusSourcingPreferred: false,
    associatedQuote: '',
    dodaac: '',
    addresseeUnitName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    primaryProductCategory: '',
    associatedSalesOrder: '',
    incidentalServicesNotes: '',
    statementOfIntendedUse: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleCheckboxChange = (name: string) => (checked: boolean) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: checked
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    router.push('/')
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Placeholder for file upload functionality
    console.log('File selected:', e.target.files?.[0]?.name)
  }

  return (
    <div className="container mx-auto p-6">
      <Card className="w-full max-w-5xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Create New RFQ</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="grid grid-cols-2 gap-6">
              {/* First Column */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="jobNumber">Job/Name Number</Label>
                  <Input
                    id="jobNumber"
                    name="jobNumber"
                    value={formData.jobNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select onValueChange={handleSelectChange('status')} value={formData.status}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="submitted">Submitted</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="submittedByName">Submitted By Name</Label>
                  <Input
                    id="submittedByName"
                    name="submittedByName"
                    value={formData.submittedByName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="submittedByEmail">Submitted By Email</Label>
                  <Input
                    id="submittedByEmail"
                    name="submittedByEmail"
                    type="email"
                    value={formData.submittedByEmail}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="approvingOfficialEmail">Approving Officials Email</Label>
                  <Input
                    id="approvingOfficialEmail"
                    name="approvingOfficialEmail"
                    type="email"
                    value={formData.approvingOfficialEmail}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactPhoneNumber">Contact Phone Number</Label>
                  <Input
                    id="contactPhoneNumber"
                    name="contactPhoneNumber"
                    type="tel"
                    value={formData.contactPhoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="urgency">Urgency</Label>
                  <Select onValueChange={handleSelectChange('urgency')} value={formData.urgency}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select urgency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rdd">RDD</Label>
                  <Input
                    id="rdd"
                    name="rdd"
                    type="date"
                    value={formData.rdd}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="associatedQuote">Associated Quote</Label>
                  <Input
                    id="associatedQuote"
                    name="associatedQuote"
                    value={formData.associatedQuote}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="primaryProductCategory">Primary Product Category</Label>
                  <Select onValueChange={handleSelectChange('primaryProductCategory')} value={formData.primaryProductCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hardware">Hardware</SelectItem>
                      <SelectItem value="software">Software</SelectItem>
                      <SelectItem value="services">Services</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Second Column */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="dodaac">DoDAAC</Label>
                  <Input
                    id="dodaac"
                    name="dodaac"
                    value={formData.dodaac}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="addresseeUnitName">Addressee/Unit Name</Label>
                  <Input
                    id="addresseeUnitName"
                    name="addresseeUnitName"
                    value={formData.addresseeUnitName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address1">Address 1</Label>
                  <Input
                    id="address1"
                    name="address1"
                    value={formData.address1}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address2">Address 2</Label>
                  <Input
                    id="address2"
                    name="address2"
                    value={formData.address2}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zipCode">Zip Code</Label>
                  <Input
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="associatedSalesOrder">Associated Sales Order</Label>
                  <Input
                    id="associatedSalesOrder"
                    name="associatedSalesOrder"
                    value={formData.associatedSalesOrder}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* Checkboxes */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="endOfYearBuy"
                  checked={formData.endOfYearBuy}
                  onCheckedChange={handleCheckboxChange('endOfYearBuy')}
                />
                <Label htmlFor="endOfYearBuy">End of Year Buy</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="localOconusSourcingPreferred"
                  checked={formData.localOconusSourcingPreferred}
                  onCheckedChange={handleCheckboxChange('localOconusSourcingPreferred')}
                />
                <Label htmlFor="localOconusSourcingPreferred">Local OCONUS Sourcing Preferred</Label>
              </div>
            </div>

            {/* Horizontal line break */}
            <hr className="my-6 border-t border-gray-200" />

            {/* Incidental Services Notes */}
            <div className="space-y-2">
              <Label htmlFor="incidentalServicesNotes">Incidental Services Notes</Label>
              <Textarea
                id="incidentalServicesNotes"
                name="incidentalServicesNotes"
                placeholder="Enter any incidental services information here"
                value={formData.incidentalServicesNotes}
                onChange={handleInputChange}
                className="min-h-[100px]"
              />
            </div>

            {/* Statement of Intended Use */}
            <div className="space-y-2 mt-6">
              <Label htmlFor="statementOfIntendedUse">Statement of Intended Use</Label>
              <Textarea
                id="statementOfIntendedUse"
                name="statementOfIntendedUse"
                placeholder="Enter the statement of intended use here"
                value={formData.statementOfIntendedUse}
                onChange={handleInputChange}
                className="min-h-[100px]"
              />
            </div>

            {/* Upload RFQ from CSV */}
            <div className="mt-6 space-y-2">
              <Label htmlFor="csvUpload">Upload RFQ from CSV</Label>
              <div className="flex items-center space-x-2">
                <Input
                  id="csvUpload"
                  type="file"
                  accept=".csv"
                  onChange={handleFileUpload}
                  className="flex-grow"
                />
                <Button type="button" variant="outline" className="flex items-center">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload
                </Button>
              </div>
              <p className="text-sm text-gray-500">Upload a CSV file to populate the RFQ form</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => router.push('/')}>Cancel</Button>
            <Button type="submit">Submit RFQ</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

