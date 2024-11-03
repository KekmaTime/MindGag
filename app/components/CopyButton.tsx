"use client"

import { Check, Copy } from 'lucide-react'
import { useState } from 'react'

export const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={copy}
      className="absolute right-4 top-4 p-2 rounded-md transition-colors hover:bg-muted"
    >
      {copied ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <Copy className="h-4 w-4 text-muted-foreground" />
      )}
      <span className="sr-only">Copy code</span>
    </button>
  )
}