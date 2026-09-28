import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#FAF5EF]/90 backdrop-blur-md border-b border-[#E7D8C8]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <div>
          <h1 className="text-3xl font-bold tracking-[0.2em] text-[#6E1F2A]">
            Rang-e-Balochistan
          </h1>
          <p className="text-xs uppercase tracking-[0.4em] text-[#C9A227]">
            Handmade Heritage
          </p>
        </div>

        <NavigationMenu>
          <NavigationMenuList className="gap-8">
            <NavigationMenuItem>
              <NavigationMenuLink href="#">Home</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="#">Collections</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="#">Craftsmanship</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="#">About</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="#">Contact</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button className="bg-[#6E1F2A] hover:bg-[#541722] text-white rounded-full px-6">
          Shop Now
        </Button>
      </div>
    </header>
  );
}                                                                                                           