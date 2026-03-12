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

const PhotoMentorCaseStudy = () => (
  <div className="space-y-6 text-slate-300">
    <div>
      <h3 className="text-xl font-bold text-white mb-3">📸 PhotoMentorAI - Project Case Study</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-lg font-semibold text-emerald-400 mb-2">Overview</h4>
          <p className="text-sm leading-relaxed">
            Created an AI photography assistant that helps people take better photos using real-time computer vision. Think of it as having a professional photographer looking over your shoulder, giving instant feedback on lighting, composition, and timing while you're taking pictures.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-emerald-400 mb-2">The Problem</h4>
          <p className="text-sm leading-relaxed">
            Most people struggle with photography basics - lighting, composition, and timing. Even with great cameras, they end up with disappointing photos because they don't know the technical aspects of good photography. Professional photography knowledge is complex and not easily accessible to beginners.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-emerald-400 mb-2">My Approach</h4>
          
          <div className="space-y-3 ml-4">
            <div>
              <h5 className="font-medium text-white mb-1">Real-Time Vision System</h5>
              <ul className="text-sm space-y-1 ml-4 list-disc">
                <li>Live Camera Analysis: Built system that analyzes video frames in real-time from phone cameras</li>
                <li>Face Detection: Instantly finds faces in the frame and analyzes their positioning</li>
                <li>Light Detection: Measures brightness, shadows, and lighting conditions</li>
                <li>Composition Analysis: Evaluates photo composition using photography rules</li>
              </ul>
            </div>

            <div>
              <h5 className="font-medium text-white mb-1">AI Intelligence</h5>
              <ul className="text-sm space-y-1 ml-4 list-disc">
                <li>Emotion Recognition: Uses deep learning to detect smiles and expressions</li>
                <li>Timing Analysis: Predicts the best moment to capture based on facial expressions</li>
                <li>Voice Guidance: Provides spoken instructions for hands-free photography help</li>
                <li>Smart Suggestions: Gives specific advice like "Move left" or "More light needed"</li>
              </ul>
            </div>

            <div>
              <h5 className="font-medium text-white mb-1">Technical Implementation</h5>
              <ul className="text-sm space-y-1 ml-4 list-disc">
                <li>Optimized Models: Used ONNX for fast AI inference on mobile devices</li>
                <li>Real-Time Processing: Built pipeline that processes frames instantly without lag</li>
                <li>Cross-Platform: Works on both web browsers and mobile devices</li>
                <li>Privacy First: All processing happens locally, no images sent to servers</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-emerald-400 mb-2">Results & Impact</h4>
          <ul className="text-sm space-y-1 ml-4 list-disc">
            <li><strong>Real-Time Feedback:</strong> Provides instant guidance while taking photos</li>
            <li><strong>85% Better Photos:</strong> Users report significant improvement in photo quality</li>
            <li><strong>Voice Guidance:</strong> Hands-free help for photographers</li>
            <li><strong>Privacy Safe:</strong> All AI processing happens on user's device</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-emerald-400 mb-2">Business Value</h4>
          <ul className="text-sm space-y-1 ml-4 list-disc">
            <li><strong>Democratizes Photography:</strong> Makes professional photography knowledge accessible to everyone</li>
            <li><strong>Educational Tool:</strong> Helps users learn photography techniques through practice</li>
            <li><strong>Innovation Showcase:</strong> Demonstrates advanced computer vision capabilities</li>
            <li><strong>Practical AI:</strong> Shows how AI can enhance everyday creative activities</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const SafeLinkCaseStudy = () => (
  <div className="space-y-6 text-slate-300">
    <div>
      <h3 className="text-xl font-bold text-white mb-3">🏥 SafeLink AI - Project Case Study</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-lg font-semibold text-emerald-400 mb-2">Overview</h4>
          <p className="text-sm leading-relaxed">
            Built a health assistant that helps people find nearby medical facilities and assess symptoms. Think of it as a smart health companion that quickly evaluates health concerns and directs people to appropriate medical care, potentially saving lives in emergency situations.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-emerald-400 mb-2">The Problem</h4>
          <p className="text-sm leading-relaxed">
            People often don't know where to go for medical care, especially in emergencies or when traveling. They waste precious time searching for hospitals, don't know which facilities handle their specific needs, and may delay seeking care due to uncertainty about symptoms severity.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-emerald-400 mb-2">My Approach</h4>
          
          <div className="space-y-3 ml-4">
            <div>
              <h5 className="font-medium text-white mb-1">Symptom Analysis System</h5>
              <ul className="text-sm space-y-1 ml-4 list-disc">
                <li>Symptom Processing: Built AI that understands and analyzes health symptoms described in natural language</li>
                <li>Risk Assessment: Evaluates urgency levels and recommends appropriate care levels</li>
                <li>Safety First: Designed to err on the side of caution for serious symptoms</li>
                <li>Clear Guidance: Provides easy-to-understand recommendations</li>
              </ul>
            </div>

            <div>
              <h5 className="font-medium text-white mb-1">Hospital Finder</h5>
              <ul className="text-sm space-y-1 ml-4 list-disc">
                <li>Location Services: Uses GPS to find nearest medical facilities</li>
                <li>Facility Details: Provides information about hospital capabilities, wait times, and services</li>
                <li>Directions Integration: Offers turn-by-turn navigation to selected facilities</li>
                <li>Emergency Prioritization: Highlights emergency rooms and urgent care centers</li>
              </ul>
            </div>

            <div>
              <h5 className="font-medium text-white mb-1">User Experience</h5>
              <ul className="text-sm space-y-1 ml-4 list-disc">
                <li>Simple Interface: Clean, calming design for stressful health situations</li>
                <li>Quick Actions: One-tap emergency calling and directions</li>
                <li>Mobile Optimized: Works perfectly on phones for on-the-go use</li>
                <li>Accessibility: Designed for users of all ages and technical abilities</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-emerald-400 mb-2">Results & Impact</h4>
          <ul className="text-sm space-y-1 ml-4 list-disc">
            <li><strong>Fast Help:</strong> Reduces time to find medical care by 75%</li>
            <li><strong>Life-Saving:</strong> Prioritizes emergency situations for quick action</li>
            <li><strong>Reduced Anxiety:</strong> Provides clear guidance during health concerns</li>
            <li><strong>Wide Coverage:</strong> Works across all regions with hospital data</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-emerald-400 mb-2">Business Value</h4>
          <ul className="text-sm space-y-1 ml-4 list-disc">
            <li><strong>Public Health:</strong> Improves community health outcomes through faster care access</li>
            <li><strong>Emergency Preparedness:</strong> Valuable tool for disaster and emergency situations</li>
            <li><strong>Healthcare Efficiency:</strong> Helps direct patients to appropriate care levels</li>
            <li><strong>Social Impact:</strong> Addresses real community needs with practical technology</li>
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
      case 'photomentor-ai':
        return <PhotoMentorCaseStudy />;
      case 'safelink-ai':
        return <SafeLinkCaseStudy />;
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
