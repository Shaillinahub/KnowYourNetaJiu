// "use client"

// import * as React from "react"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"

// // Timeline data
// const timelineEvents = [
//   {
//     year: 2006,
//     events: [
//       {
//         date: "June 2006",
//         title: "Dell TechCenter launched",
//         description: "Initial launch of the Dell TechCenter"
//       },
//       {
//         date: "July 2006",
//         title: "Direct2Dell launched",
//         description: "Blog launched in English, Spanish, Norwegian, Japanese and Chinese"
//       },
//       {
//         date: "December 2006",
//         title: "Ratings and reviews launched",
//         description: "Ratings and reviews launched on Dell.com"
//       }
//     ]
//   },
//   {
//     year: 2007,
//     events: [
//       {
//         date: "June 2007",
//         title: "Dell joins Twitter",
//         description: "2.8M followers in the first year"
//       },
//       {
//         date: "August 2007",
//         title: "Blog outreach expanded",
//         description: "Expanded beyond tech support"
//       }
//     ]
//   },
//   // Add more years and events as needed
// ]

// export default function TimelineCarousel() {
//   return (
//     <div className="w-full max-w-6xl mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold mb-8">Political Activity</h1>
//       <Carousel
//         opts={{
//           align: "start",
//           loop: true,
//         }}
//         className="w-full"
//       >
//         <CarouselContent>
//           {timelineEvents.map((yearData, index) => (
//             <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
//               <Card className="h-full">
//                 <CardHeader>
//                   <CardTitle>
//                     <Badge variant="outline" className="text-lg">
//                       {yearData.year}
//                     </Badge>
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="grid gap-4">
//                   {yearData.events.map((event, eventIndex) => (
//                     <div
//                       key={eventIndex}
//                       className="relative pl-6 border-l-2 border-primary/20 last:border-l-0"
//                     >
//                       <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary -translate-x-[5px]" />
//                       <div className="space-y-1">
//                         <p className="text-sm text-muted-foreground">
//                           {event.date}
//                         </p>
//                         <h3 className="font-medium leading-none">
//                           {event.title}
//                         </h3>
//                         <p className="text-sm text-muted-foreground">
//                           {event.description}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </CardContent>
//               </Card>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>
//     </div>
//   )
// }



// "use client";

// import React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

// // Timeline data
// const timelineEvents = [
//   {
//     year: 2006,
//     events: [
//       {
//         date: "June 2006",
//         title: "Dell TechCenter launched",
//         description: "Initial launch of the Dell TechCenter",
//       },
//       {
//         date: "July 2006",
//         title: "Direct2Dell launched",
//         description:
//           "Blog launched in English, Spanish, Norwegian, Japanese and Chinese",
//       },
//       {
//         date: "December 2006",
//         title: "Ratings and reviews launched",
//         description: "Ratings and reviews launched on Dell.com",
//       },
//     ],
//   },
//   {
//     year: 2007,
//     events: [
//       {
//         date: "June 2007",
//         title: "Dell joins Twitter",
//         description: "2.8M followers in the first year",
//       },
//       {
//         date: "August 2007",
//         title: "Blog outreach expanded",
//         description: "Expanded beyond tech support",
//       },
//     ],
//   },
//   // Add more years and events as needed
// ];

// const TimelineCarousel = () => {
//   return (
//     <section className="w-full max-w-6xl mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold mb-8">Political Activity</h1>
//       <Carousel
//         opts={{
//           align: "start",
//           loop: true,
//         }}
//         className="w-full"
//       >
//         <CarouselContent>
//           {timelineEvents.map((yearData, index) => (
//             <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
//               <Card className="h-full">
//                 <CardHeader>
//                   <CardTitle>
//                     <Badge variant="outline" className="text-lg">
//                       {yearData.year}
//                     </Badge>
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="grid gap-4">
//                   {yearData.events.map((event, eventIndex) => (
//                     <div
//                       key={eventIndex}
//                       className="relative pl-6 border-l-2 border-primary/20 last:border-l-0"
//                     >
//                       <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary -translate-x-[5px]" />
//                       <div className="space-y-1">
//                         <p className="text-sm text-muted-foreground">
//                           {event.date}
//                         </p>
//                         <h3 className="font-medium leading-none">
//                           {event.title}
//                         </h3>
//                         <p className="text-sm text-muted-foreground">
//                           {event.description}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </CardContent>
//               </Card>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>
//     </section>
//   );
// };

// export default TimelineCarousel;






"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Adjust paths as needed
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Timeline data
const timelineEvents = [
  {
    year: 2006,
    events: [
      {
        date: "June 2006",
        title: "Dell TechCenter launched",
        description: "Initial launch of the Dell TechCenter.",
      },
      {
        date: "July 2006",
        title: "Direct2Dell launched",
        description:
          "Blog launched in English, Spanish, Norwegian, Japanese, and Chinese.",
      },
      {
        date: "December 2006",
        title: "Ratings and reviews launched",
        description: "Ratings and reviews launched on Dell.com.",
      },
    ],
  },
  {
    year: 2007,
    events: [
      {
        date: "June 2007",
        title: "Dell joins Twitter",
        description: "2.8M followers in the first year.",
      },
      {
        date: "August 2007",
        title: "Blog outreach expanded",
        description: "Expanded beyond tech support.",
      },
    ],
  },
  // Additional years and events can be added here.
];

export default function TimelineCarousel() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Political Activity</h1>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {timelineEvents.map((yearData, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>
                    <Badge variant="outline" className="text-lg">
                      {yearData.year}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  {yearData.events.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className="relative pl-6 border-l-2 border-primary/20 last:border-l-0"
                    >
                      <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary -translate-x-[5px]" />
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">
                          {event.date}
                        </p>
                        <h3 className="font-medium leading-none">
                          {event.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
