import React, { useState, useRef, useEffect } from 'react';
import { Terminal, ArrowRight } from 'lucide-react';

export default function InteractiveTerminal() {
  const [history, setHistory] = useState([
    { text: 'Backend Ops Shell v2.0.0', type: 'system' },
    { text: 'Type "help" to see available commands or "deploy" to run the release pipeline.', type: 'info' },
    { text: '', type: 'empty' }
  ]);
  const [input, setInput] = useState('');
  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmdText) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    const parts = trimmed.split(' ');
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    const newHistory = [...history, { text: `$ ${trimmed}`, type: 'input' }];

    switch (command) {
      case 'help':
        newHistory.push({
          text: `Available Commands:
  about           - Profile summary of the engineer
  skills          - Core stack & runtime metrics
  projects        - Backend & AI systems built
  cat arch.txt    - View text-based architecture
  ping cache      - Check Redis (BullMQ) latency
  deploy          - Execute simulated AI pipeline deploy
  system-status   - Live AI & DB health stats
  clear           - Clear terminal log output`,
          type: 'output'
        });
        break;

      case 'about':
        newHistory.push({
          text: `Arjun Bhandari // Software Engineer — Full-Stack & Generative AI
------------------------------------------------------------------
Specialized in intelligent full-stack applications and AI-driven systems.
From Agentic Text-to-SQL pipelines to scalable MERN stack microservices
with robust AWS infrastructure.
Stack: Python, JavaScript, MERN, AWS, LangGraph, Docker.`,
          type: 'output'
        });
        break;

      case 'skills':
        newHistory.push({
          text: `Language       Focus          Key Tooling      Specialty
------------------------------------------------------------------
Python         AI & APIs      FastAPI, RAG     Text-to-SQL, Chess AI
JavaScript     Full-Stack     MERN, Node       Microservices, UI
C/C++          Algorithms     STL              Competitive Programming`,
          type: 'output'
        });
        break;

      case 'projects':
        newHistory.push({
          text: `Backend & AI Systems Built:
------------------------------------------------------------------
1. SQLPilot (Python, LangGraph)
   - Agentic Text-to-SQL pipeline with ChromaDB RAG & HitL workflow.
2. CodeCraft (MERN Stack)
   - Asynchronous online code judge using Redis BullMQ & AWS S3/EC2.
3. AI Chess Engine (Python, Flask)
   - Depth-4 NegaMax search with Alpha-Beta pruning under 2 seconds.`,
          type: 'output'
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'cat':
        if (args[0] === 'arch.txt') {
          newHistory.push({
            text: `
[ Clients ]  React UI
      │  HTTPS / REST
      ▼
┌─────────────────────────┐
│   Node.js API           │  MERN Stack
│   JWT Auth & Fetch      │  ◄─ AWS S3 (Tests)
└───────────┬─────────────┘
      ┌─────┴─────┐
      ▼           ▼
┌──────────┐ ┌──────────┐
│ MongoDB  │ │  Redis   │
│ Database │ │  BullMQ  │
└──────────┘ └────┬─────┘
                  ▼
         ┌────────────────┐
         │ AWS EC2 Docker │
         │ Sandbox Exec   │
         └────────────────┘`,
            type: 'code'
          });
        } else {
          newHistory.push({ text: `Usage: cat arch.txt`, type: 'error' });
        }
        break;

      case 'ping':
        if (args[0] === 'cache') {
          newHistory.push({ text: 'PING redis-bullmq (10.0.5.12) 56(84) bytes of data.', type: 'info' });

          setTimeout(() => {
            setHistory(prev => [
              ...prev,
              { text: '64 bytes from 10.0.5.12: icmp_seq=1 ttl=64 time=0.412 ms', type: 'output' },
              { text: '64 bytes from 10.0.5.12: icmp_seq=2 ttl=64 time=0.388 ms', type: 'output' },
              { text: '64 bytes from 10.0.5.12: icmp_seq=3 ttl=64 time=0.405 ms', type: 'output' },
              { text: '--- redis-bullmq ping statistics ---', type: 'info' },
              { text: '3 packets transmitted, 3 received, 0% packet loss, time 2002ms', type: 'output' },
              { text: 'rtt min/avg/max/mdev = 0.388/0.401/0.412/0.012 ms', type: 'success' }
            ]);
          }, 300);
        } else {
          newHistory.push({ text: `Usage: ping cache`, type: 'error' });
        }
        break;

      case 'deploy':
        newHistory.push({ text: 'Starting pipeline trigger: deploy-sqlpilot-v1.2.sh...', type: 'info' });
        newHistory.push({ text: '[STAGE 1/4] Code Analysis & AST Filters...', type: 'info' });

        setTimeout(() => {
          setHistory(prev => [
            ...prev,
            { text: '✔ pytest suite passed (100% destructive mutations blocked)', type: 'success' },
            { text: '[STAGE 2/4] Building Docker images for FastAPI & LangGraph...', type: 'info' }
          ]);

          setTimeout(() => {
            setHistory(prev => [
              ...prev,
              { text: '✔ docker build -t sqlpilot-api:latest (API packaged)', type: 'success' },
              { text: '✔ ChromaDB RAG schema index verified', type: 'success' },
              { text: '[STAGE 3/4] Running Integration & Ambiguity Tests...', type: 'info' }
            ]);

            setTimeout(() => {
              setHistory(prev => [
                ...prev,
                { text: '✔ 15/15 Chinook DB queries validated', type: 'success' },
                { text: '✔ Human-in-the-Loop fallback triggers PASSED', type: 'success' },
                { text: '[STAGE 4/4] Deploying to Render...', type: 'info' }
              ]);

              setTimeout(() => {
                setHistory(prev => [
                  ...prev,
                  { text: '🐳 Pushing images to registry...', type: 'info' },
                  { text: '🔥 Re-routing load balancer (zero-downtime)', type: 'info' },
                  { text: '🚀 DEPLOYMENT COMPLETED SUCCESSFULLY in 5.34s (v1.2 active)', type: 'success' }
                ]);
              }, 600);
            }, 600);
          }, 600);
        }, 500);
        break;

      case 'system-status':
        newHistory.push({
          text: `SYSTEM MONITOR: Production
------------------------------------------------------------------
[CPU]          [████░░░░░░] 38%  (FastAPI 20%, Node 10%)
[MEMORY]       [██████░░░░] 5.8GB / 16GB (36%)
[LLM API]      243 tokens/sec · 42ms latency
[QUEUE]        BullMQ: 12 active, 0 delayed, 0 failed
[DB STATUS]    MongoDB synced · ChromaDB vector index loaded
[CONTAINERS]   3/3 running (React, Node, Sandbox)`,
          type: 'output'
        });
        break;

      default:
        newHistory.push({
          text: `Command not found: "${command}". Type "help" for a list of valid commands.`,
          type: 'error'
        });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    }
  };

  return (
    <div className="glass-card terminal-card">
      {/* Terminal Title Bar */}
      <div className="terminal-header">
        <div className="terminal-title">
          <Terminal size={14} style={{ color: 'var(--accent-cyan)' }} />
          <span>Backend Ops Shell</span>
        </div>
        <div className="terminal-window-buttons">
          <span className="terminal-window-button red"></span>
          <span className="terminal-window-button yellow"></span>
          <span className="terminal-window-button green"></span>
        </div>
      </div>

      {/* Terminal Output Log */}
      <div className="terminal-output">
        {history.map((line, idx) => {
          let colorClass = 'terminal-line-output';
          if (line.type === 'system') colorClass = 'terminal-line-system';
          if (line.type === 'info') colorClass = 'terminal-line-info';
          if (line.type === 'input') colorClass = 'terminal-line-input';
          if (line.type === 'success') colorClass = 'terminal-line-success';
          if (line.type === 'error') colorClass = 'terminal-line-error';
          if (line.type === 'code') colorClass = 'terminal-line-code';
          if (line.type === 'output') colorClass = 'terminal-line-output';

          if (line.type === 'empty') return <div key={idx} style={{ height: '8px' }} />;

          return (
            <div key={idx} className={`terminal-line ${colorClass}`}>
              {line.text}
            </div>
          );
        })}
        <div ref={terminalEndRef} />
      </div>

      {/* Input Panel */}
      <div className="terminal-input-row">
        <ArrowRight size={12} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
        <span className="terminal-input-prompt">~</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="terminal-input-field"
          placeholder="run command... (e.g. deploy)"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
      </div>
    </div>
  );
}
