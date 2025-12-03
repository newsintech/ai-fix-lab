import React, { useState, useEffect } from 'react';
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
  const [activeTab, setActiveTab] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const tools = [
    {
      id: 0,
      title: 'JSON Formatter',
      icon: '{}',
      desc: 'Beautify & validate JSON',
      input: tool1Input,
      setInput: setTool1Input,
      output: tool1Output,
      setOutput: setTool1Output,
      handler: () => {
        if (!tool1Input.trim()) return;
        try {
          const parsed = JSON.parse(tool1Input);
          setTool1Output(JSON.stringify(parsed, null, 2));
        } catch (e) {
          setTool1Output('Error: ' + e.message);
        }
      }
    },
    {
      id: 1,
      title: 'Prompt Optimizer',
      icon: '✨',
      desc: 'Enhance AI prompts',
      input: tool2Input,
      setInput: setTool2Input,
      output: tool2Output,
      setOutput: setTool2Output,
      handler: () => {
        if (!tool2Input.trim()) return;
        setTool2Output(`OPTIMIZED:\n${tool2Input}\n\nContext: Clear & Structured\nFormat: Professional\nTone: Direct`);
      }
    },
    {
      id: 2,
      title: 'Schema Generator',
      icon: '📋',
      desc: 'Generate data schemas',
      input: tool3Input,
      setInput: setTool3Input,
      output: tool3Output,
      setOutput: setTool3Output,
      handler: () => {
        if (!tool3Input.trim()) return;
        setTool3Output(`Schema Generated:\n{\n  "name": "${tool3Input.substring(0, 20)}",\n  "type": "object",\n  "required": ["id", "name"]\n}`);
      }
    },
    {
      id: 3,
      title: 'Image Prompt',
      icon: '🎨',
      desc: 'Midjourney prompts',
      input: tool4Input,
      setInput: setTool4Input,
      output: tool4Output,
      setOutput: setTool4Output,
      handler: () => {
        if (!tool4Input.trim()) return;
        setTool4Output(`${tool4Input} --ar 16:9 --quality 2 --style raw --v 5`);
      }
    },
    {
      id: 4,
      title: 'Content Repurpose',
      icon: '♻️',
      desc: 'Repurpose content ideas',
      input: tool5Input,
      setInput: setTool5Input,
      output: tool5Output,
      setOutput: setTool5Output,
      handler: () => {
        if (!tool5Input.trim()) return;
        setTool5Output('📱 Social\n📝 Blog\n🎥 Video\n🎙️ Podcast\n📧 Email\n📊 Infographic\n🧵 Thread\n💬 Post');
      }
    }
  ];

  const currentTool = tools[activeTab];

  return (
    <>
      <Head>
        <title>AI Fix Lab - Creative AI Tools</title>
        <meta name="description" content="5 Creative AI Tools for Developers" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5938363104467152" crossOrigin="anonymous"></script>
      </Head>

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1729 100%);
          color: #e0e0e0;
          font-family: 'Segoe UI', 'Courier New', monospace;
          overflow-x: hidden;
          min-height: 100vh;
        }

        .cursor-follow {
          position: fixed;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(102,126,234,0.1) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          filter: blur(40px);
        }

        nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(10, 14, 39, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(102, 126, 234, 0.2);
          padding: 1.5rem 2rem;
        }

        nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
        }

        nav h1 {
          font-size: 1.8rem;
          background: linear-gradient(90deg, #667eea 0%, #64b5f6 50%, #00ffff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
          letter-spacing: 2px;
        }

        nav-links {
          display: flex;
          gap: 3rem;
        }

        nav a {
          color: #64b5f6;
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.3s;
          position: relative;
        }

        nav a:hover {
          color: #00ffff;
        }

        nav a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #667eea, #00ffff);
          transition: width 0.3s;
        }

        nav a:hover::after {
          width: 100%;
        }

        .hero {
          position: relative;
          z-index: 1;
          padding: 120px 2rem 80px;
          text-align: center;
          background: linear-gradient(180deg, rgba(102, 126, 234, 0.1) 0%, rgba(100, 181, 246, 0.05) 50%, transparent 100%);
          border-bottom: 1px solid rgba(102, 126, 234, 0.1);
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(0, 255, 255, 0.05) 0%, transparent 50%);
          z-index: -1;
        }

        .hero h1 {
          font-size: clamp(2.5rem, 8vw, 4.5rem);
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #667eea 0%, #64b5f6 40%, #00ffff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 900;
          letter-spacing: -1px;
          line-height: 1.2;
        }

        .hero p {
          font-size: 1.3rem;
          color: #64b5f6;
          margin-bottom: 2.5rem;
          opacity: 0.9;
        }

        .cta-group {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-btn {
          padding: 14px 35px;
          background: linear-gradient(90deg, #667eea 0%, #64b5f6 100%);
          color: #fff;
          border: none;
          border-radius: 50px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
          font-size: 1rem;
        }

        .cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(102, 126, 234, 0.5);
        }

        .cta-btn-secondary {
          background: transparent;
          border: 2px solid #667eea;
          color: #64b5f6;
        }

        .cta-btn-secondary:hover {
          background: rgba(102, 126, 234, 0.1);
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 2rem;
          position: relative;
          z-index: 1;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin: 80px 0 60px;
          background: linear-gradient(90deg, #667eea 0%, #00ffff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
        }

        .tabs-nav {
          display: flex;
          gap: 15px;
          margin-bottom: 40px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .tab-btn {
          padding: 12px 25px;
          background: rgba(102, 126, 234, 0.1);
          border: 1px solid rgba(102, 126, 234, 0.3);
          color: #64b5f6;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .tab-btn:hover {
          background: rgba(102, 126, 234, 0.2);
          border-color: rgba(102, 126, 234, 0.6);
        }

        .tab-btn.active {
          background: linear-gradient(90deg, #667eea, #64b5f6);
          border-color: transparent;
          color: #fff;
          box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
        }

        .tool-panel {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          align-items: start;
        }

        .tool-info {
          background: rgba(102, 126, 234, 0.08);
          border: 1px solid rgba(102, 126, 234, 0.2);
          border-radius: 15px;
          padding: 30px;
          animation: fadeIn 0.5s ease;
        }

        .tool-icon {
          font-size: 3.5rem;
          margin-bottom: 15px;
        }

        .tool-info h2 {
          font-size: 1.8rem;
          color: #64b5f6;
          margin-bottom: 10px;
        }

        .tool-info p {
          color: #a0b0ff;
          font-size: 1rem;
          margin-bottom: 20px;
        }

        .tool-description {
          color: #888;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .tool-editor {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        textarea {
          width: 100%;
          padding: 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(102, 126, 234, 0.3);
          border-radius: 10px;
          color: #e0e0e0;
          font-family: 'Courier New', monospace;
          font-size: 0.95rem;
          resize: vertical;
          min-height: 150px;
          transition: all 0.3s;
        }

        textarea:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 20px rgba(102, 126, 234, 0.2);
          background: rgba(255, 255, 255, 0.08);
        }

        .action-btn {
          padding: 14px 30px;
          background: linear-gradient(90deg, #667eea, #00ffff);
          color: #fff;
          border: none;
          border-radius: 10px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 5px 20px rgba(102, 126, 234, 0.3);
          font-size: 1rem;
        }

        .action-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(102, 126, 234, 0.5);
        }

        .action-btn:active {
          transform: translateY(0);
        }

        .output-display {
          background: rgba(0,
