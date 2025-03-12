'use client'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/TextLayer.css'
import 'react-pdf/dist/Page/AnnotationLayer.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`
export function DialogDemo() {
  const [files, setFiles] = useState([])
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const selectedFiles = Array.from(event.target.files) // Get selected files
    const newFiles = selectedFiles.map((file) => ({
      file, // Keep the file object
      url: URL.createObjectURL(file), // Create a Blob URL for the file
    }))
    setFiles((prevFiles) => [...prevFiles, ...newFiles]) // Update state
  }
  const removeFile = (indexToRemove) => {
    setFiles((prevFiles) => {
      const updatedFiles = prevFiles.filter(
        (_, index) => index !== indexToRemove
      )

      URL.revokeObjectURL(prevFiles[indexToRemove].preview)

      return updatedFiles
    })
  }
  const handleSubmit = () => {
    // Handle file upload
    console.log(files)
    setFiles([]);
    setSubmitted(true);
  }
  return (
    <>
    <div className="flex flex-col bg-customGray p-3 rounded-lg max-w-[950px]">
      <Input
        id="distribution"
        type="file"
        className="hidden"
        accept="application/pdf"
        onChange={handleInputChange}
        multiple
      />
      {files.length > 0 ?
        <div className="w-full flex flex-col justify-between items-center gap-[30px]">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {files.map((fileObj, index) => (
              <div
                key={index}
                className="relative border rounded-md shadow-sm bg-white p-2"
              >
                {/* PDF Preview */}
                <Document
                  file={fileObj.url}
                  className="w-[200px] h-[200px] overflow-hidden"
                >
                  <Page pageNumber={1} width={200} />
                </Document>
                <p className="mt-2 text-sm text-gray-700">{fileObj.file.name}</p>
                {/* Delete Button */}
                <button
                  onClick={() => removeFile(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md hover:bg-red-600"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
          <div className='flex flex-row gap-2'>
            <Button
              variant="outline"
              onClick={() => document.getElementById('distribution').click()}
            >
              {files.length > 0 ? "select more documents" : "select documents"}
            </Button>
            <form onSubmit={handleSubmit}>
              <Button type="button" onClick={handleSubmit}>
                upload all
              </Button>
            </form>
          </div>
        </div>
        :
        submitted ? 
        <div className="w-full flex flex-row justify-center">
          <p className="w-fit">
            documents submitted. we greatly appreciate it!
          </p>
        </div>
        :
        <div className="w-full flex flex-row justify-center">
          <Button
            variant="outline"
            className="w-fit"
            onClick={() => document.getElementById('distribution').click()}
          >
            select documents
          </Button>
        </div>
      }
    </div>
    </>
  )
}
