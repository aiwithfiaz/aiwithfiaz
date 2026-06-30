import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const initialMessages: Message[] = [
  {
    role: 'assistant',
    content: "Hi! I'm AIwithFiaz assistant. How can I help you today? You can ask me about our services, portfolio, or anything else!",
  },
]

const responses: Record<string, string> = {
  'services': 'We offer AI Automation, Web Development, AI Integration, and AI Consulting services. Which one are you interested in?',
  'automation': 'Our AI Automation services include AI Agents, Workflow Automation, and Business Process Automation. We help streamline your operations with cutting-edge AI.',
  'web': 'We build React applications, SaaS platforms, and enterprise websites using modern technologies like React, TypeScript, Node.js, and more.',
  'consulting': 'Our consulting services cover AI strategy, implementation, and optimization. We help businesses leverage AI for growth.',
  'portfolio': 'You can view our portfolio on the Portfolio page. We have projects in AI, web development, SaaS, and automation.',
  'price': 'Please contact us for a custom quote. Every project is unique and we tailor our solutions to your needs.',
  'contact': 'You can reach us through the Contact page, or email us at hello@aiwithfiaz.com.',
  'default': 'I can help you with information about our services, portfolio, pricing, and more. What would you like to know?',
}

function getResponse(input: string): string {
  const lower = input.toLowerCase()
  if (lower.includes('service') || lower.includes('offer')) return responses.services
  if (lower.includes('automation') || lower.includes('agent')) return responses.automation
  if (lower.includes('web') || lower.includes('website') || lower.includes('app')) return responses.web
  if (lower.includes('consult') || lower.includes('strategy')) return responses.consulting
  if (lower.includes('portfolio') || lower.includes('project')) return responses.portfolio
  if (lower.includes('price') || lower.includes('cost') || lower.includes('pricing')) return responses.price
  if (lower.includes('contact') || lower.includes('email') || lower.includes('reach')) return responses.contact
  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
    return "Hello! Welcome to AIwithFiaz. How can I assist you today?"
  }
  return responses.default
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')

    setTimeout(() => {
      const assistantMessage: Message = {
        role: 'assistant',
        content: getResponse(input),
      }
      setMessages(prev => [...prev, assistantMessage])
    }, 500)
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-2xl shadow-2xl border bg-card overflow-hidden"
          >
            <div className="bg-gradient-to-r from-primary to-purple-600 p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bot className="w-6 h-6" />
                <div>
                  <p className="font-semibold">AI Assistant</p>
                  <p className="text-xs opacity-80">Online • AIwithFiaz</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:opacity-80">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`flex gap-2 max-w-[80%] ${
                      msg.role === 'user' ? 'flex-row-reverse' : ''
                    }`}
                  >
                    <div className={`p-2 rounded-full ${msg.role === 'user' ? 'bg-primary' : 'bg-muted'}`}>
                      {msg.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-primary" />}
                    </div>
                    <div
                      className={`rounded-2xl px-4 py-2 text-sm ${
                        msg.role === 'user'
                          ? 'bg-primary text-primary-foreground rounded-tr-sm'
                          : 'bg-muted text-foreground rounded-tl-sm'
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSend} className="p-4 border-t border-border flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button type="submit" size="icon" variant="gradient">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg hover:shadow-xl transition-shadow"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </>
  )
}
