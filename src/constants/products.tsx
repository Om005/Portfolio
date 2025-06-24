import PIXELCODE from "public/images/pixelcode.png";
import IDE from "public/images/ide.png";
import ASSISTANT from "public/images/Assistant.png";
import SHARE from "public/images/Share.png";
import LINKS from "public/images/Links.png";
import MUSIC from "public/images/music.png";
import TASK from "public/images/Task.png";
import TERMINAL from "public/images/Terminal.png";
import PASSWORD from "public/images/Password.png";
import SIGN from "public/images/Sign.png";
import HOME from "public/images/Paynest/Home.png"
import SIGNIN from "public/images/Paynest/Signin.png"
import CREDS from "public/images/Paynest/Creds.png"
import ALL from "public/images/Paynest/All.png"
import YOURC from "public/images/Paynest/Yourcontacts.png"
import PAY from "public/images/Paynest/Pay2.png"
import PROFILE from "public/images/Paynest/Profile.png"
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";
import { Heading } from "@/components/Heading";
import { twMerge } from "tailwind-merge";
import { Github, ExternalLink, Code, Target, Lightbulb, TrendingUp } from "lucide-react"

const projects = [
  {
    title: "Password Manager",
    description:
      "Built a password manager with local MongoDB, account management, email verification, and full CRUD for site credentials.",
    githubUrl: "https://github.com/Om005/Password-Manager",
    liveUrl: "#",
  },
  {
    title: "Music Player",
    description:
      "Built a fully functional music player with play, pause, next/previous controls and playlist management. Using HTML, CSS, Javascript",
    githubUrl: "https://github.com/Om005/Music-Player",
    liveUrl: "#",
  },
  {
    title: "Todo List",
    description:
      "Built a to-do list app with create, edit, delete, filter, and mark-as-done features using localStorage.",
    githubUrl: "https://github.com/Om005/Todo-List",
    liveUrl: "#",
  },
  {
    title: "Hacking Simulator (Prank website)",
    description:
      "A fake hacking console that displays staged system breach messages.",
    githubUrl: "https://github.com/Om005/Terminal",
    liveUrl: "#",
  },
  {
    title: "Netflix UI Clone",
    description:
      "Recreated the Netflix UI to practice and enhance CSS skills.",
    githubUrl: "https://github.com/Om005/Netflix-Clone",
    liveUrl: "#",
  },
  {
    title: "Layers UI Clone",
    description:
      "Recreated the Layers UI to practice and enhance CSS skills.",
    githubUrl: "https://github.com/Om005/Layers-clone",
    liveUrl: "#",
  },
]

const techStack = [
  "HTML",
  
  "CSS",
  "Javascript",
  "React",
  "Tailwind CSS",
  "Local Storage",
  "Node.js",
  "Express.js",
  "Responsive Design",
]


const outcomes = [
  {
    icon: Code,
    title: "Enhanced Development Skills",
    description:
      "Mastered modern React patterns, state management, and component architecture through hands-on practice.",
  },
  {
    icon: Lightbulb,
    title: "Problem-Solving Abilities",
    description:
      "Developed creative solutions for complex UI challenges and learned to break down large problems into manageable components.",
  },
]
export const products = [
  {
    href: "https://pixelcode-nine.vercel.app",
    github: "https://github.com/Om005/Pixelcode",
    title: "Pixelcode",
    description:
      "I build an online IDE where you can write, run, save, and share code with ease",
    thumbnail: PIXELCODE,
    images: [PIXELCODE, IDE, ASSISTANT, SHARE, LINKS],
    stack: ["React.js", "Tailwindcss", "Node.js", "MongoDB", "Express.js"],
    slug: "Pixelcode",
    content: (
      // <div className="max-w-4xl mx-auto pb-8 bg-white">
      <div className={twMerge(
        "text-sm lg:text-base font-normal text-secondar max-w-4xl mx-auto pb-8 bg-white",
      )}>
        <p>
          PIXEL Code IDE is a browser-based coding platform I developed that lets users write, run, save, and share code with ease. It features Guest and Authenticated modes, supports 10+ languages, 15+ editor themes, and flexible input handling. Users can generate shareable links with titles and descriptions, and get help from Nebula, an AI assistant powered by Gemini 1.5 Flash.


        </p>
      {/* Operating Modes */}
      <div className="mb-8">
        <Heading className="font-black mb-2">Operating Modes </Heading>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            
            <h3 className="font-medium text-blue-600 mb-2">Guest Mode</h3>
            <p>
              Built a frictionless Guest Mode for instant code execution and code sharing
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-medium text-green-600 mb-2">Authenticated Mode</h3>
            Implemented JWT-based authentication with email verification and password reset functionality to ensure secure access and account protection.
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-8">
        <Heading className="font-black mb-2">Key Features</Heading>
        <div className="space-y-4">

          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-medium text-blue-600 mb-2">Multi-Language Code Execution</h3>
            <p className="text-gray-700 mb-2">
              Integrated the Monaco Editor with support for 10+ programming languages, syntax highlighting, and code execution using a one compiler API.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-medium text-blue-600 mb-2">Multiple Themes</h3>
            <p className="text-gray-700 mb-2">
              Integrated 15+ themes from an monaco themes github repo to enhance the coding experience, allowing users to personalize their environment and reduce eye strain.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-medium text-blue-600 mb-2">Code Sharing</h3>
            <p className="text-gray-700 mb-2">
              Built a robust link sharing system that allows users to generate shareable links for code snippets, with update capabilities restricted to the admin.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-medium text-green-600 mb-2">AI Code Assistant - Nebula</h3>
            <p className="text-gray-700 mb-2">
              Integrated Google&apos;s Gemini 1.5 Flash API to power Nebula, an intelligent coding assistant that provides
               debugging assistance, code explanations, and optimization recommendations.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-medium text-blue-600 mb-2">File Management</h3>
            <p className="text-gray-700 mb-2">
              Built a complete file system from scratch for authenticated users, enabling them to create, update, delete, and rename files and folders
            </p>
          </div>
        </div>
      </div>

       <div className="mb-8 pt-4">

        <Heading className="font-black mb-2">Teck Stacks</Heading>
        <div className="grid md:grid-cols-2 gap-6 -mt-10">
          <div>
            <h3 className="font-medium text-black mb-3">Frontend</h3>
            <ul className="text-gray-700 space-y-1">
              <li>React.js</li>
              <li>Monaco Editor for code editing</li>
              <li>Tailwind CSS for styling</li>
              <li>Acernity UI</li>
              <li>Lucide React for icons</li>
              <li>Frame motion</li>

            </ul>
          </div>
          <div>
            <h3 className="font-medium text-black mb-3">Backend & Services</h3>
            <ul className="text-gray-700 space-y-1">
              <li>Node.js with Express.js</li>
              <li>MongoDB with mongoose</li>
              <li>JWT authentication system</li>
              <li>Google Gemini 1.5 Flash API</li>
              <li>Nodemailer for email verifaction and password reset</li>
            </ul>
          </div>
        </div>
      </div>


      {/* Project Impact */}
      <div>
        <Heading className="font-black mb-2">Achievements</Heading>
        <ul>
          <li><span className="font-semibold">PIXELCODE</span> secured 3rd place in DA-IICT Microsoft Clubs Winter of Code 7.0 competition</li>
          <li><a href="https://winter-of-code-seven.vercel.app/winners" target="_black" className="">Proof</a></li>
        </ul>
      </div>
    </div>
    ),
  },
  {
    href: "https://algochurn.com",
    title: "PayNest",
    description:
      "I built an online payment app where you can send, receive, track, and manage money with ease.",
    thumbnail: HOME,
    images: [HOME, SIGNIN, CREDS, ALL, YOURC, PAY, PROFILE],
    stack: ["Next.js", "Next auth", "Tailwind"],
    slug: "paynest",
    content: (
      <div className={twMerge(
        "text-sm lg:text-base font-normal text-secondar max-w-4xl mx-auto pb-8 bg-white",
      )}>
        <p>
          PayNest is a modern and secure online payment platform built with Next.js. It allows users to sign in with Google, activate their account by adding Razorpay credentials, and send money to other users. The app features smart contact management, a transaction history with filters, and search capabilities for messages, names, and emails. Users can attach messages with payments.

        </p>
      {/* Operating Modes */}
      <div className="mb-8">
        <Heading className="font-black mb-2">Authentication & Activation </Heading>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            
            <h3 className="font-medium text-blue-600 mb-2">Google OAuth Integration</h3>
            <p>
              Implemented secure authentication using NextAuth with Google OAuth, providing users with a seamless and trusted sign-in experience.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-medium text-green-600 mb-2">Account Activation System</h3>
            User can activate their account by configuring their Razorpay credentials. Only activated accounts can receive payments.
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-8">
        <Heading className="font-black mb-2">Key Features</Heading>
        <div className="space-y-4">

          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-medium text-blue-600 mb-2">Payment System</h3>
            <p className="text-gray-700 mb-2">
              Integrated Razorpay SDK for secure payment processing. Users can search for any user and send them money with optional message attachments if their account is active. All transactions are visible to both sender and receiver.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-medium text-blue-600 mb-2">Contact Management</h3>
            <p className="text-gray-700 mb-2">
              Developed an contact system that allows users to add any user to their contact list, with a special section highlighting contacts with whom they&apos;ve transacted in the past 2 days.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-medium text-blue-600 mb-2">User Profile Dashboard</h3>
            <p className="text-gray-700 mb-2">
              Built a user profile section that displays personal information, total number of transactions, total money sent and received, along with complete transaction history.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-medium text-blue-600 mb-2">Transaction History</h3>
            <p className="text-gray-700 mb-2">
              Built a history section that displays all transactions (successful and failed). Users can filter transactions by the other user&apos;s name, message, email, or view only sent or only received transactions.
            </p>
          </div>

        </div>
      </div>

       <div className="mb-8 pt-4">

        <Heading className="font-black mb-2">Teck Stacks</Heading>
        <div className="grid md:grid-cols-2 gap-6 -mt-10">
          <div>
            <h3 className="font-medium text-black mb-3">Frontend</h3>
            <ul className="text-gray-700 space-y-1">
              <li>Next.js</li>
              <li>Tailwind CSS for styling</li>
              <li>Radix UI components</li>
              <li>Lucide & Tabler Icons</li>
              <li>Used V0 to assist in building responsive components.</li>
              <li>React Hot Toast for notifications</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-black mb-3">Backend & Services</h3>
            <ul className="text-gray-700 space-y-1">
              <li>NextAuth</li>
              <li>MongoDB with mongoose</li>
              <li>Razorpay SDK for payments</li>
              <li>Crypto utilities for security</li>
            </ul>
          </div>
        </div>
      </div>


      {/* Project Impact */}
      <div>
        <Heading className="font-black mb-2">Key Learnings</Heading>
        <ul>
          <li>Learned to integrate razorpay</li>
          <li>Learned about how to use next auth</li>
          <li>Learned to manage user sessions, protect routes, and handle credentials securely.</li>
          
        </ul>
      </div>
      <a
        href="https://github.com/Om005/PayNest"
        target="__blank"
        className="no-underline inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-800 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2 mt-4 origin-left"
        >
        <svg className="scale-125" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 72 72">
<path d="M36,12c13.255,0,24,10.745,24,24c0,10.656-6.948,19.685-16.559,22.818c0.003-0.009,0.007-0.022,0.007-0.022s-1.62-0.759-1.586-2.114c0.038-1.491,0-4.971,0-6.248c0-2.193-1.388-3.747-1.388-3.747s10.884,0.122,10.884-11.491	c0-4.481-2.342-6.812-2.342-6.812s1.23-4.784-0.426-6.812c-1.856-0.2-5.18,1.774-6.6,2.697c0,0-2.25-0.922-5.991-0.922	c-3.742,0-5.991,0.922-5.991,0.922c-1.419-0.922-4.744-2.897-6.6-2.697c-1.656,2.029-0.426,6.812-0.426,6.812	s-2.342,2.332-2.342,6.812c0,11.613,10.884,11.491,10.884,11.491s-1.097,1.239-1.336,3.061c-0.76,0.258-1.877,0.576-2.78,0.576	c-2.362,0-4.159-2.296-4.817-3.358c-0.649-1.048-1.98-1.927-3.221-1.927c-0.817,0-1.216,0.409-1.216,0.876s1.146,0.793,1.902,1.659	c1.594,1.826,1.565,5.933,7.245,5.933c0.617,0,1.876-0.152,2.823-0.279c-0.006,1.293-0.007,2.657,0.013,3.454	c0.034,1.355-1.586,2.114-1.586,2.114s0.004,0.013,0.007,0.022C18.948,55.685,12,46.656,12,36C12,22.745,22.745,12,36,12z" fill="white"></path>
</svg>
        Github
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
          >
          <path d="M5 12l14 0"></path>
          <path d="M13 18l6 -6"></path>
          <path d="M13 6l6 6"></path>
        </svg>
      </a>
    </div>
    ),
  },
  {
    href: "https://algochurn.com",
    title: "Mini Projects",
    description:
      "Practical learning through mini builds.",
    thumbnail: MUSIC,
    images: [MUSIC, TASK, TERMINAL, PASSWORD, SIGN],
    stack: ["HTML", "CSS", "Javascript", "React.js", "Tailwindcss", "Node.js", "Express.js"],
    slug: "miniprojects",
    content: (
      <section 
      
      className={twMerge(
        "pr-4 max-w-4xl mx-auto text-sm lg:text-base font-normal text-secondary",
      )}
      >
      {/* Overview Section */}
      <div className="mb-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            This is a collection of mini projects i built while learning web development—from simple HTML/CSS pages to interactive React apps. Each one helped strengthen my design and programming skills.
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
          <Code className="w-6 h-6 mr-3 text-blue-500" />
          Projects Built
        </h3>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="border-l-4 border-blue-500 pl-6 py-2 hover:bg-gray-50 transition-colors duration-200 rounded-r-lg"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>
                <div className="flex gap-3 pr-5 flex-shrink-0">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                  >
                    <svg className="scale-125" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 72 72">
<path d="M36,12c13.255,0,24,10.745,24,24c0,10.656-6.948,19.685-16.559,22.818c0.003-0.009,0.007-0.022,0.007-0.022s-1.62-0.759-1.586-2.114c0.038-1.491,0-4.971,0-6.248c0-2.193-1.388-3.747-1.388-3.747s10.884,0.122,10.884-11.491	c0-4.481-2.342-6.812-2.342-6.812s1.23-4.784-0.426-6.812c-1.856-0.2-5.18,1.774-6.6,2.697c0,0-2.25-0.922-5.991-0.922	c-3.742,0-5.991,0.922-5.991,0.922c-1.419-0.922-4.744-2.897-6.6-2.697c-1.656,2.029-0.426,6.812-0.426,6.812	s-2.342,2.332-2.342,6.812c0,11.613,10.884,11.491,10.884,11.491s-1.097,1.239-1.336,3.061c-0.76,0.258-1.877,0.576-2.78,0.576	c-2.362,0-4.159-2.296-4.817-3.358c-0.649-1.048-1.98-1.927-3.221-1.927c-0.817,0-1.216,0.409-1.216,0.876s1.146,0.793,1.902,1.659	c1.594,1.826,1.565,5.933,7.245,5.933c0.617,0,1.876-0.152,2.823-0.279c-0.006,1.293-0.007,2.657,0.013,3.454	c0.034,1.355-1.586,2.114-1.586,2.114s0.004,0.013,0.007,0.022C18.948,55.685,12,46.656,12,36C12,22.745,22.745,12,36,12z"></path>
</svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
          <TrendingUp className="w-6 h-6 mr-3 text-green-500" />
          Technologies Practiced
        </h3>
        <div className="bg-gray-50 rounded-lg p-6">
          <p className="text-gray-600 mb-6">
            These projects helped me gain hands-on experience with a variety of modern tools and technologies.
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={tech}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Outcomes Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
          <Target className="w-6 h-6 mr-3 text-purple-500" />
          Key Outcomes
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          {outcomes.map((outcome, index) => {
            const IconComponent = outcome.icon
            return (
              <div
                key={outcome.title}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                    <IconComponent className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{outcome.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{outcome.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16 pt-8 border-t border-gray-200">
      </div>
    </section>
    ),
  },
];
