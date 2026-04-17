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
      {/* PaySplit Section */}
      <div className="w-full bg-gradient-to-b from-[#E6F0EA] via-[#DDEAE2] to-[#E6F0EA] py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <Reveal className="mb-16" delay={0}>
            <h2 className="text-5xl md:text-6xl font-bold font-heading mb-4 text-black">
              Experience
            </h2>
          </Reveal>

          <Reveal className="mb-16" delay={0.1}>
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 mb-3">
                <h3 className="text-2xl lg:text-3xl font-heading font-semibold text-black">
                  Co-Founder & FullStack & AI Engineer
                </h3>
                <div className="sm:flex-shrink-0">
                  <span className="inline-flex items-center px-4 py-1.5 bg-white border border-gray-200 rounded-full text-base sm:text-lg font-medium text-gray-700">
                    currently building...
                  </span>
                </div>
              </div>
              <p className="text-lg lg:text-xl text-gray-700 font-medium mb-4">
                PaySplit AI — Fintech Startup
              </p>
              <span className="text-base text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
                2025 (6 months)
              </span>
            </div>
          </Reveal>

          <Stagger className="space-y-8 max-w-4xl mb-20">
            {[
              "Built a fintech web app and Chrome extension that splits a single online payment across multiple credit cards automatically using AI, solving the one-card-per-checkout limitation on DoorDash, Amazon, and 500+ sites.",
              "Engineered an XGBoost + PyTorch fraud detection pipeline embedded in FastAPI app.state, scoring every transaction in under 50ms with 95%+ accuracy.",
              "Designed an SVD-based card allocation engine optimizing split amounts across cards based on balance, rewards, and merchant category.",
              "Built a Chrome extension using MutationObserver for SPA-aware checkout detection and automatic recommendations.",
              "Developed a full-stack system using React, TypeScript, FastAPI, PostgreSQL, DynamoDB, Redis, Stripe, and OAuth2.",
              "Implemented CI/CD using Docker and GitHub Actions with automated testing across multiple branches.",
              "Built as a 3-person co-founding team in under 6 months while completing a graduate degree, with a real-time fraud monitoring dashboard live in production on AWS.",
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
                  {item}
                </div>
              </StaggerItem>
            ))}
          </Stagger>

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
                  A fintech platform and Chrome extension that enables users to
                  split one checkout across multiple cards using AI-powered
                  allocation and fraud detection.
                </p>

                <div className="mb-6">
                  <span className="inline-flex items-center px-4 py-1.5 bg-gray-100 border border-gray-200 rounded-full text-sm font-medium text-gray-700">
                    More features coming soon...
                  </span>
                </div>
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
                  AI Intern
                </h3>
                <p className="text-lg lg:text-xl text-gray-700 font-medium mb-3">
                  University of New Hampshire
                </p>
                <span className="text-base text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
                  Aug – Dec 2025
                </span>
              </div>
            </Reveal>

            <Stagger className="space-y-6 max-w-3xl mb-16">
              {[
                "Improved retrieval accuracy by ~95% by building a RAG-based graduate catalog chatbot using structured chunking, reranking, and semantic similarity techniques.",
                "Processed and transformed 100% of UNH Graduate Catalog data into structured retrieval chunks using contextual headers and metadata, enabling precise and context-aware responses.",
                "Enhanced answer relevance by implementing tiered ranking, program-based boosts, and policy prioritization aligned with user query intent.",
                "Increased response quality and ranking precision by designing advanced reranking logic using SBERT similarity and metadata-driven scoring.",
                "Built an automated evaluation pipeline using BERTScore, SBERT similarity, nugget precision/recall, and recall@k to quantitatively measure model performance.",
                "Improved system reliability by implementing fallback handling and refining edge-case responses, reducing incorrect answers.",
                "Collaborated in a 4-member Agile team, using GitHub workflows, code reviews, and sprint cycles to deliver continuous improvements.",
                "Developed evaluation dashboards to track performance trends and validate improvements across iterations.",
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
                    {item}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

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
                      Built a RAG-based assistant to answer graduate program and
                      policy questions using structured retrieval, reranking,
                      and evaluation pipelines. Achieved ~95% accuracy.
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
    </section>
  );
};

export default Experience;