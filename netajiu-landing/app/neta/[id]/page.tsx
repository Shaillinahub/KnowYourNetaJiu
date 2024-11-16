"use client";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import axios from "axios";

import OpinionCard from "../../../appcomponents/opinionCard"

export default function ProfilePage() {
  const [neta, setNeta] = useState({});
  useEffect(() => {
    async function fetchNeta() {
      try {
        const { data } = await axios.get(
          "http://localhost:8000/neta/6737a13272f9d78526e544d1"
        );
        setNeta(data.neta);
        // console.log(data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchNeta();
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 m-4">
      {/* Profile Header */}
      <div className="bg-white shadow">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center md:flex-row md:items-start gap-6">
            <Avatar className="w-32 h-32">
              <AvatarImage src={neta.photo} alt={neta.fullname} />
              <AvatarFallback>{neta.fullname}</AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <h1 className="text-3xl font-bold">{neta.fullname}</h1>
                <span className="text-gray-500">
                  {neta.gender} • {neta.dob?.age}
                </span>
              </div>
              <p className="text-xl mt-1">{neta.status}</p>
              <p className="text-gray-600 mt-1">
                {neta.origin?.municipality}, {neta.origin?.ward}
              </p>
              <div className="flex items-center gap-2 mt-2 justify-center md:justify-start">
                <span className="text-gray-600">Party:</span>
                <Badge className="flex items-center gap-2">
                  {/* <Image
                    src={neta.party.logo}
                    alt={neta.party.name}
                    width={16}
                    height={16}
                  /> */}
                  {neta.party?.name}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* About Summary */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>About Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">{neta.summary}</p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="absolute left-1/2 h-full w-px bg-gray-200 transform -translate-x-1/2" />
              {neta.activity.map((event, index) => (
                <div
                  key={event._id}
                  className="relative flex items-center mb-8"
                >
                  <div className="absolute left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2" />
                  <div
                    className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 ml-auto"}`}
                  >
                    <h3 className="font-semibold">{event.activity}</h3>
                    <p className="text-sm text-gray-500">{event.date}</p>
                    <a href={event.ref} className="mt-1 text-gray-600">
                      Link
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Opinions */}
        <Tabs defaultValue="leftist" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="leftist">Leftist</TabsTrigger>
            <TabsTrigger value="center">Center</TabsTrigger>
            <TabsTrigger value="rightist">Rightist</TabsTrigger>
          </TabsList>

            <TabsContent  value="leftist">
              <OpinionCard/>
              <OpinionCard/>
              <OpinionCard/>
              <OpinionCard/>
            </TabsContent>

        </Tabs>
      </div>

      {/* Footer */}
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
                <span className="text-red-500">/</span> Redefining the
                definition of democracy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
