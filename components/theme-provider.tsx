'use client'

import * as React from 'react'

// Lightweight passthrough — app uses a fixed dark theme, no dynamic switching needed.
export function ThemeProvider({ children }: { children: React.ReactNode;[key: string]: unknown }) {
  return <>{children}</>
}
