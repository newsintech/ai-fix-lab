'use client';

import { ArrowRight, Check, Code, Zap, Brain, Rocket } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            AI Fix Lab
          </div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#process" className="hover:text-blue-600 transition">How We Work</a>
            <a href="#portfolio" className="hover:text-blue-600 transition">Portfolio</a>
            <a href="#tech" className="hover:text-blue-600 transition">Tech Stack</a>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-medium">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-6 px-4 py-2 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
              ✨ Custom AI Development & Consulting
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Build AI-Powered Products <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">3x Faster</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              From concept to production. We design, build, and optimize AI-powered websites, automation workflows, and intelligent agents tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition">
                Book Free Strategy Call <ArrowRight size={18} />
              </button>
              <button className="border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 px-8 py-4 rounded-lg font-semibold transition">
                View Our Work
              </button>
            </div>
            <div className="flex gap-8 mt-12 text-sm text-gray-600 dark:text-gray-400">
              <div>
                <div className="font-bold text-2xl text-black dark:text-white">50+</div>
                <div>Projects Delivered</div>
              </div>
              <div>
                <div className="font-bold text-2xl text-black dark:text-white">98%</div>
                <div>Client Satisfaction</div>
              </div>
              <div>
                <div className="font-bold text-2xl text-black dark:text-white">$5M+</div>
                <div>Value Generated</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 rounded-2xl p-8 flex items-center justify-center min-h-96">
            <div className="text-center">
              <Zap className="w-20 h-20 text-blue-600 dark:text-blue-400 mx-auto mb-4 opacity-70" />
              <p className="text-gray-600 dark:text-gray-400">AI-Powered Development Studio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 dark:bg-gray-900 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Build</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive AI solutions designed for modern businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:border-blue-500 transition">
              <Brain className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Custom AI Website Design</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                High-converting landing pages, product sites, and SaaS applications with built-in AI features like chatbots, recommendation engines, and intelligent search.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
                Learn More <ArrowRight size={16} />
              </a>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:border-blue-500 transition">
              <Code className="w-12 h-12 text-cyan-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">AI Agents & Workflow Automation</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Deploy intelligent agents for customer support, data processing, and internal workflows. Integrations with OpenAI, Anthropic, xAI, and vector databases for RAG systems.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
                Learn More <ArrowRight size={16} />
              </a>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:border-blue-500 transition">
              <Rocket className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Code Optimization & AI Debugging</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Fix legacy codebases, improve performance, and modernize your tech stack with AI-assisted refactoring. Works with any language or framework.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
                Learn More <ArrowRight size={16} />
              </a>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:border-blue-500 transition">
              <Zap className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">MVP Development & Experimentation</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Rapid prototyping and experimentation for startups. Build and test AI-powered concepts in weeks, not months. Iterate based on real user feedback.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
                Learn More <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How We Work</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A proven 4-step process from discovery to optimization
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { num: '01', title: 'Discover', desc: 'Deep-dive into your product, goals, and constraints. 30-45 min call.' },
            { num: '02', title: 'Design', desc: 'Create user flows, UX designs, and AI integration roadmap.' },
            { num: '03', title: 'Build', desc: 'Implement, test, and deploy with continuous iteration.' },
            { num: '04', title: 'Optimize', desc: 'A/B test, refine, and scale based on real user data.' }
          ].map((step, i) => (
            <div key={i} className="relative">
              <div className="text-6xl font-bold text-gray-200 dark:text-gray-800 mb-4">{step.num}</div>
              <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{step.desc}</p>
              {i < 3 && <div className="hidden md:block absolute top-8 -right-3 text-gray-300 dark:text-gray-700 text-2xl">→</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="bg-gray-50 dark:bg-gray-900 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio & Case Studies</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Recent projects that demonstrate our expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'SaaS AI Chat Platform',
                problem: 'B2B platform needed intelligent customer support',
                solution: 'Deployed RAG-powered chatbot with custom knowledge base',
                result: 'Cut support tickets by 40%, improved CSAT by 28%'
              },
              {
                title: 'E-Commerce Product Recommendations',
                problem: 'Generic recommendations lowering AOV',
                solution: 'Built ML recommendation engine with user behavior analytics',
                result: '$320K additional annual revenue, 18% AOV increase'
              },
              {
                title: 'Content Creator AI Tool',
                problem: 'Manual content creation was bottleneck',
                solution: 'Created AI-assisted writing suite with style preservation',
                result: '5x content output, 12k+ active users in 3 months'
              }
            ].map((caseStudy, i) => (
              <div key={i} className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:shadow-lg transition cursor-pointer">
                <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">CASE STUDY</div>
                <h3 className="text-2xl font-bold mb-6">{caseStudy.title}</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase mb-2">Problem</div>
                    <p className="text-gray-600 dark:text-gray-400">{caseStudy.problem}</p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase mb-2">Solution</div>
                    <p className="text-gray-600 dark:text-gray-400">{caseStudy.solution}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                    <div className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase mb-2">Result</div>
                    <p className="text-gray-900 dark:text-white font-semibold">{caseStudy.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-20 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack & Expertise</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Modern tools and platforms we specialize in
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl
