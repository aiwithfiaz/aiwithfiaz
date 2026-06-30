'use client'

import { ThemeProvider } from '@/hooks/useTheme'
import { AuthProvider } from '@/features/auth/AuthContext'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </ThemeProvider>
  )
}