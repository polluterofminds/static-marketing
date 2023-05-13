import React, { Fragment, useState, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/20/solid';

type ComponentProps = {
  show: boolean, 
  setShow: (show: boolean) => void
}

export default function SearchBoc(props: ComponentProps) {
  const { show, setShow } = props;
  const [value, setValue] = useState("");
  const [isMore, setIsMore] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    }
  });

  const handleKeyDown = (e: any) => {    
    const searchBox = document.getElementById("search-box");
    const isFocused = (document.activeElement === searchBox);
    if(isFocused && e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  }

  const handleSearch = () => {
    // const result = window.find(value);
    // setIsMore(result);
  }

  const closeSearch = () => {
    setValue("");
    setShow(false);
    setIsMore(false);
  }
  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="pointer-events-none fixed z-50 inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="p-4">
                <div className="flex items-center">
                  <div className="flex w-0 flex-1 justify-between">
                    <input value={value} onChange={(e:any) => setValue(e.target.value)} id="search-box" autoFocus type="text" placeholder="Find on page" className="outline-none" />
                    {isMore && <button
                      onClick={handleSearch}
                      type="button"
                      className="ml-3 flex-shrink-0 rounded-md bg-white text-sm font-medium text-gray-700 hover:text-gray-700 focus:outline-none"
                    >
                      Next
                    </button>}
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      type="button"
                      className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={closeSearch}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-5 w-5 pointer" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  )
}
