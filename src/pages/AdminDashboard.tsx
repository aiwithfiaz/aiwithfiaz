import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Users, FileText, MessageSquare, Mail, TrendingUp, Eye, BarChart3, Settings, Plus, MoreHorizontal } from 'lucide-react'

const stats = [
  { label: 'Total Visitors', value: '12,847', change: '+12%', icon: Eye },
  { label: 'Active Users', value: '847', change: '+8%', icon: Users },
  { label: 'Total Leads', value: '156', change: '+23%', icon: MessageSquare },
  { label: 'Conversion Rate', value: '3.2%', change: '+0.5%', icon: TrendingUp },
]

const recentLeads = [
  { name: 'John Smith', email: 'john@techcorp.com', service: 'AI Automation', date: '2 hours ago', status: 'New' },
  { name: 'Sarah Johnson', email: 'sarah@growthsuite.io', service: 'Web Development', date: '5 hours ago', status: 'Contacted' },
  { name: 'Mike Chen', email: 'mike@innovate.ai', service: 'AI Consulting', date: '1 day ago', status: 'New' },
  { name: 'Emily Brown', email: 'emily@startup.co', service: 'SaaS Development', date: '2 days ago', status: 'Qualified' },
]

export default function AdminDashboard() {
  return (
    <div className="pt-16 min-h-screen bg-muted/30">
      <div className="flex">
        <aside className="hidden lg:block w-64 min-h-screen border-r border-border bg-card p-6">
          <div className="flex items-center gap-3 mb-8">
            <Avatar>
              <AvatarFallback className="bg-primary text-primary-foreground">A</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-sm">Admin</p>
              <p className="text-xs text-muted-foreground">admin@aiwithfiaz.com</p>
            </div>
          </div>
          <nav className="space-y-1">
            {[
              { icon: BarChart3, label: 'Dashboard', active: true },
              { icon: Users, label: 'Users' },
              { icon: FileText, label: 'Blog Posts' },
              { icon: FileText, label: 'Portfolio' },
              { icon: FileText, label: 'Case Studies' },
              { icon: MessageSquare, label: 'Leads' },
              { icon: Settings, label: 'Settings' },
            ].map((link) => (
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
        </aside>

        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                <p className="text-muted-foreground">Manage your platform and view analytics.</p>
              </div>
              <Button variant="gradient" size="sm">
                <Plus className="w-4 h-4 mr-2" /> New Content
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {stats.map((stat) => (
                <Card key={stat.label}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">{stat.label}</span>
                      <stat.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-xs text-green-500">{stat.change} this month</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Tabs defaultValue="leads">
              <TabsList className="mb-6">
                <TabsTrigger value="leads">Leads</TabsTrigger>
                <TabsTrigger value="users">Users</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              <TabsContent value="leads">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Leads</CardTitle>
                    <CardDescription>Manage incoming inquiries and quote requests</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentLeads.map((lead) => (
                        <div key={lead.email} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors">
                          <div className="flex items-center gap-4">
                            <Avatar>
                              <AvatarFallback>{lead.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm">{lead.name}</p>
                              <p className="text-xs text-muted-foreground">{lead.email} • {lead.service}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge variant={lead.status === 'New' ? 'info' : lead.status === 'Contacted' ? 'warning' : 'success'}>{lead.status}</Badge>
                            <span className="text-xs text-muted-foreground">{lead.date}</span>
                            <Button variant="ghost" size="icon"><MoreHorizontal className="w-4 h-4" /></Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="users">
                <Card>
                  <CardContent className="p-8 text-center text-muted-foreground">
                    User management interface. View, edit, and manage platform users.
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Visitor Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="h-64 flex items-center justify-center text-muted-foreground">
                      Analytics chart placeholder
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Conversion Funnel</CardTitle>
                    </CardHeader>
                    <CardContent className="h-64 flex items-center justify-center text-muted-foreground">
                      Conversion chart placeholder
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
