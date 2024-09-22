'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Search, Book, Briefcase, Star, Users, Award, Slack, MessageCircle, Rocket, Castle, Satellite, Code, GitBranch, CheckSquare, Database, Send, FileCode, Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Component() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020B2D] via-[#1E0B4A] to-[#0A3A7E] text-white">
      <header className={`fixed w-full z-10 transition-all duration-300 ${scrolled ? 'bg-[#020B2D] shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
          <div className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2]">UPEX</div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4 md:space-x-6">
              <li><Link href="#" className="hover:text-[#00FFFF]">Sandbox</Link></li>
              <li><Link href="#" className="hover:text-[#00FFFF]">Blackhole</Link></li>
              <li><Link href="#" className="hover:text-[#00FFFF]">Galaxy</Link></li>
              <li><Link href="#" className="hover:text-[#00FFFF]">Satellite</Link></li>
              <li><Link href="#" className="hover:text-[#00FFFF]">Community</Link></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:inline-flex bg-[#8A2BE2] text-white hover:bg-[#6A1B9A]">Sign In</Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#020B2D]">
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link href="#" className="text-lg hover:text-[#00FFFF]">Sandbox</Link>
                  <Link href="#" className="text-lg hover:text-[#00FFFF]">Blackhole</Link>
                  <Link href="#" className="text-lg hover:text-[#00FFFF]">Galaxy</Link>
                  <Link href="#" className="text-lg hover:text-[#00FFFF]">Satellite</Link>
                  <Link href="#" className="text-lg hover:text-[#00FFFF]">Community</Link>
                  <Button className="mt-4 bg-[#8A2BE2] text-white hover:bg-[#6A1B9A]">Sign In</Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      
      <main>
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#020B2D] via-[#1E0B4A] to-[#0A3A7E] py-20 px-4">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#80D8FF] via-[#B388FF] to-[#8C9EFF]">
                Software Tester
              </span>{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FF00FF]">
                Experience
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C0C0C0] via-[#E5E4E2] to-[#D3D3D3]">
                for your CV
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-[#00FFFF] mb-8">The World's First Realistic QA Workspace</h2>
            
            <p className="text-lg md:text-xl mb-8">
              Immerse yourself in a complete, true-to-life QA environment. Gain real work experience that surpasses traditional internships or entry-level positions.
            </p>
            
            <div className="max-w-2xl mx-auto mb-12 relative">
              <Input 
                type="text" 
                placeholder="What do you want to learn in QA?" 
                className="w-full px-4 py-3 pl-12 rounded-lg bg-white text-[#020B2D] text-lg"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#020B2D]" size={24} />
            </div>
            
            <TooltipProvider>
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex flex-col items-center">
                      <Slack className="w-8 h-8 mb-2 text-[#00FFFF]" />
                      <span className="text-sm">Slack</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Streamline team communication and integrate with QA tools for real-time notifications and collaborative problem-solving.</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex flex-col items-center">
                      <CheckSquare className="w-8 h-8 mb-2 text-[#00FFFF]" />
                      <span className="text-sm">Jira</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Manage QA workflows, track bugs, and collaborate on test cases using industry-standard project management tools.</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex flex-col items-center">
                      <Code className="w-8 h-8 mb-2 text-[#00FFFF]" />
                      <span className="text-sm">XRay</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Enhance test management within Jira, enabling comprehensive test planning, execution, and reporting.</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex flex-col items-center">
                      <Database className="w-8 h-8 mb-2 text-[#00FFFF]" />
                      <span className="text-sm">MySQL</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Learn database testing techniques and SQL querying for comprehensive backend quality assurance.</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex flex-col items-center">
                      <Send className="w-8 h-8 mb-2 text-[#00FFFF]" />
                      <span className="text-sm">Postman</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Master API testing and automation to ensure robust backend functionality and integration.</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex flex-col items-center">
                      <FileCode className="w-8 h-8 mb-2 text-[#00FFFF]" />
                      <span className="text-sm">VSCode</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Utilize a powerful IDE for writing and managing test scripts, enhancing your coding skills in QA automation.</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex flex-col items-center">
                      <GitBranch className="w-8 h-8 mb-2 text-[#00FFFF]" />
                      <span className="text-sm">GitHub</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Practice version control, collaborate on test code, and integrate with CI/CD pipelines for efficient QA processes.</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-[#00FFFF] hover:bg-[#00D0D0] text-[#020B2D]" size="lg">Try Free Workspace</Button>
              <Button 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-[#8A2BE2] hover:text-white hover:border-[#8A2BE2]" 
                size="lg"
              >
                Explore UPEX Galaxy
              </Button>
            </div>
          </div>
        </section>

        {/* Rest of the component remains unchanged */}
        {/* ... */}
      </main>
      
      <footer className="bg-[#020B2D] py-6 px-4">
        <div className="container mx-auto text-center">
          <p className="mb-4 text-white">Experience the future of QA with our revolutionary Galaxy workspace</p>
          <div className="flex flex-wrap justify-center space-x-4">
            <Link href="#" className="text-white hover:text-[#00FFFF] mb-2">About Us</Link>
            <Link href="#" className="text-white hover:text-[#00FFFF] mb-2">Contact</Link>
            <Link href="#" className="text-white hover:text-[#00FFFF] mb-2">Privacy Policy</Link>
            <Link href="#" className="text-white hover:text-[#00FFFF] mb-2">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}