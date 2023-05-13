import React from "react"
import { CloudArrowUpIcon, EyeIcon, LightBulbIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import editor from "../images/Posts.png";

const features = [
  {
    name: 'Smart.',
    description:
      'Static gives you smart solutions to simple problems like grammar and images with built in Grammarly and Unsplash support.',
    icon: LightBulbIcon,
  },
  {
    name: 'Local.',
    description: 'Write directly to the folder where you keep your blog posts. Static works with your Static Site Generator of choice.',
    icon: ServerIcon,
  },
  {
    name: 'Focus.',
    description: 'Focus on your writing, not your code. Static writes to your local repository, but you stay in the flow.',
    icon: EyeIcon,
  },
]

export default function Features() {
  return (
    <div id="product" className="overflow-hidden bg-white pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pt-4 lg:pl-4">
            <div className="lg:max-w-lg">
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-main">Writer faster</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Code editors are for code, not prose</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Static provides a WYSIWYG editor with markdown support to help you focus on writing, not formatting.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute top-1 left-1 h-5 w-5 text-main" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <img
              src={editor}
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
