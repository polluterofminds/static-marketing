import { Link } from 'gatsby';
import React from 'react'
import hero from "../images/Editor.png";
import Nav from './Nav';

const Hero = () => {
  return (
    <div className="isolate bg-white">
      <Nav />
      <main>
        <div className="relative py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                A beautiful CMS for static sites
              </h1>
              <p className="mt-6 text-lg leading-8 text-main">
                Stop writing blog posts in your code editor
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://app.writestatic.com"
                  className="rounded-md bg-gray-900 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-main focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Try now
                </a>
              </div>
            </div>
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl lg:-m-4 lg:rounded-2xl lg:p-4">
                <img
                  src={hero}
                  alt="App screenshot"
                  width={2432}
                  height={1442}
                  className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Hero