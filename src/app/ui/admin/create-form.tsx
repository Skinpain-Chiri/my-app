"use client";
import Link from "next/link";
import Image from "next/image";
import { 
    TagIcon,  
    CurrencyDollarIcon,
    CloudArrowUpIcon
} from "@heroicons/react/24/outline";
import Button from "@/app/ui/button";
import { useRef, useState, useActionState } from "react";
import { addPerfume, formState } from "@/app/lib/actions";

export default function Form() {
    // Reference to file input element
    // to let it be clicked on whenever the user clicks on the upload box 
    const fileRef = useRef<HTMLInputElement>(null);
    const handleClick = () => {
        if (fileRef.current) {
            fileRef.current.click();
        }
    }

    // State to manage the preview of image uploaded
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const handlePreview = () => {
        if (fileRef.current) {
            const file = fileRef.current.files![0];
            if (file) {
                const objectUrl = URL.createObjectURL(file);
                setImagePreview(objectUrl);
            }
        }
    }

    // State to manage the form state for any validation errorrs
    const startingState : formState = { errors: {} }; 
    const [state, payLoadFunction] = useActionState(addPerfume, startingState);
    return(
        <form action={payLoadFunction}>
        <div className="rounded-md bg-gray-50 p-4 md:p-6">
        
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Perfume name
          </label>
          <div className="relative">
            <input
            type="text"
            id="name"
            name="name"
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            defaultValue=""
            aria-describedby="name-error"
            />
            <TagIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          <div id="name-error" aria-live="polite" aria-atomic="true">
            {
                state?.errors?.name?.map((text) => (
                    <div key={text} className="text-sm text-red-500">{text}</div>
                ))
            }
          </div>
        </div>

        {/* Prize */}
        <div className="mb-4">
          <label htmlFor="prize" className="mb-2 block text-sm font-medium">
            Set a Prize
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="prize"
                name="prize"
                type="number"
                step="0.01"
                placeholder="USD"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="prize-error"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            <div id="prize-error" aria-live="polite" aria-atomic="true">
            {
                state?.errors?.prize?.map((text) => (
                    <div key={text} className="text-sm text-red-500">{text}</div>
                ))
            }
            </div>
          </div>
        </div>

        {/* Picture */}
        <div className="flex flex-col items-start">
        <label className="mb-2 text-sm font-medium text-gray-700">
            {imagePreview ? 'Click on preview to reupload a picture' : 'Upload a picture'}
        </label>
        <div 
        className="w-48 h-48 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 cursor-pointer"
        onClick={handleClick}
        >
            {
                imagePreview && 
                <Image
                src={imagePreview}
                height={100}
                width={100}
                alt="Preview"
                className="inset-0 w-full h-full object-cover rounded-lg"
            />
            }
            <CloudArrowUpIcon className="hover:z-50 h-10 w-10 text-gray-400" />
            <input 
            type="file"
            name="picture"
            ref={fileRef}
            accept="image/*"
            className="hidden"
            onChange={handlePreview}
            aria-describedby="picture-error"
            />
        </div>
        <div id="picture-error" aria-live="polite" aria-atomic="true">
          {
            state?.errors?.picture?.map((text) => (
              <div key={text} className="text-sm text-red-500">{text}</div>
            ))
          }
        </div>
        </div>

      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/admin"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Add Perfume</Button>
      </div>
    </form>
    );
}