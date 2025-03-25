import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="relative z-50">
      <div className="bg-background border-b">
        <div className="container flex items-center h-16 space-x-4 sm:space-x-0">
          <Link to="/" className="font-bold text-2xl">
            Big Green Bag
          </Link>
          <div className="flex-1" />
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className={navigationMenuTriggerStyle()}>
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/jobs" className={navigationMenuTriggerStyle()}>
                  Browse Jobs
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/brands" className={navigationMenuTriggerStyle()}>
                  Brands
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/premium-services" className={navigationMenuTriggerStyle()}>
                  Premium Services
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
