
import {
  BookOpen,
  ListChecks,
  PawPrint,
  Bus,
  Baby,
  UserPlus,
  UserCheck,
  Palette,
} from "lucide-react";

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

const ServicesList = () => (
  <>
    <section className="container max-w-3xl pb-2 mx-auto animate-fade-in">
      <div className="rounded-xl p-7 flex flex-col items-center gap-2">
        <h2 className="text-2xl font-bold text-center text-brightGold mb-2">Here’s what we offer:</h2>
      </div>
    </section>
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
  </>
);

export default ServicesList;
