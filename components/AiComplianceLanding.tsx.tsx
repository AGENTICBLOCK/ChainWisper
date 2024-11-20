import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Clipboard, Search, Shield, FileCheck, AlertTriangle, BarChart3, Lock, Scale, Cpu, Network, Eye } from 'lucide-react'

export default function Component() {
  const [address, setAddress] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("AI analyzing address:", address)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-green-500/20"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-gray-800 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-green-400">
            CHAINWHISPER AI
          </h1>
          <nav>
            <Button variant="ghost" className="text-gray-300 hover:text-purple-400 transition-colors">
              Contact Sales
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 container mx-auto px-4 py-16 flex flex-col items-center justify-center">
        <div className="text-center space-y-8 w-full max-w-4xl">
          {/* Hero Section */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 animate-gradient-x">
            AI-POWERED BLOCKCHAIN COMPLIANCE
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Harness the power of artificial intelligence to scan, analyze, and monitor blockchain transactions in real-time. Elevate your compliance strategy with ChainWhisper AI.
          </p>

          {/* Search Form */}
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div className="relative max-w-2xl mx-auto">
              <Input
                type="text"
                placeholder="Enter blockchain address for AI analysis..."
                className="w-full h-14 pl-4 pr-12 text-lg rounded-full border-2 border-gray-700 bg-gray-800 text-gray-100 focus:border-purple-400 transition-colors"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-400"
                onClick={() => {
                  navigator.clipboard.readText().then((text) => setAddress(text))
                }}
              >
                <Clipboard className="h-5 w-5" />
                <span className="sr-only">Paste from clipboard</span>
              </Button>
            </div>
            <Button
              type="submit"
              className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 hover:from-blue-600 hover:via-purple-600 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              <Cpu className="mr-2 h-5 w-5" />
              AI Compliance Scan
            </Button>
          </form>

          {/* AI Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="space-y-2 p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-blue-400 transition-colors">
              <Eye className="h-8 w-8 text-blue-400" />
              <h3 className="text-xl font-semibold">AI Pattern Recognition</h3>
              <p className="text-gray-400">Detect complex transaction patterns and anomalies invisible to human analysis</p>
            </div>
            <div className="space-y-2 p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-400 transition-colors">
              <Network className="h-8 w-8 text-purple-400" />
              <h3 className="text-xl font-semibold">Predictive Risk Scoring</h3>
              <p className="text-gray-400">AI-driven risk assessment based on historical data and emerging trends</p>
            </div>
            <div className="space-y-2 p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-green-400 transition-colors">
              <Cpu className="h-8 w-8 text-green-400" />
              <h3 className="text-xl font-semibold">Automated Compliance Checks</h3>
              <p className="text-gray-400">Continuous AI monitoring for real-time regulatory adherence</p>
            </div>
          </div>

          {/* AI Compliance Benefits Section */}
          <section className="mt-20">
            <h3 className="text-3xl font-bold mb-8">How AI Empowers Compliance Officers</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <BarChart3 className="h-6 w-6 text-blue-400 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Intelligent Reporting</h4>
                  <p className="text-gray-400">AI-generated insights and visualizations for faster decision-making</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Lock className="h-6 w-6 text-purple-400 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Enhanced Due Diligence</h4>
                  <p className="text-gray-400">AI-assisted KYC and AML processes with unparalleled accuracy</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-6 w-6 text-yellow-400 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Proactive Alert System</h4>
                  <p className="text-gray-400">AI-powered early warning for potential compliance breaches</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Shield className="h-6 w-6 text-green-400 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Adaptive Rule Engine</h4>
                  <p className="text-gray-400">Self-improving AI algorithms that evolve with regulatory changes</p>
                </div>
              </div>
            </div>
          </section>

          {/* AI Demo CTA */}
          <div className="mt-16 p-8 rounded-lg bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 border border-gray-700">
            <h3 className="text-2xl font-bold mb-4">Experience AI-Driven Compliance in Action</h3>
            <p className="text-gray-300 mb-6">Schedule a personalized demo to see how ChainWhisper AI can revolutionize your blockchain compliance strategy.</p>
            <Button className="h-12 px-8 text-lg rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-colors">
              Request AI Demo
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">© 2024 ChainWhisper AI. All rights reserved.</p>
          <nav className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Terms</a>
            <a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Privacy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Security</a>
            <a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
