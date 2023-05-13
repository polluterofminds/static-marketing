import { FolderIcon, MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline"
import React from "react"

type ComponentProps = {
  projectSelected: boolean, 
  contentPaneOpen: boolean,
  content: any, 
  setContentPaneOpen: any, 
  selectedTab: string, 
  setSelectedTab: any
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar(props: ComponentProps) {
  const navigation = [
    { id: 1, name: "project", icon: FolderIcon, click: (name:string) => handleSelect(name), current: props.selectedTab === "project", count: props?.content?.length },
    { id: 2, name: "search", icon: MagnifyingGlassCircleIcon, click: (name:string) => handleSelect(name), current: props.selectedTab === "search" },
    // { icon: FolderIcon, href: '#', count: 4, current: selectedTab === "project" },
    // { name: 'Calendar', icon: CalendarIcon, href: '#', current: selectedTab === "project" },
    // { name: 'Documents', icon: InboxIcon, href: '#', count: 12, current: selectedTab === "project" },
    // { name: 'Reports', icon: ChartBarIcon, href: '#', current: selectedTab === "project" },
  ]

  const handleSelect = (tab: string) => {
    props.setSelectedTab(tab);
    if(tab === "project") {
      props.setContentPaneOpen(!props.contentPaneOpen)
    }
  }

  return (
    <div className="h-screen fixed top-0 left-0 w-20 pt-6 flex-1 flex flex-col min-h-0 bg-gray-700">
      <div className="flex-1 flex flex-col items-center pt-5 pb-4 overflow-y-auto">
        <nav className="mt-1 flex-1 px-1 space-y-1" aria-label="Sidebar">
          {navigation.map((item) => (
            <button
              disabled={!props.projectSelected}
              key={item.id}
              onClick={() => item.click(item.name)}
              className={classNames(
                item.current && props.contentPaneOpen ? 'border-l-4 border-white' : 'border-l-4 border-gray-700 text-white-100 hover:bg-white hover:bg-opacity-75',
                'group flex items-center px-2 py-2 text-sm font-medium'
              )}
            >
              <item.icon className="mr-3 flex-shrink-0 h-6 w-6 text-white" aria-hidden="true" />      
              {
                item.count && 
                <span className="absolute text-xs text-white right-4 -mt-4">{item.count}</span>
              }                      
            </button>
          ))}
        </nav>
      </div>
      <div className="p-4">
          <div className="flex w-full justify-center items-center">
            {/* <button onClick={() => props.setSelectedTab("settings")} className="text-white">
              <CogIcon className="text-white h-6 w-6"/>
            </button> */}
          </div>
    
      </div>
    </div>
  )
}