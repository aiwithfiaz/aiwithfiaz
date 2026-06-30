import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  User, FileText, MessageSquare, CreditCard, Download,
  BarChart3, Settings, Bell, LogOut, Activity, FolderOpen,
  ChevronRight
} from 'lucide-react'

const sidebarLinks = [
  { icon: BarChart3, label: 'Overview', active: true },
  { icon: FolderOpen, label: 'Projects' },
  { icon: FileText, label: 'Quotes' },
  { icon: MessageSquare, label: 'Messages' },
  { icon: CreditCard, label: 'Subscription' },
  { icon: Download, label: 'Downloads' },
  { icon: Settings, label: 'Settings' },
]

const recentProjects = [
  { name: 'AI Customer Agent', status: 'In Progress', date: 'Dec 2025' },
  { name: 'SaaS Dashboard', status: 'Completed', date: 'Nov 2025' },
  { name: 'Workflow Automation', status: 'Review', date: 'Oct 2025' },
]

export default function Dashboard() {
  return (
    <div className="pt-16 min-h-screen bg-muted/30">
      <div className="flex">
        <aside className="hidden lg:block w-64 min-h-screen border-r border-border bg-card p-6">
          <div className="flex items-center gap-3 mb-8">
            <Avatar>
              <AvatarFallback className="bg-primary text-primary-foreground">FA</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-sm">Fiaz Ahmed</p>
              <p className="text-xs text-muted-foreground">fiaz@example.com</p>
            </div>
          </div>
          <nav className="space-y-1">
            {sidebarLinks.map((link) => (
              <button
                key={link.label}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                  link.active ? 'bg-primary/10 text-primary font-medium' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </button>
            ))}
          </nav>
          <Separator className="my-6" />
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </aside>

        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl font-bold">Welcome back, Fiaz!</h1>
                <p className="text-muted-foreground">Here's what's happening with your projects.</p>
              </div>
              <Button variant="gradient" size="sm">
                <Activity className="w-4 h-4 mr-2" /> New Project
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Active Projects', value: '3', change: '+1 this month', icon: FolderOpen },
                { label: 'Pending Quotes', value: '2', change: 'Awaiting response', icon: FileText },
                { label: 'Unread Messages', value: '5', change: '3 new today', icon: MessageSquare },
                { label: 'Subscription', value: 'Pro', change: 'Renews Jan 2026', icon: CreditCard },
              ].map((item) => (
                <Card key={item.label}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="text-2xl font-bold">{item.value}</div>
                    <p className="text-xs text-muted-foreground">{item.change}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Recent Projects</CardTitle>
                <CardDescription>Your latest project activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentProjects.map((project) => (
                    <div key={project.name} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                      <div>
                        <p className="font-medium">{project.name}</p>
                        <p className="text-sm text-muted-foreground">{project.date}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant={
                          project.status === 'Completed' ? 'success' :
                          project.status === 'In Progress' ? 'info' : 'warning'
                        }>{project.status}</Badge>
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
