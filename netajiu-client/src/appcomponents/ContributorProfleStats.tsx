import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ContributorProfileStats() {
  return (
    <Card className="stats_container">
      {/* <div className="avatar_container">
        <Avatar className="w-full h-full">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Card Title</CardTitle>
        <CardDescription className="text-gray-500 text-lg">
          Card Description
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-xl font-black">Political Ethustiast</p>
        <p className="text-lg font-medium">From Lalitpur</p>
      </CardContent>
      <CardFooter className="text-center">
        <p>
          John Doe is Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </CardFooter> */}
    </Card>
  );
}
