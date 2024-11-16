import React from "react";
import { Button } from "@/components/ui/button"

export default function Footer() {
  return <div>

    <div className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
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
      </div>
    </div></div>;
}
