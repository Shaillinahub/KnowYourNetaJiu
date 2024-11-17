import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import "./navBar.css";

export default function NavBar() {
  return (
    <div className="bg-white w-full h-16  flex  items-center px-24 py-4">
      <nav className="navItems">
        <Button className="button rounded-lg px-8">Contribute</Button>

        <div className="navLinks flex justify-center w-full h-full">
          <div className="navItem">
            <a href="">Home</a>
          </div>

          <div className="navItem">
            <a href="">Contact</a>
          </div>

          <div className="navItem">
            <a href="">Vision</a>
          </div>
        </div>

        <div className="rightNav flex flex-row w-1/2 mx-2 justify-between">
          <Input
            className="w-2/3 justify-center"
            type="search  "
            placeholder="Search"
          />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem></DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </div>
  );
}
