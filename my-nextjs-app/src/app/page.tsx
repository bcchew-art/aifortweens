"use client"

import { AgentChat, createAgentChat } from "@21st-sdk/nextjs"
import { useChat } from "@ai-sdk/react"

const chat = createAgentChat({
  agent: "my-agent",
  tokenUrl: "/api/an-token",
})

export default function Page() {
  const { messages, sendMessage, status, stop, error } = useChat({ chat })

  return (
    <AgentChat
      messages={messages}
      onSend={() => sendMessage()}
      status={status}
      onStop={stop}
      error={error ?? undefined}
    />
  )
}
