import { Reveal, Stagger, StaggerItem } from "./Motion";
import { projects } from "../data/projects";
import { useNavigate } from "react-router-dom";

const Experience = () => {
  const navigate = useNavigate();

  const paysplitProject = projects.find((p) => p.id === "paysplit-ai");
  const unhProject = projects.find(
    (p) => p.id === "unh-graduate-catalog-chatbot"
  );

  const paysplitHeroImage = new URL("../data/hero-cards.png", import.meta.url)
    .href;

  return (
    <section id="resume" className="bg-gray-100 bg-dotted">
      {/* Oracle Section */}
      <div className="w-full bg-gray-100">
        <div className="container mx-auto px-6 lg:px-12 py-24">
          <Reveal className="mb-16" delay={0}>
            <h2 className="text-5xl md:text-6xl font-bold font-heading mb-4 text-black">
              Experience
            </h2>
          </Reveal>

          <Reveal className="mb-16" delay={0.1}>
            <div>
              <h3 className="text-2xl lg:text-3xl font-heading font-semibold text-black mb-3">
                AI/ML Engineer
              </h3>
              <p className="text-lg lg:text-xl text-gray-700 font-medium mb-4">
                Oracle — Contract
              </p>
              <span className="text-base text-gray-600 bg-white px-4 py-2 rounded-full">
                Jun. 2026 – Oct. 2026
              </span>
            </div>
          </Reveal>

          <p className="text-gray-700 text-base lg:text-lg leading-relaxed max-w-4xl mb-10">
            <span className="font-semibold text-black">Key highlight: </span>
            Scaled ML inference to 1M+ monthly predictions at &lt;200ms latency and automated 60% of support workflows using LangGraph.
          </p>

          <Stagger className="space-y-8 max-w-4xl">
            {[
              { title: "Low-Latency ML Inference", text: "Containerized and deployed production ML services using FastAPI and Docker on Oracle Cloud Infrastructure (OCI), serving 1M+ monthly predictions under a strict <200ms p95 latency SLA." },
              { title: "Enterprise RAG Architecture", text: "Built a citation-backed RAG pipeline on OCI Generative AI and Oracle 23ai Vector Search that resolved 10K+ monthly queries at 92% accuracy." },
              { title: "Multi-Agent Automation", text: "Designed stateful multi-agent workflows in LangGraph to automate 60% of inbound support tickets, saving 25+ engineering hours per week." },
              { title: "Automated MLOps & Retrieval Tuning", text: "Cut model release cycles by 87% (from 2 days to 3 hours) via automated CI/CD drift-monitoring pipelines and boosted retrieval relevance by 30% through semantic chunking and prompt optimization." },
            ].map((item, index) => (
              <StaggerItem
                key={index}
                delay={index * 0.08}
                className="flex items-start gap-4"
              >
                <div className="w-6 h-6 bg-[#C74634] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    />
                  </svg>
                </div>
                <div className="text-gray-700 text-base lg:text-lg leading-relaxed">
                  <span className="font-semibold text-black">{item.title}: </span>
                  {item.text}
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="flex flex-wrap gap-2 mt-10 max-w-4xl">
            {["Python", "FastAPI", "LangGraph", "OCI Generative AI", "Oracle 23ai", "Docker", "CI/CD"].map((tech) => (
              <span key={tech} className="bg-white text-gray-700 text-sm font-medium px-4 py-2 rounded-full border border-gray-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* PaySplit Section */}
      <div className="w-full bg-gradient-to-b from-[#E6F0EA] via-[#DDEAE2] to-[#E6F0EA] py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <Reveal className="mb-16" delay={0.1}>
            <div>
              <h3 className="text-2xl lg:text-3xl font-heading font-semibold text-black mb-3">
                Founding Engineer
              </h3>
              <p className="text-lg lg:text-xl text-gray-700 font-medium mb-4">
                PaySplit AI, Inc. — Remote
              </p>
              <span className="text-base text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
                Sep. 2025 – Jun. 2026
              </span>
            </div>
          </Reveal>

          <p className="text-gray-800 text-base lg:text-lg leading-relaxed max-w-4xl mb-10">
            <span className="font-semibold text-black">Key highlight: </span>
            Built a fintech platform from zero to production—shipping 20+ microservices and real-time Stripe checkout fraud models.
          </p>

          <Stagger className="space-y-8 max-w-4xl mb-10">
            {[
              { title: "Core Backend & API Architecture", text: "Architected and shipped 20+ production FastAPI REST endpoints with JWT authentication on AWS ECS Fargate (via Docker and GitHub Actions CI/CD), maintaining 99.9% uptime." },
              { title: "Real-Time Fraud Decisioning", text: "Trained and deployed low-latency XGBoost and TensorFlow models on 11 behavioral features (0.88 AUC-ROC), enabling real-time Stripe checkout risk scoring under a <150ms latency budget." },
              { title: "Automated Categorization & Ownership", text: "Reduced manual transaction tagging by 75% across 15K+ monthly transactions via an inline ML categorization engine, while owning system design and production incident response end-to-end." },
            ].map((item, index) => (
              <StaggerItem
                key={index}
                delay={index * 0.08}
                className="flex items-start gap-4"
              >
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    />
                  </svg>
                </div>
                <div className="text-gray-700 text-base lg:text-lg leading-relaxed">
                  <span className="font-semibold text-black">{item.title}: </span>
                  {item.text}
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="flex flex-wrap gap-2 mb-20 max-w-4xl">
            {["Python", "FastAPI", "XGBoost", "TensorFlow", "Stripe API", "AWS ECS Fargate", "Docker", "GitHub Actions"].map((tech) => (
              <span key={tech} className="bg-white text-gray-700 text-sm font-medium px-4 py-2 rounded-full">
                {tech}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <Reveal className="space-y-6 lg:space-y-8" delay={0.2}>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="bg-[#D6E8DD] text-[#2F5E3E] text-sm lg:text-base font-medium px-4 py-2 rounded-full flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 12V8a1 1 0 012 0v4a1 1 0 11-2 0zm1-7a1 1 0 100 2 1 1 0 000-2z"
                      />
                    </svg>
                    Chrome Extension · Works at Checkout
                  </span>
                  <a
                    href="https://www.paysplit.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2F5E3E] text-white font-semibold hover:bg-[#1F3D2B] transition-all duration-200 text-sm px-5 py-2"
                  >
                    Website
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-[#1F3D2B] mt-3 mb-6 leading-tight">
                  PaySplit AI
                </h3>

                <p className="text-gray-700 text-lg lg:text-xl leading-relaxed mb-8 lg:mb-10">
                  A fintech platform shipped from zero to production, with 20+ FastAPI services and real-time Stripe checkout fraud models.
                </p>
              </div>

              <button
                className="px-8 lg:px-10 py-4 lg:py-5 bg-[#2F5E3E] text-white font-semibold rounded-full hover:bg-[#1F3D2B] hover:scale-105 transition-all duration-300 text-lg lg:text-xl"
                onClick={() =>
                  navigate(`/project-details#${paysplitProject?.id}`)
                }
              >
                View Case Study →
              </button>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex items-center justify-center">
                <img
                  src={paysplitHeroImage}
                  alt="PaySplit AI Chrome Extension Interface"
                  className="max-w-2xl w-full h-auto object-contain rounded-lg shadow-xl"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* UNH Section */}
      <div className="w-full bg-gray-100">
        <div className="container mx-auto px-6 py-24">
          <div className="px-8 py-8 lg:px-12 lg:py-12">
            <Reveal delay={0.4}>
              <div className="mb-8">
                <h3 className="text-2xl lg:text-3xl font-heading font-semibold text-black mb-2">
                  AI Research Intern
                </h3>
                <p className="text-lg lg:text-xl text-gray-700 font-medium mb-3">
                  University of New Hampshire — Manchester, NH
                </p>
                <span className="text-base text-gray-600 bg-white px-4 py-2 rounded-full border border-gray-200">
                  Aug. 2025 – Dec. 2025
                </span>
              </div>
            </Reveal>

            <p className="text-gray-700 text-base lg:text-lg leading-relaxed max-w-3xl mb-10">
              <span className="font-semibold text-black">Key highlight: </span>
              Achieved 95% retrieval accuracy and lifted multi-stage search relevance by 23% over dense vector baselines.
            </p>

            <Stagger className="space-y-6 max-w-3xl mb-10">
              {[
                { title: "Domain Knowledge Base", text: "Transformed 200+ pages of unstructured research documents into a citation-grounded knowledge base using contextual chunking and metadata normalization, hitting 95% retrieval accuracy on a 188-pair gold evaluation set." },
                { title: "Multi-Stage Retrieval Pipeline", text: "Engineered a hybrid search architecture combining query rewriting, cross-encoder reranking, and intent-based boosting to improve retrieval quality by 23%." },
                { title: "Automated Evaluation Dashboards", text: "Accelerated weekly sprint iterations across a 4-person Agile team by 40% with automated benchmarking pipelines tracking nDCG@k, BERTScore, and cosine similarity." },
              ].map((item, index) => (
                <StaggerItem
                  key={index}
                  delay={index * 0.08}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-gray-700 text-base lg:text-lg leading-relaxed">
                    <span className="font-semibold text-black">{item.title}: </span>
                    {item.text}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <div className="flex flex-wrap gap-2 mb-16 max-w-3xl">
              {["Python", "RAG", "Cross-Encoders", "NLP", "BERTScore", "Vector Search"].map((tech) => (
                <span key={tech} className="bg-white text-gray-700 text-sm font-medium px-4 py-2 rounded-full border border-gray-200">
                  {tech}
                </span>
              ))}
            </div>

            <Reveal
              className="bg-gradient-to-r from-[#0B3D91] to-[#003366] rounded-2xl lg:rounded-3xl p-8 lg:p-12 shadow-2xl"
              delay={0.5}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <Reveal className="space-y-6 lg:space-y-8" delay={0.6}>
                  <div>
                    <span className="text-blue-200 text-base lg:text-lg font-medium uppercase tracking-wide">
                      Featured Internship Project
                    </span>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mt-3 mb-6 leading-tight">
                      ASK UNH: Graduate Catalog Chatbot
                    </h3>
                    <p className="text-blue-50 text-lg lg:text-xl leading-relaxed mb-8 lg:mb-10">
                      Built a citation-grounded knowledge base and multi-stage retrieval pipeline. Achieved 95% retrieval accuracy and a 23% relevance lift over dense vector baselines.
                    </p>
                  </div>

                  <button
                    className="px-8 lg:px-10 py-4 lg:py-5 bg-white text-[#0B3D91] font-semibold rounded-full hover:bg-blue-50 hover:scale-105 transition-all duration-300 text-lg lg:text-xl"
                    onClick={() => navigate(`/project-details#${unhProject?.id}`)}
                  >
                    View Case Study →
                  </button>
                </Reveal>

                <Reveal delay={0.7}>
                  <div className="bg-white rounded-xl lg:rounded-2xl overflow-hidden shadow-lg lg:shadow-xl">
                    <div className="h-80 lg:h-96 bg-gray-50 flex items-center justify-center p-4 lg:p-6">
                      <img
                        src={unhProject?.image}
                        alt="ASK UNH Graduate Catalog Chatbot Interface"
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                  </div>
                </Reveal>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Data Scientist at Meta */}
      <div className="w-full bg-gray-100">
        <div className="container mx-auto px-6 py-24">
          <div className="px-8 py-8 lg:px-12 lg:py-12">
            <Reveal delay={0.8}>
              <div className="mb-8">
                <h3 className="text-2xl lg:text-3xl font-heading font-semibold text-black mb-2">
                  Data Scientist
                </h3>
                <p className="text-lg lg:text-xl text-gray-700 font-medium mb-3">
                  Meta
                </p>
                <span className="text-base text-gray-600 bg-white px-4 py-2 rounded-full border border-gray-200">
                  Aug. 2022 – Dec. 2023
                </span>
              </div>
            </Reveal>

            <p className="text-gray-700 text-base lg:text-lg leading-relaxed max-w-3xl mb-10">
              <span className="font-semibold text-black">Key highlight: </span>
              Predicted customer churn at 87% accuracy across 500K+ records and drove a 4.5% retention lift through multi-cohort A/B experimentation.
            </p>

            <Stagger className="space-y-6 max-w-3xl mb-10">
              {[
                { title: "Churn Prediction Modeling", text: "Trained, validated, and deployed supervised ML models (scikit-learn, pandas) across 500K+ user records, predicting customer churn at 87% accuracy (0.84 F1-score)." },
                { title: "Scalable Data Pipelines", text: "Engineered automated SQL and Python ETL workflows that cut data preparation and feature-engineering runtime by 40%, saving 12+ compute hours weekly." },
                { title: "Experimentation & Drift Monitoring", text: "Drove a 4.5% lift in 30-day retention across 200K+ cohort users via A/B testing, and reduced silent model degradation incidents by 65% using automated KPI/drift dashboards." },
              ].map((item, index) => (
                <StaggerItem
                  key={index}
                  delay={index * 0.08}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-gray-700 text-base lg:text-lg leading-relaxed">
                    <span className="font-semibold text-black">{item.title}: </span>
                    {item.text}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <div className="flex flex-wrap gap-2 mb-16 max-w-3xl">
              {["Python", "SQL", "scikit-learn", "pandas", "A/B Testing", "ETL Pipelines"].map((tech) => (
                <span key={tech} className="bg-white text-gray-700 text-sm font-medium px-4 py-2 rounded-full border border-gray-200">
                  {tech}
                </span>
              ))}
            </div>

            <Reveal
              className="bg-gradient-to-r from-[#1F2937] to-[#111827] rounded-2xl lg:rounded-3xl p-8 lg:p-12 shadow-2xl"
              delay={0.9}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <Reveal className="space-y-6 lg:space-y-8" delay={1.0}>
                  <div>
                    <span className="text-gray-300 text-base lg:text-lg font-medium uppercase tracking-wide">
                      Featured Work
                    </span>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mt-3 mb-6 leading-tight">
                      Customer Churn Prediction
                    </h3>
                    <p className="text-gray-300 text-lg lg:text-xl leading-relaxed mb-8 lg:mb-10">
                      Predicted customer churn at 87% accuracy (0.84 F1-score) across 500K+ records and drove a 4.5% lift in 30-day retention.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full">
                      Python
                    </span>
                    <span className="bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full">
                      SQL
                    </span>
                    <span className="bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full">
                      scikit-learn
                    </span>
                    <span className="bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full">
                      pandas
                    </span>
                    <span className="bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full">
                      A/B Testing
                    </span>
                  </div>
                </Reveal>

                <Reveal delay={1.1}>
                  <div className="bg-white rounded-xl lg:rounded-2xl overflow-hidden shadow-lg lg:shadow-xl">
                    <div className="h-80 lg:h-96 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 lg:p-6">
                      <div className="text-center">
                        <div className="text-6xl lg:text-7xl font-bold text-gray-800 mb-2">87%</div>
                        <div className="text-lg lg:text-xl text-gray-700 font-medium">Model Accuracy</div>
                        <div className="mt-4 text-sm text-gray-600">500K+ Records Processed</div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Software Engineer Intern Section */}
      <div className="w-full bg-gray-100">
        <div className="container mx-auto px-6 py-24">
          <div className="px-8 py-8 lg:px-12 lg:py-12">
            <Reveal delay={1.2}>
              <div className="mb-8">
                <h3 className="text-2xl lg:text-3xl font-heading font-semibold text-black mb-2">
                  Software Engineer Intern
                </h3>
                <p className="text-lg lg:text-xl text-gray-700 font-medium mb-3">
                  Meta
                </p>
                <span className="text-base text-gray-600 bg-white px-4 py-2 rounded-full border border-gray-200">
                  May 2022 – Aug. 2022
                </span>
              </div>
            </Reveal>

            <p className="text-gray-700 text-base lg:text-lg leading-relaxed max-w-3xl mb-10">
              <span className="font-semibold text-black">Key highlight: </span>
              Automated internal reporting pipelines to cut turnaround times by 30% and reduced production regressions by 45%.
            </p>

            <Stagger className="space-y-6 max-w-3xl mb-10">
              {[
                { title: "Backend Automation Utilities", text: "Built Python data-processing utilities that automated manual cross-functional reporting workflows, shortening turnaround time by 30% and saving 8+ hours per week." },
                { title: "Testing & SDLC Delivery", text: "Delivered 6 production automation scripts across the full SDLC and implemented automated unit/integration test suites with pytest, cutting post-deployment regressions by 45%." },
              ].map((item, index) => (
                <StaggerItem
                  key={index}
                  delay={index * 0.08}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-gray-700 text-base lg:text-lg leading-relaxed">
                    <span className="font-semibold text-black">{item.title}: </span>
                    {item.text}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <div className="flex flex-wrap gap-2 mb-16 max-w-3xl">
              {["Python", "pytest", "SDLC", "Data Processing"].map((tech) => (
                <span key={tech} className="bg-white text-gray-700 text-sm font-medium px-4 py-2 rounded-full border border-gray-200">
                  {tech}
                </span>
              ))}
            </div>

            <Reveal
              className="bg-gradient-to-r from-[#0D9488] to-[#0F766E] rounded-2xl lg:rounded-3xl p-8 lg:p-12 shadow-2xl"
              delay={1.3}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <Reveal className="space-y-6 lg:space-y-8" delay={1.4}>
                  <div>
                    <span className="text-teal-200 text-base lg:text-lg font-medium uppercase tracking-wide">
                      Featured Work
                    </span>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mt-3 mb-6 leading-tight">
                      Automation & Data Processing
                    </h3>
                    <p className="text-teal-50 text-lg lg:text-xl leading-relaxed mb-8 lg:mb-10">
                      Automated internal reporting pipelines, cutting turnaround time by 30% and reducing production regressions by 45%.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full">
                      Python
                    </span>
                    <span className="bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full">
                      pytest
                    </span>
                    <span className="bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full">
                      SDLC
                    </span>
                    <span className="bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full">
                      Data Processing
                    </span>
                  </div>
                </Reveal>

                <Reveal delay={1.5}>
                  <div className="bg-white rounded-xl lg:rounded-2xl overflow-hidden shadow-lg lg:shadow-xl">
                    <div className="h-80 lg:h-96 bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center p-4 lg:p-6">
                      <div className="text-center">
                        <div className="text-6xl lg:text-7xl font-bold text-teal-600 mb-2">30%</div>
                        <div className="text-lg lg:text-xl text-gray-700 font-medium">Time Reduction</div>
                        <div className="mt-4 text-sm text-gray-600">Automated Reporting Tasks</div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;