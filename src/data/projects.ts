import photomentorImage from "./photomentor.png";
import safelinkImage from "./safelink.png";
import fakeJobImage from "./fakejobdetecor.png";
import unhChatbotImage from "./unh-chatbot.png";
import paysplitImage from "./paysplit.png";

export const projects = [
  {
    id: "photomentor-ai",
    title: "PhotoMentorAI",
    subtitle: "Real-time Computer Vision Photography Assistant.",
    description:
      "A high-performance AI photography assistant that analyzes live camera feeds using computer vision and deep-learning emotion recognition to provide instant visual and voice-based shooting guidance.",
    highlights: [
      "Developed end-to-end AI inference pipelines using ONNX-optimized FER+ models for high-speed analysis.",
      "Implemented low-latency multi-face detection and sentiment analysis for group portraits.",
      "Containerized using Docker to ensure consistent deployment across various edge environments.",
    ],
    tech: ["React", "FastAPI", "Python", "OpenCV", "Deep Learning", "ONNX", "Docker"],
    image: photomentorImage,
    githubUrl: "https://github.com/raju8309/photo-mentor-ai",
    demoUrl: "https://photo-mentor-ai-six.vercel.app",
    implementation: [
      {
        title: "Step 1: Project Initialization",
        bullets: [
          "Set up a full-stack architecture using React (frontend) and FastAPI (backend).",
          "Established API communication between frontend and backend.",
        ],
      },
      {
        title: "Step 2: Live Camera Integration",
        bullets: [
          "Accessed the device camera using getUserMedia.",
          "Rendered a real-time video stream inside the React app.",
          "Captured frames using an off-screen <canvas>.",
        ],
      },
      {
        title: "Step 3: Frame Transmission to Backend",
        bullets: [
          "Converted captured frames into base64-encoded images.",
          "Sent frames to backend via POST /analyze_frame API.",
        ],
      },
      {
        title: "Step 4: Backend Image Processing",
        bullets: [
          "Decoded base64 images into OpenCV frames.",
          "Converted frames to grayscale for efficient processing.",
          "Calculated scene brightness for exposure analysis.",
        ],
      },
      {
        title: "Step 5: Face Detection",
        bullets: [
          "Detected faces in the frame using computer vision techniques.",
          "Determined whether a subject is present in the scene.",
        ],
      },
      {
        title: "Step 6: Exposure & Composition Analysis",
        bullets: [
          "Generated exposure feedback (too dark / too bright / balanced).",
          "Analyzed face positioning to provide composition guidance.",
        ],
      },
      {
        title: "Step 7: Timing & Capture Logic",
        bullets: [
          "Computed a timing score based on scene readiness.",
          "Generated actionable hints such as “Capture now” or “Wait”.",
        ],
      },
      {
        title: "Step 8: Deep Learning Emotion Detection",
        bullets: [
          "Integrated a FER+ deep-learning emotion model (ONNX).",
          "Inferred facial expressions with confidence scores.",
          "Replaced unreliable rule-based smile detection.",
        ],
      },
      {
        title: "Step 9: Real-Time UI Feedback",
        bullets: [
          "Displayed lighting, composition, timing, and expression results.",
          "Updated feedback dynamically for every frame.",
        ],
      },
      {
        title: "Step 10: Voice-Based Guidance",
        bullets: [
          "Added real-time speech feedback using the Web Speech API.",
          "Enabled short cues like “Capture now” for hands-free usage.",
        ],
      },
      {
        title: "Step 11: Environment Configuration",
        bullets: [
          "Introduced .env.example files for configuration clarity.",
          "Secured environment variables for local and production use.",
        ],
      },
      {
        title: "Step 12: Deployment",
        bullets: [
          "Deployed backend on Render.",
          "Deployed frontend on Vercel.",
          "Verified end-to-end real-time inference in production.",
        ],
      },
    ],
  },
  {
    id: "safelink-ai",
    title: "SafeLink AI",
    subtitle: "Intelligent Full-Stack Health & Emergency Assistant.",
    description:
      "A comprehensive AI-powered health platform enabling real-time symptom analysis and nearby hospital discovery with an intelligent fallback system for high-reliability medical support.",
    highlights: [
      "Integrated Large Language Models (LLMs) via Groq API with local Ollama fallback for uninterrupted service.",
      "Built custom rule-based medical logic to assess risk and provide immediate triage recommendations.",
      "Automated production deployment using robust CI/CD pipelines to ensure rapid iteration and stability.",
    ],
    tech: ["React", "FastAPI", "Python", "Groq API", "Ollama", "CI/CD", "PostgeSQL"],
    image: safelinkImage,
    githubUrl: "https://github.com/raju8309/SAFELINK_AI",
    demoUrl: "https://safelink-ai.vercel.app",
    implementation: [
      {
        title: "Step 1: Project Setup & Architecture",
        bullets: [
          "Built a full-stack architecture with React (frontend) and FastAPI (backend).",
          "Defined API contracts for symptom analysis and hospital discovery.",
        ],
      },
      {
        title: "Step 2: Symptom Intake UI",
        bullets: [
          "Designed a clean form-based UX for entering symptoms and relevant context.",
          "Validated and normalized user inputs before sending requests to backend.",
        ],
      },
      {
        title: "Step 3: LLM Integration (Primary)",
        bullets: [
          "Integrated Groq API for fast symptom reasoning and response generation.",
          "Implemented prompt structure to produce actionable recommendations and disclaimers.",
        ],
      },
      {
        title: "Step 4: Fallback Inference (Local)",
        bullets: [
          "Added Ollama fallback to keep the system running when the primary LLM is unavailable.",
          "Implemented routing/health checks to automatically switch providers.",
        ],
      },
      {
        title: "Step 5: Rule-Based Risk & Triage Layer",
        bullets: [
          "Built rule-based medical logic to flag high-risk symptom combinations.",
          "Returned urgency level and clear next actions for users.",
        ],
      },
      {
        title: "Step 6: Nearby Hospital Discovery",
        bullets: [
          "Implemented backend logic to surface nearby hospitals based on user location/search input.",
          "Displayed hospital results with key details for quick decision-making.",
        ],
      },
      {
        title: "Step 7: Database & Persistence",
        bullets: [
          "Added PostgreSQL persistence for storing key application data as needed.",
          "Structured the backend for maintainable data access and future expansion.",
        ],
      },
      {
        title: "Step 8: Production Deployment & CI/CD",
        bullets: [
          "Automated build and deployment using CI/CD workflows.",
          "Validated stability with repeatable deployments and environment configuration.",
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
    demoUrl: "",
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