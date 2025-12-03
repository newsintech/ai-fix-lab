import React, { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [tool1Input, setTool1Input] = useState('');
  const [tool1Output, setTool1Output] = useState('');
  
  const [tool2Input, setTool2Input] = useState('');
  const [tool2Output, setTool2Output] = useState('');
  
  const [tool3Input, setTool3Input] = useState('');
  const [tool3Output, setTool3Output] = useState('');

  // Tool 1: JSON Formatter
  const handleJsonFormat = () => {
    if (!tool1Input.trim()) return;
    try {
      const parsed = JSON.parse(tool1Input);
      setTool1Output(JSON.stringify(parsed, null, 2));
    } catch (e) {
      setTool1Output('❌ Invalid JSON: ' + e.message);
    }
  };

  // Tool 2: Prompt Optimizer (for ChatGPT/Claude)
  const handleOptimizePrompt = () => {
    if (!tool2Input.trim()) return;
    const prompt = tool2Input.trim();
    const optimized = `Task: ${prompt}

Context: Provide clear, detailed instructions.
Format: Well-structured response expected.
Tone: Professional and helpful.
Details: Include examples if applicable.`;
    setTool2Output(optimized);
  };

  // Tool 3: SEO Meta Generator
  const handleGenerateSEO = () => {
    if (!tool3Input.trim()) return;
    const text = tool3Input.trim();
    const words = text.split(/\s+/);
    const title = text.substring(0, 60) + (text.length > 60 ? '...' : '');
    const description = text.substring(0, 160) + (text.length > 160 ? '...' : '');
    const keywords = [...new Set(words.filter(w => w.length > 4))].slice(0, 5).join(', ');
    
    setTool3Output(`📄 SEO Meta Tags:\n\n<title>${title}</title>\n\n<meta name="description" content="${description}">\n\n<meta name="keywords" content="${keywords}">`);
  };

  return (
    <>
      <Head>
        <title>AI Fix Lab - Free AI Tools</title>
        <meta name="description" content="Free AI tools for developers and creators" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <nav>
        <div className="container nav-container">
          <h2 style={{ color: '#667eea' }}>🤖 AI Fix Lab</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#tools">AI Tools</a></li>
          </ul>
        </div>
      </nav>

      <section id="home" className="hero">
        <div style={{ textAlign: 'center' }}>
          <h1>🚀 AI Fix Lab</h1>
          <p>Free AI Tools for Developers & Creators</p>
          <button className="cta-button" onClick={() => document.getElementById('tools').scrollIntoView()}>Try Tools Now</button>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why AI Fix Lab?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>💡 Developer Tools</h3>
              <p>JSON formatting, code optimization, API helpers.</p>
            </div>
            <div className="feature-card">
              <h3>🔠 Prompt Engineering</h3>
              <p>Optimize your ChatGPT & Claude prompts instantly.</p>
            </div>
            <div className="feature-card">
              <h3>🌐 SEO Optimization</h3>
              <p>Generate meta tags, descriptions, keywords automatically.</p>
            </div>
            <div className="feature-card">
              <h3>🔐 100% Private</h3>
              <p>No data collection. No tracking. Zero logs.</p>
            </div>
            <div className="feature-card">
              <h3>⚡ Lightning Fast</h3>
              <p>Instant results on Vercel CDN infrastructure.</p>
            </div>
            <div className="feature-card">
              <h3>📱 Works Everywhere</h3>
              <p>Mobile, tablet, desktop - all devices supported.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="tools" className="tools">
        <div className="container">
          <h2 className="section-title">🛠️ Free AI Tools (In-Demand 2025)</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {/* Tool 1: JSON Formatter */}
            <div className="tool-card">
              <h3>🔠 JSON Formatter & Validator</h3>
              <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '10px' }}>Format, validate & beautify JSON instantly</p>
              <textarea 
                value={tool1Input} 
                onChange={(e) => setTool1Input(e.target.value)}
                placeholder="Paste your JSON here..."
                rows="6"
                style={{ fontFamily: 'monospace', fontSize: '12px' }}
              />
              <button onClick={handleJsonFormat}>📄 Format JSON</button>
              {tool1Output && <pre style={{ marginTop: '10px', padding: '10px', background: '#f5f5f5', borderRadius: '5px', fontSize: '12px', overflow: 'auto', maxHeight: '200px' }}>{tool1Output}</pre>}
            </div>

            {/* Tool 2: Prompt Optimizer */}
            <div className="tool-card">
              <h3>✨ Prompt Optimizer for AI</h3>
              <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '10px' }}>Improve prompts for ChatGPT, Claude & Gemini</p>
              <textarea 
                value={tool2Input} 
                onChange={(e) => setTool2Input(e.target.value)}
                placeholder="Enter your prompt/question..."
                rows="6"
              />
              <button onClick={handleOptimizePrompt}>🚀 Optimize Prompt</button>
              {tool2Output && <pre style={{ marginTop: '10px', padding: '10px', background: '#f5f5f5', borderRadius: '5px', fontSize: '12px', overflow: 'auto', maxHeight: '200px', whiteSpace: 'pre-wrap' }}>{tool2Output}</pre>}
            </div>

            {/* Tool 3: SEO Meta Generator */}
            <div className="tool-card">
              <h3>🌐 SEO Meta Tag Generator</h3>
              <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '10px' }}>Auto-generate title, description & keywords</p>
              <textarea 
                value={tool3Input} 
                onChange={(e) => setTool3Input(e.target.value)}
                placeholder="Paste your content here..."
                rows="6"
              />
              <button onClick={handleGenerateSEO}>📄 Generate SEO Tags</button>
              {tool3Output && <pre style={{ marginTop: '10px', padding: '10px', background: '#f5f5f5', borderRadius: '5px', fontSize: '12px', overflow: 'auto', maxHeight: '200px', whiteSpace: 'pre-wrap' }}>{tool3Output}</pre>}
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container" style={{ textAlign: 'center' }}>
          <p>&copy; 2025 AI Fix Lab. Free AI Tools for Everyone.</p>
          <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
            <a href="#">Privacy</a> | <a href="#">Terms</a>
          </p>
        </div>
      </footer>
    </>
  );
}
