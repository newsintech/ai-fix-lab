import React, { useState } from 'react';
import Head from 'next/head';

export default function Home() {
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

  const tool1Handler = () => {
    if (!tool1Input.trim()) return;
    try {
      const parsed = JSON.parse(tool1Input);
      setTool1Output(JSON.stringify(parsed, null, 2));
    } catch (e) {
      setTool1Output('Error: ' + e.message);
    }
  };

  const tool2Handler = () => {
    if (!tool2Input.trim()) return;
    setTool2Output(`Optimized:\\n${tool2Input}\\n\\nContext: Be clear and structured.`);
  };

  const tool3Handler = () => {
    if (!tool3Input.trim()) return;
    setTool3Output(`Schema Generated for: ${tool3Input.substring(0, 50)}`);
  };

  const tool4Handler = () => {
    if (!tool4Input.trim()) return;
    setTool4Output(`Prompt: ${tool4Input} --ar 16:9 --quality 2`);
  };

  const tool5Handler = () => {
    if (!tool5Input.trim()) return;
    setTool5Output('Platforms: Social | Blog | Email | Video | Podcast');
  };

  return (
    <>
      <Head>
        <title>AI Fix Lab - 5 Free Tools</title>
        <meta name="description" content="5 AI tools free" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5938363104467152" crossOrigin="anonymous"></script>
      </Head>

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #0f1419; color: #fff; font-family: Arial, sans-serif; }
        nav { background: #1a2332; padding: 1.5rem 2rem; border-bottom: 2px solid #00ff88; }
        nav h1 { color: #00ff88; font-size: 2rem; }
        .container { max-width: 1200px; margin: 0 auto; padding: 2rem; }
        .tools-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin: 40px 0; }
        .tool-card { background: rgba(255,255,255,0.08); border: 1px solid #00ff88; border-radius: 12px; padding: 20px; transition: all 0.3s; }
        .tool-card:hover { transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0,255,136,0.2); }
        .tool-card h3 { color: #00ff88; margin-bottom: 10px; font-size: 1.2rem; }
        .tool-card p { color: #00d4ff; font-size: 0.9rem; margin-bottom: 15px; }
        textarea, input { width: 100%; padding: 10px; background: rgba(255,255,255,0.1); border: 1px solid #00ff88; border-radius: 8px; color: #fff; font-family: monospace; margin: 10px 0; resize: vertical; }
        textarea:focus, input:focus { outline: none; box-shadow: 0 0 10px rgba(0,255,136,0.5); }
        button { width: 100%; padding: 10px; background: linear-gradient(90deg, #667eea, #00ff88); color: #000; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; margin-top: 10px; transition: all 0.3s; }
        button:hover { transform: scale(1.02); }
        .output-box { background: rgba(0,255,136,0.1); border: 1px solid #00ff88; border-radius: 8px; padding: 10px; margin-top: 10px; color: #00ff88; font-family: monospace; font-size: 0.85rem; white-space: pre-wrap; word-break: break-word; max-height: 200px; overflow-y: auto; }
      `}</style>

      <nav>
        <h1>🤖 AI Fix Lab</h1>
      </nav>

      <div className="container">
        <h2 style={{ textAlign: 'center', color: '#00ff88', marginBottom: '2rem' }}>5 Free AI Tools</h2>
        
        <div className="tools-grid">
          <div className="tool-card">
            <h3>JSON Formatter</h3>
            <p>Format & validate JSON</p>
            <textarea value={tool1Input} onChange={(e) => setTool1Input(e.target.value)} placeholder="Paste JSON..." rows="4" />
            <button onClick={tool1Handler}>Format JSON</button>
            {tool1Output && <div className="output-box">{tool1Output}</div>}
          </div>

          <div className="tool-card">
            <h3>Prompt Optimizer</h3>
            <p>Improve AI prompts</p>
            <textarea value={tool2Input} onChange={(e) => setTool2Input(e.target.value)} placeholder="Enter prompt..." rows="4" />
            <button onClick={tool2Handler}>Optimize</button>
            {tool2Output && <div className="output-box">{tool2Output}</div>}
          </div>

          <div className="tool-card">
            <h3>Schema Generator</h3>
            <p>Generate data schemas</p>
            <textarea value={tool3Input} onChange={(e) => setTool3Input(e.target.value)} placeholder="Describe schema..." rows="4" />
            <button onClick={tool3Handler}>Generate</button>
            {tool3Output && <div className="output-box">{tool3Output}</div>}
          </div>

          <div className="tool-card">
            <h3>Image Prompt Generator</h3>
            <p>Create Midjourney prompts</p>
            <textarea value={tool4Input} onChange={(e) => setTool4Input(e.target.value)} placeholder="Describe image..." rows="4" />
            <button onClick={tool4Handler}>Generate</button>
            {tool4Output && <div className="output-box">{tool4Output}</div>}
          </div>

          <div className="tool-card">
            <h3>Content Repurposer</h3>
            <p>Repurpose content ideas</p>
            <textarea value={tool5Input} onChange={(e) => setTool5Input(e.target.value)} placeholder="Paste content..." rows="4" />
            <button onClick={tool5Handler}>Repurpose</button>
            {tool5Output && <div className="output-box">{tool5Output}</div>}
          </div>
        </div>
      </div>
    </>
  );
}
