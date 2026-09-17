"use client"

import React, { Component, ReactNode } from "react"
import dynamic from "next/dynamic"

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    console.error("Agentation failed to load:", error)
  }

  render() {
    if (this.state.hasError) {
      return null // Fail silently so it doesn't break the app
    }
    return this.props.children
  }
}

const Agentation = dynamic(
  () => import("agentation").then((mod) => mod.Agentation),
  { ssr: false }
)

export function AgentationWrapper() {
  return (
    <ErrorBoundary>
      <Agentation />
    </ErrorBoundary>
  )
}
