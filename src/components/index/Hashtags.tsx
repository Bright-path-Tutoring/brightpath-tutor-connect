
const HASHTAGS = [
  "#BrightPathTutoring",
  "#TutoringServices",
  "#FamilySupport",
  "#NewBusiness",
  "#EducationMatters",
  "#OnlineLearning",
  "#ChildcareSolutions",
  "#SouthAfricaBusiness",
  "#education",
  "#lovewhatiamdoing",
  "#teachingisaworkofheart",
  "#fyp",
  "#teachingisapassion",
  "#hardworkpaysoff",
  "#enjoytheprocess"
];

const Hashtags = () => (
  <div className="container max-w-4xl pb-8 flex flex-wrap gap-3 justify-center text-md text-brightGold/90">
    {HASHTAGS.map(tag => <span key={tag}>{tag}</span>)}
  </div>
);

export default Hashtags;
