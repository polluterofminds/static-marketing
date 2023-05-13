import React from "react"

export default function Photos(props: any) {
  return (
    <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-2 xl:gap-x-8">
      {props.files.map((file:any) => (
        <li onClick={() => props.handlePhotoSelect(file.url)} key={file.id} className="cursor-pointer relative">
          <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <img src={file.url} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
            <button type="button" className="absolute inset-0 focus:outline-none">
              <span className="sr-only">View details for {file.user.firstName}</span>
            </button>
          </div>
          {/* <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{file.title}</p>
          <p className="pointer-events-none block text-sm font-medium text-gray-500">{file.size}</p> */}
        </li>
      ))}
    </ul>
  )
}
