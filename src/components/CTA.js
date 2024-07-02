import React from 'react'

const CTA = () => {
  return (
    <div className="bg-white">
      <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Free your code editor up for...           
            <br />
            ...writing code. 
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Static site generators give you control, but they make writing 100X harder. Static solves that.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://tally.so/r/mK0zWz"
              className="rounded-md bg-gray-900 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-main focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Start you 60-day free trial
            </a>           
          </div>
        </div>
      </div>
    </div>

  )
}

export default CTA