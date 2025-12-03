import React, { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const summarizeText = () => {
    if (!input.trim()) return;
    const words = input.split(/\s+/);
    const summary = words.slice(0, 20).join(' ') + '...';
    setResult(`📋 Summary: ${summary}`);
  };

  const extractKeywords = () => {
    if (!input.trim()) return;
    const words = input.toLowerCase().split(/\s+/);
    const keywords = [...new Set(words)].slice(0, 8).join(', ');
    setResult(`🔑 Keywords: ${keywords}`);
  };

  const countWords = () => {
    if (!input.trim()) return;
    const wordCount = input.split(/\s+/).length;
    const charCount = input.length;
    setResult(`📊 Words: ${wordCount} | Chars: ${charCount}`);
  };

  return (
    <>
      <Head>
        <title>AI Fix Lab - Free AI Tools & Earn Money Fast</title>
        <meta name="description" content="Free AI tools + multiple monetization methods" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <nav>
        <div className="container nav-container">
          <h2 style={{ color: '#667eea' }}>🤖 AI Fix Lab</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#tools">AI Tools</a></li>
            <li><a href="#earn">Earn Money</a></li>
          </ul>
        </div>
      </nav>

      <section id="home" className="hero">
        <div style={{ textAlign: 'center' }}>
          <h1>🚀 AI Fix Lab</h1>
          <p>Free AI Tools + Multiple Income Streams = Fast Earnings</p>
          <button className="cta-button" onClick={() => document.getElementById('tools').scrollIntoView()}>Get Started Free</button>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why AI Fix Lab?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>💡 Free AI Tools</h3>
              <p>No credit card. No limits. Pure functionality.</p>
            </div>
            <div className="feature-card">
              <h3>💰 6 Monetization Methods</h3>
              <p>AdSense, Affiliates, Premium, Sponsors, Email, Courses</p>
            </div>
            <div className="feature-card">
              <h3>🎨 Modern & Beautiful</h3>
              <p>Sleek design that users love. Mobile-optimized.</p>
            </div>
            <div className="feature-card">
              <h3>⚡ Lightning Speed</h3>
              <p>Built on Vercel. Instant loading. Zero delays.</p>
            </div>
            <div className="feature-card">
              <h3>🔐 Privacy Focused</h3>
              <p>No data collection. No tracking. Clean & ethical.</p>
            </div>
            <div className="feature-card">
              <h3>📱 Mobile First</h3>
              <p>Works perfectly on all devices. Responsive design.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="tools" className="tools">
        <div className="container">
          <h2 className="section-title">🛠️ Free AI Tools</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            <div className="tool-card">
              <h3>📄 Text Summarizer</h3>
              <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Paste text..." rows="5" />
              <button onClick={summarizeText}>✨ Summarize</button>
              {result && <p style={{ marginTop: '10px', padding: '10px', background: '#f0f0f0', borderRadius: '5px' }}>{result}</p>}
            </div>
            <div className="tool-card">
              <h3>🔍 Keyword Extractor</h3>
              <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter text..." rows="5" />
              <button onClick={extractKeywords}>🔎 Extract</button>
              {result && <p style={{ marginTop: '10px', padding: '10px', background: '#f0f0f0', borderRadius: '5px' }}>{result}</p>}
            </div>
            <div className="tool-card">
              <h3>📊 Word Counter</h3>
              <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Paste text..." rows="5" />
              <button onClick={countWords}>📈 Count</button>
              {result && <p style={{ marginTop: '10px', padding: '10px', background: '#f0f0f0', borderRadius: '5px' }}>{result}</p>}
            </div>
          </div>
        </div>
      </section>

      <section id="earn" style={{ padding: '80px 0', background: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">💸 Earn Money (6 Ways)</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '30px' }}>
            <div style={{ background: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
              <h3>📺 Google AdSense</h3>
              <p>Display ads</p>
              <span className="badge">$5-50 per 1K views</span>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
              <h3>🔗 Affiliate Links</h3>
              <p>Recommend tools</p>
              <span className="badge">10-30% commission</span>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
              <h3>💎 Premium Features</h3>
              <p>Advanced tools</p>
              <span className="badge">$5-20/month</span>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
              <h3>🤝 Sponsorships</h3>
              <p>Brand partnerships</p>
              <span className="badge">$100-1000/month</span>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
              <h3>📧 Email List</h3>
              <p>Newsletter</p>
              <span className="badge">$1-5 per subscriber</span>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
              <h3>🎓 Courses</h3>
              <p>Teaching users</p>
              <span className="badge">$19-99/course</span>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container" style={{ textAlign: 'center' }}>
          <p>&copy; 2025 AI Fix Lab. Free AI Tools for Everyone.</p>
          <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
            <a href="#">Privacy</a> | <a href="#">Terms</a> | <a href="#">Advertise</a>
          </p>
        </div>
      </footer>
    </>
  );
}
