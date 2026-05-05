import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const FakeJobCaseStudy = () => (
  <div className="space-y-6 text-slate-300">
    <div>
      <h3 className="text-xl font-bold text-white mb-3">🧠 Fake Job Posting Detector - Project Case Study</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-lg font-semibold text-emerald-400 mb-2">Overview</h4>
          <p className="text-sm leading-relaxed">
            Built a smart system that catches fake job postings to protect people from online scams. Think of it like a security guard for job websites that instantly tells you if a job posting is real or fake, using advanced AI techniques to spot the tricky ones.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-emerald-400 mb-2">The Problem</h4>
          <p className="text-sm leading-relaxed">
            Every day, people lose money to fake job postings that look real but are actually scams. These fake jobs trick people into giving personal information or paying fees for jobs that don't exist. Regular job sites weren't catching these sophisticated scams, leaving users vulnerable.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-emerald-400 mb-2">My Approach</h4>
          
          <div className="space-y-3 ml-4">
            <div>
              <h5 className="font-medium text-white mb-1">Data Pipeline & Preprocessing</h5>
              <ul className="text-sm space-y-1 ml-4 list-disc">
                <li>Gathered Real Data: Collected 18,000+ job postings from the internet, both real and fake</li>
                <li>Cleaned Everything: Removed junk text, fixed typos, and organized the information neatly</li>
                <li>Found Patterns: Taught the computer to recognize the tricks that scammers use</li>
                <li>Split for Testing: Set aside some data to test if the system was working correctly</li>
              </ul>
            </div>

            <div>
              <h5 className="font-medium text-white mb-1">Model Development</h5>
              <ul className="text-sm space-y-1 ml-4 list-disc">
                <li>Text Analysis: Used TF-IDF to turn job descriptions into numbers the computer can understand</li>
                <li>Smart Classifier: Chose Logistic Regression because it's fast and shows its work</li>
                <li>Fine-Tuning: Tested different settings to find the best balance between catching fakes and not flagging real jobs</li>
              </ul>
            </div>

            <div>
              <h5 className="font-medium text-white mb-1">Advanced AI Features</h5>
              <ul className="text-sm space-y-1 ml-4 list-disc">
                <li>AI Detectives: Built helper agents that search the web to check if companies actually exist</li>
                <li>Memory Bank: Created a database of known scams to compare against new job postings</li>
                <li>Explainable AI: Made the system show exactly why it thinks something is suspicious</li>
              </ul>
            </div>

            <div>
              <h5 className="font-medium text-white mb-1">Building the App</h5>
              <ul className="text-sm space-y-1 ml-4 list-disc">
                <li>Backend Engine: Made the brain that does all the analysis using FastAPI</li>
                <li>User Interface: Created a simple website with Next.js where users can paste job postings</li>
                <li>Cloud Setup: Deployed everything online using free services so anyone can use it</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-emerald-400 mb-2">Results & Impact</h4>
          <ul className="text-sm space-y-1 ml-4 list-disc">
            <li><strong>92% Accurate:</strong> Catches most fake jobs without making mistakes on real ones</li>
            <li><strong>18% Fewer Mistakes:</strong> Reduced false alarms by using multiple detection methods</li>
            <li><strong>Free for Everyone:</strong> Built using free cloud services, costing $0 per month</li>
            <li><strong>Fast Results:</strong> Gives answers in under 2 seconds</li>
            <li><strong>Reliable:</strong> Works 99.9% of the time without crashes</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-emerald-400 mb-2">Business Value</h4>
          <ul className="text-sm space-y-1 ml-4 list-disc">
            <li><strong>Protects Users:</strong> Successfully identified 85% of test scams without bothering real job seekers</li>
            <li><strong>Cost Effective:</strong> Enterprise-quality system built entirely on free cloud services</li>
            <li><strong>Easy to Use:</strong> Simple interface that anyone can use without technical knowledge</li>
            <li><strong>Trust & Safety:</strong> Helps people feel confident when applying for jobs online</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const UNHCaseStudy = () => (
  <div className="space-y-6 text-slate-300">
    <div>
      <h3 className="text-xl font-bold text-white mb-3">🎓 ASK UNH: Graduate Catalog Chatbot - Project Case Study</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-lg font-semibold text-emerald-400 mb-2">Overview</h4>
          <p className="text-sm leading-relaxed">
            Built an intelligent chatbot that helps graduate students find information about university programs. Think of it as a 24/7 academic advisor that can instantly answer questions about courses, requirements, and program details using AI-powered search.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-emerald-400 mb-2">The Problem</h4>
          <p className="text-sm leading-relaxed">
            Graduate students struggled to find specific information in massive university catalogs. Manual searching was time-consuming, and staff couldn't handle the volume of questions. Students needed instant answers about course requirements, program details, and academic policies.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-emerald-400 mb-2">My Approach</h4>
          
          <div className="space-y-3 ml-4">
            <div>
              <h5 className="font-medium text-white mb-1">Knowledge Base Setup</h5>
              <ul className="text-sm space-y-1 ml-4 list-disc">
                <li>Document Processing: Converted university catalogs and course descriptions into searchable format</li>
                <li>Smart Indexing: Used advanced text processing to organize information for quick retrieval</li>
                <li>Quality Control: Ensured all information was accurate and up-to-date</li>
              </ul>
            </div>

            <div>
              <h5 className="font-medium text-white mb-1">AI Search Engine</h5>
              <ul className="text-sm space-y-1 ml-4 list-disc">
                <li>Natural Language Understanding: Built system that understands student questions in plain English</li>
                <li>Smart Matching: Used semantic search to find relevant information even with different wording</li>
                <li>Context Awareness: Maintains conversation context for follow-up questions</li>
              </ul>
            </div>

            <div>
              <h5 className="font-medium text-white mb-1">User Experience</h5>
              <ul className="text-sm space-y-1 ml-4 list-disc">
                <li>Chat Interface: Created intuitive chat interface similar to popular messaging apps</li>
                <li>Quick Responses: Optimized for fast answer delivery</li>
                <li>Mobile Friendly: Designed to work perfectly on phones and tablets</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-emerald-400 mb-2">Results & Impact</h4>
          <ul className="text-sm space-y-1 ml-4 list-disc">
            <li><strong>95% Accuracy:</strong> Correctly answers most student questions about programs and courses</li>
            <li><strong>3-Second Response:</strong> Provides answers much faster than manual searching</li>
            <li><strong>24/7 Availability:</strong> Students can get help anytime, even outside office hours</li>
            <li><strong>Reduced Staff Workload:</strong> Cut down routine questions by 70%</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-emerald-400 mb-2">Business Value</h4>
          <ul className="text-sm space-y-1 ml-4 list-disc">
            <li><strong>Student Success:</strong> Helps students make better academic decisions with quick access to information</li>
            <li><strong>Staff Efficiency:</strong> Frees up academic advisors to focus on complex student issues</li>
            <li><strong>Scalable Solution:</strong> Can handle unlimited student questions without additional cost</li>
            <li><strong>Modern University:</strong> Shows commitment to technology and student innovation</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const AriaCaseStudy = () => (
  <div className="space-y-6 text-slate-300">
    <div>
      <h3 className="text-xl font-bold text-white mb-3">🤖 Aria — Autonomous Customer Support Agent</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-lg font-semibold text-emerald-400 mb-2">Overview</h4>
          <p className="text-sm leading-relaxed">
            Built an autonomous customer support agent that resolves tickets end-to-end without human handoff on the happy path. Aria uses a 5-node LangGraph state machine with explicit state management, making every conversation pauseable, inspectable, and resumable. Think of it as having a support agent that never sleeps, never gets tired, and always knows when to ask for help.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-emerald-400 mb-2">The Problem</h4>
          <p className="text-sm leading-relaxed">
            Customer support is the largest cost center in most consumer products and the slowest channel for users. Off-the-shelf chatbots fail because they hallucinate, escalate too aggressively, and can't carry multi-turn context. Building a real autonomous agent requires explicit state, retrieval grounding, and a principled escalation system that knows when to stop and ask for help.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-emerald-400 mb-2">My Approach</h4>
          
          <div className="space-y-3 ml-4">
            <div>
              <h5 className="font-medium text-white mb-1">The Graph Architecture</h5>
              <ul className="text-sm space-y-1 ml-4 list-disc">
                <li><strong>5-Node LangGraph:</strong> Triage → Retrieve → Agent → Evaluate → (Reply | Escalate)</li>
                <li><strong>Stateful Checkpointing:</strong> Every conversation state can be paused, inspected, and resumed</li>
                <li><strong>Pure Functions:</strong> Each node is a pure function over conversation state with explicit routing</li>
                <li><strong>Claude Sonnet 4.5:</strong> Agent node generates responses grounded in retrieved citations</li>
              </ul>
            </div>

            <div>
              <h5 className="font-medium text-white mb-1">Two-Layer Escalation System</h5>
              <ul className="text-sm space-y-1 ml-4 list-disc">
                <li><strong>Layer 1 - Regex Pre-checks:</strong> Fast, cheap detection of obvious triggers (legal language, explicit human request)</li>
                <li><strong>Layer 2 - LLM Evaluation:</strong> Nuanced detection of frustration patterns and repeated failures</li>
                <li><strong>7 Trigger Types:</strong> Legal threats, severe sentiment, low confidence, repeated failures, sensitive topics, policy edges, explicit user request</li>
              </ul>
            </div>

            <div>
              <h5 className="font-medium text-white mb-1">Retrieval-Augmented Generation</h5>
              <ul className="text-sm space-y-1 ml-4 list-disc">
                <li><strong>Chroma Vector Store:</strong> Every response grounded in citations from knowledge base</li>
                <li><strong>Citation Requirement:</strong> Agent must attach citation IDs to factual claims</li>
                <li><strong>Evaluator Validation:</strong> Rejects answers without proper citation IDs</li>
                <li><strong>Frontend Rendering:</strong> Users see exactly which document each statement came from</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-emerald-400 mb-2">Testing & Quality</h4>
          <ul className="text-sm space-y-1 ml-4 list-disc">
            <li><strong>27-Test pytest Suite:</strong> Deterministic conversation fixtures for regression testing</li>
            <li><strong>Mocked LLM Interface:</strong> Tests run without API calls, no flakiness</li>
            <li><strong>End-to-End Coverage:</strong> Routing logic, output parsing, graph execution</li>
            <li><strong>Fast Feedback:</strong> Full test suite runs in seconds, catches regressions before shipping</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-emerald-400 mb-2">Results & Impact</h4>
          <ul className="text-sm space-y-1 ml-4 list-disc">
            <li><strong>End-to-End Resolution:</strong> Multi-turn tickets resolved without human handoff on happy path</li>
            <li><strong>Zero Ungrounded Responses:</strong> Every claim cited through evaluator validation</li>
            <li><strong>Clear Separation:</strong> New escalation trigger = 1 regex line + test; new tool = new node + edge</li>
            <li><strong>Transparent Decisions:</strong> Operations console shows exactly why agent chose to escalate or respond</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-emerald-400 mb-2">Technical Stack</h4>
          <ul className="text-sm space-y-1 ml-4 list-disc">
            <li><strong>Python · LangGraph · FastAPI</strong> — Agent orchestration and backend API</li>
            <li><strong>Anthropic Claude Sonnet 4.5</strong> — LLM for response generation</li>
            <li><strong>Chroma</strong> — Vector store for knowledge base citations</li>
            <li><strong>React · Vite · Tailwind</strong> — Operations console frontend</li>
            <li><strong>pytest</strong> — Deterministic testing with mocked LLM</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const ClinicalAICaseStudy = () => (
  <div className="space-y-6 text-slate-300">
    <div>
      <h3 className="text-xl font-bold text-white mb-3">🏥 ClinicalAI — Multilingual Patient Assistant</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-lg font-semibold text-emerald-400 mb-2">Overview</h4>
          <p className="text-sm leading-relaxed">
            A full-stack multilingual patient assistant built specifically for small and independent clinics. It gives doctors AI-powered symptom analysis with explainable diagnosis, automated SOAP note generation from doctor-patient conversations, and voice-to-text symptom input in English, Hindi, and Spanish — all deployable for under $7/month, making enterprise-grade clinical AI accessible to any clinic.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-emerald-400 mb-2">The Problem</h4>
          <p className="text-sm leading-relaxed">
            Small clinics (90% of US medical practices) are priced out of AI tools. Enterprise solutions cost thousands per month and require IT infrastructure they can't afford. Meanwhile, doctors spend 2 hours daily on documentation, and 67M+ non-English speakers face language barriers describing symptoms accurately.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-emerald-400 mb-2">My Approach</h4>
          
          <div className="space-y-3 ml-4">
            <div>
              <h5 className="font-medium text-white mb-1">ML Symptom Classification</h5>
              <ul className="text-sm space-y-1 ml-4 list-disc">
                <li><strong>Dataset:</strong> 4,920 samples, 41 diseases, 131 symptoms from Kaggle Disease-Symptom dataset</li>
                <li><strong>Model:</strong> Logistic Regression + TF-IDF achieved 98% cross-validated accuracy (beat RF, SVM, XGBoost)</li>
                <li><strong>Explainable:</strong> Ranked conditions with confidence scores, triggered symptoms, plain-language explanations</li>
              </ul>
            </div>

            <div>
              <h5 className="font-medium text-white mb-1">Claude Sonnet LLM Pipelines</h5>
              <ul className="text-sm space-y-1 ml-4 list-disc">
                <li><strong>Symptom Analysis:</strong> Takes patient description, runs ML classifier, generates structured diagnosis with urgency and next steps</li>
                <li><strong>SOAP Notes:</strong> Transforms raw doctor-patient conversation into structured Subjective, Objective, Assessment, and Plan notes</li>
                <li><strong>Clinical Safety:</strong> Prompts flag uncertainty, avoid overconfidence, always recommend professional review</li>
              </ul>
            </div>

            <div>
              <h5 className="font-medium text-white mb-1">Voice Input — OpenAI Whisper</h5>
              <ul className="text-sm space-y-1 ml-4 list-disc">
                <li><strong>Lightweight:</strong> API-based approach keeps Docker image under 300MB vs 2GB+ local model</li>
                <li><strong>Multilingual:</strong> English, Hindi, Spanish support for text and voice transcription</li>
                <li><strong>Seamless:</strong> Audio transcribed and fed directly into symptom analysis flow</li>
              </ul>
            </div>

            <div>
              <h5 className="font-medium text-white mb-1">Full-Stack Architecture</h5>
              <ul className="text-sm space-y-1 ml-4 list-disc">
                <li><strong>Backend:</strong> FastAPI with JWT auth, SQLAlchemy ORM, PostgreSQL for patient history</li>
                <li><strong>Frontend:</strong> React SPA with Symptom Checker, Note Writer, Patient History views</li>
                <li><strong>PDF Export:</strong> SOAP notes downloadable via jsPDF</li>
                <li><strong>CI/CD:</strong> Five-stage GitHub Actions pipeline in under 3 minutes</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-emerald-400 mb-2">Key Technical Decisions</h4>
          <ul className="text-sm space-y-1 ml-4 list-disc">
            <li><strong>Logistic Regression over Deep Learning:</strong> Interpretability is a clinical requirement — doctors can see which features drove predictions</li>
            <li><strong>Whisper API over Local:</strong> Keeps container under 300MB for Render's free tier</li>
            <li><strong>FastAPI over Django/Flask:</strong> Async support, auto OpenAPI docs, Pydantic validation for concurrent ML APIs</li>
            <li><strong>Render over AWS:</strong> Simplicity and automatic SSL vs operational overhead of EC2, ECR, VPC</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-emerald-400 mb-2">Results & Impact</h4>
          <ul className="text-sm space-y-1 ml-4 list-disc">
            <li><strong>98% Accuracy:</strong> Symptom classifier on 41 diseases with 131 symptoms</li>
            <li><strong>3+ Hours Saved Daily:</strong> SOAP notes: 10 min → 30 sec per visit (20 patients/day)</li>
            <li><strong>67M+ Non-English Speakers:</strong> Multilingual voice removes language barriers</li>
            <li><strong>$7/Month Cost:</strong> 1/100th the cost of Google MedLM, Microsoft DAX</li>
            <li><strong>Under 500ms:</strong> API response time for real-time decision support</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-emerald-400 mb-2">Technical Stack</h4>
          <ul className="text-sm space-y-1 ml-4 list-disc">
            <li><strong>Python · FastAPI · React</strong> — Full-stack development</li>
            <li><strong>Anthropic Claude Sonnet</strong> — LLM for diagnosis and SOAP generation</li>
            <li><strong>OpenAI Whisper API</strong> — Multilingual voice transcription</li>
            <li><strong>scikit-learn · PostgreSQL · Docker</strong> — ML, database, deployment</li>
            <li><strong>GitHub Actions · Render</strong> — CI/CD and hosting</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

interface ProjectCaseStudyProps {
  projectId: string;
}

const ProjectCaseStudy = ({ projectId }: ProjectCaseStudyProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const renderCaseStudy = () => {
    switch (projectId) {
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
    <div className="mt-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-primary hover:text-primary/80 mb-2"
      >
        {isExpanded ? (
          <>
            <ChevronUp className="mr-1" size={16} />
            Hide Case Study
          </>
        ) : (
          <>
            <ChevronDown className="mr-1" size={16} />
            Show Case Study
          </>
        )}
      </Button>
      
      {isExpanded && (
        <div className="bg-[#1a1f2e] rounded-2xl border border-white/10 p-6 md:p-8">
          {renderCaseStudy()}
        </div>
      )}
    </div>
  );
};

export default ProjectCaseStudy;
