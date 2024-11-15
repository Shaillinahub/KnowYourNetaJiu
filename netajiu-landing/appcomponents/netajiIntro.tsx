import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function NetajiIntro() {
  const NetajiName = "NetaJIIIIIIII";
  const NetajiGender = "Male";
  const NetajiAge = "42";
  const NetajiStatus = "Member of Parliament";
  const Location = "Kathmandu, Ward-00";
  const partyLogoUrl =
    "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Logo_of_the_Communist_Party_of_Nepal_%28Unified_Marxist%E2%80%93Leninist%29.png/270px-Logo_of_the_Communist_Party_of_Nepal_%28Unified_Marxist%E2%80%93Leninist%29.png";
  const partyName = "UML";

  return (
    <Card className="w-full max-w-2xl mx-auto">
      {/* Avatar Section */}
      <div style={{ height: "10rem", width: "10rem" }}>
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="Netaji Avatar"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>

      {/* Name Gender Age Section*/}
      <div className="">
        <Label htmlFor="title" className="text-4xl font-semibold">
          {NetajiName}
        </Label>
        <Label htmlFor="title" className="ml-2 ">
          {NetajiGender}/{NetajiAge}
        </Label>
      </div>

      {/*  */}
      <div className="flex flex-col ml-2 ">
        <Label htmlFor="title">{NetajiStatus}</Label>
      </div>

      {/* Location Section */}
      <div className="flex flex-col">
        <Label htmlFor="title">
          {/* loacation icon */}
          {Location}
        </Label>
      </div>

      <div className="flex items-center">
        {/* Logo */}
        <Image src={partyLogoUrl} alt="alt" width={30} height={30} />

        {/* party name */}
        <div className="flex flex-col">
          <Label htmlFor="title" className="ml-2 text-gray-600 font-bold">
            Party:
          </Label>

          <Label htmlFor="title" className="ml-2 ">
            {partyName}
          </Label>
        </div>
      </div>
    </Card>
  );
}
