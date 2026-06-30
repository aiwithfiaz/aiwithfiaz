import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ChatBot } from '@/features/chatbot/ChatBot'

export const metadata: Metadata = {
  title: 'AIwithFiaz - AI Automation, Web Development & Digital Solutions',
  description: 'Enterprise AI services company providing AI automation, AI agents development, workflow automation, web application development, SaaS development, and digital transformation services.',
  keywords: ['AI Automation Services', 'AI Agents Development', 'Web Development Company', 'AI Solutions', 'Business Automation Services'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <ChatBot />
          </div>
        </Providers>
      </body>
    </html>
  )
}