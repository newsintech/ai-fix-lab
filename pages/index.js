import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  // THEME STATE
  const [theme, setTheme] = useState('dark');
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
  const [activeTab, setActiveTab] = useState(0);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [toolUses, setToolUses] = useState(0);

  // LOAD THEME FROM LOCAL STORAGE
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
  }, []);

  // THEME TOGGLE
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // TOOL FUNCTIONS
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
    const improved = tool2Input.split(' ').filter(w => w.length > 2).join(' ');
    setTool2Output(`Enhanced Prompt:\n${improved}\n\nTips:\n- Add specificity\n- Include context\n- Define output format`);
    trackToolUse();
  };

  const generateSchema = () => {
    const schema = {
      "type": "object",
      "properties": {
        "title": { "type": "string" },
        "description": { "type": "string" }
      },
      "required": ["title"]
    };
    setTool3Output(JSON.stringify(schema, null, 2));
    trackToolUse();
  };

  const generateImagePrompt = () => {
    const prompt = `${tool4Input || 'beautiful landscape'}, professional quality, detailed, 8k, trending on artstation`;
    setTool4Output(`Optimized for DALL-E/Midjourney:\n\n${prompt}`);
    trackToolUse();
  };

  const repurposeContent = () => {
    setTool5Output(`Original: ${tool5Input}\n\nRepurposed:\n1. Blog Post\n2. Social Media Thread\n3. Email Newsletter\n4. Video Script\n5. Podcast Outline`);
    trackToolUse();
  };

  // EMAIL TRACKING
  const trackToolUse = () => {
    const newCount = toolUses + 1;
    setToolUses(newCount);
    if (newCount % 3 === 0) {
      setShowEmailPopup(true);
    }
  };

  return (
    <>
      <Head>
        <title>AI Fix Lab – Free AI Tools to Fix Code, SEO & Content | JSON Formatter, Prompt Optimizer & More</title>
        <meta name='description' content='Free AI Tools: JSON Formatter, Prompt Optimizer, Schema Generator, Image Prompt Creator, Content Repurposer - No signup required' />
        <meta name='keywords' content='free AI tools, JSON formatter, prompt optimizer, AI tools online, free AI tools no signup' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta property='og:title' content='AI Fix Lab – Free AI Tools to Fix Code, SEO & Content' />
        <meta property='og:description' content='Generate better prompts, format JSON, create schemas - All free online tools' />
        <meta property='og:image' content='https://ai-fix-lab.vercel.app/og-image.png' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='author' content='AI Fix Lab' />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href='https://ai-fix-lab.vercel.app' />
        <link rel='icon' href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤖</text></svg>' />
        <script async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5938363104467152' crossOrigin='anonymous'></script>
        <script type='application/ld+json'>{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          'name': 'AI Fix Lab',
          'description': '5 Free AI Tools for developers and content creators',
          'url': 'https://ai-fix-lab.vercel.app',
          'applicationCategory': 'Productivity',
          'operatingSystem': 'Web',
          'offers': {
            '@type': 'Offer',
            'price': '0',
            'priceCurrency': 'USD'
          }
        })}</script>
      </Head>

      <div className={`app ${theme}`}>
        {/* NAVIGATION */}
        <nav className={`navbar ${theme}`}>
          <div className='container'>
            <h1>🤖 AI Fix Lab</h1>
            <div className='nav-right'>
              <button onClick={toggleTheme} className='theme-toggle'>
                {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
              </button>
            </div>
          </div>
        </nav>

        {/* AD BANNER TOP */}
        <div className='ad-banner'>
          <ins className='adsbygoogle' style={{display: 'block'}} data-ad-client='ca-pub-5938363104467152' data-ad-slot='1234567890' data-ad-format='auto' data-full-width-responsive='true'></ins>
        </div>

        {/* MAIN CONTENT */}
        <div className='container'>
          <header className='header'>
            <h2>5 Free AI Tools</h2>
            <p>No signup required • Always free</p>
          </header>

          {/* TAB NAVIGATION */}
          <div className='tabs'>
            {['JSON Formatter', 'Prompt Optimizer', 'Schema Generator', 'Image Prompt', 'Content Repurpose'].map((name, idx) => (
              <button key={idx} className={`tab ${activeTab === idx ? 'active' : ''}`} onClick={() => setActiveTab(idx)}>
                {name}
              </button>
            ))}
          </div>

          {/* TOOLS GRID */}
          <div className='tools-grid'>
            {/* TOOL 1: JSON FORMATTER */}
            {activeTab === 0 && (
              <div className='tool-card'>
                <h3>📋 JSON Formatter</h3>
                <p>Format & validate JSON instantly</p>
                <textarea placeholder='Paste JSON here...' value={tool1Input} onChange={(e) => setTool1Input(e.target.value)} />
                <button onClick={formatJSON} className='btn-primary'>Format JSON</button>
                {tool1Output && <div className='output'><pre>{tool1Output}</pre></div>}
              </div>
            )}

            {/* TOOL 2: PROMPT OPTIMIZER */}
            {activeTab === 1 && (
              <div className='tool-card'>
                <h3>⚡ Prompt Optimizer</h3>
                <p>Improve your AI prompts</p>
                <textarea placeholder='Enter your prompt...' value={tool2Input} onChange={(e) => setTool2Input(e.target.value)} />
                <button onClick={optimizePrompt} className='btn-primary'>Optimize</button>
                {tool2Output && <div className='output'><pre>{tool2Output}</pre></div>}
              </div>
            )}

            {/* TOOL 3: SCHEMA GENERATOR */}
            {activeTab === 2 && (
              <div className='tool-card'>
                <h3>🔠 Schema Generator</h3>
                <p>Generate JSON schemas</p>
                <textarea placeholder='Describe your data structure...' value={tool3Input} onChange={(e) => setTool3Input(e.target.value)} />
                <button onClick={generateSchema} className='btn-primary'>Generate Schema</button>
                {tool3Output && <div className='output'><pre>{tool3Output}</pre></div>}
              </div>
            )}

            {/* TOOL 4: IMAGE PROMPT */}
            {activeTab === 3 && (
              <div className='tool-card'>
                <h3>🎨 Image Prompt Generator</h3>
                <p>Create Midjourney/DALL-E prompts</p>
                <textarea placeholder='Describe the image you want...' value={tool4Input} onChange={(e) => setTool4Input(e.target.value)} />
                <button onClick={generateImagePrompt} className='btn-primary'>Generate Prompt</button>
                {tool4Output && <div className='output'><pre>{tool4Output}</pre></div>}
              </div>
            )}

            {/* TOOL 5: CONTENT REPURPOSE */}
            {activeTab === 4 && (
              <div className='tool-card'>
                <h3>📚 Content Repurpose</h3>
                <p>Transform content to multiple formats</p>
                <textarea placeholder='Paste your original content...' value={tool5Input} onChange={(e) => setTool5Input(e.target.value)} />
                <button onClick={repurposeContent} className='btn-primary'>Repurpose</button>
                {tool5Output && <div className='output'><pre>{tool5Output}</pre></div>}
              </div>
            )}
          </div>
        </div>

        {/* EMAIL POPUP */}
        {showEmailPopup && (
          <div className='popup-overlay' onClick={() => setShowEmailPopup(false)}>
            <div className='popup' onClick={(e) => e.stopPropagation()}>
              <h3>🎉 Join 1000+ Developers</h3>
              <p>Get AI tips & tool updates weekly</p>
              <input type='email' placeholder='Your email' value={email} onChange={(e) => setEmail(e.target.value)} />
              <button onClick={() => {
                if (email) {
                  fetch('https://hooks.zapier.com/hooks/catch/YOUR_ZAPIER_WEBHOOK/', {method: 'POST', body: JSON.stringify({email})});
                  setShowEmailPopup(false);
                  setEmail('');
                }
              }}>Subscribe</button>
            </div>
          </div>
        )}

        {/* FOOTER WITH AFFILIATE LINKS */}
        <footer className={`footer ${theme}`}>
          <div className='container'>
            <p>&copy; 2025 AI Fix Lab. Free Tools For Everyone.</p>
            <div className='affiliate-links'>
              <a href='https://github.com/features/copilot?utm_source=aifixlab' target='_blank' rel='noopener'>GitHub Copilot</a> | 
              <a href='https://openai.com/chatgpt/plus/?utm_source=aifixlab' target='_blank' rel='noopener'> ChatGPT Plus</a> | 
              <a href='https://www.midjourney.com/?utm_source=aifixlab' target='_blank' rel='noopener'> Midjourney</a> | 
              <a href='https://zapier.com/?utm_source=aifixlab' target='_blank' rel='noopener'> Zapier</a>
            </div>
          </div>
        </footer>

        {/* AD BANNER FOOTER */}
        <div className='ad-banner'>
          <ins className='adsbygoogle' style={{display: 'block'}} data-ad-client='ca-pub-5938363104467152' data-ad-slot='9876543210' data-ad-format='auto' data-full-width-responsive='true'></ins>
        </div>
      </div>

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; }

        .app.dark {
          background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%);
          color: #e0e0e0;
        }
        .app.light {
background: linear-gradient(135deg, #f8fafc 0%, #f0f4f8 100%);  background: #F5F5F7;
color: ##111827;
        }

        .navbar {
          padding: 20px 0;
          border-bottom: 2px solid #00d4ff;
          position: sticky;
          top: 0;
          z-index: 100;
          backdrop-filter: blur(10px);
        }
        .navbar.dark {
          background: rgba(10, 14, 39, 0.8);
        }
        .navbar.light {
          background: rgba(248, 250, 252, 0.8);
        }
        .navbar h1 {
          font-size: 28px;
          color: #00d4ff;
          letter-spacing: 2px;
        }
        .navbar .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav-right { display: flex; gap: 15px; align-items: center; }
        .theme-toggle {
          padding: 8px 16px;
          background: #7c3aed;
          color: white;
          border: none;
          border-radius: 20px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s;
        }
        .theme-toggle:hover { background: #6d28d9; transform: scale(1.05); }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .header {
          text-align: center;
          padding: 60px 20px 40px;
          animation: fadeInDown 0.6s ease-out;
        }
        .header h2 {
          font-size: 42px;
          margin-bottom: 10px;
          color: #00d4ff;
          text-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
        }
        .header p {
          font-size: 18px;
          opacity: 0.7;
        }

        .tabs {
          display: flex;
          gap: 10px;
          margin: 30px 0;
          flex-wrap: wrap;
          justify-content: center;
          animation: fadeInUp 0.6s ease-out;
        }
        .tab {
          padding: 12px 20px;
          background: rgba(124, 58, 237, 0.2);
          border: 2px solid #7c3aed;
          color: #00d4ff;
          border-radius: 25px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s;
        }
        .tab.active {
          background: #7c3aed;
          color: white;
          box-shadow: 0 0 20px rgba(124, 58, 237, 0.6);
        }
        .tab:hover { transform: translateY(-2px); }

        .tools-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
          margin: 40px 0;
        }
        .tool-card {
          background: rgba(124, 58, 237, 0.1);
          border: 2px solid #00d4ff;
          border-radius: 15px;
          padding: 30px;
          animation: fadeIn 0.6s ease-out;
        }
        .app.light .tool-card {
          background: rgba(13, 148, 136, 0.05);
          border: 2px solid #0d9488;
        }
        .tool-card h3 {
          color: #00d4ff;
          margin-bottom: 10px;
          font-size: 24px;
        }
        .tool-card p {
          opacity: 0.7;
          margin-bottom: 20px;
        }
        textarea {
          width: 100%;
          min-height: 150px;
          padding: 15px;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid #7c3aed;
          border-radius: 10px;
          color: #00d4ff;
          font-family: 'Courier New', monospace;
          resize: vertical;
          margin-bottom: 15px;
        }
        .app.light textarea {
          background: rgba(0, 0, 0, 0.05);
          color: #1e293b;
          border: 1px solid #0d9488;
        }
        textarea:focus {
          outline: none;
          box-shadow: 0 0 15px rgba(124, 58, 237, 0.5);
        }

        .btn-primary {
          width: 100%;
          padding: 15px;
          background: linear-gradient(135deg, #7c3aed 0%, #00d4ff 100%);
          color: white;
          border: none;
          border-radius: 10px;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(124, 58, 237, 0.4);
        }

        .output {
          margin-top: 20px;
          background: rgba(0, 0, 0, 0.5);
          border-left: 4px solid #00d4ff;
          border-radius: 10px;
          padding: 20px;
          overflow-x: auto;
        }
        .output pre {
          color: #00d4ff;
          font-family: 'Courier New', monospace;
          font-size: 14px;
          line-height: 1.6;
        }
        .app.light .output {
          background: rgba(0, 0, 0, 0.05);
        }
        .app.light .output pre {
          color: #0d9488;
        }

        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .popup {
          background: linear-gradient(135deg, #1a1f3a 0%, #2d1b4e 100%);
          padding: 40px;
          border-radius: 20px;
          border: 2px solid #00d4ff;
          box-shadow: 0 20px 60px rgba(0, 212, 255, 0.3);
          max-width: 400px;
          text-align: center;
        }
        .popup h3 {
          color: #00d4ff;
          margin-bottom: 10px;
          font-size: 24px;
        }
        .popup p {
          opacity: 0.7;
          margin-bottom: 20px;
        }
        .popup input {
          width: 100%;
          padding: 12px;
          border: 1px solid #7c3aed;
          border-radius: 8px;
          background: rgba(124, 58, 237, 0.1);
          color: #00d4ff;
          margin-bottom: 15px;
          font-size: 14px;
        }
        .popup button {
          width: 100%;
          padding: 12px;
          background: #7c3aed;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s;
        }
        .popup button:hover { background: #6d28d9; }

        .ad-banner {
          text-align: center;
          padding: 20px 0;
          margin: 20px 0;
          min-height: 100px;
        }

        .footer {
          background: rgba(124, 58, 237, 0.1);
          border-top: 2px solid #7c3aed;
          padding: 40px 0;
          margin-top: 60px;
          text-align: center;
        }
        .footer p {
          margin-bottom: 15px;
          opacity: 0.8;
        }
        .affiliate-links a {
          color: #00d4ff;
          text-decoration: none;
          margin: 0 5px;
          font-weight: 600;
          transition: all 0.3s;
        }
        .affiliate-links a:hover {
          text-shadow: 0 0 10px rgba(0, 212, 255, 0.8);
          transform: scale(1.05);
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @media (max-width: 768px) {
          .header h2 { font-size: 32px; }
          .tabs { flex-wrap: wrap; }
          .tab { padding: 10px 15px; font-size: 14px; }
          .tool-card { padding: 20px; }
          .popup { padding: 30px 20px; }
        }
      `}</style>
    </>
  );
}
