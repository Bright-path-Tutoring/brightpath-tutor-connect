
const HeroSection = () => {
  return (
    <div className="container max-w-4xl flex flex-col items-center pt-16 pb-10 animate-fade-in">
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
  );
};

export default HeroSection;
