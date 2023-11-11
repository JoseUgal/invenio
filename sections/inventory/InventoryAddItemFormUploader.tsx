'use client'

import { UploadDropzone } from '@/libs/uploadthing'
import Image from 'next/image'
import { useState } from 'react'

interface InventoryAddItemFormUploaderProps {
  onImageUploaded: (url: string) => void
}

const InventoryAddItemFormUploader = ({
  onImageUploaded
}: InventoryAddItemFormUploaderProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  if (imageUrl !== null) {
    return (
      <div className="w-full">
        <Image
          src={imageUrl}
          width={200}
          height={200}
          className="h-auto w-auto"
          alt=""
        />
      </div>
    )
  }

  return (
    <UploadDropzone
      appearance={{
        container: {
          borderColor: 'inherit'
        },
        label: {
          color: '#7a4efd'
        },
        button: {
          background: '#7a4efd',
          backgroundColor: '#7a4efd',
          width: '100%',
          padding: '1rem'
        },
        allowedContent: {
          color: 'inherit'
        }
      }}
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        if (res === undefined || res.length === 0) return

        const uploadedFile = res[0]

        setImageUrl(uploadedFile.url)
        onImageUploaded(uploadedFile.url)
      }}
      onUploadError={(error: Error) => {
        // Do something with the error.
        alert(`ERROR! ${error.message}`)
      }}
    />
  )
}

InventoryAddItemFormUploader.displayName = 'InventoryAddItemFormUploader'

export { InventoryAddItemFormUploader }
