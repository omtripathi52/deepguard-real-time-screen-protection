export type FAQ = { question: string; answer: string };
export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
};
export type OpenRole = {
  id: number;
  title: string;
  location: string;
  department: string;
  type: string;
  salary: string;
  description: string;
  tags?: string[];
  seniority?: string;
};
export type OpenInternship = {
  id: number;
  title: string;
  location: string;
  domain: string;
  duration: string;
  stipend: string;
  description: string;
  tags?: string[];
  level: string;
};
export type UseCase = {
  title: string;
  description: string;
  icon: string;
  stat: string;
};
export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  bio: string;
};
export type EventItem = {
  id: number;
  title: string;
  date: string;
  location: string;
  type: string;
  description: string;
  registrationOpen: boolean;
};

export const faqs: FAQ[] = [
  {
    question: "How does ScreenSentinel know if a video is fake?",
    answer:
      "It watches the video playing on your screen and checks hundreds of tiny details — like whether a person's eyes blink naturally, or whether facial movements look human. If something seems off, it tells you straight away. You don't need to do anything — it works automatically.",
  },
  {
    question: "Does it watch or record my screen?",
    answer:
      "No — and this is really important to us. ScreenSentinel checks what's on your screen right there on your own computer. Nothing is ever sent to us, stored anywhere, or shared with anyone. What you see is private, and it stays that way.",
  },
  {
    question: "Does it work with any video?",
    answer:
      "Yes. It doesn't matter where you're watching — a video call on Zoom, a clip on YouTube, a news stream, or anything else. If there's video on your screen, ScreenSentinel is quietly checking it.",
  },
  {
    question: "What computer do I need?",
    answer:
      "ScreenSentinel works on any Windows 10 or Windows 11 computer made in the last few years. You don't need a powerful or expensive machine — it's designed to be lightweight and gentle on your computer.",
  },
  {
    question: "Can it detect fake audio voices too?",
    answer:
      "Right now, ScreenSentinel focuses on fake video and faces. We're working hard on adding voice detection soon — it'll be a free update when it arrives.",
  },
  {
    question: "Does it need to update itself?",
    answer:
      "Yes, and it does it quietly in the background — you won't even notice. Updates happen automatically so you're always protected against the latest types of fake video, without needing to reinstall anything.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Fake video calls are being used to steal from businesses — here's what to look for",
    excerpt: "Criminals are using AI to put a fake face on a real video call. We explain how this scam works and how to spot it before it's too late.",
    author: "Elena Vance",
    date: "May 15, 2026",
    category: "Security Research",
    readTime: "6 min read",
  },
  {
    id: 2,
    title: "Why your antivirus can't protect you from deepfakes — but we can",
    excerpt: "Traditional security software was built for a world before AI-generated video. Here's the gap in your protection — and how to fill it.",
    author: "Marcus Thorne",
    date: "May 10, 2026",
    category: "Privacy",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "A journalist's guide to spotting fake footage before you publish",
    excerpt: "We spoke to reporters at major newsrooms about the simple steps they take to check whether a video clip is real. Here's what they told us.",
    author: "Sarah Jenkins",
    date: "May 05, 2026",
    category: "Guides",
    readTime: "8 min read",
  },
];

export const openRoles: OpenRole[] = [
  {
    id: 1,
    title: "Computer Vision Engineer",
    location: "Remote (Worldwide)",
    department: "Engineering",
    type: "Full-time",
    seniority: "Any level",
    salary: "$55,000 – $120,000 USD",
    tags: ["PyTorch", "Vision Models", "Edge AI", "ONNX"],
    description:
      "Build the on-device vision models that power real-time deepfake detection. You'll own the inference pipeline from frame capture to verdict, optimising for CPU and NPU runtimes. 0 years experience welcome — show us what you've built.",
  },
  {
    id: 2,
    title: "Machine Learning Engineer",
    location: "Remote (Worldwide)",
    department: "Engineering",
    type: "Full-time",
    seniority: "Any level",
    salary: "$50,000 – $115,000 USD",
    tags: ["PyTorch", "Quantization", "Distillation", "GAN Detection"],
    description:
      "Train, fine-tune and ship generative-adversarial detection models. Work across data, model architecture, and on-device deployment. We care about what you can do, not your years on a CV.",
  },
  {
    id: 3,
    title: "Data Scientist",
    location: "Remote (Worldwide)",
    department: "Research",
    type: "Full-time",
    seniority: "Any level",
    salary: "$45,000 – $100,000 USD",
    tags: ["Adversarial Data", "Evaluation", "Python", "Experimentation"],
    description:
      "Drive the research that keeps our detection ahead of new synthesis techniques. Design experiments, curate adversarial datasets, and turn findings into shippable models.",
  },
  {
    id: 4,
    title: "AI Research Engineer",
    location: "Remote (Worldwide)",
    department: "Research",
    type: "Full-time",
    seniority: "Any level",
    salary: "$55,000 – $120,000 USD",
    tags: ["LLMs", "Multimodal", "Deepfake Detection", "Papers"],
    description:
      "Research and prototype new detection techniques. You'll read the literature, run experiments, and help define the next generation of ScreenSentinel's models. Freshers with strong portfolios are encouraged to apply.",
  },
  {
    id: 5,
    title: "Full-Stack Engineer",
    location: "Remote (Worldwide)",
    department: "Engineering",
    type: "Full-time",
    seniority: "Any level",
    salary: "$45,000 – $100,000 USD",
    tags: ["TypeScript", "React", "Node", "Design Systems"],
    description:
      "Build the surfaces around our detection engine — desktop UI, telemetry-free dashboards, and the web experience. TypeScript, React and a love for craft required.",
  },
  {
    id: 6,
    title: "Product Manager",
    location: "Remote (Worldwide)",
    department: "Product",
    type: "Full-time",
    seniority: "Any level",
    salary: "$50,000 – $110,000 USD",
    tags: ["Desktop", "Privacy UX", "Roadmap", "Research-led"],
    description:
      "Own the ScreenSentinel desktop experience end-to-end. Set the roadmap, partner with research and engineering, and turn deep technology into a calm, trustworthy product.",
  },
];

export const openInternships: OpenInternship[] = [
  {
    id: 1,
    title: "AI/ML Research Intern",
    location: "Remote (Worldwide)",
    domain: "Artificial Intelligence",
    duration: "3–6 months",
    stipend: "$1,500 – $2,200 / month USD",
    level: "All levels — including 0 experience",
    tags: ["PyTorch", "Computer Vision", "LLMs", "Research"],
    description:
      "Work directly with our research team to investigate new deepfake detection techniques. You'll read papers, run experiments, and contribute to real model improvements. No prior job experience required — a strong portfolio or personal project is enough.",
  },
  {
    id: 2,
    title: "Machine Learning Engineering Intern",
    location: "Remote (Worldwide)",
    domain: "Machine Learning",
    duration: "3–6 months",
    stipend: "$1,400 – $2,000 / month USD",
    level: "All levels — including 0 experience",
    tags: ["PyTorch", "ONNX", "Model Optimization", "Python"],
    description:
      "Help build and optimize the models that ship inside ScreenSentinel. You'll work on quantization, pruning, and on-device inference. We'll teach you everything you need to know — curiosity and consistency matter more than a CV.",
  },
  {
    id: 3,
    title: "Data Science Intern",
    location: "Remote (Worldwide)",
    domain: "Data Science",
    duration: "3–6 months",
    stipend: "$1,200 – $1,800 / month USD",
    level: "All levels — including 0 experience",
    tags: ["Python", "Statistics", "Data Curation", "Experimentation"],
    description:
      "Build and curate the adversarial datasets that keep our detection sharp. You'll design evaluation benchmarks, analyse model performance across edge cases, and help shape how we measure success.",
  },
  {
    id: 4,
    title: "Generative AI Intern",
    location: "Remote (Worldwide)",
    domain: "Generative AI",
    duration: "3–6 months",
    stipend: "$1,500 – $2,200 / month USD",
    level: "All levels — including 0 experience",
    tags: ["Diffusion Models", "GANs", "Prompt Engineering", "Fine-tuning"],
    description:
      "Explore generative techniques to stress-test our detection engine. You'll work on the attack side — generating synthetic media — so we can build better defences. A unique role for someone who wants to understand both sides of the AI arms race.",
  },
];

export const useCases: UseCase[] = [
  {
    title: "Watching videos online",
    description: "Before you share that shocking clip on social media, ScreenSentinel tells you if it's been faked. Stop misinformation before it spreads from your account.",
    icon: "Shield",
    stat: "3.2 billion videos shared every day",
  },
  {
    title: "Protecting your identity",
    description: "Someone could put your face in a video you never made. ScreenSentinel helps you spot when your likeness is being used without your permission.",
    icon: "User",
    stat: "Used by over 4,000 people",
  },
  {
    title: "Checking the news",
    description: "Fake video is now used in breaking news stories and political coverage. ScreenSentinel helps journalists and readers tell real footage from manufactured ones.",
    icon: "FileSearch",
    stat: "Trusted by 60+ newsrooms",
  },
  {
    title: "Staying safe at work",
    description: "Scammers impersonate bosses and colleagues on video calls to trick employees into transferring money. ScreenSentinel flags suspicious faces in real time.",
    icon: "Lock",
    stat: "Businesses lose millions to this scam every year",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Marcus Thorne",
    role: "Founder & CEO",
    initials: "MT",
    bio: "Marcus spent years in AI research before watching a live video scam fool an entire boardroom. That moment led him to build ScreenSentinel.",
  },
  {
    name: "Elena Vance",
    role: "Chief Security Officer",
    initials: "EV",
    bio: "With 15 years protecting governments and major organisations from digital threats, Elena leads the team that keeps our detection one step ahead.",
  },
  {
    name: "James Park",
    role: "Head of Engineering",
    initials: "JP",
    bio: "James built the technology that lets ScreenSentinel check video right on your device — so your screen never has to leave your hands.",
  },
];

export const events: EventItem[] = [
  {
    id: 1,
    title: "Sentinel Hackathon 2026",
    date: "August 12–14, 2026",
    location: "London, UK",
    type: "Hackathon",
    description: "48 hours. £50,000 in prizes. Developers, students and security researchers come together to build tools that help people spot fake media. All skill levels welcome.",
    registrationOpen: true,
  },
  {
    id: 2,
    title: "How to Spot a Deepfake — Free Workshop",
    date: "June 20, 2026",
    location: "Online (Free)",
    type: "Workshop",
    description: "A free, practical session for journalists, teachers, and anyone curious. We'll show you exactly what to look for — no technical knowledge needed.",
    registrationOpen: true,
  },
];
