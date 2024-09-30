'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Search, Book, Briefcase, Users, Award, Slack, MessageCircle, Rocket, Castle, Satellite, Code, GitBranch, CheckSquare, Database, Send, FileCode } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Header from '@/components/header';
import Footer from '@/components/footer';

export function Homepage() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020B2D] via-[#1E0B4A] to-[#0A3A7E] text-white">
      <Header />
      <main>
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#020B2D] via-[#1E0B4A] to-[#0A3A7E] py-20 px-4">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#80D8FF] via-[#B388FF] to-[#8C9EFF]">
                Software Tester
              </span>{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FF00FF]">
                Experience
              </span>{' '}
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C0C0C0] via-[#E5E4E2] to-[#D3D3D3]">
                for your CV
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-[#00FFFF] mb-8">The World&apos;s First Realistic QA Workspace</h2>
            
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
              <a href="https://forms.gle/ke4kadCJWRrDkDTXA" target="_blank" rel="noopener">
                <Button className="bg-[#00FFFF] hover:bg-[#00D0D0] text-[#020B2D]" size="lg">Try Free Workspace</Button>
              </a>
              <a href="https://upexdocu.atlassian.net/wiki/spaces/GX/overview" target="_blank" rel="noopener">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-[#8A2BE2] hover:text-white hover:border-[#8A2BE2]" size="lg">Explore UPEX Galaxy</Button>
              </a>
              
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#0A3A7E] via-[#1E0B4A] to-[#0F5ABE] py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Revolutionizing QA Education and Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              <Card className="p-6 bg-[#1A2C5A] border-[#3D4E7A]">
                <Rocket className="w-12 h-12 mb-4 mx-auto text-[#00FFFF]" />
                <h3 className="text-xl font-semibold mb-2 text-white">UPEX Sandbox</h3>
                <p className="text-white">Free Jira workspace for hands-on QA practice. Perfect for beginners to experience real testing scenarios.</p>
                <Button variant="link" className="mt-4 text-[#00FFFF]">Try for Free</Button>
              </Card>
              <Card className="p-6 bg-[#1A2C5A] border-[#3D4E7A]">
                <Book className="w-12 h-12 mb-4 mx-auto text-[#00FFFF]" />
                <h3 className="text-xl font-semibold mb-2 text-white">UPEX Blackhole</h3>
                <p className="text-white">Comprehensive online courses covering fundamental to advanced QA skills for aspiring testers.</p>
                <Button variant="link" className="mt-4 text-[#00FFFF]">Explore Courses</Button>
              </Card>
              <Card className="p-6 bg-[#1A2C5A] border-[#3D4E7A]">
                <Castle className="w-12 h-12 mb-4 mx-auto text-[#00FFFF]" />
                <h3 className="text-xl font-semibold mb-2 text-white">UPEX Galaxy</h3>
                <p className="text-white">Our flagship product: An immersive, realistic QA workspace that simulates and surpasses real-world environments.</p>
                <Button variant="link" className="mt-4 text-[#00FFFF]">Join Galaxy</Button>
              </Card>
              <Card className="p-6 bg-[#1A2C5A] border-[#3D4E7A]">
                <Satellite className="w-12 h-12 mb-4 mx-auto text-[#00FFFF]" />
                <h3 className="text-xl font-semibold mb-2 text-white">UPEX Satellite</h3>
                <p className="text-white">Connecting skilled UPEX graduates with software companies seeking qualified QA talent. (Coming Soon)</p>
                <Button variant="link" className="mt-4 text-[#00FFFF]" disabled>Learn More</Button>
              </Card>
            </div>

            <div className="bg-[#1A2C5A] p-6 md:p-8 rounded-lg mb-20">
              <h3 className="text-2xl font-bold mb-4 text-white">Why UPEX Galaxy is Revolutionary</h3>
              <ul className="text-left list-disc list-inside space-y-2 text-white">
                <li>Complete, realistic QA workspace - unmatched in the industry</li>
                <li>True-to-life work experience surpassing entry-level positions</li>
                <li>Integration of industry-standard tools: Jira, XRay, GitHub, CI pipelines</li>
                <li>Structured environment promoting QA best practices</li>
                <li>Hands-on experience with real projects and scenarios</li>
                <li>Bridge the gap between education and professional work</li>
              </ul>
            </div>

            <div className="bg-[#1A2C5A] p-6 md:p-8 rounded-lg mb-20">
              <h3 className="text-2xl font-bold mb-4 text-white">Join the UPEX Community</h3>
              <p className="mb-6 text-white">Connect with fellow QA professionals, share knowledge, and stay updated with the latest in software testing.</p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-[#4A154B] hover:bg-[#3A0F3B]">
                  <Slack className="mr-2" />
                  Join us on Slack
                </Button>
                <Button className="bg-[#7289DA] hover:bg-[#5269BA]">
                  <MessageCircle className="mr-2" />
                  Join us on Discord
                </Button>
              </div>
            </div>

            <div className="mb-20">
              <h3 className="text-2xl font-bold mb-6 text-white text-center">Our Impact</h3>
              <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex items-center justify-center">
                  <Users className="w-8 h-8 mr-2 text-[#00FFFF]" />
                  <div>
                    <div className="text-3xl font-bold text-white">5,000+</div>
                    <div className="text-sm text-white">QA Engineers Trained</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Briefcase className="w-8 h-8 mr-2 text-[#00FFFF]" />
                  <div>
                    <div className="text-3xl font-bold text-white">300+</div>
                    <div className="text-sm text-white">Partner Companies</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Award className="w-8 h-8 mr-2 text-[#00FFFF]" />
                  <div>
                    <div className="text-3xl font-bold text-white">90%</div>
                    <div className="text-sm text-white">Job Placement Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}