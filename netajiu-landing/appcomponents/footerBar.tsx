"use client";


import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Plus } from 'lucide-react'
import { useState } from "react"

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <footer className="bg-black text-white py-16 mt-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold leading-tight">
              Do you have
              <br />
              any questions?
            </h2>
            <p className="text-gray-400 text-lg">
              Feel free to send us your questions or request clarification.
            </p>
            <Button
              className="bg-sky-400 hover:bg-sky-500 text-black font-medium px-6 py-2 rounded-md"
              size="lg"
            >
              SEND A MESSAGE
            </Button>
          </div>
          <div className="lg:text-right">
            <p className="text-xl text-gray-400">
              <span className="text-red-500">/</span> Redefining the definition of democracy
            </p>
          </div>
        </div>

        <div className="mt-16">
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-full"
          >
            <CollapsibleTrigger className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors">
              <span>Disclaimer</span>
              <Plus
                className={`h-4 w-4 transition-transform duration-200 ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4 text-gray-400">
              <p>
                This is the disclaimer content. Add your disclaimer text here.
              </p>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </footer>
  )
}