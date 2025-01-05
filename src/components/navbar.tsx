'use client'

import * as React from "react"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import FuzzyDivider from "./fuzzydivider"

const menuItems = [
  { href: "/news?category=trending", label: "Trending" },
  { href: "/flipnews", label: "Flip Flop" },
  { href: "/news?category=politics", label: "Politics" },
  { href: "/news?category=world", label: "World" },
  { href: "/news?category=business", label: "Business" },
  { href: "/news?category=sports", label: "Sports" },
  { href: "/news?category=health-lifestyle", label: "Health & Lifestyle" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const isActive = (href: string) => {
    if (href === '/flipnews') {
      return pathname === '/flipnews'
    }
    return pathname === '/news' && searchParams.get('category') === href.split('=')[1]
  }

  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetTitle>Categories</SheetTitle>
              <div className="flex flex-col gap-4 mt-8">
                {menuItems.map((item, index) => (
                  <React.Fragment key={item.href}>
                    <Link
                      href={item.href}
                      className={`block px-2 py-1 text-sm transition-colors ${
                        isActive(item.href)
                          ? 'text-primary font-semibold'
                          : 'hover:text-primary'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {index < menuItems.length - 1 && <Separator />}
                  </React.Fragment>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/" className="text-3xl font-bold tracking-tight hover:text-pink-700 active:text-primary/80 transition-colors">
              The Indic Wire
            </Link>
          </div>

          {/* Search Button */}
          {/* <Button variant="ghost" size="icon" className="ml-auto">
            <Search className="h-6 w-6" />
            <span className="sr-only">Search</span>
          </Button> */}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="flex justify-center space-x-1 py-4">
            {menuItems.map((item, index) => (
              <React.Fragment key={item.href}>
                <Link
                  href={item.href}
                  className={`px-3 py-2 text-base transition-colors ${
                    isActive(item.href)
                      ? 'text-primary font-semibold'
                      : 'hover:text-pink-700'
                  }`}
                >
                  {item.label}
                </Link>
                {index < menuItems.length - 1 && (
                  <Separator orientation="vertical" className="my-2" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      
      {/* Fuzzy Jagged Line */}
      <FuzzyDivider/>
    </nav>
  )
}