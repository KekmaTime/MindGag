"use client"

import React from 'react'
import { CopyButton } from './CopyButton'

export const Pre = ({ children, ...props }: { children: React.ReactNode }) => {
  const preRef = React.useRef<HTMLPreElement>(null)
  
  return (
    <div className="relative">
      <pre ref={preRef} {...props}>
        {children}
      </pre>
      <CopyButton text={preRef.current?.textContent || ''} />
    </div>
  )
}