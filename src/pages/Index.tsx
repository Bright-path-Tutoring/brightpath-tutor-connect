import {
  CheckCircle,
  BookOpen,
  UserCheck,
  Users,
  Star,
  Layers,
  HeartHandshake,
  Sliders,
  Clock,
  GraduationCap,
  LineChart,
  Phone,
  Mail,
  Home,
  Bus,
  Baby,
  PawPrint,
  UserPlus,
  Palette,
  ListChecks,
  Briefcase,
  PencilRuler
} from "lucide-react";

const FEATURES = [
  {
    icon: <Clock className="text-brightGold w-8 h-8" />,
    title: "We work smarter",
    desc: "BRIGHTPATH believes in working smarter and saving time to do what you love. Implementing smarter learning techniques helps students study efficiently.",
  },
  {
    icon: <LineChart className="text-brightGold w-8 h-8" />,
    title: "Rapid Improvement",
    desc: "Using learning styles to the student's advantage for faster, better results tailored to each way of thinking.",
  },
  {
    icon: <Sliders className="text-brightGold w-8 h-8" />,
    title: "Adaptive Learning",
    desc: "Tutors identify and adapt to evolving learning styles, ensuring materials are taught to maximize every student's progress.",
  },
  {
    icon: <Layers className="text-brightGold w-8 h-8" />,
    title: "Bringing Structure",
    desc: "We help students organise their time and study process for the best results.",
  },
  {
    icon: <GraduationCap className="text-brightGold w-8 h-8" />,
    title: "Beyond Education",
    desc: "We empower learners with skills that go beyond the classroom—future-ready for work and life.",
  },
  {
    icon: <BookOpen className="text-brightGold w-8 h-8" />,
    title: "Unique Study Material",
    desc: "Each student gets custom worksheets targeting their learning gaps and boosting confidence.",
  },
  {
    icon: <UserCheck className="text-brightGold w-8 h-8" />,
    title: "Learning Styles",
    desc: "We help students discover their optimal learning style for truly effective and efficient study.",
  },
  {
    icon: <HeartHandshake className="text-brightGold w-8 h-8" />,
    title: "Healthy Relationships",
    desc: "We build strong, positive relationships with students and parents to unlock every learner’s potential.",
  }
]

const HOW_STEPS = [
  {
    icon: <Star className="w-10 h-10 text-brightGold" />,
    title: "Assess",
    desc: "Free consultation to understand your objectives, evaluate your child's needs, and create a personalised plan.",
    emoji: "🌟"
  },
  {
    icon: <Users className="w-10 h-10 text-brightGold" />,
    title: "Match",
    desc: "We match your child with a tutor based on personality, interests, and academic requirements.",
    emoji: "👨‍🏫👩‍🏫"
  },
  {
    icon: <BookOpen className="w-10 h-10 text-brightGold" />,
    title: "Tutor",
    desc: "Regular personalised sessions to fill learning gaps and build confidence.",
    emoji: "👩‍🎓👨‍🎓"
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-brightGold" />,
    title: "Support",
    desc: "Ongoing support with updates and session reports so you’re always in the loop.",
    emoji: "✍️💪"
  }
];

const SERVICES = [
  {
    icon: <BookOpen className="text-brightGold w-7 h-7" />,
    title: "Tutoring & Online Tutoring",
    desc: "Qualified, passionate tutors offering in-person and online lessons tailored to your child’s learning style and curriculum.",
  },
  {
    icon: <ListChecks className="text-brightGold w-7 h-7" />,
    title: "Termly Summaries for 7 Curriculums",
    desc: "Clear, concise summaries aligned with major school systems to help learners revise and stay on track.",
  },
  {
    icon: <PawPrint className="text-brightGold w-7 h-7" />,
    title: "Pet & House Sitting",
    desc: "Caring for your home and furry friends with peace of mind while you’re away.",
  },
  {
    icon: <Bus className="text-brightGold w-7 h-7" />,
    title: "Transportation Services",
    desc: "Safe, reliable school and activity transport for children — because your time matters.",
  },
  {
    icon: <Baby className="text-brightGold w-7 h-7" />,
    title: "Babysitting",
    desc: "Experienced, trustworthy babysitters for one-time or regular care.",
  },
  {
    icon: <UserPlus className="text-brightGold w-7 h-7" />,
    title: "Au Pair Placements",
    desc: "Matching families with vetted au pairs for long-term, live-in childcare support.",
  },
  {
    icon: <UserCheck className="text-brightGold w-7 h-7" />,
    title: "Tutor Placements",
    desc: "Schools and families can request dedicated tutors for specific subjects or full-time academic support.",
  },
  {
    icon: <Palette className="text-brightGold w-7 h-7" />,
    title: "Online Marketing",
    desc: "Helping small businesses grow with creative content, social media management, and digital strategy.",
  }
];

const Index = () => {
  return (
    <div className="min-h-screen font-sans bg-brightDark text-white">
      {/* ANNOUNCEMENT */}
      <section className="container max-w-2xl pt-10 pb-4 mx-auto animate-fade-in">
        <div className="bg-white/10 rounded-2xl p-7 shadow flex flex-col items-center border border-brightGold/20">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center text-brightGold mb-2">🌟 Introducing BrightPath Tutoring 🌟</h1>
          <p className="mt-1 text-md md:text-lg text-center text-white font-medium">Step by step, grade by grade.</p>
          <p className="mt-4 text-base md:text-lg text-gray-200 text-center">
            We’re excited to announce the launch of <span className="text-brightGold font-semibold">BrightPath Tutoring</span>, a new business dedicated to empowering students, supporting families, and making daily life easier with a range of personalized services.
          </p>
        </div>
      </section>

      {/* ABOUT / SERVICES INTRO */}
      <section className="container max-w-3xl pb-2 mx-auto animate-fade-in">
        <div className="rounded-xl p-7 flex flex-col items-center gap-2">
          <h2 className="text-2xl font-bold text-center text-brightGold mb-2">Here’s what we offer:</h2>
        </div>
      </section>

      {/* SERVICES CARDS */}
      <section className="container max-w-6xl py-8" id="services">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ icon, title, desc }) => (
            <div key={title} className="bg-white/5 p-5 rounded-2xl flex flex-col gap-2 shadow-lg border border-brightGold/10">
              <div>{icon}</div>
              <span className="font-semibold text-brightGold">{title}</span>
              <span className="text-gray-200 text-sm">{desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="container max-w-xl px-2 py-7 mx-auto">
        <div className="rounded-2xl bg-brightGold/30 border border-brightGold/50 py-5 px-4 flex flex-col items-center animate-fade-in">
          <p className="text-lg text-center font-bold text-white">
            ✨ Whether you're a parent, student, or busy professional — BrightPath is here to support your journey.
          </p>
          <p className="text-center text-brightGold mt-2 text-base">
            📩 Message us to learn more or book a service today!
          </p>
        </div>
      </section>

      {/* CONTACT & ACTIONS */}
      <section className="container max-w-4xl pb-8 pt-2 flex flex-col items-center gap-5 animate-fade-in" id="contact">
        <h3 className="text-2xl text-brightGold font-bold mb-1">Contact BrightPath</h3>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a href="tel:0753505817" className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg font-medium text-lg text-white hover:text-brightGold transition">
            <Phone className="w-5 h-5 text-brightGold" /> 075 350 5817
          </a>
          <a href="mailto:BrightPath39@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg font-medium text-lg text-white hover:text-brightGold transition">
            <Mail className="w-5 h-5 text-brightGold" /> BrightPath39@gmail.com
          </a>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mt-1">
          <a
            href="#booking"
            className="rounded-full bg-brightGold text-brightDark px-7 py-2 font-semibold text-base shadow-md hover:bg-yellow-400 transition"
          >
            Online bookings
          </a>
          <a
            href="#application"
            className="rounded-full bg-brightGold text-brightDark px-7 py-2 font-semibold text-base shadow-md hover:bg-yellow-400 transition"
          >
            Tutoring application
          </a>
        </div>
      </section>

      {/* HERO SECTION */}
      <div className="container max-w-4xl flex flex-col items-center pt-16 pb-10">
        <img
          src="/lovable-uploads/bf01245d-20fa-405a-a838-7fa85dd3947a.png"
          alt="BrightPath logo"
          className="w-36 h-36 mb-4"
          draggable={false}
        />
        <h1 className="text-5xl font-bold mb-2 tracking-tight text-brightGold drop-shadow-lg">BrightPath</h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-3 text-white text-center">Private Tutoring Near You</h2>
        <p className="text-lg md:text-xl text-gray-200 max-w-xl text-center mb-4">
          At <span className="font-semibold text-brightGold">BRIGHTPATH</span>, our private tutors recognise the significance of your child's education and aim to help them remain competitive in today's academic environment.
        </p>
        <a
          href="#contact"
          className="mt-4 rounded-full bg-brightGold text-brightDark px-8 py-3 font-semibold text-lg shadow-sm hover:bg-yellow-400 transition"
        >
          Get a Free Consultation
        </a>
      </div>

      {/* WHAT IS TUTORING */}
      <section className="container max-w-5xl py-10">
        <div className="bg-white/5 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl text-brightGold font-semibold mb-3">What is Tutoring?</h3>
          <p className="text-base md:text-lg text-gray-200 mb-3">
            Tutoring is a method of teaching that focuses on the individual needs of each student. Your student can choose between private home tutoring or online tutoring in South Africa.
          </p>
          <p className="text-base md:text-lg text-gray-200">
            <span className="font-semibold text-brightGold">BRIGHTPATH</span> private online tutoring and home tutoring services evaluate every student to identify their needs, create customised lessons, and track their progress.
            We’ll conduct a free consultation to learn about your goals and create a custom plan to achieve them. Then we’ll match your student with the right tutor based on academic needs, interests, and learning style.
            From there, the tutor tailors a program to maximise your student’s improvement.
          </p>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="container max-w-6xl pt-12 pb-6">
        <h3 className="text-3xl font-bold mb-8 text-center text-white">How BrightPath Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOW_STEPS.map(({icon, title, desc, emoji}, idx) => (
            <div key={title} className="bg-white/5 rounded-xl p-6 flex flex-col items-center shadow-md">
              <div className="mb-3">{icon}</div>
              <h4 className="text-xl font-semibold mb-2 text-brightGold">{emoji} {title}</h4>
              <p className="text-sm text-gray-200 text-center">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* UNIQUE LEARNER SECTION */}
      <section className="container max-w-4xl py-8">
        <div className="bg-white/5 rounded-xl p-8 py-10 flex flex-col gap-3 shadow">
          <h3 className="text-2xl font-semibold mb-2 text-brightGold">A Customised Approach</h3>
          <p className="text-base md:text-lg text-gray-200 mb-2 text-center">
            We acknowledge that each student is unique and has their own way and pace of learning.
            That's why we offer custom private home and online tutoring in South Africa, tailored for every child.
          </p>
        </div>
      </section>

      {/* WHY BRIGHTPATH */}
      <section className="container max-w-6xl py-12">
        <h3 className="text-3xl font-bold text-center mb-10 text-brightGold">Why Choose BrightPath?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map(({icon, title, desc}) => (
            <div key={title} className="bg-white/5 rounded-2xl p-6 shadow-lg flex flex-col gap-2 border border-brightGold/10 hover:scale-[1.02] transition">
              <div>{icon}</div>
              <h4 className="text-lg font-semibold text-brightGold">{title}</h4>
              <p className="text-sm text-gray-200">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HASHTAGS */}
      <div className="container max-w-4xl pb-8 flex flex-wrap gap-3 justify-center text-md text-brightGold/90">
        <span>#BrightPathTutoring</span>
        <span>#TutoringServices</span>
        <span>#FamilySupport</span>
        <span>#NewBusiness</span>
        <span>#EducationMatters</span>
        <span>#OnlineLearning</span>
        <span>#ChildcareSolutions</span>
        <span>#SouthAfricaBusiness</span>
        <span>#education</span>
        <span>#lovewhatiamdoing</span>
        <span>#teachingisaworkofheart</span>
        <span>#fyp</span>
        <span>#teachingisapassion</span>
        <span>#hardworkpaysoff</span>
        <span>#enjoytheprocess</span>
      </div>
    </div>
  );
};

export default Index;
