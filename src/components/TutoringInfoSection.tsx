
const TutoringInfoSection = () => {
  return (
    <>
      <section className="container max-w-5xl py-10">
        <div className="bg-white/5 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl text-brightGold font-semibold mb-3">What is Tutoring?</h3>
          <p className="text-base md:text-lg text-gray-200 mb-3">
            Tutoring is a method of teaching that focuses on the individual needs of each student. Your student can choose between private home tutoring or online tutoring in South Africa.
          </p>
          <p className="text-base md:text-lg text-gray-200">
            <span className="font-semibold text-brightGold">BRIGHTPATH</span> private online tutoring and home tutoring services evaluate every student to identify their needs, create customised lessons, and track their progress.
            We'll conduct a free consultation to learn about your goals and create a custom plan to achieve them. Then we'll match your student with the right tutor based on academic needs, interests, and learning style.
            From there, the tutor tailors a program to maximise your student's improvement.
          </p>
        </div>
      </section>

      <section className="container max-w-4xl py-8">
        <div className="bg-white/5 rounded-xl p-8 py-10 flex flex-col gap-3 shadow">
          <h3 className="text-2xl font-semibold mb-2 text-brightGold">A Customised Approach</h3>
          <p className="text-base md:text-lg text-gray-200 mb-2 text-center">
            We acknowledge that each student is unique and has their own way and pace of learning.
            That's why we offer custom private home and online tutoring in South Africa, tailored for every child.
          </p>
        </div>
      </section>
    </>
  );
};

export default TutoringInfoSection;
