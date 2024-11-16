import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";

interface Tag {
  id: string;
  name: string;
}

interface NewsItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tag: string;
}

interface NewsFeedProps {
  items?: NewsItem[];
}

export default function LeftRightCenter({
  items = [
    {
      id: "1",
      title: "The Oli government bans tik tok,overshadowing major blah..",
      description:
        "The Oli government bans tik tok,overshadowing major blah.. and blahh...",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/KP_Sharma_Oli_in_New_York_%2828_September_2024%29_crop.png/330px-KP_Sharma_Oli_in_New_York_%2828_September_2024%29_crop.png",
      tag: "",
    },
    {
      id: "2",
      title: "The Oli government bans tik tok,overshadowing major blah..",
      description:
        "The Oli government bans tik tok,overshadowing major blah.. and blahh...",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/KP_Sharma_Oli_in_New_York_%2828_September_2024%29_crop.png/330px-KP_Sharma_Oli_in_New_York_%2828_September_2024%29_crop.png",
      tag: "",
    },
    {
      id: "3",
      title: "The Oli government bans tik tok,overshadowing major blah..",
      description:
        "The Oli government bans tik tok,overshadowing major blah.. and blahh...",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/KP_Sharma_Oli_in_New_York_%2828_September_2024%29_crop.png/330px-KP_Sharma_Oli_in_New_York_%2828_September_2024%29_crop.png",
      tag: "",
    },
  ],
}: NewsFeedProps) {
  return (
    <div className="w-full max-w-3xl mx-auto p-6 space-y-6 flex flex-row m-5">


      {/* Leftist Section */}
      <div className="Leftist m-4">
        <h1 className="text-4xl font-bold">Leftist</h1>

        <div className="space-y-4">
          {items.map((item) => (
            <Card
              key={item.id}
              className="bg-gray-50 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
            >
              <div className="p-4 flex gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src={item.imageUrl}
                    alt=""
                    sizes="3vw"
                    // style={{
                    //   width: "70",
                    //   height: "70",
                    // }}
                    width={70}
                    height={70}
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="space-y-2 flex-grow">
                  <div className="flex justify-between items-start">
                    <h2 className="text-xl font-semibold leading-tight">
                      {item.title}
                    </h2>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Centerist Section */}
      <div className="Centerist">
        <h1 className="text-4xl font-bold">Centerist</h1>

        <div className="space-y-4">
          {items.map((item) => (
            <Card
              key={item.id}
              className="bg-gray-50 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
            >
              <div className="p-4 flex gap-4">
                <div className="flex-shrink-0">
                <Image
                    src={item.imageUrl}
                    alt=""
                    sizes="3vw"
                    // style={{
                    //   width: "70",
                    //   height: "70",
                    // }}
                    width={70}
                    height={70}
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="space-y-2 flex-grow">
                  <div className="flex justify-between items-start">
                    <h2 className="text-xl font-semibold leading-tight">
                      {item.title}
                    </h2>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      {/* Rightist Section */}
      <div className="Rightist m-4">
        <h1 className="text-4xl font-bold">Rightist</h1>

        <div className="space-y-4">
          {items.map((item) => (
            <Card
              key={item.id}
              className="bg-gray-50 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
            >
              <div className="p-4 flex gap-4">
                <div className="flex-shrink-0">
                <Image
                    src={item.imageUrl}
                    alt=""
                    sizes="3vw"
                    // style={{
                    //   width: "70",
                    //   height: "70",
                    // }}
                    width={70}
                    height={70}
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="space-y-2 flex-grow">
                  <div className="flex justify-between items-start">
                    <h2 className="text-xl font-semibold leading-tight">
                      {item.title}
                    </h2>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
