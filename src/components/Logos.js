import React from "react"
import jekyll from "../images/jekyll.png";
import eleventy from "../images/eleventy.png"
import gatsby from "../images/gatsby.webp"
import hugo from "../images/hugo-logo-wide.svg"

export default function Logos() {
  return (
    <div className="bg-gray-900 mb-24 -mt-8">
      <div className="mx-auto max-w-7xl py-16 px-6 sm:py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          You bring the SSG framework, Static will bring the editor.
        </h2>
        <div className="mt-8 flow-root lg:mt-10">
          <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
            <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
              <img className="h-12" src={jekyll} alt="Jekyll" />
            </div>
            <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
              <img className="h-12 rounded-full" src={gatsby} alt="Gatsby" />
            </div>
            <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
              <img
                className="h-12 rounded-full border border-white"
                src={eleventy}
                alt="11ty | Eleventy"
              />
            </div>
            <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
              <img
                className="h-12"
                src={hugo}
                alt="Hugo"
              />
            </div>
            {/* <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/workcation-logo-indigo-300.svg"
                alt="Workcation"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
