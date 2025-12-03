import React, { useState } from 'react';
import Head from 'next/head';

const AFFILIATE_LINKS = {
  github: 'https://github.com/features/copilot',
  openai: 'https://openai.com/api/',
  midjourney: 'https://www.midjourney.com/invite/fxb8dqw8dvm',
  munch: 'https://getmunch.com',
};

export default function Home() {
  // Tool 1: Code Generator
  const [codePrompt, setCodePrompt] = useState('');
  const [codeOutput, setCodeOutput] = useState('');

  const generateCode = () => {
    if (!codePrompt.trim()) return;
    const code = `// ${codePrompt}\nfunction solution() {\n  // Your implementation here\n  return result;\n}\n\n// Example usage:\nconsole.log(solution());`;
    setCodeOutput(code);
  };

  // Tool 2: Prompt Optimizer
  const [promptInput, setPromptInput] = useState('');
  const [promptOutput, setPromptOutput] = useState('');

  const optimizePrompt = () => {
    if (!promptInput.trim()) return;
    const optimized = `🎯 OPTIMIZED PROMPT:\n\n[TASK]\n${promptInput}\n\n[CONTEXT]\nProvide accurate, detailed responses.\n\n[FORMAT]\nStructured, clear, actionable output.\n\n[TONE]\nProfessional, helpful, concise.\n\n[EXAMPLE]\nInclude relevant examples if applicable.`;
    setPromptOutput(optimized);
  };

  // Tool 3: JSON Formatter
  const [jsonInput, setJsonInput] = useState('');
  const [jsonOutput, setJsonOutput] = useState('');

  const formatJson = () => {
    if (!jsonInput.trim()) return;
    try {
      const parsed = JSON.parse(jsonInput);
      setJsonOutput(JSON.stringify(parsed, null, 2));
    } catch (e) {
      setJsonOutput('❌ Invalid JSON: ' + e.message);
    }
  };

  // Tool 4: Image Prompt Generator
  const [imagePrompt, setImagePrompt] = useState('');
  const [imageOutput, setImageOutput] = useState('');

  const generateImagePrompt = () => {
    if (!imagePrompt.trim()) return;
    const enhanced = `🎨 MIDJOURNEY PROMPT:\n\n${imagePrompt}\n\n--ar 16:9 --quality 2 --style raw\n\n📝 Alternative styles:\n- Cinematic, dramatic lighting\n- Digital art, vibrant colors\n- Photorealistic, 8k\n- Oil painting, Renaissance style`;
    setImageOutput(enhanced);
  };

  // Tool 5: Content Repurposer
  const [contentInput, setContentInput] = useState('');
  const [contentOutput, setContentOutput] = useState('');

  const repurposeContent = () => {
    if (!contentInput.trim()) return;
    const ideas = `📚 CONTENT REPURPOSING IDEAS:\n\n1. 📱 Social Media Clips (TikTok, Instagram Reels, YouTube Shorts)\n2. 🎙️ Podcast Snippets\n3. 📝 Blog Post or Article\n4. 🎥 Video Thumbnail Ideas\n5. 📊 Infographic Concepts\n6. 📧 Email Newsletter\n7. 🧵 Twitter/X Thread\n8. 💬 LinkedIn Post\n\nCore message: "${contentInput.substring(0, 50)}..."`;
    setContentOutput(ideas);
  };

  // Email signup
  const [email, setEmail] = useState('');
  const [emailStatus, setEmailStatus] = useState('');

  const handleEmailSignup = (e) => {
    e.preventDefault();
    if (email) {
      setEmailStatus('✅ Check your email for AI tips!');
      setEmail('');
      setTimeout(() => setEmailStatus(''), 3000);
    }
  };

  return (
    <>
      <Head>
        <title>AI Fix Lab - Free AI Tools & Generators 2025</title>
        <meta name="description" content="5 powerful free AI tools: Code Generator, Prompt Optimizer, JSON Formatter, Image Prompt, Content Repurposer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5938363104467152" crossOrigin="anonymous"></script>
      </Head>

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #0f1419 0%, #1a1f2e 50%, #0f1419 100%);
          color: #fff;
          overflow-x: hidden;
        }
        
        nav { 
          background: rgba(15, 20, 25, 0.95);
          backdrop-filter: blur(20px);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(0, 255, 136, 0.1);
          position: sticky;
          top: 0;
          z-index: 100;
        }
        
        nav h1 { font-size: 1.8rem; background: linear-gradient(90deg, #667eea, #00ff88); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        
        nav ul { list-style: none; display: flex; gap: 2rem; }
        nav a { color: #00ff88; text-decoration: none; font-weight: 600; transition: all 0.3s; }
        nav a:hover { color: #00d4ff; text-shadow: 0 0 10px rgba(0, 212, 255, 0.5); }
        
        .hero {
          padding: 100px 2rem;
          text-align: center;
          background: linear-gradient(180deg, rgba(102, 126, 234, 0.1) 0%, rgba(0, 255, 136, 0.05) 100%);
          min-height: 60vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
        .hero h1 { 
          font-size: 4rem;
          background: linear-gradient(90deg, #667eea, #00ff88, #00d4ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
          animation: glow 3s ease-in-out infinite;
        }
        
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 20px rgba(102, 126, 234, 0.5); }
          50% { text-shadow: 0 0 40px rgba(0, 255, 136, 0.8); }
        }
        
        .hero p { font-size: 1.3rem; margin-bottom: 2rem; color: #00d4ff; }
        
        .cta-btn {
          padding: 15px 40px;
          background: linear-gradient(90deg, #667eea, #00ff88);
          color: #000;
          border: none;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 0 30px rgba(0, 255, 136, 0.5);
        }
        
        .cta-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 50px rgba(0, 255, 136, 0.8);
        }
        
        .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
        
        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin: 60px 0 40px;
          background: linear-gradient(90deg, #667eea, #00d4ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
          margin: 40px 0;
        }
        
        .tool-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 255, 136, 0.2);
          border-radius: 15px;
          padding: 25px;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          hover: all 0.4s;
        }
        
        .tool-card:hover {
          transform: translateY(-15px);
          border-color: rgba(0, 255, 136, 0.8);
          box-shadow: 0 20px 60px rgba(0, 255, 136, 0.3), 0 0 40px rgba(102, 126, 234, 0.2);
          background: rgba(255, 255, 255, 0.12);
        }
        
        .tool-card h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
          color: #00ff88;
        }
        
        .tool-card p {
          font-size: 0.9rem;
          color: #00d4ff;
          margin-bottom: 15px;
          opacity: 0.8;
        }
        
        textarea, input {
          width: 100%;
          padding: 12px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(0, 255, 136, 0.3);
          border-radius: 8px;
          color: #fff;
          font-family: 'Courier New', monospace;
          margin: 10px 0;
          resize: vertical;
        }
        
        textarea:focus, input:focus {
          outline: none;
          border-color: #00ff88;
          box-shadow: 0 0 15px rgba(0, 255, 136, 0.3);
          background: rgba(255, 255, 255, 0.15);
        }
        
        .tool-btn {
          width: 100%;
          padding: 12px;
          background: linear-gradient(90deg, #667eea, #00ff88);
          color: #000;
          border: none;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          margin-top: 10px;
          transition: all 0.3s;
        }
        
        .tool-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(0, 255, 136, 0.6);
        }
        
        .output-box {
          margin-top: 15px;
          padding: 15px;
          background: rgba(0, 255, 136, 0.08);
          border: 1px solid rgba(0, 255, 136, 0.4);
          border-radius: 8px;
          font-family: 'Courier New', monospace;
          font-size: 0.85rem;
          color: #00ff88;
          max-height: 250px;
          overflow-y: auto;
          white-space: pre-wrap;
          word-break: break-word;
        }
        
        .affiliate-box {
          background: linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(0, 212, 255, 0.1));
          border: 1px solid rgba(0, 255, 136, 0.3);
          border-radius: 10px;
          padding: 15px;
          margin-top: 15px;
          text-align: center;
        }
        
        .affiliate-link {
          display: inline-block;
          background: linear-gradient(90deg, #667eea, #00d4ff);
          color: #000;
          padding: 8px 16px;
          border-radius: 20px;
          text-decoration: none;
          font-weight: 600;
          margin: 5px;
          transition: all 0.3s;
          font-size: 0.9rem;
        }
        
        .affiliate-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 20px rgba(0, 255, 136, 0.4);
        }
        
        .email-signup {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(0, 255, 136, 0.1));
          border: 2px solid rgba(0, 255, 136, 0.3);
          border-radius: 15px;
          padding: 30px;
          text-align: center;
          margin: 60px 0;
        }
        
        .email-signup h2 { font-size: 1.8rem; margin-bottom: 10px; color: #00ff88; }
        .email-signup p { color: #00d4ff; margin-bottom: 20px; }
        
        .email-form {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
        }
        
        .email-form input {
          min-width: 250px;
        }
        
        .email-form button {
          padding: 12px 30px;
          background: linear-gradient(90deg, #667eea, #00ff88);
          color: #000;
          border: none;
          border-
