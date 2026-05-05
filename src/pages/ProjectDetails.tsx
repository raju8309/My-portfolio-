import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projects";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Motion";

const img1 = new URL("../data/1 .png", import.meta.url).href;
const img2 = new URL("../data/2.png", import.meta.url).href;
const img3 = new URL("../data/3.png", import.meta.url).href;
const img4 = new URL("../data/4.png", import.meta.url).href;
const img5 = new URL("../data/5.png", import.meta.url).href;
const img6 = new URL("../data/6.png", import.meta.url).href;
const gemProblem = new URL("../data/Gemini_Generated_Image_hgi3wohgi3wohgi3.png", import.meta.url).href;
const gemApproach = new URL("../data/Gemini_Generated_Image_qcozqcqcozqcqcoz.png", import.meta.url).href;
const gemResults = new URL("../data/Gemini_Generated_Image_70qp4070qp4070qp.png", import.meta.url).href;

// Project-specific images
const fakeJobProblem = new URL("../data/fakejobdetecor.png", import.meta.url).href;
const fakeJobApproach = new URL("../data/1 .png", import.meta.url).href;
const fakeJobResults = new URL("../data/2.png", import.meta.url).href;
const unhProblem = new URL("../data/unh-chatbot.png", import.meta.url).href;
const unhApproach = new URL("../data/3.png", import.meta.url).href;
const unhResults = new URL("../data/4.png", import.meta.url).href;
const ariaProblem = new URL("../data/aria.png", import.meta.url).href;
const ariaApproach = new URL("../data/aria.png", import.meta.url).href;
const ariaResults = new URL("../data/aria.png", import.meta.url).href;
const clinicalaiProblem = new URL("../data/clinicalai.png", import.meta.url).href;
const clinicalaiApproach = new URL("../data/clinicalai.png", import.meta.url).href;
const clinicalaiResults = new URL("../data/clinicalai.png", import.meta.url).href;
const paysplitProblem = new URL("../data/paysplit.png", import.meta.url).href;
const paysplitApproach = new URL("../data/Gemini_Generated_Image_iv1ofmiv1ofmiv1o.png", import.meta.url).href;
const paysplitResults = new URL("../data/Gemini_Generated_Image_m783gtm783gtm783.png", import.meta.url).href;

const FakeJobCaseStudy = () => {
  return (
    <div className="space-y-10 text-gray-700">
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-black tracking-tight mb-2">Fake Job Posting Detector</h3>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-600 mb-8">
          <span className="font-medium text-gray-700">AI/ML Project Case Study</span>
          <span className="text-gray-400">/</span>
          <span>August 2025 - December 2025</span>
          <span className="text-gray-400">/</span>
          <span>Role: AI Engineer & Full-Stack Developer</span>
        </div>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gray-300" />

        <div className="space-y-8">
          {[
            {
              title: "Overview",
              body: (
                <p className="text-base leading-7 text-gray-800">
                  Built an AI-powered fraud detection system to identify fake job postings using NLP, explainable ML, and advanced multi-agent verification. Integrated a RAG memory bank and agentic verification for stronger detection accuracy.
                </p>
              ),
            },
            {
              title: "The Problem",
              body: (
                <p className="text-base leading-7 text-gray-800">
                  Online job platforms contain sophisticated fraudulent listings that mislead applicants and cause financial harm. Traditional keyword-based filtering fails to catch modern scams, leaving users vulnerable to phishing and identity theft.
                </p>
              ),
            },
            {
              title: "My Approach",
              body: (
                <div className="space-y-5">
                  <div>
                    <h5 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-2">
                      Data Pipeline & Preprocessing
                    </h5>
                    <ul className="text-base space-y-2 ml-5 list-disc marker:text-gray-600">
                      <li><strong>Dataset Acquisition:</strong> Sourced 18,000+ job postings from public repositories with labeled fraud indicators</li>
                      <li><strong>Text Cleaning Pipeline:</strong> Removed HTML tags, special characters, performed lemmatization and stop-word removal</li>
                      <li><strong>Feature Engineering:</strong> Extracted text patterns, email domains, and keyword frequencies</li>
                      <li><strong>Train-Test Split:</strong> 80/20 stratified split maintaining fraud distribution</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-2">
                      Model Development
                    </h5>
                    <ul className="text-base space-y-2 ml-5 list-disc marker:text-gray-600">
                      <li><strong>Vectorization:</strong> TF-IDF with n-grams (1-2) for text representation</li>
                      <li><strong>Classification:</strong> Logistic Regression with L2 regularization</li>
                      <li><strong>Hyperparameter Tuning:</strong> Grid search for optimal C parameter and class weights</li>
                      <li><strong>Cross-Validation:</strong> 5-fold CV ensuring model stability</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-2">
                      Advanced AI Features
                    </h5>
                    <ul className="text-base space-y-2 ml-5 list-disc marker:text-gray-600">
                      <li><strong>Agentic Verification:</strong> Multi-agent system with investigator (web search) and auditor (email/domain validation)</li>
                      <li><strong>RAG Memory Bank:</strong> Local vector store for historical scam pattern recognition</li>
                      <li><strong>Explainable AI:</strong> SHAP integration for transparent model decisions</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-2">
                      Production Architecture
                    </h5>
                    <ul className="text-base space-y-2 ml-5 list-disc marker:text-gray-600">
                      <li><strong>Backend:</strong> FastAPI async endpoints, CORS configuration, health monitoring</li>
                      <li><strong>Frontend:</strong> Next.js responsive UI, real-time feedback, error handling</li>
                      <li><strong>MLOps:</strong> MLflow experiment tracking with automated logging and versioning</li>
                      <li><strong>Deployment:</strong> Docker containerization with Render backend and Vercel frontend</li>
                    </ul>
                  </div>
                </div>
              ),
            },
            {
              title: "Key Technical Decisions",
              body: (
                <ul className="text-base space-y-2 ml-5 list-disc marker:text-emerald-300/80">
                  <li><strong>Logistic Regression:</strong> Chose for interpretability, faster inference, and clear probability outputs</li>
                  <li><strong>SHAP Integration:</strong> Added model explainability to increase user trust and regulatory compliance</li>
                  <li><strong>Multi-Agent System:</strong> Implemented async verification pipeline for comprehensive fraud detection</li>
                  <li><strong>Memory Optimization:</strong> Designed chunked processing for cloud deployment within 512Mi constraints</li>
                  <li><strong>MLOps Integration:</strong> Used MLflow for experiment tracking and reproducible training</li>
                </ul>
              ),
            },
            {
              title: "Results & Impact",
              body: (
                <ul className="text-base space-y-2 ml-5 list-disc marker:text-emerald-300/80">
                  <li><strong>Model Performance:</strong> Achieved 92% F1-score with 87% precision on fraud detection</li>
                  <li><strong>System Efficiency:</strong> Reduced false positives by 18% through multi-layered verification</li>
                  <li><strong>Production Success:</strong> Deployed zero-cost system handling 1000+ concurrent requests</li>
                  <li><strong>User Experience:</strong> &lt;2 second response time with transparent risk assessment</li>
                  <li><strong>Cost Optimization:</strong> $0 monthly hosting on free-tier cloud services</li>
                  <li><strong>Reliability:</strong> 99.9% uptime with automatic cold-start optimization</li>
                </ul>
              ),
            },
            {
              title: "Technical Innovation",
              body: (
                <ul className="text-base space-y-2 ml-5 list-disc marker:text-emerald-300/80">
                  <li><strong>Novel Architecture:</strong> Combined traditional ML with RAG and agentic verification</li>
                  <li><strong>Cloud-Native Design:</strong> Optimized for serverless deployment with memory constraints</li>
                  <li><strong>Real-Time Processing:</strong> Async pipeline enabling sub-2second comprehensive analysis</li>
                  <li><strong>Explainable Results:</strong> SHAP-powered feature importance for user transparency</li>
                </ul>
              ),
            },
            {
              title: "Technologies & Tools",
              body: (
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-xl border border-gray-300 bg-white p-4">
                      <p className="text-xs uppercase tracking-wider text-gray-600">ML Stack</p>
                      <p className="text-base text-gray-900">Python, scikit-learn, pandas, SHAP, MLflow</p>
                    </div>
                    <div className="rounded-xl border border-gray-300 bg-white p-4">
                      <p className="text-xs uppercase tracking-wider text-gray-600">Backend</p>
                      <p className="text-base text-gray-900">FastAPI, uvicorn, Docker, asyncio</p>
                    </div>
                    <div className="rounded-xl border border-gray-300 bg-white p-4">
                      <p className="text-xs uppercase tracking-wider text-gray-600">Frontend</p>
                      <p className="text-base text-gray-900">Next.js, React, Tailwind CSS</p>
                    </div>
                    <div className="rounded-xl border border-gray-300 bg-white p-4">
                      <p className="text-xs uppercase tracking-wider text-gray-600">Cloud</p>
                      <p className="text-base text-gray-900">Render, Vercel, GitHub Actions</p>
                    </div>
                  </div>
                  <ul className="text-base space-y-2 ml-5 list-disc marker:text-emerald-300/80">
                    <li><strong>AI Features:</strong> DuckDuckGo search, TF-IDF vector store, cosine similarity</li>
                  </ul>
                </div>
              ),
            },
            {
              title: "Business Value",
              body: (
                <ul className="text-base space-y-2 ml-5 list-disc marker:text-emerald-300/80">
                  <li><strong>User Protection:</strong> Successfully identified 85% of test scams with minimal false positives</li>
                  <li><strong>Cost Efficiency:</strong> Enterprise-grade system built on free-tier infrastructure</li>
                  <li><strong>Scalability:</strong> Production-ready architecture supporting easy feature expansion</li>
                  <li><strong>Trust & Transparency:</strong> Explainable AI increasing user confidence in predictions</li>
                </ul>
              ),
            },
          ].map((section, idx) => {
            const isRight = idx % 2 === 1;
            const dotClass = [
              "bg-emerald-400/90",
              "bg-cyan-400/90",
              "bg-violet-400/90",
              "bg-fuchsia-400/90",
              "bg-amber-400/90",
              "bg-sky-400/90",
            ][idx % 6];
            const accent = [
              {
                title: "text-emerald-200",
                sub: "[&_h5]:text-emerald-200",
                marker: "[&_li::marker]:text-emerald-300/80",
              },
              {
                title: "text-cyan-200",
                sub: "[&_h5]:text-cyan-200",
                marker: "[&_li::marker]:text-cyan-300/80",
              },
              {
                title: "text-violet-200",
                sub: "[&_h5]:text-violet-200",
                marker: "[&_li::marker]:text-violet-300/80",
              },
              {
                title: "text-fuchsia-200",
                sub: "[&_h5]:text-fuchsia-200",
                marker: "[&_li::marker]:text-fuchsia-300/80",
              },
              {
                title: "text-amber-200",
                sub: "[&_h5]:text-amber-200",
                marker: "[&_li::marker]:text-amber-300/80",
              },
              {
                title: "text-sky-200",
                sub: "[&_h5]:text-sky-200",
                marker: "[&_li::marker]:text-sky-300/80",
              },
            ][idx % 6];
            const theme = [
              "border-emerald-500/25 bg-gradient-to-br from-emerald-500/12 via-white/[0.04] to-white/[0.02] hover:border-emerald-400/45 hover:shadow-[0_0_0_1px_rgba(52,211,153,0.12),0_30px_90px_-60px_rgba(0,0,0,0.9)]",
              "border-cyan-500/25 bg-gradient-to-br from-cyan-500/12 via-white/[0.04] to-white/[0.02] hover:border-cyan-400/45 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.12),0_30px_90px_-60px_rgba(0,0,0,0.9)]",
              "border-violet-500/25 bg-gradient-to-br from-violet-500/12 via-white/[0.04] to-white/[0.02] hover:border-violet-400/45 hover:shadow-[0_0_0_1px_rgba(167,139,250,0.12),0_30px_90px_-60px_rgba(0,0,0,0.9)]",
              "border-fuchsia-500/25 bg-gradient-to-br from-fuchsia-500/12 via-white/[0.04] to-white/[0.02] hover:border-fuchsia-400/45 hover:shadow-[0_0_0_1px_rgba(232,121,249,0.12),0_30px_90px_-60px_rgba(0,0,0,0.9)]",
              "border-amber-500/25 bg-gradient-to-br from-amber-500/12 via-white/[0.04] to-white/[0.02] hover:border-amber-400/45 hover:shadow-[0_0_0_1px_rgba(251,191,36,0.12),0_30px_90px_-60px_rgba(0,0,0,0.9)]",
              "border-sky-500/25 bg-gradient-to-br from-sky-500/12 via-white/[0.04] to-white/[0.02] hover:border-sky-400/45 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.12),0_30px_90px_-60px_rgba(0,0,0,0.9)]",
            ][idx % 6];

            return (
              <div key={section.title} className="grid grid-cols-1 md:grid-cols-2 md:gap-16 items-start">
                <div
                  className={
                    "group relative md:max-w-xl rounded-2xl border p-5 md:p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_30px_90px_-60px_rgba(0,0,0,0.9)] transition-all duration-300 hover:-translate-y-1 " +
                    theme +
                    " " +
                    accent.sub +
                    " " +
                    accent.marker +
                    (isRight
                      ? " md:col-start-2 md:justify-self-start"
                      : " md:col-start-1 md:justify-self-end")
                  }
                >
                  <div
                    className={
                      "hidden md:block absolute top-6 h-3 w-3 rounded-full border border-white/20 ring-4 ring-[#0d1117] " +
                      dotClass +
                      (isRight ? " -left-10" : " -right-10")
                    }
                  />

                  <h4 className="text-2xl font-bold mb-3 tracking-tight text-black">{section.title}</h4>
                  {section.body}
                </div>
                {section.title === "The Problem" && (
                  <div className="hidden md:flex items-center justify-center">
                    <img src={fakeJobProblem} alt="Problem" className="rounded-xl border border-gray-300 max-w-md w-full object-cover" />
                  </div>
                )}
                {section.title === "My Approach" && (
                  <div className="hidden md:flex items-center justify-center">
                    <img src={fakeJobApproach} alt="Approach" className="rounded-xl border border-gray-300 max-w-md w-full object-cover" />
                  </div>
                )}
                {section.title === "Results & Impact" && (
                  <div className="hidden md:flex items-center justify-center">
                    <img src={fakeJobResults} alt="Results" className="rounded-xl border border-gray-300 max-w-md w-full object-cover" />
                  </div>
                )}
                {section.title === "Technologies & Tools" && (
                  <div className="hidden md:flex items-center justify-center">
                    <img src={img5} alt="Technology Stack" className="rounded-xl border border-white/10 max-w-md w-full object-cover" />
                  </div>
                )}
              </div>
            );
          })}
          
          {/* What This Project Taught Me - Horizontal spread at the end */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="w-full">
              <h4 className="text-2xl font-bold mb-6 tracking-tight text-black text-center">What This Project Taught Me</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div className="space-y-2">
                  <p className="text-sm leading-6 text-gray-800">
                    This project taught me how to translate real-world security problems into production ML systems while working within strict constraints of latency, memory, and cost.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm leading-6 text-gray-800">
                    I learned the importance of rigorous evaluation, reproducible experimentation with MLflow, and building explainability into products for both users and engineers.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm leading-6 text-gray-800">
                    Most importantly, effective fraud detection combines multiple signals—strong baseline NLP models, verification workflows, and retrieval-based memory.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm leading-6 text-gray-800">
                    This ensures solutions stay accurate, trustworthy, and practical in real usage scenarios while maintaining user confidence and regulatory compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UNHCaseStudy = () => {
  const sections = [
    {
      title: "Overview",
      body: (
        <p className="text-base leading-7 text-gray-800">
          A Retrieval-Augmented Generation chatbot that provides accurate, source-cited answers to UNH graduate catalog questions using semantic search and fine-tuned language models, reducing student inquiry response time by 90% and improving information accessibility 24/7.
        </p>
      ),
    },
    {
      title: "The Problem",
      body: (
        <p className="text-base leading-7 text-gray-800">
          Students and faculty struggled to navigate 500+ pages of complex graduate catalog content, facing inconsistent information, delayed responses to academic questions, and difficulty interpreting regulations and admission requirements across multiple programs and policies.
        </p>
      ),
    },
    {
      title: "My Approach",
      body: (
        <p className="text-base leading-7 text-gray-800">
          Designed a multi-stage RAG pipeline combining semantic search, query enhancement, tier-based content prioritization, and cross-encoder re-ranking. Built a full-stack solution with FastAPI backend, Next.js frontend, and implemented automated gold-standard testing with 200+ evaluation cases across academic regulations, admissions, and program information categories.
        </p>
      ),
    },
    {
      title: "Key Technical Decisions",
      body: (
        <ul className="text-base space-y-2 ml-5 list-disc marker:text-gray-600">
          <li><strong>Sentence-Transformers (all-MiniLM-L6-v2) for embeddings:</strong> Balanced accuracy with computational efficiency</li>
          <li><strong>FLAN-T5-small fine-tuning:</strong> Domain-specific adaptation while maintaining fast inference</li>
          <li><strong>Tier-based retrieval system:</strong> Prioritized academic regulations (3.0x boost) over general content</li>
          <li><strong>Cross-encoder re-ranking:</strong> Improved result precision without sacrificing recall</li>
          <li><strong>Docker containerization:</strong> Simplified deployment and model persistence</li>
          <li><strong>YAML configuration:</strong> Feature toggles for gradual enhancement rollout</li>
        </ul>
      ),
    },
    {
      title: "Results & Impact",
      body: (
        <ul className="text-base space-y-2 ml-5 list-disc marker:text-gray-600">
          <li><strong>90% reduction in information search time for students</strong></li>
          <li><strong>85% user satisfaction rate based on feedback</strong></li>
          <li><strong>91% Recall@5 and 82% Nugget F1 on automated evaluation</strong></li>
          <li><strong>200+ staff hours saved monthly through automated responses</strong></li>
          <li><strong>24/7 availability replacing limited office hour support</strong></li>
          <li><strong>Successfully deployed in production with real-time monitoring dashboard and automated testing pipeline</strong></li>
        </ul>
      ),
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-black mb-2">🎓 UNH Graduate Catalog RAG Chatbot</h3>
        <p className="text-sm text-gray-700">September 2024 - December 2024</p>
        <p className="text-sm text-gray-600 mt-1">AI Engineer & Full-Stack Developer (Internship Project)</p>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gray-300 to-transparent -translate-x-1/2"></div>
        
        {sections.map((section, idx) => {
          const isRight = idx % 2 === 1;
          const dotClass = [
            "bg-gray-400/90",
            "bg-gray-500/90",
            "bg-gray-600/90",
            "bg-gray-700/90",
          ][idx % 4];

          return (
            <div key={section.title} className="grid grid-cols-1 md:grid-cols-2 md:gap-16 items-start">
              <div
                className={
                  "group relative md:max-w-xl rounded-2xl border border-gray-300 bg-white p-5 md:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md" +
                  (isRight
                    ? " md:col-start-2 md:justify-self-start"
                    : " md:col-start-1 md:justify-self-end")
                }
              >
                <div
                  className={
                    "hidden md:block absolute top-6 h-3 w-3 rounded-full border border-gray-400 ring-4 ring-gray-100 " +
                    dotClass +
                    (isRight ? " -left-10" : " -right-10")
                  }
                />

                <h4 className="text-2xl font-bold mb-3 tracking-tight text-black">{section.title}</h4>
                {section.body}
              </div>
              {section.title === "The Problem" && (
                <div className="hidden md:flex items-center justify-center">
                  {/* No image for PhotoMentorAI */}
                </div>
              )}
              {section.title === "My Approach" && (
                <div className="hidden md:flex items-center justify-center">
                  {/* No image for PhotoMentorAI */}
                </div>
              )}
              {section.title === "Results & Impact" && (
                <div className="hidden md:flex items-center justify-center">
                  {/* No image for PhotoMentorAI */}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const AriaCaseStudy = () => {
  const sections = [
    {
      title: "Overview",
      body: (
        <p className="text-base leading-7 text-gray-800">
          An autonomous customer support agent that resolves tickets end-to-end without human handoff on the happy path. Built with a 5-node LangGraph state machine, two-layer escalation system, and retrieval-augmented generation with citation grounding. Every response is traceable to source documents, making the system auditable and debuggable.
        </p>
      ),
    },
    {
      title: "The Problem",
      body: (
        <p className="text-base leading-7 text-gray-800">
          Customer support is the largest cost center in most consumer products and the slowest channel for users. Off-the-shelf chatbots fail because they hallucinate, escalate too aggressively, and can't carry multi-turn context. Building a real autonomous agent requires explicit state, retrieval grounding, and a principled escalation system that knows when to stop and ask for help.
        </p>
      ),
    },
    {
      title: "My Approach",
      body: (
        <div className="space-y-5">
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-2">
              The Graph Architecture
            </h5>
            <ul className="text-base space-y-2 ml-5 list-disc marker:text-gray-600">
              <li><strong>5-Node LangGraph:</strong> Triage → Retrieve → Agent → Evaluate → (Reply | Escalate)</li>
              <li><strong>Stateful Checkpointing:</strong> Every conversation state can be paused, inspected, and resumed</li>
              <li><strong>Pure Functions:</strong> Each node is a pure function over conversation state with explicit routing</li>
              <li><strong>Claude Sonnet 4.5:</strong> Agent node generates responses grounded in retrieved citations</li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-2">
              Two-Layer Escalation System
            </h5>
            <ul className="text-base space-y-2 ml-5 list-disc marker:text-gray-600">
              <li><strong>Layer 1 - Regex Pre-checks:</strong> Fast, cheap detection of obvious triggers (legal language, explicit human request)</li>
              <li><strong>Layer 2 - LLM Evaluation:</strong> Nuanced detection of frustration patterns and repeated failures</li>
              <li><strong>7 Trigger Types:</strong> Legal threats, severe sentiment, low confidence, repeated failures, sensitive topics, policy edges, explicit user request</li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-2">
              Retrieval-Augmented Generation
            </h5>
            <ul className="text-base space-y-2 ml-5 list-disc marker:text-gray-600">
              <li><strong>Chroma Vector Store:</strong> Every response grounded in citations from knowledge base</li>
              <li><strong>Citation Requirement:</strong> Agent must attach citation IDs to factual claims</li>
              <li><strong>Evaluator Validation:</strong> Rejects answers without proper citation IDs</li>
              <li><strong>Frontend Rendering:</strong> Users see exactly which document each statement came from</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Key Technical Decisions",
      body: (
        <ul className="text-base space-y-2 ml-5 list-disc marker:text-gray-600">
          <li><strong>LangGraph State Machine:</strong> Explicit state management with checkpointing for production reliability</li>
          <li><strong>Two-Layer Escalation:</strong> Separating regex and LLM checks prevents over-escalation from model uncertainty</li>
          <li><strong>Deterministic Testing:</strong> 27-test pytest suite with mocked LLM for regression testing without API calls</li>
          <li><strong>Citation Grounding:</strong> Zero ungrounded responses by design through evaluator validation</li>
          <li><strong>Operations Console:</strong> 6-view React dashboard showing routing decisions in real time</li>
          <li><strong>Modular Architecture:</strong> Adding triggers is a single regex line + test case; adding tools is a new node + edge</li>
        </ul>
      ),
    },
    {
      title: "Results & Impact",
      body: (
        <ul className="text-base space-y-2 ml-5 list-disc marker:text-gray-600">
          <li><strong>End-to-End Resolution:</strong> Multi-turn tickets resolved without human handoff on happy path</li>
          <li><strong>27/27 Tests Passing:</strong> Deterministic test suite runs in seconds, catches regressions before shipping</li>
          <li><strong>Zero Ungrounded Responses:</strong> Every claim cited through evaluator validation</li>
          <li><strong>Clear Separation:</strong> New escalation trigger = 1 regex line + test; new tool = new node + edge</li>
          <li><strong>Transparent Decisions:</strong> Operations console shows exactly why agent chose to escalate or respond</li>
          <li><strong>Production Ready:</strong> Built with explicit state for pause/resume/inspect capabilities</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-black mb-2">🤖 Aria — Autonomous Customer Support</h3>
        <p className="text-sm text-gray-700">March 2026</p>
        <p className="text-sm text-gray-600 mt-1">AI Engineer & Agent Orchestration Specialist</p>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gray-300 to-transparent -translate-x-1/2"></div>
        
        {sections.map((section, idx) => {
          const isRight = idx % 2 === 1;
          const dotClass = [
            "bg-blue-400/90",
            "bg-indigo-400/90",
            "bg-violet-400/90",
            "bg-purple-400/90",
          ][idx % 4];

          return (
            <div key={section.title} className="grid grid-cols-1 md:grid-cols-2 md:gap-16 items-start">
              <div
                className={
                  "group relative md:max-w-xl rounded-2xl border border-gray-300 bg-white p-5 md:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md" +
                  (isRight
                    ? " md:col-start-2 md:justify-self-start"
                    : " md:col-start-1 md:justify-self-end")
                }
              >
                <div
                  className={
                    "hidden md:block absolute top-6 h-3 w-3 rounded-full border border-gray-400 ring-4 ring-gray-100 " +
                    dotClass +
                    (isRight ? " -left-10" : " -right-10")
                  }
                />

                <h4 className="text-2xl font-bold mb-3 tracking-tight text-black">{section.title}</h4>
                {section.body}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ClinicalAICaseStudy = () => {
  const sections = [
    {
      title: "Overview",
      body: (
        <p className="text-base leading-7 text-gray-800">
          ClinicalAI is a full-stack multilingual patient assistant designed specifically for small and independent clinics. It gives doctors three core capabilities: AI-powered symptom analysis with explainable diagnosis, automated SOAP note generation from doctor-patient conversations, and voice-to-text symptom input in English, Hindi, and Spanish. The system is built to be lightweight, self-hostable, and deployable for under $7/month — making enterprise-grade clinical AI accessible to any clinic regardless of budget.
        </p>
      ),
    },
    {
      title: "The Problem",
      body: (
        <p className="text-base leading-7 text-gray-800">
          Small and independent clinics represent over 90% of all medical practices in the United States, yet they are systematically priced out of AI-powered clinical tools. Enterprise solutions like Google MedLM and Microsoft DAX cost thousands of dollars per month and require dedicated IT infrastructure. At the same time, doctors at these clinics spend an estimated 2 hours per day on documentation — writing SOAP notes, reviewing patient history, and logging visit summaries. Three core problems exist: documentation overhead, language barriers for 67M+ non-English speakers, and no clinical decision support available to independent clinics.
        </p>
      ),
    },
    {
      title: "My Approach",
      body: (
        <div className="space-y-5">
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-2">
              Machine Learning — Symptom Classification
            </h5>
            <ul className="text-base space-y-2 ml-5 list-disc marker:text-gray-600">
              <li><strong>Dataset:</strong> Kaggle Disease-Symptom dataset with 4,920 samples across 41 diseases and 131 symptoms</li>
              <li><strong>Model Selection:</strong> Logistic Regression with TF-IDF achieved 98% cross-validated accuracy, beating Random Forest, SVM, and XGBoost</li>
              <li><strong>Explainability:</strong> Outputs ranked conditions with confidence scores, triggered symptoms, and plain-language explanations — not a black box</li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-2">
              Large Language Model — Claude Sonnet Pipelines
            </h5>
            <ul className="text-base space-y-2 ml-5 list-disc marker:text-gray-600">
              <li><strong>Symptom Analysis Pipeline:</strong> Takes patient description, runs ML classifier, generates structured diagnosis with urgency and next steps</li>
              <li><strong>SOAP Note Pipeline:</strong> Transforms raw doctor-patient conversation into structured Subjective, Objective, Assessment, and Plan notes</li>
              <li><strong>Clinical Accuracy:</strong> Prompts engineered to flag uncertainty, avoid overconfidence, and always recommend professional review</li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-2">
              Voice Input — OpenAI Whisper API
            </h5>
            <ul className="text-base space-y-2 ml-5 list-disc marker:text-gray-600">
              <li><strong>Lightweight Design:</strong> OpenAI Whisper API instead of local 2GB+ model keeps Docker image under 300MB</li>
              <li><strong>Multilingual Support:</strong> English, Hindi, and Spanish for both text and voice transcription</li>
              <li><strong>Direct Integration:</strong> Audio transcribed and fed directly into symptom analysis flow</li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-2">
              Backend & Frontend Architecture
            </h5>
            <ul className="text-base space-y-2 ml-5 list-disc marker:text-gray-600">
              <li><strong>FastAPI Backend:</strong> JWT authentication, SQLAlchemy ORM, PostgreSQL for patient history, isolated records per doctor</li>
              <li><strong>React Frontend:</strong> Three core views — Symptom Checker, Note Writer, Patient History with persistent language selection</li>
              <li><strong>PDF Export:</strong> SOAP notes downloadable as PDF using jsPDF</li>
              <li><strong>Deployment:</strong> Docker on Render Web Service, static site on Render</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Key Technical Decisions",
      body: (
        <ul className="text-base space-y-2 ml-5 list-disc marker:text-gray-600">
          <li><strong>Why Logistic Regression over deep learning:</strong> Interpretability is a clinical requirement — doctors can see which features drove the prediction</li>
          <li><strong>Why OpenAI Whisper API over local Whisper:</strong> Keeps container under 300MB for Render's 512MB free tier vs 1-2GB local model</li>
          <li><strong>Why FastAPI over Django/Flask:</strong> Async support, automatic OpenAPI docs, Pydantic validation for concurrent ML API requests</li>
          <li><strong>Why Render over AWS:</strong> Simplicity and automatic SSL for portfolio projects vs operational overhead of EC2, ECR, VPC</li>
          <li><strong>CI/CD Pipeline:</strong> Five-stage GitHub Actions — tests, build, Docker push, backend deploy, frontend deploy in under 3 minutes</li>
        </ul>
      ),
    },
    {
      title: "Results & Impact",
      body: (
        <ul className="text-base space-y-2 ml-5 list-disc marker:text-gray-600">
          <li><strong>98% Accuracy:</strong> Symptom classifier cross-validated on 41 diseases with 131 recognized symptoms</li>
          <li><strong>3+ Hours Saved Daily:</strong> SOAP note generation reduces documentation from 10 minutes to 30 seconds per visit (20 patients/day)</li>
          <li><strong>67M+ Non-English Speakers:</strong> Multilingual voice input removes language barriers for accurate symptom communication</li>
          <li><strong>$7/Month Cost:</strong> Deployable on Render at 1/100th the cost of enterprise alternatives (Google MedLM, Microsoft DAX)</li>
          <li><strong>Under 3 Minutes:</strong> CI/CD pipeline from push to production deployment</li>
          <li><strong>Under 500ms:</strong> API response time for real-time clinical decision support</li>
          <li><strong>5 Automated Tests:</strong> 100% pass rate with pytest for quality assurance</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-black mb-2">🏥 ClinicalAI — Multilingual Patient Assistant</h3>
        <p className="text-sm text-gray-700">AI-Powered Clinical Documentation & Diagnosis Support</p>
        <p className="text-sm text-gray-600 mt-1">AI Engineer & Full-Stack Developer</p>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gray-300 to-transparent -translate-x-1/2"></div>
        
        {sections.map((section, idx) => {
          const isRight = idx % 2 === 1;
          const dotClass = [
            "bg-gray-400/90",
            "bg-gray-500/90",
            "bg-gray-600/90",
            "bg-gray-700/90",
          ][idx % 4];

          return (
            <div key={section.title} className="grid grid-cols-1 md:grid-cols-2 md:gap-16 items-start">
              <div
                className={
                  "group relative md:max-w-xl rounded-2xl border border-gray-300 bg-white p-5 md:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md" +
                  (isRight
                    ? " md:col-start-2 md:justify-self-start"
                    : " md:col-start-1 md:justify-self-end")
                }
              >
                <div
                  className={
                    "hidden md:block absolute top-6 h-3 w-3 rounded-full border border-gray-400 ring-4 ring-white " +
                    dotClass +
                    (isRight ? " -left-10" : " -right-10")
                  }
                />

                <h4 className="text-2xl font-bold mb-3 tracking-tight text-black">{section.title}</h4>
                {section.body}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const PaySplitCaseStudy = () => {
  const sections = [
    {
      title: "Overview",
      body: (
        <p className="text-base leading-7 text-gray-800">
          Co-founded and engineered PaySplit AI, a production fintech platform that solves payment fragmentation by enabling users to split a single online checkout across multiple credit cards automatically. Built complete AI-powered payment infrastructure with real-time fraud detection, smart card allocation, and Chrome extension integration — launched in 6 months with a 3-person founding team while completing graduate degrees.
        </p>
      ),
    },
    {
      title: "The Problem",
      body: (
        <p className="text-base leading-7 text-gray-800">
          Online checkout systems are fundamentally limited to one card per transaction, creating massive friction for users with funds spread across multiple cards. Users face declined payments, missed cashback opportunities, and complex manual workarounds. Despite digital wallet advances (Apple Pay, Google Pay), no solution exists for automatic split-card payments at checkout — leaving millions of users unable to optimize their financial resources during online purchases.
        </p>
      ),
    },
    {
      title: "My Approach",
      body: (
        <div className="space-y-5">
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-2">
              AI-Powered Payment Architecture
            </h5>
            <ul className="text-base space-y-2 ml-5 list-disc marker:text-gray-600">
              <li><strong>Real-Time Fraud Detection:</strong> Built XGBoost + PyTorch pipeline scoring every transaction in under 50ms with 95%+ accuracy, embedded in FastAPI app.state for instant inference</li>
              <li><strong>Smart Card Allocation Engine:</strong> Designed SVD-based optimization algorithm that evaluates card balances, reward rates, merchant categories, and fraud risk simultaneously</li>
              <li><strong>Multi-Card Payment Flow:</strong> Engineered virtual card system that splits single checkout across multiple real cards automatically via Stripe Issuing API</li>
              <li><strong>Live Risk Monitoring:</strong> Implemented real-time fraud dashboard with continuous ML scoring and automated transaction blocking</li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-2">
              Chrome Extension Intelligence
            </h5>
            <ul className="text-base space-y-2 ml-5 list-disc marker:text-gray-600">
              <li><strong>Universal Checkout Detection:</strong> Built Chrome extension using MutationObserver to detect checkout pages across 500+ sites including Amazon, DoorDash, Uber Eats, and major retailers</li>
              <li><strong>SPA-Aware Architecture:</strong> Engineered for React/Next.js storefront compatibility with dynamic content monitoring and real-time UI injection</li>
              <li><strong>Seamless User Experience:</strong> Automatic payment recommendations with fraud risk scoring and explanation of split allocation logic</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Key Technical Decisions",
      body: (
        <ul className="text-base space-y-2 ml-5 list-disc marker:text-gray-600">
          <li><strong>Sub-50ms Fraud Inference:</strong> XGBoost + PyTorch model embedded in FastAPI app.state for real-time scoring on every transaction without API latency</li>
          <li><strong>SVD Multi-Objective Optimization:</strong> Card allocation engine balancing limit constraints, reward maximization, and fraud risk across multiple dimensions</li>
          <li><strong>Stripe Issuing Integration:</strong> Virtual card creation and real-time transaction routing with webhook-based payment event processing</li>
          <li><strong>Plaid Bank Connectivity:</strong> Secure API integration for real-time balance checking and transaction history across multiple financial institutions</li>
          <li><strong>DynamoDB + Redis Architecture:</strong> High-performance data layer for card data, transaction logs, and real-time fraud scoring with horizontal scaling</li>
          <li><strong>Production CI/CD Pipeline:</strong> Docker + GitHub Actions with automated testing across 8+ feature branches and zero-downtime deployments</li>
          <li><strong>AWS Infrastructure:</strong> PostgreSQL primary database, Redis caching layer, and auto-scaling EC2 instances with 99.9% uptime SLA</li>
        </ul>
      ),
    },
    {
      title: "Results & Impact",
      body: (
        <ul className="text-base space-y-2 ml-5 list-disc marker:text-gray-600">
          <li><strong>Production Live Platform:</strong> Paysplit.in launched with real users, live transactions, and complete payment processing pipeline</li>
          <li><strong>95%+ Fraud Detection Accuracy:</strong> Achieved on held-out transaction data with sub-50ms inference time for real-time protection</li>
          <li><strong>500+ Site Compatibility:</strong> Chrome extension successfully detects and integrates with checkout pages across major e-commerce platforms</li>
          <li><strong>Complete Financial Stack:</strong> End-to-end integration with Plaid (banking), Stripe (payments), and custom AI recommendation engine</li>
          <li><strong>Real-Time Monitoring Dashboard:</strong> Live fraud detection interface with continuous ML scoring and automated risk assessment</li>
          <li><strong>6-Month Rapid Execution:</strong> Delivered complete fintech product from concept to production as 3-person founding team while completing graduate degrees</li>
          <li><strong>99.9% Production Uptime:</strong> AWS infrastructure with automated scaling, monitoring, and disaster recovery systems</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-black mb-2">💳 PaySplit AI</h3>
        <p className="text-sm text-gray-700">Fintech Platform Development</p>
        <p className="text-sm text-gray-600 mt-1">Co-Founder & AI/ML Engineer • 3-Person Founding Team</p>
        <div className="mt-3">
          <a
            href="https://www.paysplit.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 font-normal text-sm transition-colors"
          >
            paysplit.in
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gray-300 to-transparent -translate-x-1/2"></div>
        
        {sections.map((section, idx) => {
          const isRight = idx % 2 === 1;
          const dotClass = [
            "bg-blue-400/90",
            "bg-green-400/90",
            "bg-purple-400/90",
            "bg-orange-400/90",
            "bg-red-400/90",
          ][idx % 5];

          return (
            <div key={section.title} className="grid grid-cols-1 md:grid-cols-2 md:gap-16 items-start">
              <div
                className={
                  "group relative md:max-w-xl rounded-2xl border border-gray-300 bg-white p-5 md:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md" +
                  (isRight
                    ? " md:col-start-2 md:justify-self-start"
                    : " md:col-start-1 md:justify-self-end")
                }
              >
                <div
                  className={
                    "hidden md:block absolute top-6 h-3 w-3 rounded-full border border-gray-400 ring-4 ring-white " +
                    dotClass +
                    (isRight ? " -left-10" : " -right-10")
                  }
                />

                <h4 className="text-2xl font-bold mb-3 tracking-tight text-black">{section.title}</h4>
                {section.body}
              </div>
              {section.title === "The Problem" && (
                <div className="hidden md:flex items-center justify-center">
                  {/* No image for PaySplit AI */}
                </div>
              )}
              {section.title === "My Approach" && (
                <div className="hidden md:flex items-center justify-center">
                  {/* No image for PaySplit AI */}
                </div>
              )}
              {section.title === "Results & Impact" && (
                <div className="hidden md:flex items-center justify-center">
                  {/* No image for PaySplit AI */}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ProjectDetails = () => {
  const { hash } = useLocation();

  const projectOrder = [
    "paysplit-ai",
    "fake-job-detector",
    "unh-graduate-catalog-chatbot",
    "aria-customer-support",
    "clinical-ai",
  ];

  const orderedProjects = [...projects].sort(
    (a, b) => projectOrder.indexOf(a.id) - projectOrder.indexOf(b.id)
  );

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'auto' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  const renderCaseStudy = (projectId: string) => {
    switch (projectId) {
      case 'paysplit-ai':
        return <PaySplitCaseStudy />;
      case 'fake-job-detector':
        return <FakeJobCaseStudy />;
      case 'unh-graduate-catalog-chatbot':
        return <UNHCaseStudy />;
      case 'aria-customer-support':
        return <AriaCaseStudy />;
      case 'clinical-ai':
        return <ClinicalAICaseStudy />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white text-black pt-24 min-h-screen">
      <main className="container mx-auto px-6 pb-24">
        <Reveal disableInView>
          <div className="py-12 border-b border-gray-300 mb-12 flex justify-between items-end">
            <div>
              <h4 className="text-gray-600 font-bold uppercase tracking-[0.2em] text-xs mb-2">Project Deep Dives</h4>
              <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight text-black">Complete Project Case Studies</h1>
            </div>
          </div>
        </Reveal>

        {orderedProjects.map((project) => (
          <Reveal key={project.id} disableInView>
            <section id={project.id} className="py-12 md:py-24 border-b border-gray-300 last:border-0 scroll-mt-24">
              <div className="max-w-6xl mx-auto">
                {/* Project Header */}
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2 font-heading text-black">{project.title}</h2>
                  <p className="text-gray-700 font-bold mb-4 uppercase tracking-widest text-sm">{project.subtitle}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-gray-300 bg-gray-200 px-3 py-1 text-[12px] font-medium text-gray-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-600 bg-transparent hover:bg-gray-900 text-black hover:text-white font-bold transition-all duration-200 text-sm px-4 py-2 group"
                      >
                        <Github size={16} className="text-black group-hover:text-white" />
                        GitHub
                      </a>
                    )}
                    {project.demoUrl && (
                      <Button asChild variant="glow">
                        <a href={project.demoUrl} target="_blank" rel="noreferrer">
                          <ExternalLink />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Project Image */}
                <div className="mb-8">
                  <div className="rounded-3xl border border-white/10 overflow-hidden shadow-2xl bg-black/20">
                    <div className="w-full">
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="w-full object-contain"
                        loading="lazy"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Case Study Content */}
                <div className="pt-2">
                  {renderCaseStudy(project.id)}
                </div>
              </div>
            </section>
          </Reveal>
        ))}
      </main>
    </div>
  );
};

export default ProjectDetails;