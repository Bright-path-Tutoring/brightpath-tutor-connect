
import {
  Star,
  Users,
  BookOpen,
  CheckCircle
} from "lucide-react";

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

const HowItWorksSteps = () => (
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
);

export default HowItWorksSteps;
