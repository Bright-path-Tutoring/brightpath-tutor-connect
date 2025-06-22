
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
  LineChart
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
    desc: "We build strong, positive relationships with students and parents to unlock every learner's potential.",
  }
];

const FeaturesSection = () => {
  return (
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
  );
};

export default FeaturesSection;
