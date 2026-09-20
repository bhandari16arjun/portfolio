import { useEffect, useState } from "react"
import { Network, Server, Cpu, Database } from "lucide-react"

const BRIEFS = {
  lb: {
    title: "FastAPI Gateway",
    tag: "Python · REST API",
    role: "Front door — every request lands here first.",
    about:
      "Asynchronous FastAPI endpoint serving the Streamlit frontend. It validates incoming natural language queries, enforces rate limiting, and marshals requests into the LangGraph state machine.",
    stats: [
      { label: "Queries/min", value: 120, suffix: " qpm", decimals: 0 },
      { label: "p99 Latency", value: 45, suffix: " ms", decimals: 1 },
    ],
    color: "#4facfe",
    icon: Network,
  },
  gateway: {
    title: "LangGraph Agent",
    tag: "Python · Agentic State Machine",
    role: "The cognitive orchestrator.",
    about:
      "A compiled LangGraph state machine that drives the execution flow. It intelligently pauses for Human-in-the-Loop clarification when queries are ambiguous, and loops a self-correction node upon execution failures.",
    stats: [
      { label: "HitL Pauses", value: 12, suffix: "%", decimals: 0 },
      { label: "Avg Steps", value: 4, suffix: " nodes", decimals: 0 },
    ],
    color: "#39ff14",
    icon: Cpu,
  },
  engine: {
    title: "SQLGlot Sandbox",
    tag: "Python · AST Parser",
    role: "Zero-trust validation layer.",
    about:
      "Parses the LLM-generated SQL into an Abstract Syntax Tree (AST). It mathematically blocks 100% of destructive mutations (DROP, ALTER, DELETE) and ensures only permitted read-only views are queried.",
    stats: [
      { label: "Mutations Blocked", value: 100, suffix: "%", decimals: 0 },
      { label: "Parse Time", value: 1.2, suffix: " ms", decimals: 2 },
    ],
    color: "#ff4a77",
    icon: Server,
  },
  cache: {
    title: "ChromaDB",
    tag: "Vector Store · RAG",
    role: "Injects database context.",
    about:
      "Retrieves the most relevant database schema definitions based on the user's natural language query via vector embeddings, ensuring the LLM generates syntactically correct SQL tailored to the exact schema.",
    stats: [
      { label: "Retrieve Time", value: 18, suffix: " ms", decimals: 1 },
      { label: "Dim Size", value: 384, suffix: "d", decimals: 0 },
    ],
    color: "#f59e0b",
    icon: Database,
  },
  db: {
    title: "SQLite Execution",
    tag: "Relational Database",
    role: "The data layer.",
    about:
      "Safely executes the validated SQL query against a local SQLite replica of the 15,000-row Chinook dataset, strictly capped with execution timeouts and row-limits to prevent resource exhaustion.",
    stats: [
      { label: "Rows Validated", value: 15000, suffix: "+", decimals: 0 },
      { label: "Query Time", value: 3.5, suffix: " ms", decimals: 1 },
    ],
    color: "#00f2fe",
    icon: Database,
  },
}

function LiveStat({ label, value, suffix = "", decimals = 0 }) {
  const [v, setV] = useState(value)
  useEffect(() => {
    setV(value)
    const id = setInterval(() => setV(value * (1 + (Math.random() - 0.5) * 0.06)), 1800)
    return () => clearInterval(id)
  }, [value])
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
      <span className="block font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
        {label}
      </span>
      <span className="mt-1 block font-mono text-sm font-semibold text-paper">
        {v.toLocaleString("en-US", { maximumFractionDigits: decimals })}
        {suffix}
      </span>
    </div>
  )
}

export default function NodeBrief({ selectedId = "lb" }) {
  const node = BRIEFS[selectedId] || BRIEFS.lb
  const Icon = node.icon
  return (
    <div className="glass-card flex min-w-0 flex-col justify-between gap-5 overflow-hidden rounded-3xl p-6 md:p-8">
      <div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className="grid h-11 w-11 place-items-center rounded-xl border"
              style={{
                borderColor: `${node.color}33`,
                backgroundColor: `${node.color}11`,
                color: node.color,
              }}
            >
              <Icon size={20} aria-hidden />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-paper">{node.title}</h3>
              <p className="font-mono text-[11px]" style={{ color: node.color }}>
                {node.tag}
              </p>
            </div>
          </div>
          <span className="flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted">
            <span className="relative flex h-1.5 w-1.5">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                style={{ background: node.color }}
              />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: node.color }} />
            </span>
            live
          </span>
        </div>

        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">{node.role}</p>
        <p className="mt-2 text-sm leading-relaxed text-paper/70">{node.about}</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {node.stats.map((s) => (
          <LiveStat key={s.label} {...s} />
        ))}
      </div>
    </div>
  )
}
