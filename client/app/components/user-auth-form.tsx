"use client"
import * as React from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
    page?: string | boolean;
}

export function UserAuthForm({ className,page, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    // React.useEffect(() => {
    //     setIsLoading(true)
    //   }, [])
    
    // Set isLoading to true before the asynchronous operation
    setIsLoading(true);


    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
            
          </div>
          <div className="grid gap-1">
          <Label htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="**********"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          
          {page && (
            <div className="grid gap-1">
            <Label htmlFor="password">
                Confirm Password
              </Label>
              <Input
                id="confirmpassword"
                placeholder="**********"
                type="password"
                autoCapitalize="none"
                autoCorrect="off"
                disabled={isLoading}
              />
            </div>
          )}
          <Button disabled={isLoading} className={cn(buttonVariants({ }), "bg-purple-950")}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            {page ? "Sign up with Email" : "Login"}
            
          </Button>
        </div>
      </form>
      
    </div>
  )
}