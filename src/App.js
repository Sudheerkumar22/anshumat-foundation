import React from "react";

function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">Anshumat Foundation</div>
      <div className="space-x-4">
        <button className="btn-secondary">Home</button>
        <button className="btn-secondary">Programs</button>
        <button className="btn-secondary">Initiatives</button>
        <button className="btn-secondary">Contact</button>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="text-center py-20 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Educate. Employ. Empower.</h1>
      <p className="text-lg mb-8 max-w-2xl mx-auto">
        We are a not-for-profit committed to creating brighter futures through education,
        digital literacy, skill development, and leadership programs across India.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button className="btn-primary">Donate Now</button>
        <button className="btn-secondary">Support a Project</button>
        <button className="btn-secondary">Sponsor Training</button>
        <button className="btn-secondary">Empower a Life</button>
        <button className="btn-secondary">Become a Volunteer</button>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="px-8 py-16 text-center bg-white">
      <h2 className="text-3xl font-semibold mb-4">
        Illuminating Lives. Enabling Futures. Empowering Change.
      </h2>
      <p className="text-gray-700 max-w-2xl mx-auto mb-6">
        We believe that education is the first step toward freedom, skills create dignity,
        and empowerment fuels leadership and self-reliance.
      </p>
      <button className="btn-primary">Explore Opportunities</button>
    </section>
  );
}

function StatsAndPartners() {
  return (
    <section className="bg-blue-50 py-12 px-8 text-center">
      <div className="mb-8">
        <span className="text-5xl font-bold text-blue-700">25+</span>
        <p className="text-lg">Years of Care</p>
      </div>
      <h3 className="text-2xl mb-6">Powered by Purposeful Partnerships</h3>
      <div className="flex justify-center flex-wrap gap-6">
        <div className="w-24 h-12 bg-gray-300 rounded"></div>
        <div className="w-24 h-12 bg-gray-300 rounded"></div>
        <div className="w-24 h-12 bg-gray-300 rounded"></div>
        <div className="w-24 h-12 bg-gray-300 rounded"></div>
      </div>
    </section>
  );
}

function RecentInitiatives() {
  return (
    <section className="px-8 py-16">
      <h2 className="text-3xl font-semibold mb-8 text-center">Recent Initiatives</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {Array(3).fill(0).map((_, idx) => (
          <div
            key={idx}
            className="border p-4 rounded-xl shadow hover:shadow-lg transition bg-white"
          >
            <div className="h-40 bg-gray-200 rounded mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Initiative {idx + 1}</h3>
            <p className="text-gray-600">
              Short description of the initiative goes here. Highlight impact and mission.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="px-8 py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input type="text" placeholder="Name" className="p-3 border rounded" />
        <input type="email" placeholder="Email" className="p-3 border rounded" />
        <textarea placeholder="Message" className="p-3 border rounded"></textarea>
        <button className="btn-primary">Submit</button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-8">
      <p>&copy; {new Date().getFullYear()} Anshumat Foundation. All rights reserved.</p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsAndPartners />
      <RecentInitiatives />
      <ContactSection />
      <Footer />
    </div>
  );
}
