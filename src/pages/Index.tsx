
import { CheckCircle, BookOpen, UserCheck, Users, Star, Layers, HeartHandshake, Sliders, Clock, GraduationCap, LineChart } from "lucide-react";

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

const Index = () => {
  return (
    <div className="min-h-screen font-sans bg-brightDark text-white">
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
