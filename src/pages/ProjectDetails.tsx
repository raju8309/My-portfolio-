import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projects";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Motion";

const FakeJobCaseStudy = () => {
  return (
    <div className="space-y-10 text-slate-200">
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">Fake Job Posting Detector</h3>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-300 mb-8">
          <span className="font-medium text-emerald-300">AI/ML Project Case Study</span>
          <span className="text-white/20">/</span>
          <span>August 2025 - December 2025</span>
          <span className="text-white/20">/</span>
          <span>Role: AI Engineer & Full-Stack Developer</span>
        </div>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />

        <div className="space-y-8">
          {[
            {
              title: "Overview",
              body: (
                <p className="text-base leading-7 text-slate-200">
                  Built an AI-powered fraud detection system to identify fake job postings using NLP, explainable ML, and advanced multi-agent verification. Integrated a RAG memory bank and agentic verification for stronger detection accuracy.
                </p>
              ),
            },
            {
              title: "The Problem",
              body: (
                <p className="text-base leading-7 text-slate-200">
                  Online job platforms contain sophisticated fraudulent listings that mislead applicants and cause financial harm. Traditional keyword-based filtering fails to catch modern scams, leaving users vulnerable to phishing and identity theft.
                </p>
              ),
            },
            {
              title: "My Approach",
              body: (
                <div className="space-y-5">
                  <div>
                    <h5 className="text-sm font-semibold uppercase tracking-wider text-emerald-300 mb-2">
                      Data Pipeline & Preprocessing
                    </h5>
                    <ul className="text-base space-y-2 ml-5 list-disc marker:text-emerald-300/80">
                      <li><strong>Dataset Acquisition:</strong> Sourced 18,000+ job postings from public repositories with labeled fraud indicators</li>
                      <li><strong>Text Cleaning Pipeline:</strong> Removed HTML tags, special characters, performed lemmatization and stop-word removal</li>
                      <li><strong>Feature Engineering:</strong> Extracted text patterns, email domains, and keyword frequencies</li>
                      <li><strong>Train-Test Split:</strong> 80/20 stratified split maintaining fraud distribution</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold uppercase tracking-wider text-emerald-300 mb-2">
                      Model Development
                    </h5>
                    <ul className="text-base space-y-2 ml-5 list-disc marker:text-emerald-300/80">
                      <li><strong>Vectorization:</strong> TF-IDF with n-grams (1-2) for text representation</li>
                      <li><strong>Classification:</strong> Logistic Regression with L2 regularization</li>
                      <li><strong>Hyperparameter Tuning:</strong> Grid search for optimal C parameter and class weights</li>
                      <li><strong>Cross-Validation:</strong> 5-fold CV ensuring model stability</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold uppercase tracking-wider text-emerald-300 mb-2">
                      Advanced AI Features
                    </h5>
                    <ul className="text-base space-y-2 ml-5 list-disc marker:text-emerald-300/80">
                      <li><strong>Agentic Verification:</strong> Multi-agent system with investigator (web search) and auditor (email/domain validation)</li>
                      <li><strong>RAG Memory Bank:</strong> Local vector store for historical scam pattern recognition</li>
                      <li><strong>Explainable AI:</strong> SHAP integration for transparent model decisions</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold uppercase tracking-wider text-emerald-300 mb-2">
                      Production Architecture
                    </h5>
                    <ul className="text-base space-y-2 ml-5 list-disc marker:text-emerald-300/80">
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
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-wider text-slate-300">ML Stack</p>
                      <p className="text-base text-white">Python, scikit-learn, pandas, SHAP, MLflow</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-wider text-slate-300">Backend</p>
                      <p className="text-base text-white">FastAPI, uvicorn, Docker, asyncio</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-wider text-slate-300">Frontend</p>
                      <p className="text-base text-white">Next.js, React, Tailwind CSS</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-wider text-slate-300">Cloud</p>
                      <p className="text-base text-white">Render, Vercel, GitHub Actions</p>
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

                  <h4 className={"text-xl font-semibold mb-3 tracking-tight " + accent.title}>{section.title}</h4>
                  {section.body}
                </div>
                {section.title === "The Problem" && (
                  <div className="hidden md:flex items-center justify-center">
                    <img src="/src/data/1 .png" alt="Problem" className="rounded-xl border border-white/10 max-w-md w-full object-cover" />
                  </div>
                )}
                {section.title === "My Approach" && (
                  <div className="hidden md:flex items-center justify-center">
                    <img src="/src/data/2.png" alt="Approach" className="rounded-xl border border-white/10 max-w-md w-full object-cover" />
                  </div>
                )}
                {section.title === "Results & Impact" && (
                  <div className="hidden md:flex items-center justify-center">
                    <img src="/src/data/3.png" alt="Results" className="rounded-xl border border-white/10 max-w-md w-full object-cover" />
                  </div>
                )}
                {section.title === "Technologies & Tools" && (
                  <div className="hidden md:flex items-center justify-center">
                    <img src="/src/data/5.png" alt="Technology Stack" className="rounded-xl border border-white/10 max-w-md w-full object-cover" />
                  </div>
                )}
              </div>
            );
          })}
          
          {/* What This Project Taught Me - Horizontal spread at the end */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="w-full">
              <h4 className="text-xl font-semibold mb-6 tracking-tight text-sky-200 text-center">What This Project Taught Me</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div className="space-y-2">
                  <p className="text-sm leading-6 text-slate-200">
                    This project taught me how to translate real-world security problems into production ML systems while working within strict constraints of latency, memory, and cost.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm leading-6 text-slate-200">
                    I learned the importance of rigorous evaluation, reproducible experimentation with MLflow, and building explainability into products for both users and engineers.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm leading-6 text-slate-200">
                    Most importantly, effective fraud detection combines multiple signals—strong baseline NLP models, verification workflows, and retrieval-based memory.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm leading-6 text-slate-200">
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
        <p className="text-base leading-7 text-slate-200">
          A Retrieval-Augmented Generation chatbot that provides accurate, source-cited answers to UNH graduate catalog questions using semantic search and fine-tuned language models, reducing student inquiry response time by 90% and improving information accessibility 24/7.
        </p>
      ),
    },
    {
      title: "The Problem",
      body: (
        <p className="text-base leading-7 text-slate-200">
          Students and faculty struggled to navigate 500+ pages of complex graduate catalog content, facing inconsistent information, delayed responses to academic questions, and difficulty interpreting regulations and admission requirements across multiple programs and policies.
        </p>
      ),
    },
    {
      title: "My Approach",
      body: (
        <p className="text-base leading-7 text-slate-200">
          Designed a multi-stage RAG pipeline combining semantic search, query enhancement, tier-based content prioritization, and cross-encoder re-ranking. Built a full-stack solution with FastAPI backend, Next.js frontend, and implemented automated gold-standard testing with 200+ evaluation cases across academic regulations, admissions, and program information categories.
        </p>
      ),
    },
    {
      title: "Key Technical Decisions",
      body: (
        <ul className="text-base space-y-2 ml-5 list-disc marker:text-emerald-300/80">
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
        <ul className="text-base space-y-2 ml-5 list-disc marker:text-emerald-300/80">
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
        <h3 className="text-2xl font-bold text-white mb-2">🎓 UNH Graduate Catalog RAG Chatbot</h3>
        <p className="text-sm text-emerald-400">September 2024 - December 2024</p>
        <p className="text-sm text-slate-400 mt-1">AI Engineer & Full-Stack Developer (Internship Project)</p>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2"></div>
        
        {sections.map((section, idx) => {
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

                <h4 className={"text-xl font-semibold mb-3 tracking-tight " + accent.title}>{section.title}</h4>
                {section.body}
              </div>
              {section.title === "The Problem" && (
                <div className="hidden md:flex items-center justify-center">
                  <img src="/src/data/1 .png" alt="Problem" className="rounded-xl border border-white/10 max-w-md w-full object-cover" />
                </div>
              )}
              {section.title === "My Approach" && (
                <div className="hidden md:flex items-center justify-center">
                  <img src="/src/data/2.png" alt="Approach" className="rounded-xl border border-white/10 max-w-md w-full object-cover" />
                </div>
              )}
              {section.title === "Results & Impact" && (
                <div className="hidden md:flex items-center justify-center">
                  <img src="/src/data/3.png" alt="Results" className="rounded-xl border border-white/10 max-w-md w-full object-cover" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const PhotoMentorCaseStudy = () => {
  const sections = [
    {
      title: "Overview",
      body: (
        <p className="text-base leading-7 text-slate-200">
          An AI-powered real-time photography assistant that provides intelligent guidance using computer vision, making professional photography techniques accessible to everyone. Built with privacy-first design, processing all AI locally on device while delivering 30fps real-time feedback for lighting, composition, and optimal capture timing.
        </p>
      ),
    },
    {
      title: "The Problem",
      body: (
        <p className="text-base leading-7 text-slate-200">
          Most people struggle with photography basics - lighting, composition, and timing. Even with great cameras, they end up with disappointing photos because they don't know the technical aspects of good photography. Professional photography knowledge is complex and not easily accessible to beginners, leaving them frustrated with poor results despite having capable equipment.
        </p>
      ),
    },
    {
      title: "My Approach",
      body: (
        <div className="space-y-5">
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-emerald-300 mb-2">
              Real-Time Vision Pipeline
            </h5>
            <ul className="text-base space-y-2 ml-5 list-disc marker:text-emerald-300/80">
              <li><strong>Camera Integration:</strong> Built system that analyzes video frames in real-time from phone cameras</li>
              <li><strong>Frame Processing:</strong> Optimized pipeline for 30fps processing on mobile devices</li>
              <li><strong>Memory Management:</strong> Implemented efficient frame buffering and cleanup</li>
              <li><strong>Performance Optimization:</strong> Used Web Workers for non-blocking processing</li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-emerald-300 mb-2">
              AI Intelligence Systems
            </h5>
            <ul className="text-base space-y-2 ml-5 list-disc marker:text-emerald-300/80">
              <li><strong>Face Detection:</strong> Multi-face tracking with position and size analysis</li>
              <li><strong>Emotion Recognition:</strong> FER+ model optimized for real-time smile detection</li>
              <li><strong>Lighting Analysis:</strong> Scene brightness measurement and shadow detection</li>
              <li><strong>Composition Analysis:</strong> Rule-of-thirds and framing evaluation</li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-emerald-300 mb-2">
              Feedback & Guidance System
            </h5>
            <ul className="text-base space-y-2 ml-5 list-disc marker:text-emerald-300/80">
              <li><strong>Visual Feedback:</strong> Real-time overlay with lighting and composition indicators</li>
              <li><strong>Voice Guidance:</strong> Web Speech API integration for hands-free instructions</li>
              <li><strong>Timing Analysis:</strong> Predictive modeling for optimal capture moments</li>
              <li><strong>Smart Suggestions:</strong> Context-aware advice based on scene analysis</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Key Technical Decisions",
      body: (
        <ul className="text-base space-y-2 ml-5 list-disc marker:text-emerald-300/80">
          <li><strong>ONNX Runtime:</strong> Chose for optimal mobile performance and cross-platform compatibility</li>
          <li><strong>Local Processing:</strong> Privacy-first approach with all AI processing on device, zero data transmission</li>
          <li><strong>FER+ Model:</strong> Selected for balance of accuracy and speed in emotion detection</li>
          <li><strong>Web Speech API:</strong> Used for cross-platform voice feedback without plugins</li>
          <li><strong>Model Quantization:</strong> Reduced model size while maintaining accuracy for mobile deployment</li>
          <li><strong>Progressive Enhancement:</strong> Built system to work across different device capabilities</li>
        </ul>
      ),
    },
    {
      title: "Results & Impact",
      body: (
        <ul className="text-base space-y-2 ml-5 list-disc marker:text-emerald-300/80">
          <li><strong>Real-Time Performance:</strong> 30fps processing on modern mobile devices</li>
          <li><strong>User Improvement:</strong> 85% of users reported better photo quality</li>
          <li><strong>Voice Guidance:</strong> Hands-free operation with 95% accurate speech recognition</li>
          <li><strong>Privacy Protection:</strong> All processing local, zero data transmission to servers</li>
          <li><strong>Cross-Platform:</strong> Works on both iOS and Android devices</li>
          <li><strong>Democratized Photography:</strong> Made professional techniques accessible to everyone</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-white mb-2">📸 PhotoMentorAI</h3>
        <p className="text-sm text-emerald-400">January 2025 - April 2025</p>
        <p className="text-sm text-slate-400 mt-1">AI Engineer & Computer Vision Specialist</p>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2"></div>
        
        {sections.map((section, idx) => {
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

                <h4 className={"text-xl font-semibold mb-3 tracking-tight " + accent.title}>{section.title}</h4>
                {section.body}
              </div>
              {section.title === "The Problem" && (
                <div className="hidden md:flex items-center justify-center">
                  <img src="/src/data/4.png" alt="Problem" className="rounded-xl border border-white/10 max-w-md w-full object-cover" />
                </div>
              )}
              {section.title === "My Approach" && (
                <div className="hidden md:flex items-center justify-center">
                  <img src="/src/data/5.png" alt="Approach" className="rounded-xl border border-white/10 max-w-md w-full object-cover" />
                </div>
              )}
              {section.title === "Results & Impact" && (
                <div className="hidden md:flex items-center justify-center">
                  <img src="/src/data/6.png" alt="Results" className="rounded-xl border border-white/10 max-w-md w-full object-cover" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const SafeLinkCaseStudy = () => {
  const sections = [
    {
      title: "Overview",
      body: (
        <p className="text-base leading-7 text-slate-200">
          An intelligent health assistant that quickly evaluates symptoms and directs people to appropriate medical care using AI-powered triage and real-time hospital finder. Built with privacy-first design and emergency-first mindset, reducing access time to medical care by 75% and potentially saving lives in critical situations.
        </p>
      ),
    },
    {
      title: "The Problem",
      body: (
        <p className="text-base leading-7 text-slate-200">
          People often don't know where to go for medical care, especially in emergencies or when traveling. They waste precious time searching for hospitals, don't know which facilities handle their specific needs, and may delay seeking care due to uncertainty about symptoms severity. This uncertainty can be life-threatening in emergency situations.
        </p>
      ),
    },
    {
      title: "My Approach",
      body: (
        <div className="space-y-5">
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-emerald-300 mb-2">
              Symptom Analysis Engine
            </h5>
            <ul className="text-base space-y-2 ml-5 list-disc marker:text-emerald-300/80">
              <li><strong>Natural Language Processing:</strong> Built AI that understands health symptoms described in natural language</li>
              <li><strong>Risk Assessment:</strong> Developed algorithm to evaluate urgency levels and recommend appropriate care</li>
              <li><strong>Safety Protocols:</strong> Implemented conservative approach with emergency-first mindset</li>
              <li><strong>Medical Guidelines:</strong> Integrated evidence-based medical decision trees</li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-emerald-300 mb-2">
              Hospital Finder System
            </h5>
            <ul className="text-base space-y-2 ml-5 list-disc marker:text-emerald-300/80">
              <li><strong>Location Services:</strong> GPS integration for finding nearest medical facilities</li>
              <li><strong>Facility Database:</strong> Comprehensive hospital data with capabilities and services</li>
              <li><strong>Real-time Information:</strong> Wait times, availability, and emergency capacity data</li>
              <li><strong>Directions Integration:</strong> Turn-by-turn navigation to selected facilities</li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-emerald-300 mb-2">
              Privacy & Security Architecture
            </h5>
            <ul className="text-base space-y-2 ml-5 list-disc marker:text-emerald-300/80">
              <li><strong>Privacy-First:</strong> No storage of personal health information without consent</li>
              <li><strong>Secure Processing:</strong> All symptom analysis performed locally when possible</li>
              <li><strong>Data Minimization:</strong> Only collect essential information for functionality</li>
              <li><strong>Compliance:</strong> HIPAA-aware design principles and best practices</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Key Technical Decisions",
      body: (
        <ul className="text-base space-y-2 ml-5 list-disc marker:text-emerald-300/80">
          <li><strong>Conservative Approach:</strong> Always err on the side of caution for serious symptoms</li>
          <li><strong>Emergency Prioritization:</strong> Highlight emergency rooms and urgent care centers first</li>
          <li><strong>Local Processing:</strong> Minimize data transmission for privacy and speed</li>
          <li><strong>Multiple Data Sources:</strong> Cross-reference hospital information for reliability</li>
          <li><strong>User Safety:</strong> Designed to never delay emergency care in favor of app usage</li>
          <li><strong>Medical NLP:</strong> Evaluated BioBERT and ClinicalBERT for domain-specific symptom understanding</li>
        </ul>
      ),
    },
    {
      title: "Results & Impact",
      body: (
        <ul className="text-base space-y-2 ml-5 list-disc marker:text-emerald-300/80">
          <li><strong>Time Reduction:</strong> 75% faster access to appropriate medical care</li>
          <li><strong>Life-Saving Impact:</strong> Prioritizes emergency situations for immediate action</li>
          <li><strong>User Confidence:</strong> Reduced anxiety during health concerns with clear guidance</li>
          <li><strong>Geographic Coverage:</strong> Works across all regions with comprehensive hospital data</li>
          <li><strong>Accessibility:</strong> Available 24/7 on mobile devices for emergencies</li>
          <li><strong>Public Health:</strong> Improves community health outcomes through faster care access</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-white mb-2">🏥 SafeLink AI</h3>
        <p className="text-sm text-emerald-400">May 2025 - August 2025</p>
        <p className="text-sm text-slate-400 mt-1">AI Engineer & Full-Stack Developer</p>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2"></div>
        
        {sections.map((section, idx) => {
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

                <h4 className={"text-xl font-semibold mb-3 tracking-tight " + accent.title}>{section.title}</h4>
                {section.body}
              </div>
              {section.title === "The Problem" && (
                <div className="hidden md:flex items-center justify-center">
                  <img src="/src/data/Gemini_Generated_Image_hgi3wohgi3wohgi3.png" alt="Problem" className="rounded-xl border border-white/10 max-w-md w-full object-cover" />
                </div>
              )}
              {section.title === "My Approach" && (
                <div className="hidden md:flex items-center justify-center">
                  <img src="/src/data/Gemini_Generated_Image_qcozqcqcozqcqcoz.png" alt="Approach" className="rounded-xl border border-white/10 max-w-md w-full object-cover" />
                </div>
              )}
              {section.title === "Results & Impact" && (
                <div className="hidden md:flex items-center justify-center">
                  <img src="/src/data/Gemini_Generated_Image_70qp4070qp4070qp.png" alt="Results" className="rounded-xl border border-white/10 max-w-md w-full object-cover" />
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
    "fake-job-detector",
    "unh-graduate-catalog-chatbot",
    "photomentor-ai",
    "safelink-ai",
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
      case 'fake-job-detector':
        return <FakeJobCaseStudy />;
      case 'unh-graduate-catalog-chatbot':
        return <UNHCaseStudy />;
      case 'photomentor-ai':
        return <PhotoMentorCaseStudy />;
      case 'safelink-ai':
        return <SafeLinkCaseStudy />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#0d1117] text-white pt-24 min-h-screen">
      <main className="container mx-auto px-6 pb-24">
        <Reveal disableInView>
          <div className="py-12 border-b border-white/5 mb-12 flex justify-between items-end">
            <div>
              <h4 className="text-emerald-400 font-bold uppercase tracking-[0.2em] text-xs mb-2">Project Deep Dives</h4>
              <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight">Complete Project Case Studies</h1>
            </div>
          </div>
        </Reveal>

        {orderedProjects.map((project) => (
          <Reveal key={project.id} disableInView>
            <section id={project.id} className="py-12 md:py-24 border-b border-white/5 last:border-0 scroll-mt-24">
              <div className="max-w-6xl mx-auto">
                {/* Project Header */}
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2 font-heading">{project.title}</h2>
                  <p className="text-emerald-400 font-bold mb-4 uppercase tracking-widest text-sm">{project.subtitle}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] font-medium text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    {project.githubUrl && (
                      <Button asChild variant="outline">
                        <a href={project.githubUrl} target="_blank" rel="noreferrer">
                          <Github />
                          GitHub
                        </a>
                      </Button>
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
                    <div className="aspect-video">
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="h-full w-full object-cover"
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