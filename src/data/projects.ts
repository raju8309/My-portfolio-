import ariaImage from "./aria.png";
import clinicalaiImage from "./clinical.png";
import fakeJobImage from "./fakejobdetecor.png";
import unhChatbotImage from "./unh-chatbot.png";
import paysplitImage from "./paysplit.png";

export const projects = [
  {
    id: "aria-customer-support",
    title: "Aria — Autonomous Customer Support Agent",
    subtitle: "LangGraph · FastAPI · React · Anthropic Claude · Chroma",
    description:
      "An autonomous customer support agent that resolves tickets end-to-end without human handoff on the happy path. Built with a 5-node LangGraph state machine, two-layer escalation system, and retrieval-augmented generation with citation grounding.",
    highlights: [
      "Built 5-node LangGraph state machine with stateful checkpointing for pause/resume/inspect capabilities",
      "Implemented two-layer escalation system (regex pre-checks + LLM evaluation) with 7 trigger types to prevent over-escalation",
      "Retrieval-augmented generation with Chroma vector store — every claim cited, zero ungrounded responses",
      "27-test pytest suite with deterministic conversation fixtures for regression testing without API calls",
    ],
    tech: ["Python", "LangGraph", "FastAPI", "React", "Anthropic Claude Sonnet", "Chroma", "pytest", "Vite", "Tailwind"],
    image: ariaImage,
    githubUrl: "https://github.com/raju8309/Aria_agent-",
    demoUrl: "",
    implementation: [
      {
        title: "Step 1: LangGraph State Machine Design",
        bullets: [
          "Structured Aria as a 5-node graph: triage → retrieve → agent → evaluate → (reply | escalate)",
          "Implemented stateful checkpointing for pause/resume/inspect capabilities",
          "Each node as pure function over conversation state with explicit routing logic",
        ],
      },
      {
        title: "Step 2: Triage & Intent Classification",
        bullets: [
          "Built triage node to classify intent and assess risk level",
          "Implemented initial routing decisions based on user message analysis",
        ],
      },
      {
        title: "Step 3: Retrieval-Augmented Generation",
        bullets: [
          "Integrated Chroma vector store for knowledge base citations",
          "Required citation IDs for all factual claims in agent responses",
          "Built retrieval node to pull relevant context before agent generation",
        ],
      },
      {
        title: "Step 4: Agent Node with Claude Sonnet",
        bullets: [
          "Implemented agent node using Anthropic Claude Sonnet 4.5",
          "Generated responses grounded in retrieved citations",
          "Attached citation IDs to every factual claim",
        ],
      },
      {
        title: "Step 5: Two-Layer Escalation System",
        bullets: [
          "Layer 1: Regex pre-checks for fast/cheap detection (legal language, profanity, explicit human request)",
          "Layer 2: LLM contextual evaluation for nuanced triggers (frustration patterns, repeated failures)",
          "7 trigger types: legal threats, severe sentiment, low confidence, repeated failures, sensitive topics, policy edges, explicit user request",
        ],
      },
      {
        title: "Step 6: Evaluation & Confidence Checking",
        bullets: [
          "Built evaluator node for confidence scoring and output validation",
          "Implemented criteria for determining when to reply vs escalate",
          "Validated response quality before sending to user",
        ],
      },
      {
        title: "Step 7: Testing Infrastructure",
        bullets: [
          "Created 27-test pytest suite covering routing logic and output parsing",
          "Built end-to-end graph execution tests with mocked LLM at LangChain interface",
          "Deterministic conversation fixtures for regression testing without API calls",
        ],
      },
      {
        title: "Step 8: Frontend Operations Console",
        bullets: [
          "Built Vite + Tailwind React console with 6 navigable views",
          "Live backend health, KB citation display, escalation-trigger panel",
          "Conversation history, knowledge base browser, and metrics dashboard",
        ],
      },
      {
        title: "Step 9: Backend API with FastAPI",
        bullets: [
          "Implemented FastAPI backend for conversation state management",
          "Built REST endpoints for graph execution and state inspection",
          "Integrated with LangGraph runtime for production deployment",
        ],
      },
    ],
  },
  {
    id: "clinical-ai",
    title: "ClinicalAI — Multilingual Patient Assistant",
    subtitle: "AI-Powered Clinical Documentation & Diagnosis Support for Small Clinics",
    description:
      "A full-stack multilingual patient assistant designed specifically for small and independent clinics. Gives doctors AI-powered symptom analysis with explainable diagnosis, automated SOAP note generation from doctor-patient conversations, and voice-to-text symptom input in English, Hindi, and Spanish — all deployable for under $7/month.",
    highlights: [
      "Achieved 98% cross-validated accuracy on symptom classification using Logistic Regression with TF-IDF across 41 diseases and 131 symptoms",
      "Reduced SOAP note documentation time from 10 minutes to under 30 seconds per patient visit — recovering over 3 hours daily for clinics seeing 20 patients",
      "Multilingual voice support in English, Hindi, and Spanish using OpenAI Whisper API — removing language barriers for 67M+ non-English speakers in the US",
      "Lightweight Docker deployment under 300MB on Render — making enterprise-grade clinical AI accessible to small clinics at 1/100th the cost of alternatives",
    ],
    tech: ["Python", "FastAPI", "React", "Anthropic Claude Sonnet", "OpenAI Whisper API", "scikit-learn", "PostgreSQL", "Docker", "GitHub Actions", "Render"],
    image: clinicalaiImage,
    githubUrl: "https://github.com/raju8309/Clinical_AI",
    demoUrl: "https://clinical-ai-1.onrender.com",
    implementation: [
      {
        title: "Step 1: ML Symptom Classification",
        bullets: [
          "Trained on Kaggle Disease-Symptom dataset: 4,920 samples, 41 diseases, 131 symptom features",
          "Evaluated Random Forest, SVM, XGBoost — Logistic Regression + TF-IDF achieved best 98% accuracy",
          "Outputs ranked conditions with confidence scores, triggered symptoms, and plain-language explanations",
        ],
      },
      {
        title: "Step 2: Claude Sonnet LLM Pipelines",
        bullets: [
          "Symptom Analysis Pipeline: Takes patient description, runs ML classifier, generates structured diagnosis with urgency and next steps",
          "SOAP Note Pipeline: Transforms raw doctor-patient conversation into structured Subjective, Objective, Assessment, and Plan notes",
          "Clinical accuracy prompts flag uncertainty, avoid overconfidence, and always recommend professional review",
        ],
      },
      {
        title: "Step 3: Voice Input with OpenAI Whisper",
        bullets: [
          "Routed audio through OpenAI Whisper API instead of local 2GB+ model",
          "Kept Docker image under 300MB for deployment on standard web hosts",
          "Multilingual support: English, Hindi, Spanish for both text and voice transcription",
        ],
      },
      {
        title: "Step 4: FastAPI Backend Architecture",
        bullets: [
          "Built FastAPI app with JWT authentication and SQLAlchemy ORM",
          "PostgreSQL for persistent patient history with isolated records per doctor account",
          "API endpoints for symptom checking, SOAP generation, voice transcription, and history retrieval",
          "Docker container deployed on Render Web Service with environment variable management",
        ],
      },
      {
        title: "Step 5: React Frontend Development",
        bullets: [
          "Single-page React app with three core views: Symptom Checker, Note Writer, Patient History",
          "Persistent language selection across sessions",
          "SOAP note PDF download using jsPDF",
          "Static site deployed on Render",
        ],
      },
      {
        title: "Step 6: CI/CD Pipeline with GitHub Actions",
        bullets: [
          "Five-stage pipeline triggered on every push to main",
          "Backend tests with pytest, React frontend build",
          "Docker image build and push to registry",
          "Backend deploy to Render, frontend static site update",
          "Full pipeline completes in under 3 minutes",
        ],
      },
      {
        title: "Step 7: Testing & Quality Assurance",
        bullets: [
          "5 automated pytest tests with 100% pass rate",
          "API response time under 500ms",
          "Cross-validated ML model accuracy verification",
        ],
      },
      {
        title: "Step 8: Results & Impact Analysis",
        bullets: [
          "Metric: 98% symptom classifier accuracy, 41 diseases covered, 131 symptoms recognized",
          "Metric: 3 languages supported, Docker image under 300MB, CI/CD under 3 minutes",
          "Impact: Doctors save 3+ hours daily, patients overcome language barriers, clinics deploy for $7/month",
          "Impact: Demonstrates explainable clinical AI without massive infrastructure requirements",
        ],
      },
    ],
  },
  {
    id: "fake-job-detector",
    title: "Fake Job Posting Detector",
    subtitle: "Python, NLP, TF-IDF, Logistic Regression, RAG, MLflow • Aug. 2025 – Dec. 2025",
    description:
      "An advanced security tool that utilizes Natural Language Processing (NLP) and machine learning to classify online job postings as real or fraudulent with probability-based risk scoring.",
    highlights: [
      "Built an AI-powered fake job detection system with NLP/ML classification, probability-based risk scoring, and SHAP model explainability for transparent fraud detection",
      "Implemented multi-agent verification (web search investigator, email/domain auditor) and RAG memory bank with TF-IDF similarity search to identify fraud patterns from historical data",
      "Developed production-ready FastAPI backend with MLflow experiment tracking, Docker containerization, async pipelines, and memory-optimized deployment (512Mi) using lazy loading and chunked processing"
    ],
    tech: ["Python", "NLP", "TF-IDF", "Logistic Regression", "RAG", "MLflow", "SHAP", "FastAPI", "Docker", "Next.js", "Render", "Vercel"],
    image: fakeJobImage,
    githubUrl: "https://github.com/raju8309/fake-job-detector",
    demoUrl: "https://fake-job-detector-iota.vercel.app",
    implementation: [
      {
        title: "Step 1: Data Prep & Labeling",
        bullets: [
          "Prepared a dataset of job postings with real/fake labels.",
          "Cleaned and normalized text fields for consistent feature extraction.",
        ],
      },
      {
        title: "Step 2: Feature Engineering (TF-IDF)",
        bullets: [
          "Engineered TF-IDF features to capture scam-like linguistic patterns.",
          "Tuned vectorizer settings (n-grams/stopwords) for better signal.",
        ],
      },
      {
        title: "Step 3: Model Training & Evaluation",
        bullets: [
          "Trained a Logistic Regression classifier for fraud detection.",
          "Evaluated performance and calibrated outputs for probability-based scoring.",
        ],
      },
      {
        title: "Step 4: FastAPI Inference Service",
        bullets: [
          "Built a FastAPI backend for model inference.",
          "Created endpoints to accept posting text and return risk probability.",
        ],
      },
      {
        title: "Step 5: Optional Live Scanning Integration",
        bullets: [
          "Structured the backend to integrate with external job board APIs for live scanning.",
          "Designed the system for scalable request handling.",
        ],
      },
      {
        title: "Step 6: Frontend UI",
        bullets: [
          "Built a Next.js frontend to submit job posting text and view results.",
          "Displayed probability score and interpretation for end users.",
        ],
      },
      {
        title: "Step 7: Deployment",
        bullets: [
          "Deployed backend on Render.",
          "Deployed frontend on Vercel.",
          "Verified end-to-end inference in production.",
        ],
      },
    ],
  },
  {
    id: "unh-graduate-catalog-chatbot",
    title: "ASK UNH: Graduate Catalog Chatbot",
    subtitle: "AI Internship Project • Aug – Dec 2025",
    description:
      "An AI-powered information retrieval chatbot for the UNH Graduate Catalog, designed to improve answer relevance through structured chunking and ranking-based retrieval boosts.",
    highlights: [
      "Worked in a 4-member Agile team using GitHub, feature branches, and code reviews",
      "Processed UNH Graduate Catalog into structured chunks using contextual headers",
      "Enhanced retrieval quality using tier ranking and program-based boosts",
      "Achieved ~95% accuracy using BERTScore, SBERT similarity, and recall@k",
      "Integrated evaluation dashboards to visualize results and track progress",
    ],
    tech: ["Python", "RAG", "NLP", "SBERT", "BERTScore", "Recall@K", "GitHub", "Agile"],
    image: unhChatbotImage,
    githubUrl: "https://github.com/raju8309/UNH-chatbot",
    demoUrl: "",
    implementation: [
      {
        title: "Step 1: Catalog Ingestion & Chunking",
        bullets: [
          "Converted catalog content into structured chunks using contextual headers.",
          "Standardized chunk metadata to support ranking and filtering.",
        ],
      },
      {
        title: "Step 2: Retrieval Ranking",
        bullets: [
          "Implemented tier-based ranking and program-based boosts to improve relevance.",
          "Iterated on ranking logic based on evaluation feedback.",
        ],
      },
      {
        title: "Step 3: Evaluation",
        bullets: [
          "Measured retrieval/answer quality with BERTScore, SBERT similarity, and recall@k.",
          "Tracked progress and regressions with consistent evaluation runs.",
        ],
      },
      {
        title: "Step 4: Dashboarding",
        bullets: [
          "Built evaluation dashboards to visualize metrics and compare iterations.",
          "Shared results with the team to align on improvements.",
        ],
      },
      {
        title: "Step 5: Team Workflow",
        bullets: [
          "Delivered features through GitHub branching strategy and code reviews.",
          "Collaborated in an Agile process with consistent iteration cycles.",
        ],
      },
    ],
  },
  {
    id: "paysplit-ai",
    title: "PaySplit AI — Multi-Card Payment Splitting",
    subtitle: "Fintech Web Application & Chrome Extension • AI-Powered Payment Optimization",
    description:
      "A fintech web application and Chrome extension that uses AI to automatically split a single online payment across multiple credit cards, maximizing cashback rewards and preventing declined transactions — built by a 3-person founding team while completing graduate school.",
    highlights: [
      "Built AI recommendation engine analyzing card balance, rewards rate, and merchant category for optimal split allocation",
      "Integrated XGBoost fraud detection with sub-50ms inference using FastAPI app.state optimization",
      "Developed Chrome Extension with MutationObserver for SPA-aware checkout detection across 500+ sites",
      "Achieved 95%+ fraud detection accuracy and deployed full Stripe payment flow with real-time monitoring"
    ],
    tech: ["React", "FastAPI", "XGBoost", "PyTorch", "Chrome Extension", "DynamoDB", "Stripe", "AWS", "Docker", "CI/CD"],
    image: paysplitImage,
    githubUrl: "https://github.com/raju8309/PaySplit.AI-startup",
    demoUrl: "https://www.paysplit.in/",
    implementation: [
      {
        title: "Step 1: Architecture Design",
        bullets: [
          "Designed full-stack fintech architecture with AI recommendation engine",
          "Planned multi-card allocation system with fraud detection integration",
        ],
      },
      {
        title: "Step 2: AI Recommendation Engine",
        bullets: [
          "Built SVD-based card allocation engine optimizing limit, balance, and category multipliers",
          "Implemented real-time analysis of connected cards for optimal split recommendations",
        ],
      },
      {
        title: "Step 3: Fraud Detection Integration",
        bullets: [
          "Embedded XGBoost + PyTorch fraud model in FastAPI app.state for sub-50ms inference",
          "Achieved 95%+ fraud detection accuracy on held-out transaction data",
        ],
      },
      {
        title: "Step 4: Chrome Extension Development",
        bullets: [
          "Built extension with MutationObserver for SPA-aware checkout detection",
          "Implemented automatic detection across React and Next.js storefronts on 500+ sites",
        ],
      },
      {
        title: "Step 5: Payment Processing",
        bullets: [
          "Integrated Stripe webhooks for real-time payment event processing",
          "Implemented complete checkout session management with success/cancel handling",
        ],
      },
      {
        title: "Step 6: Database & Storage",
        bullets: [
          "Utilized DynamoDB for flexible schema and horizontal scaling of card/transaction data",
          "Designed data architecture for high-throughput payment processing",
        ],
      },
      {
        title: "Step 7: Deployment & Infrastructure",
        bullets: [
          "Deployed on AWS with PostgreSQL + Redis data layer",
          "Implemented Docker + GitHub Actions CI/CD across 8+ feature branches",
        ],
      },
      {
        title: "Step 8: Monitoring & Dashboard",
        bullets: [
          "Built real-time fraud monitoring dashboard with live ML inference",
          "Implemented comprehensive logging and error tracking for production stability",
        ],
      },
    ],
  },
];