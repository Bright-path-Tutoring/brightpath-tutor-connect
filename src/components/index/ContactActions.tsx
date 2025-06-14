
import { Phone, Mail } from "lucide-react";

const ContactActions = () => (
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
);

export default ContactActions;
