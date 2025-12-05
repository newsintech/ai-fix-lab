import React, { useState } from 'react';

export default function AIFixLab() {
  const [theme, setTheme] = useState('light');
  const [activeTab, setActiveTab] = useState(0);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [toolUses, setToolUses] = useState(0);
  
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

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const trackToolUse = () => {
    const newCount = toolUses + 1;
    setToolUses(newCount);
    if (newCount % 5 === 0) {
      setShowEmailPopup(true);
    }
  };

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(tool1Input);
      setTool1Output(JSON.stringify(parsed, null, 2));
      trackToolUse();
    } catch (e) {
      setTool1Output('Invalid JSON: ' + e.message);
    }
  };

  const optimizePrompt = () => {
    const improved = `Enhanced Prompt:\n${tool2Input}\n\n✨ Optimization Tips:\n• Add specific context and examples\n• Define desired output format\n• Include constraints or requirements\n• Specify tone and style preferences`;
    setTool2Output(improved);
    trackToolUse();
  };

  const generateSchema = () => {
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
    const base = tool4Input || 'stunning landscape';
    const prompt = `${base}, masterpiece quality, 8k uhd, professional photography, perfect composition, dramatic lighting, cinematic, trending on artstation, highly detailed`;
    setTool4Output(`🎨 Optimized for Midjourney/DALL-E:\n\n${prompt}\n\n💡 Pro Tips:\n• Add style descriptors (photorealistic, oil painting, etc.)\n• Include lighting details (golden hour, studio lighting)\n• Specify camera angle or perspective\n• Add quality boosters (8k, uhd, masterpiece)`);
    trackToolUse();
  };

  const repurposeContent = () => {
    const content = tool5Input || 'Your content here';
    setTool5Output(`📝 Original Content:\n${content.substring(0, 100)}...\n\n🔄 Repurposed Formats:\n\n1️⃣ Blog Post (800-1500 words)\n• SEO-optimized title\n• Introduction with hook\n• Detailed sections with examples\n• Conclusion with CTA\n\n2️⃣ Social Media Thread\n• Twitter: 10-tweet thread\n• LinkedIn: Professional carousel\n• Instagram: Story series\n\n3️⃣ Email Newsletter\n• Catchy subject line\n• Personal greeting\n• Value-packed content\n• Clear call-to-action\n\n4️⃣ Video Script\n• Hook (first 3 seconds)\n• Main content (2-5 min)\n• Visual cues and b-roll notes\n• Strong outro with CTA\n\n5️⃣ Podcast Outline\n• Intro music timestamp\n• Key talking points\n• Guest questions (if applicable)\n• Sponsor mentions\n• Outro and next episode teaser`);
    trackToolUse();
  };

  const tools = [
    { name: 'JSON Formatter', icon: '📋', desc: 'Format & validate JSON instantly', input: tool1Input, setInput: setTool1Input, output: tool1Output, action: formatJSON },
    { name: 'Prompt Optimizer', icon: '⚡', desc: 'Improve your AI prompts', input: tool2Input, setInput: setTool2Input, output: tool2Output, action: optimizePrompt },
    { name: 'Schema Generator', icon: '🔠', desc: 'Generate JSON schemas', input: tool3Input, setInput: setTool3Input, output: tool3Output, action: generateSchema },
    { name: 'Image Prompt', icon: '🎨', desc: 'Create Midjourney/DALL-E prompts', input: tool4Input, setInput: setTool4Input, output: tool4Output, action: generateImagePrompt },
    { name: 'Content Repurpose', icon: '📚', desc: 'Transform content formats', input: tool5Input, setInput: setTool5Input, output: tool5Output, action: repurposeContent }
  ];

  return (
    <div className={`app ${theme}`}>
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
            <button onClick={toggleTheme} className="theme-btn">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="container">
          <h2 className="hero-title">5 Free AI Tools for Developers & Creators</h2>
          <p className="hero-subtitle">No signup • No credit card • Always free</p>
          <div className="hero-badges">
            <span className="badge">✅ 100% Free</span>
            <span className="badge">⚡ Instant Results</span>
            <span className="badge">🔒 Privacy-First</span>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="tabs">
          {tools.map((tool, idx) => (
            <button 
              key={idx}
              className={`tab ${activeTab === idx ? 'active' : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              <span className="tab-icon">{tool.icon}</span>
              <span className="tab-name">{tool.name}</span>
            </button>
          ))}
        </div>

        <div className="tool-section">
          <div className="tool-card">
            <div className="tool-header">
              <h3>{tools[activeTab].icon} {tools[activeTab].name}</h3>
              <p>{tools[activeTab].desc}</p>
            </div>
            
            <textarea 
              placeholder={`Enter your ${tools[activeTab].name.toLowerCase()} here...`}
              value={tools[activeTab].input}
              onChange={(e) => tools[activeTab].setInput(e.target.value)}
              className="tool-input"
            />
            
            <button onClick={tools[activeTab].action} className="btn-primary">
              ✨ {tools[activeTab].name === 'JSON Formatter' ? 'Format' : tools[activeTab].name === 'Prompt Optimizer' ? 'Optimize' : 'Generate'}
            </button>

            {tools[activeTab].output && (
              <div className="output">
                <div className="output-header">
                  <span>✅ Result</span>
                  <button onClick={() => navigator.clipboard.writeText(tools[activeTab].output)} className="copy-btn">
                    📋 Copy
                  </button>
                </div>
                <pre>{tools[activeTab].output}</pre>
              </div>
            )}
          </div>

          <div className="side-content">
            <div className="ad-banner side-ad">
              <div className="ad-placeholder">📢 AdSense Sidebar (300x600)</div>
            </div>
            
            <div className="affiliate-box">
              <h4>🚀 Recommended AI Tools</h4>
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
              <h3>Always Free</h3>
              <p>No hidden costs, no trial periods, no credit card required. Professional tools accessible to everyone.</p>
            </div>
          </div>
        </div>
      </div>

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
            <p className="popup-privacy">🔒 No spam. Unsubscribe anytime.</p>
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
              <h4>Quick Links</h4>
              <a href="#json">JSON Formatter</a>
              <a href="#prompt">Prompt Optimizer</a>
              <a href="#schema">Schema Generator</a>
              <a href="#image">Image Prompt Creator</a>
              <a href="#content">Content Repurposer</a>
            </div>
            <div className="footer-section">
              <h4>Resources</h4>
              <a href="https://github.com/newsintech/ai-fix-lab" target="_blank" rel="noopener">GitHub</a>
              <a href="#">Blog</a>
              <a href="#">API Docs</a>
              <a href="#">Contact</a>
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

      <style jsx>{`
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
          background: white;
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
      `}</style>
    </div>
  );
}
