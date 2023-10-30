"use client"
import React from 'react';
import Link from "next/link";
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu";
  import { Button, buttonVariants } from "@/components/ui/button";

const NavMenu = () => {
  return (
    <>
    
    <NavigationMenu className='p-4 max-w-full lg:w-full shadow-md'>
  <NavigationMenu className='flex justify-between mx-auto max-w-screen-2xl w-full'>
  <Link href="/" legacyBehavior passHref>
  <NavigationMenuLink>
    <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#000"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Recipe Finder
          </div>
    </NavigationMenuLink>
  </Link>
  <NavigationMenuItem className='list-none'>
  <Link href="/restuarants" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      Restuarants
    </NavigationMenuLink>
  </Link>
  <Link href="/recipe" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      Recipe
    </NavigationMenuLink>
  </Link>
  </NavigationMenuItem>
   <NavigationMenuItem className='list-none'>
   <Link href="/login" legacyBehavior passHref>
   <Button className={cn(buttonVariants({ }), "bg-transparent text-purple-950 mr-2 hover:text-white hover:bg-purple-950")} variant="outline">
    Login
    </Button>
    </Link>
    <Link href="/register" legacyBehavior passHref>
   <Button className={cn(buttonVariants({ }), "bg-purple-950 hover:bg-transparent hover:text-purple-950")}>
    Signup
    </Button>
    </Link>
   </NavigationMenuItem>
  </NavigationMenu>
  
</NavigationMenu>

    </>
  )
}

export default NavMenu