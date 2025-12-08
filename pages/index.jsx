import React, { useState, useEffect, useCallback } from 'react';

// --- SEO & UTILITY FUNCTIONS ---

// Function to update the document title and meta description for SEO
const updateSEO = (tool) => {
  const baseTitle = "AI Fix Lab - Free AI Tools for Developers & Creators";
  const baseDesc = "Instant, client-side AI tools: JSON Formatter, Prompt Optimizer, Schema Generator, and more. No signup, always free.";
  
  if (tool) {
    document.title = `${tool.name} | ${baseTitle}`;
    // In a real app, you would fetch or define a unique, keyword-rich description for each tool
    const toolDesc = tool.desc + " Use this free tool instantly.";
    
    // This is a simplified way to update meta tags in a client-side app.
    // In a production React app, you should use a library like React Helmet or Next.js/Gatsby's built-in head management.
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', toolDesc);
    
    // Update canonical URL (important for SPAs with routing)
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    // Use a clean URL for the specific tool
    const toolSlug = tool.name.toLowerCase().replace(/ /g, '-');
    canonical.setAttribute('href', `https://ai-fix-lab.vercel.app/${toolSlug}`);
    
  } else {
    document.title = baseTitle;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', baseDesc);
  }
};

// --- MONETIZATION UTILITY FUNCTIONS ---

const MAX_FREE_USES = 5;
const PRO_API_KEY = "PRO-AI-FIX-LAB-2025"; // Placeholder for a real key check

const getUsageData = () => {
  const today = new Date().toDateString();
  const storedData = JSON.parse(localStorage.getItem('aifixlab_usage')) || {};
  
  if (storedData.date !== today) {
    return { date: today, count: 0, isPro: false };
  }
  return storedData;
};

const saveUsageData = (data) => {
  localStorage.setItem('aifixlab_usage', JSON.stringify(data));
};

// --- MAIN COMPONENT ---

export default function AIFixLab() {
  const [theme, setTheme] = useState('light');
  const [activeTab, setActiveTab] = useState(0);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [email, setEmail] = useState('');
  const [usageData, setUsageData] = useState(getUsageData());
  const [apiKey, setApiKey] = useState('');
  
  // --- Tool State ---
  const [tool1Input, setTool1Input] = useState('');
  const [tool1Output, setTool1Output] = useState('');
  const [tool2Input, setTool2Input] = useState('');
  const [tool2Output, setTool2Output] = useState('');
  const [tool3Input, setTool3Input] = useState('');
  const [tool3Output, setTool3Output] = useState('');
  const [tool4Input, setTool4Input] = useState('');
  const [tool4Output, setTool4Output] = useState('');
  const [tool5Input, setTool5Input] = useState('');
  const [tool5Output, setTool5Output] = useState('');

  // --- Tool Definitions ---
  const tools = [
    { id: 'json-formatter', name: 'JSON Formatter', icon: '📋', desc: 'Format & validate JSON instantly', input: tool1Input, setInput: setTool1Input, output: tool1Output, setOutput: setTool1Output, action: formatJSON },
    { id: 'prompt-optimizer', name: 'Prompt Optimizer', icon: '⚡', desc: 'Improve your AI prompts for better results', input: tool2Input, setInput: setTool2Input, output: tool2Output, setOutput: setTool2Output, action: optimizePrompt },
    { id: 'schema-generator', name: 'Schema Generator', icon: '🔠', desc: 'Generate JSON schemas from descriptions', input: tool3Input, setInput: setTool3Input, output: tool3Output, setOutput: setTool3Output, action: generateSchema },
    { id: 'image-prompt', name: 'Image Prompt Creator', icon: '🎨', desc: 'Create Midjourney/DALL-E prompts with style modifiers', input: tool4Input, setInput: setTool4Input, output: tool4Output, setOutput: setTool4Output, action: generateImagePrompt },
    { id: 'content-repurpose', name: 'Content Repurposer', icon: '📚', desc: 'Transform content into multiple formats (blog, social, video)', input: tool5Input, setInput: setTool5Input, output: tool5Output, setOutput: setTool5Output, action: repurposeContent }
  ];

  // --- SEO & Routing Effect ---
  useEffect(() => {
    // Simple Hash-based routing
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      const toolIndex = tools.findIndex(t => t.id === hash);
      if (toolIndex !== -1) {
        setActiveTab(toolIndex);
        updateSEO(tools[toolIndex]);
      } else {
        setActiveTab(0);
        updateSEO(tools[0]); // Default to the first tool
      }
    };

    handleHashChange(); // Initial load
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // --- Usage Tracking & Monetization Logic ---
  const trackToolUse = useCallback(() => {
    if (usageData.isPro) return; // No tracking for Pro users

    const newCount = usageData.count + 1;
    const newUsageData = { ...usageData, count: newCount };
    setUsageData(newUsageData);
    saveUsageData(newUsageData);

    if (newCount % 5 === 0 && newCount <= MAX_FREE_USES) {
      setShowEmailPopup(true);
    } else if (newCount > MAX_FREE_USES) {
      setShowUpgradeModal(true);
    }
  }, [usageData]);

  const checkLimit = useCallback(() => {
    if (usageData.isPro) return true;
    if (usageData.count < MAX_FREE_USES) return true;
    
    setShowUpgradeModal(true);
    return false;
  }, [usageData]);

  const handleApiKeySubmit = () => {
    if (apiKey === PRO_API_KEY) {
      const newUsageData = { ...usageData, isPro: true };
      setUsageData(newUsageData);
      saveUsageData(newUsageData);
      setShowUpgradeModal(false);
      alert('API Key accepted! You now have unlimited Pro access.');
    } else {
      alert('Invalid API Key. Please check your key or subscribe to Pro.');
    }
  };

  // --- Tool Action Implementations (Wrapped with Limit Check) ---

  const formatJSON = () => {
    if (!checkLimit()) return;
    try {
      const parsed = JSON.parse(tool1Input);
      setTool1Output(JSON.stringify(parsed, null, 2));
      trackToolUse();
    } catch (e) {
      setTool1Output('Invalid JSON: ' + e.message);
    }
  };

  const optimizePrompt = () => {
    if (!checkLimit()) return;
    const improved = `Enhanced Prompt:\n${tool2Input}\n\n✨ Optimization Tips:\n• Add specific context and examples\n• Define desired output format\n• Include constraints or requirements\n• Specify tone and style preferences`;
    setTool2Output(improved);
    trackToolUse();
  };

  const generateSchema = () => {
    if (!checkLimit()) return;
    const description = tool3Input || 'Sample data structure';
    const schema = {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "properties": {
        "title": { "type": "string", "description": "Title field" },
        "description": { "type": "string" },
        "timestamp": { "type": "string", "format": "date-time" }
      },
      "required": ["title"]
    };
    setTool3Output(`Schema for: ${description}\n\n${JSON.stringify(schema, null, 2)}`);
    trackToolUse();
  };

  const generateImagePrompt = () => {
    if (!checkLimit()) return;
    const base = tool4Input || 'stunning landscape';
    const prompt = `${base}, masterpiece quality, 8k uhd, professional photography, perfect composition, dramatic lighting, cinematic, trending on artstation, highly detailed`;
    setTool4Output(`🎨 Optimized for Midjourney/DALL-E:\n\n${prompt}\n\n💡 Pro Tips:\n• Add style descriptors (photorealistic, oil painting, etc.)\n• Include lighting details (golden hour, studio lighting)\n• Specify camera angle or perspective\n• Add quality boosters (8k, uhd, masterpiece)`);
    trackToolUse();
  };

  const repurposeContent = () => {
    if (!checkLimit()) return;
    const content = tool5Input || 'Your content here';
    setTool5Output(`📝 Original Content:\n${content.substring(0, 100)}...\n\n🔄 Repurposed Formats:\n\n1️⃣ Blog Post (800-1500 words)\n• SEO-optimized title\n• Introduction with hook\n• Detailed sections with examples\n• Conclusion with CTA\n\n2️⃣ Social Media Thread\n• Twitter: 10-tweet thread\n• LinkedIn: Professional carousel\n• Instagram: Story series\n\n3️⃣ Email Newsletter\n• Catchy subject line\n• Personal greeting\n• Value-packed content\n• Clear call-to-action\n\n4️⃣ Video Script\n• Hook (first 3 seconds)\n• Main content (2-5 min)\n• Visual cues and b-roll notes\n• Strong outro with CTA\n\n5️⃣ Podcast Outline\n• Intro music timestamp\n• Key talking points\n• Guest questions (if applicable)\n• Sponsor mentions\n• Outro and next episode teaser`);
    trackToolUse();
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const currentTool = tools[activeTab];

  return (
    <div className={`app ${theme}`}>
      {/* --- SEO: JSON-LD Structured Data (Add this to your main index.html or use a React Helmet component) --- */}
      {/* 
      <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "AI Fix Lab",
        "url": "https://ai-fix-lab.vercel.app/",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://ai-fix-lab.vercel.app/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      })}
      </script>
      */}

      <div className="ad-banner top-ad">
        <div className="ad-placeholder">📢 Google AdSense - Horizontal Banner (728x90 or Responsive)</div>
      </div>

      <nav className="navbar">
        <div className="container">
          <div className="nav-brand">
            <span className="logo">🤖</span>
            <h1>AI Fix Lab</h1>
          </div>
          <div className="nav-right">
            {/* Pro Status Indicator */}
            {usageData.isPro && <span className="pro-badge">PRO UNLOCKED</span>}
            <button onClick={toggleTheme} className="theme-btn">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="container">
          <h2 className="hero-title">5 Free AI Tools for Developers & Creators</h2>
          <p className="hero-subtitle">No signup • {usageData.isPro ? 'Unlimited Pro Access' : `Free Daily Uses: ${MAX_FREE_USES - usageData.count} left`}</p>
          <div className="hero-badges">
            <span className="badge">✅ {usageData.isPro ? 'Pro' : 'Free'} Access</span>
            <span className="badge">⚡ Instant Results</span>
            <span className="badge">🔒 Privacy-First</span>
          </div>
          <button onClick={() => setShowUpgradeModal(true)} className="btn-secondary upgrade-btn">
            🚀 Upgrade to Pro for Unlimited Use
          </button>
        </div>
      </header>

      <div className="container">
        <div className="tabs">
          {tools.map((tool, idx) => (
            <a 
              key={idx}
              href={`#${tool.id}`} // Use hash for routing
              className={`tab ${activeTab === idx ? 'active' : ''}`}
              onClick={() => {
                setActiveTab(idx);
                updateSEO(tool);
              }}
            >
              <span className="tab-icon">{tool.icon}</span>
              <span className="tab-name">{tool.name}</span>
            </a>
          ))}
        </div>

        <div className="tool-section">
          <div className="tool-card">
            <div className="tool-header">
              <h3>{currentTool.icon} {currentTool.name}</h3>
              <p>{currentTool.desc}</p>
              {!usageData.isPro && (
                <p className="usage-info">
                  Free uses remaining today: <strong>{Math.max(0, MAX_FREE_USES - usageData.count)}</strong>
                </p>
              )}
            </div>
            
            <textarea 
              placeholder={`Enter your ${currentTool.name.toLowerCase()} here...`}
              value={currentTool.input}
              onChange={(e) => currentTool.setInput(e.target.value)}
              className="tool-input"
              disabled={!usageData.isPro && usageData.count >= MAX_FREE_USES}
            />
            
            <button onClick={currentTool.action} className="btn-primary" disabled={!usageData.isPro && usageData.count >= MAX_FREE_USES}>
              {usageData.count >= MAX_FREE_USES ? '🔒 Upgrade to Unlock' : `✨ ${currentTool.name === 'JSON Formatter' ? 'Format' : currentTool.name === 'Prompt Optimizer' ? 'Optimize' : 'Generate'}`}
            </button>

            {currentTool.output && (
              <div className="output">
                <div className="output-header">
                  <span>✅ Result</span>
                  <button onClick={() => navigator.clipboard.writeText(currentTool.output)} className="copy-btn">
                    📋 Copy
                  </button>
                </div>
                <pre>{currentTool.output}</pre>
              </div>
            )}
          </div>

          <div className="side-content">
            <div className="ad-banner side-ad">
              <div className="ad-placeholder">📢 AdSense Sidebar (300x600)</div>
            </div>
            
            <div className="affiliate-box">
              <h4>🚀 Recommended AI Tools (Affiliate)</h4>
              <a href="https://openai.com/chatgpt?utm_source=aifixlab" target="_blank" rel="noopener" className="affiliate-link">
                <strong>ChatGPT Plus</strong>
                <span>GPT-4 access + faster responses</span>
              </a>
              <a href="https://www.midjourney.com?utm_source=aifixlab" target="_blank" rel="noopener" className="affiliate-link">
                <strong>Midjourney</strong>
                <span>AI image generation</span>
              </a>
              <a href="https://github.com/features/copilot?utm_source=aifixlab" target="_blank" rel="noopener" className="affiliate-link">
                <strong>GitHub Copilot</strong>
                <span>AI pair programming</span>
              </a>
              {/* New Affiliate/Sponsorship Slot */}
              <div className="affiliate-link sponsored-link">
                <strong>✨ Sponsored Tool of the Week</strong>
                <span>Your tool could be here! Contact us for sponsorship.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>Why Use AI Fix Lab Free Tools?</h2>
          <div className="features-grid">
            <div className="feature">
              <span className="feature-icon">⚡</span>
              <h3>Instant Results</h3>
              <p>Get formatted JSON, optimized prompts, and schemas in seconds without any signup or installation.</p>
            </div>
            <div className="feature">
              <span className="feature-icon">🔒</span>
              <h3>Privacy First</h3>
              <p>Your data never leaves your browser. All processing happens client-side for maximum security.</p>
            </div>
            <div className="feature">
              <span className="feature-icon">💯</span>
              <h3>Always Free (Up to {MAX_FREE_USES} Uses/Day)</h3>
              <p>Use our professional tools for free every day. Upgrade to Pro for unlimited access and advanced features.</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Email Capture Popup (Original Logic) --- */}
      {showEmailPopup && (
        <div className="popup-overlay" onClick={() => setShowEmailPopup(false)}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={() => setShowEmailPopup(false)}>×</button>
            <h3>🎉 Join 10,000+ Developers</h3>
            <p>Get weekly AI tips, tool updates, and exclusive resources</p>
            <input 
              type="email" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="popup-input"
            />
            <button onClick={() => {
              if (email) {
                // IMPORTANT: Replace YOUR_WEBHOOK with your actual Zapier/Mailchimp/etc. webhook URL
                fetch('https://hooks.zapier.com/hooks/catch/YOUR_WEBHOOK/', {
                  method: 'POST',
                  body: JSON.stringify({ email, source: 'aifixlab' })
                });
                setShowEmailPopup(false);
                setEmail('');
              }
            }} className="popup-btn">
              Subscribe Free
            </button>
            <p className="popup-privacy">We respect your privacy. Unsubscribe anytime.</p>
          </div>
        </div>
      )}

      {/* --- New Upgrade/Monetization Modal --- */}
      {showUpgradeModal && (
        <div className="popup-overlay" onClick={() => setShowUpgradeModal(false)}>
          <div className="popup upgrade-modal" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={() => setShowUpgradeModal(false)}>×</button>
            <h3>🛑 Daily Limit Reached!</h3>
            <p>You have used your {MAX_FREE_USES} free daily uses. Upgrade to **AI Fix Lab Pro** for unlimited access, no ads, and API access.</p>
            
            <div className="pricing-box">
              <h4>AI Fix Lab Pro</h4>
              <p className="price">$5/month</p>
              <ul>
                <li>✅ Unlimited Tool Uses</li>
                <li>✅ API Access (10,000 calls/month)</li>
                <li>✅ Ad-Free Experience</li>
                <li>✅ Priority Feature Requests</li>
              </ul>
              {/* IMPORTANT: Replace # with your actual payment link (Stripe, Gumroad, etc.) */}
              <a href="#your-payment-link" target="_blank" rel="noopener" className="popup-btn">
                Get Pro Access Now
              </a>
            </div>

            <div className="api-key-section">
              <h4>Already a Pro User? Enter API Key:</h4>
              <input 
                type="text" 
                placeholder="Enter your Pro API Key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="popup-input"
              />
              <button onClick={handleApiKeySubmit} className="btn-secondary">
                Activate Pro
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>AI Fix Lab</h4>
              <p>Free AI tools for developers, creators, and businesses. Format JSON, optimize prompts, generate schemas, and more.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links (SEO Focus)</h4>
              {tools.map(tool => (
                <a key={tool.id} href={`#${tool.id}`}>{tool.name}</a>
              ))}
            </div>
            <div className="footer-section">
              <h4>Resources & Monetization</h4>
              <a href="https://github.com/newsintech/ai-fix-lab" target="_blank" rel="noopener">GitHub</a>
              <a href="#">Blog (SEO Content Hub)</a>
              <a href="#your-payment-link">Upgrade to Pro</a>
              <a href="#">API Docs (Monetization)</a>
              <a href="#">Contact for Sponsorship</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 AI Fix Lab. All rights reserved.</p>
            <div className="social-links">
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="https://github.com/newsintech/ai-fix-lab" aria-label="GitHub">💻</a>
            </div>
          </div>
        </div>
      </footer>

      <div className="ad-banner bottom-ad">
        <div className="ad-placeholder">📢 Google AdSense - Horizontal Banner (728x90)</div>
      </div>

      {/* --- CSS STYLES (Additions for new elements) --- */}
      <style jsx>{`
        /* Existing styles from original file (lines 277-863) */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .app {
          min-height: 100vh;
          font-family: 'Google Sans', 'Roboto', -apple-system, sans-serif;
          transition: all 0.3s ease;
        }

        .app.light {
          background: #ffffff;
          color: #202124;
        }

        .app.dark {
          background: #202124;
          color: #e8eaed;
        }

        .navbar {
          background: #4285f4;
          padding: 16px 0;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .app.dark .navbar {
          background: #1a73e8;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo {
          font-size: 32px;
        }

        .navbar h1 {
          color: white;
          font-size: 24px;
          font-weight: 500;
        }

        .navbar .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .theme-btn {
          background: rgba(255,255,255,0.2);
          border: none;
          padding: 8px 16px;
          border-radius: 20px;
          cursor: pointer;
          font-size: 18px;
          transition: all 0.2s;
        }

        .theme-btn:hover {
          background: rgba(255,255,255,0.3);
          transform: scale(1.05);
        }

        .hero {
          background: linear-gradient(135deg, #4285f4 0%, #34a853 100%);
          padding: 60px 24px;
          text-align: center;
          color: white;
        }

        .app.dark .hero {
          background: linear-gradient(135deg, #1a73e8 0%, #188038 100%);
        }

        .hero-title {
          font-size: 42px;
          font-weight: 400;
          margin-bottom: 16px;
        }

        .hero-subtitle {
          font-size: 18px;
          opacity: 0.9;
          margin-bottom: 24px;
        }

        .hero-badges {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .badge {
          background: rgba(255,255,255,0.2);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .tabs {
          display: flex;
          gap: 12px;
          margin: 40px 0 24px;
          overflow-x: auto;
          padding-bottom: 8px;
        }

        .tab {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: #f1f3f4;
          border: 2px solid transparent;
          border-radius: 24px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          color: #5f6368;
          transition: all 0.2s;
          white-space: nowrap;
        }

        .app.dark .tab {
          background: #303134;
          color: #9aa0a6;
        }

        .tab:hover {
          background: #e8eaed;
          color: #202124;
        }

        .app.dark .tab:hover {
          background: #3c4043;
          color: #e8eaed;
        }

        .tab.active {
          background: #4285f4;
          color: white;
          border-color: #4285f4;
        }

        .tab-icon {
          font-size: 18px;
        }

        .tool-section {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 24px;
          margin-bottom: 60px;
        }

        .tool-card {
          background: white;
          border: 1px solid #dadce0;
          border-radius: 8px;
          padding: 32px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }

        .app.dark .tool-card {
          background: #303134;
          border-color: #5f6368;
        }

        .tool-header h3 {
          font-size: 24px;
          font-weight: 400;
          color: #4285f4;
          margin-bottom: 8px;
        }

        .tool-header p {
          color: #5f6368;
          margin-bottom: 24px;
        }

        .tool-input {
          width: 100%;
          min-height: 200px;
          padding: 16px;
          border: 1px solid #dadce0;
          border-radius: 8px;
          font-family: 'Roboto Mono', monospace;
          font-size: 14px;
          resize: vertical;
          margin-bottom: 16px;
        }

        .app.dark .tool-input {
          background: #202124;
          border-color: #5f6368;
          color: #e8eaed;
        }

        .tool-input:focus {
          outline: none;
          border-color: #4285f4;
          box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.1);
        }

        .btn-primary {
          width: 100%;
          padding: 14px;
          background: #4285f4;
          color: white;
          border: none;
          border-radius: 24px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-primary:hover {
          background: #1a73e8;
          box-shadow: 0 2px 8px rgba(66, 133, 244, 0.3);
        }

        .output {
          margin-top: 24px;
          background: #f8f9fa;
          border: 1px solid #dadce0;
          border-radius: 8px;
          overflow: hidden;
        }

        .app.dark .output {
          background: #202124;
          border-color: #5f6368;
        }

        .output-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          background: #e8eaed;
          border-bottom: 1px solid #dadce0;
        }

        .app.dark .output-header {
          background: #303134;
          border-color: #5f6368;
        }

        .copy-btn {
          background: transparent;
          border: none;
          color: #4285f4;
          cursor: pointer;
          font-size: 14px;
          padding: 4px 8px;
        }

        .output pre {
          padding: 16px;
          overflow-x: auto;
          font-family: 'Roboto Mono', monospace;
          font-size: 13px;
          line-height: 1.6;
        }

        .side-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .ad-banner {
          text-align: center;
          padding: 20px;
        }

        .ad-placeholder {
          background: #f1f3f4;
          border: 2px dashed #dadce0;
          padding: 40px 20px;
          border-radius: 8px;
          color: #5f6368;
          font-size: 12px;
        }

        .app.dark .ad-placeholder {
          background: #303134;
          border-color: #5f6368;
          color: #9aa0a6;
        }

        .side-ad .ad-placeholder {
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .affiliate-box {
          background: #ffffff;
          border: 1px solid #dadce0;
          border-radius: 8px;
          padding: 24px;
        }

        .app.dark .affiliate-box {
          background: #303134;
          border-color: #5f6368;
        }

        .affiliate-box h4 {
          color: #4285f4;
          margin-bottom: 16px;
          font-size: 18px;
          font-weight: 500;
        }

        .affiliate-link {
          display: flex;
          flex-direction: column;
          padding: 12px;
          margin-bottom: 8px;
          background: #f8f9fa;
          border-radius: 8px;
          text-decoration: none;
          color: inherit;
          transition: all 0.2s;
        }

        .app.dark .affiliate-link {
          background: #202124;
        }

        .affiliate-link:hover {
          background: #e8eaed;
          transform: translateX(4px);
        }

        .app.dark .affiliate-link:hover {
          background: #3c4043;
        }

        .affiliate-link strong {
          color: #4285f4;
          margin-bottom: 4px;
        }

        .affiliate-link span {
          font-size: 13px;
          color: #5f6368;
        }

        .content-section {
          padding: 60px 0;
        }

        .content-section h2 {
          text-align: center;
          font-size: 32px;
          font-weight: 400;
          color: #4285f4;
          margin-bottom: 40px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
        }

        .feature {
          text-align: center;
          padding: 24px;
        }

        .feature-icon {
          font-size: 48px;
          display: block;
          margin-bottom: 16px;
        }

        .feature h3 {
          font-size: 20px;
          font-weight: 500;
          color: #202124;
          margin-bottom: 12px;
        }

        .app.dark .feature h3 {
          color: #e8eaed;
        }

        .feature p {
          color: #5f6368;
          line-height: 1.6;
        }

        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .popup {
          background: white;
          border-radius: 16px;
          padding: 40px;
          max-width: 400px;
          width: 90%;
          box-shadow: 0 8px 32px rgba(0,0,0,0.2);
          position: relative;
        }

        .app.dark .popup {
          background: #303134;
        }

        .popup-close {
          position: absolute;
          top: 16px;
          right: 16px;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #5f6368;
        }

        .popup h3 {
          color: #4285f4;
          margin-bottom: 12px;
          font-size: 24px;
        }

        .popup p {
          color: #5f6368;
          margin-bottom: 24px;
          line-height: 1.5;
        }

        .popup-input {
          width: 100%;
          padding: 14px;
          border: 1px solid #dadce0;
          border-radius: 8px;
          font-size: 14px;
          margin-bottom: 16px;
        }

        .app.dark .popup-input {
          background: #202124;
          border-color: #5f6368;
          color: #e8eaed;
        }

        .popup-btn {
          width: 100%;
          padding: 14px;
          background: #34a853;
          color: white;
          border: none;
          border-radius: 24px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
        }

        .popup-btn:hover {
          background: #188038;
        }

        .popup-privacy {
          text-align: center;
          font-size: 12px;
          color: #5f6368;
          margin-top: 12px;
        }

        .footer {
          background: #f8f9fa;
          border-top: 1px solid #dadce0;
          padding: 60px 24px 24px;
          margin-top: 60px;
        }

        .app.dark .footer {
          background: #202124;
          border-color: #5f6368;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-section h4 {
          color: #4285f4;
          margin-bottom: 16px;
          font-size: 16px;
          font-weight: 500;
        }

        .footer-section p {
          color: #5f6368;
          line-height: 1.6;
          font-size: 14px;
        }

        .footer-section a {
          display: block;
          color: #5f6368;
          text-decoration: none;
          margin-bottom: 8px;
          font-size: 14px;
          transition: color 0.2s;
        }

        .footer-section a:hover {
          color: #4285f4;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 24px;
          border-top: 1px solid #dadce0;
        }

        .app.dark .footer-bottom {
          border-color: #5f6368;
        }

        .footer-bottom p {
          color: #5f6368;
          font-size: 14px;
        }

        .social-links {
          display: flex;
          gap: 16px;
        }

        .social-links a {
          font-size: 24px;
          text-decoration: none;
          transition: transform 0.2s;
        }

        .social-links a:hover {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 32px; }
          .tool-section { grid-template-columns: 1fr; }
          .side-content { display: none; }
          .tabs { overflow-x: auto; }
          .footer-content { grid-template-columns: 1fr; }
          .footer-bottom { flex-direction: column; gap: 16px; }
        }

        /* --- NEW STYLES FOR MONETIZATION & SEO --- */
        .upgrade-btn {
          margin-top: 20px;
          padding: 12px 24px;
          background: #fbbc04; /* Google Yellow */
          color: #202124;
          border: none;
          border-radius: 24px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
        }
        .upgrade-btn:hover {
          background: #e8a800;
          box-shadow: 0 2px 8px rgba(251, 188, 4, 0.5);
        }
        .pro-badge {
          background: #fbbc04;
          color: #202124;
          padding: 4px 12px;
          border-radius: 16px;
          font-size: 12px;
          font-weight: 700;
          margin-right: 16px;
        }
        .usage-info {
          font-size: 14px;
          color: #e8a800;
          font-weight: 500;
          margin-bottom: 16px;
        }
        .tool-input:disabled {
          background: #f1f3f4;
          cursor: not-allowed;
          opacity: 0.7;
        }
        .app.dark .tool-input:disabled {
          background: #3c4043;
        }
        .upgrade-modal {
          max-width: 500px;
        }
        .pricing-box {
          border: 2px solid #4285f4;
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 20px;
          text-align: center;
        }
        .pricing-box h4 {
          color: #4285f4;
          font-size: 20px;
          margin-bottom: 8px;
        }
        .price {
          font-size: 32px;
          font-weight: 700;
          color: #34a853;
          margin-bottom: 16px;
        }
        .pricing-box ul {
          list-style: none;
          padding: 0;
          margin-bottom: 20px;
          text-align: left;
        }
        .pricing-box ul li {
          margin-bottom: 8px;
          font-size: 16px;
          color: #5f6368;
        }
        .pricing-box ul li::before {
          content: '✔️';
          margin-right: 8px;
          color: #34a853;
        }
        .api-key-section {
          padding-top: 20px;
          border-top: 1px solid #dadce0;
        }
        .api-key-section h4 {
          font-size: 16px;
          margin-bottom: 12px;
        }
        .btn-secondary {
          width: 100%;
          padding: 14px;
          background: #e8eaed;
          color: #202124;
          border: none;
          border-radius: 24px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-secondary:hover {
          background: #dadce0;
        }
        .sponsored-link {
          border: 2px dashed #fbbc04;
          background: #fffbe5;
        }
        .app.dark .sponsored-link {
          background: #3c4043;
        }
      `}</style>
    </div>
  );
}
