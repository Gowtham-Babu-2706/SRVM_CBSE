import { useState, useEffect, useRef } from "react";
import logo from "../assets/Logo.png"


const NAV_LINKS = [
  { label: "Home", href: "#home" },
  {
    label: "About",
    children: [
      { label: "About School", href: "#about" },
      { label: "Chairman Message", href: "#team" },
      { label: "Principal Message", href: "#team" },
      { label: "Vision & Mission", href: "#about" },
    ],
  },
  {
    label: "Academics",
    children: [
      { label: "School Timings", href: "#" },
      { label: "Resources", href: "#" },
      { label: "Clubs", href: "#" },
      { label: "Staff Details", href: "#" },
    ],
  },
  {
    label: "Facilities",
    children: [
      { label: "Infrastructure", href: "#facilities" },
      { label: "Labs", href: "#facilities" },
      { label: "Sports & Games", href: "#facilities" },
      { label: "Health Centre", href: "#facilities" },
    ],
  },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const EVENTS = [
  { date: "28 Jan 2026", title: "Scouts And Guides One Day Camp" },
  { date: "26 Jan 2026", title: "Republic Day Celebration" },
  { date: "12 Jan 2026", title: "Pongal Celebration" },
  { date: "22 Dec 2025", title: "Christmas Day Celebration" },
  { date: "22 Nov 2025", title: "EduSphere" },
  { date: "17 Nov 2025", title: "Cancer Awareness" },
  { date: "14 Nov 2025", title: "Children's Day" },
  { date: "10 Nov 2025", title: "Eye Camp" },
  { date: "29 Oct 2025", title: "Mobile Awareness" },
  { date: "13 Oct 2025", title: "Scouts & Guides Inauguration" },
  { date: "27 Sep 2025", title: "Workshop on Multiple Intelligence" },
  { date: "24 Sep 2025", title: "Investiture Ceremony" },
  { date: "15 Aug 2025", title: "Independence Day Celebration" },
  { date: "21 Jun 2025", title: "International Yoga Day" },
  { date: "05 Jun 2025", title: "World Environmental Day" },
];

const TEAM = [
  {
    name: "Dr. R. Narayanasamy",
    role: "Chairman",
    qual: "M.A., B.Ed., Ph.D.",
    initials: "RN",
    color: "#1a6b3c",
    bio: "Committed to nurturing young minds with knowledge, character, and values, fostering creativity, critical thinking, and a lifelong love for learning.",
  },
  {
    name: "Mrs. T.N. Revathi",
    role: "Principal",
    qual: "MCA, B.Ed.",
    initials: "TR",
    color: "#0d4a7a",
    bio: "Proud to lead an institution dedicated to empowering students with a well-rounded education that fosters academic excellence and strong moral values.",
  },
  {
    name: "Dr. P. Govindarajulu",
    role: "Trustee",
    qual: "",
    initials: "PG",
    color: "#7a3d0d",
    bio: "Part of an institution dedicated to shaping the future of young learners through quality education and value-based learning.",
  },
  {
    name: "Shri M. D. Rajkumar",
    role: "Secretary & Trustee",
    qual: "B.E., MBA",
    initials: "MR",
    color: "#4a0d7a",
    bio: "Illustrious son of founder Chairman, Graduate in Electrical Engineering from CEG Chennai, Post Graduate from Columbia University, New York.",
  },
];

const FACILITIES = [
  { icon: "🖥️", title: "Digital Classrooms", desc: "Smart class technology for interactive, modern learning experiences." },
  { icon: "📚", title: "Library", desc: "Rich heritage in academic excellence with an excellent library setup." },
  { icon: "💻", title: "Computer Labs", desc: "Three well-equipped computer labs keeping pace with the technological era." },
  { icon: "🔬", title: "Science Labs", desc: "Practical science knowledge imparted through state-of-the-art laboratories." },
  { icon: "🎭", title: "Auditorium", desc: "Platform for students in both Kindergarten and Elementary School blocks." },
  { icon: "⚽", title: "Playground", desc: "Sprawling lush playgrounds for games and physical activities." },
];

const CURRICULUM = [
  { level: "Pre-KG & KG", icon: "🌱", desc: "Nurturing young minds through play-based learning and discovery." },
  { level: "Primary School", icon: "📖", desc: "Building strong foundations in core subjects with holistic development." },
  { level: "Secondary School", icon: "🎓", desc: "CBSE curriculum preparing students for board exams and beyond." },
];

const COCURRICULAR = [
  { name: "Music", icon: "🎵" },
  { name: "Dance", icon: "💃" },
  { name: "Silambam", icon: "🥋" },
  { name: "Yoga", icon: "🧘" },
  { name: "Karate", icon: "🥊" },
  { name: "Scouts & Guides", icon: "⛺" },
];

export default function MainPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [tickerIdx, setTickerIdx] = useState(0);
  const [heroSlide, setHeroSlide] = useState(0);
  const tickerRef = useRef(null);

  const heroSlides = [
    { bg: "#1a6b3c", text: "Scouts & Guides One Day Camp", sub: "Developing Leadership & Character" },
    { bg: "#0d4a7a", text: "Pongal Celebration 2026", sub: "Embracing Culture & Tradition" },
    { bg: "#7a1a1a", text: "Republic Day Celebration", sub: "Honouring Our Nation with Pride" },
    { bg: "#3d1a7a", text: "EduSphere – Academic Fest", sub: "Where Curiosity Meets Innovation" },
  ];

  useEffect(() => {
    const t = setInterval(() => setHeroSlide(p => (p + 1) % heroSlides.length), 4500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setTickerIdx(p => (p + 1) % EVENTS.length), 3000);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (id) => {
    if (id.startsWith("#")) {
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: "#faf9f7", color: "#1a1a1a", overflowX: "hidden" }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --green: #1a6b3c;
          --green-dark: #0f4a28;
          --gold: #c8922a;
          --gold-light: #f0c96e;
          --blue: #0d4a7a;
          --cream: #faf9f7;
          --cream-dark: #f0ede6;
          --text: #1a1a1a;
          --text-light: #555;
          --border: #e0d9ce;
        }
        html { scroll-behavior: smooth; }
        @keyframes fadeInUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes slideIn { from { transform:translateX(-100%); opacity:0; } to { transform:translateX(0); opacity:1; } }
        @keyframes pulse { 0%,100% { transform:scale(1); } 50% { transform:scale(1.04); } }
        @keyframes ticker { from { transform:translateY(0); opacity:1; } 50% { transform:translateY(-8px); opacity:0; } 50.01% { transform:translateY(8px); opacity:0; } to { transform:translateY(0); opacity:1; } }
        .fade-in { animation: fadeInUp 0.6s ease both; }
        .nav-link { cursor:pointer; transition: color 0.2s; }
        .nav-link:hover { color: var(--gold) !important; }
        .btn-primary { background: var(--green); color: #fff; border: none; padding: 12px 28px; font-family: inherit; font-size: 14px; letter-spacing: 1px; text-transform: uppercase; cursor: pointer; transition: background 0.2s, transform 0.15s; }
        .btn-primary:hover { background: var(--green-dark); transform: translateY(-1px); }
        .btn-gold { background: var(--gold); color: #fff; border: none; padding: 12px 28px; font-family: inherit; font-size: 14px; letter-spacing: 1px; text-transform: uppercase; cursor: pointer; transition: background 0.2s; }
        .btn-gold:hover { background: #a87320; }
        .card-hover { transition: transform 0.2s, box-shadow 0.2s; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.12) !important; }
        .dropdown-menu { display:none; position:absolute; top:100%; left:0; background:#fff; min-width:200px; box-shadow:0 8px 24px rgba(0,0,0,0.12); border-top:3px solid var(--green); z-index:1000; }
        .has-dropdown:hover .dropdown-menu { display:block; }
        .dropdown-item { display:block; padding:10px 18px; color:#333; font-size:14px; text-decoration:none; transition:background 0.15s; cursor:pointer; }
        .dropdown-item:hover { background:var(--cream-dark); color:var(--green); }
        ::-webkit-scrollbar { width:6px; } ::-webkit-scrollbar-track { background:#f0ede6; } ::-webkit-scrollbar-thumb { background:var(--green); border-radius:3px; }
      `}</style>

      {/* TOP BAR */}
      <div style={{ background: "var(--green-dark)", color: "#d4edda", padding: "8px 0", fontSize: "13px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
          <div style={{ display: "flex", gap: 24 }}>
            <span>📞 +91-9445211046</span>
            <span>✉️ srvmcbse2014@gmail.com</span>
          </div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdBvsU0faXmhevB5sAcSaJQQDMhTmsCJSGMrzpWqul01aZLmA/viewform" style={{ background: "var(--gold)", color: "#fff", padding: "3px 12px", fontSize: "12px", fontStyle: "italic", animation: "pulse 2s infinite" }}>
            🎓 Admissions Open 2025–26 | Pre-KG to X Std
          </a>
        </div>
      </div>

      {/* NAVBAR */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 900,
        background: scrolled ? "rgba(255,255,255,0.97)" : "#fff",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.1)" : "0 1px 0 var(--border)",
        transition: "box-shadow 0.3s",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          {/* Logo */}
          <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            cursor: "pointer"
          }}
          onClick={() => {
            document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          
          {/* Logo Circle */}
          <div
            style={{
              width: 48,
              height: 48,
              background: "var(--green)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden", // 🔥 important
              flexShrink: 0
            }}
          >
            <img
              src={logo}
              alt="School Logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover" // 🔥 keeps it perfect
              }}
            />
          </div>

          {/* Text */}
          <div>
            <div
              style={{
                fontWeight: 700,
                fontSize: 16,
                color: "var(--green)",
                lineHeight: 1.2
              }}
            >
              Sriram Vidhya Mandir
            </div>

            <div
              style={{
                fontSize: 11,
                color: "var(--text-light)",
                letterSpacing: 2,
                textTransform: "uppercase"
              }}
            >
              CBSE School · Thiruvallur
            </div>
          </div>
        </div>

          {/* Desktop Nav */}
          <div style={{ display: "flex", gap: 4, alignItems: "center" }} className="desktop-nav">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdBvsU0faXmhevB5sAcSaJQQDMhTmsCJSGMrzpWqul01aZLmA/viewform"
              className="btn-primary"
              style={{ marginLeft: 8, padding: "8px 18px", fontSize: 13 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
            </a>
          </div>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", fontSize: 24, color: "var(--green)" }} className="hamburger">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

      </nav>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>

      {/* HERO */}
      <section id="home" style={{ position: "relative", height: "520px", overflow: "hidden" }}>
        {heroSlides.map((slide, i) => (
          <div key={i} style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(135deg, ${slide.bg}ee, ${slide.bg}99), repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 80px)`,
            display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",
            transition: "opacity 0.8s ease",
            opacity: i === heroSlide ? 1 : 0,
          }}>
            <div style={{ textAlign: "center", color: "#fff", padding: "0 24px", maxWidth: 700 }}>
              <div style={{ fontSize: 12, letterSpacing: 4, textTransform: "uppercase", opacity: 0.8, marginBottom: 16 }}>
                Sriram Vidhya Mandir School (CBSE)
              </div>
              <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 700, lineHeight: 1.2, marginBottom: 16, textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}>
                {slide.text}
              </h1>
              <p style={{ fontSize: 18, opacity: 0.85, marginBottom: 32, fontStyle: "italic" }}>{slide.sub}</p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <a href="https://sriramvmscbse.edu.in/" className="btn-gold">Explore School</a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdBvsU0faXmhevB5sAcSaJQQDMhTmsCJSGMrzpWqul01aZLmA/viewform" style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.6)", padding: "12px 28px", fontFamily: "inherit", fontSize: 14, letterSpacing: 1, textTransform: "uppercase", cursor: "pointer" }} onClick={() => scrollTo("#contact")}>
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        ))}
        {/* Slide dots */}
        <div style={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8 }}>
          {heroSlides.map((_, i) => (
            <div key={i} onClick={() => setHeroSlide(i)} style={{ width: i === heroSlide ? 24 : 8, height: 8, borderRadius: 4, background: i === heroSlide ? "var(--gold)" : "rgba(255,255,255,0.5)", cursor: "pointer", transition: "all 0.3s" }} />
          ))}
        </div>
      </section>

      {/* STATS BAR */}
      <div style={{ background: "var(--green)", color: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 0 }}>
          {[
            { num: "12+", label: "Years of Excellence" },
            { num: "Pre-KG–X", label: "Classes Offered" },
            { num: "CBSE", label: "Affiliated Board" },
            { num: "Thiruvallur", label: "Location" },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: "center", padding: "8px 16px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.2)" : "none" }}>
              <div style={{ fontSize: 26, fontWeight: 700, color: "var(--gold-light)" }}>{s.num}</div>
              <div style={{ fontSize: 12, opacity: 0.85, letterSpacing: 1, textTransform: "uppercase" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* EVENTS TICKER */}
      <div style={{ background: "var(--cream-dark)", borderBottom: "1px solid var(--border)", padding: "14px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ background: "var(--gold)", color: "#fff", padding: "4px 12px", fontSize: 12, letterSpacing: 1, textTransform: "uppercase", flexShrink: 0 }}>Latest</div>
          <div style={{ overflow: "hidden", height: 22, flex: 1 }}>
            <div key={tickerIdx} style={{ animation: "ticker 3s ease" }}>
              <span style={{ fontWeight: 600, color: "var(--green)", marginRight: 8 }}>{EVENTS[tickerIdx]?.date}</span>
              <span style={{ color: "#333" }}>{EVENTS[tickerIdx]?.title}</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 4, flexShrink: 0 }}>
            <button onClick={() => setTickerIdx(p => (p - 1 + EVENTS.length) % EVENTS.length)} style={{ background: "none", border: "1px solid var(--border)", width: 28, height: 28, cursor: "pointer", fontSize: 12 }}>‹</button>
            <button onClick={() => setTickerIdx(p => (p + 1) % EVENTS.length)} style={{ background: "none", border: "1px solid var(--border)", width: 28, height: 28, cursor: "pointer", fontSize: 12 }}>›</button>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 56, alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 12, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)", marginBottom: 12 }}>About Our School</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, lineHeight: 1.25, color: "var(--green-dark)", marginBottom: 20 }}>
              Welcome to<br />Sriram Vidhya Mandir
            </h2>
            <p style={{ color: "var(--text-light)", lineHeight: 1.8, marginBottom: 16 }}>
              Sriram Vidhya Mandir School (CBSE) is situated in a serene and pollution-free sprawling ambience. The school follows the CBSE Curriculum and is well equipped with state-of-the-art infrastructure.
            </p>
            <p style={{ color: "var(--text-light)", lineHeight: 1.8, marginBottom: 28 }}>
              SRVM CBSE firmly believes in the holistic development of students. Hence, the school gives importance to sports and games along with other co-curricular activities. Classes run from Pre-KG to X Std, with well-ventilated classrooms and comfortable seating.
            </p>
            <div style={{ display: "flex", gap: 24, marginBottom: 32, flexWrap: "wrap" }}>
              {[
                { icon: "🏫", label: "Pollution-Free Campus" },
                { icon: "📋", label: "CBSE Affiliated" },
                { icon: "🌟", label: "Holistic Development" },
              ].map(f => (
                <div key={f.label} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}>
                  <span style={{ fontSize: 20 }}>{f.icon}</span>
                  <span style={{ color: "#444", fontWeight: 500 }}>{f.label}</span>
                </div>
              ))}
            </div>
            <a href="https://sriramvmscbse.edu.in/infrastructure/" className="btn-primary">Explore Facilities</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { bg: "var(--green)", text: "Academic Excellence", icon: "🎓" ,href:"https://sriramvmscbse.edu.in/academic/"},
              { bg: "var(--blue)", text: "Sports & Games", icon: "⚽" ,href:"https://sriramvmscbse.edu.in/sports-and-games/" },
              { bg: "var(--gold)", text: "Cultural Activities", icon: "🎭",href:"https://sriramvmscbse.edu.in/sports/" },
              { bg: "#5a1a8a", text: "Character Building", icon: "🌱",href:"https://sriramvmscbse.edu.in/clubs/" },
            ].map((c, i) => (
              <a href={c.href} key={i} className="card-hover" style={{
                background: c.bg, color: "#fff", padding: "32px 20px", borderRadius: 4,
                textAlign: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
              }}>
                <div style={{ fontSize: 36, marginBottom: 10 }}>{c.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.3 }}>{c.text}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section id="facilities" style={{ padding: "72px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 12, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)", marginBottom: 10 }}>Infrastructure</div>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 700, color: "var(--green-dark)" }}>Campus Facilities</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {FACILITIES.map((f, i) => (
              <div key={i} className="card-hover" style={{
                background: "#fff", padding: "28px 24px", border: "1px solid var(--border)",
                display: "flex", gap: 18, alignItems: "flex-start",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
              }}>
                <div style={{ fontSize: 36, flexShrink: 0 }}>{f.icon}</div>
                <div>
                  <h4 style={{ fontSize: 16, fontWeight: 700, color: "var(--green-dark)", marginBottom: 6 }}>{f.title}</h4>
                  <p style={{ fontSize: 14, color: "var(--text-light)", lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" style={{ background: "var(--green-dark)", padding: "72px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 12, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold-light)", marginBottom: 10 }}>Leadership</div>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 700, color: "#fff" }}>Management Team</h2>
            <p style={{ color: "rgba(255,255,255,0.65)", marginTop: 10 }}>Guiding our institution with vision, dedication, and purpose.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {TEAM.map((m, i) => (
              <div key={i} className="card-hover" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", padding: "28px 24px" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: m.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 22, fontWeight: 700, marginBottom: 16, border: "3px solid var(--gold)" }}>
                  {m.initials}
                </div>
                <div style={{ color: "var(--gold-light)", fontSize: 12, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{m.role}</div>
                <h4 style={{ color: "#fff", fontSize: 17, fontWeight: 700, marginBottom: 4 }}>{m.name}</h4>
                {m.qual && <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 12 }}>{m.qual}</div>}
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, lineHeight: 1.6 }}>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CO-CURRICULAR */}
      <section style={{ background: "var(--cream-dark)", padding: "72px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 12, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)", marginBottom: 10 }}>Beyond Academics</div>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 700, color: "var(--green-dark)" }}>Co-curricular Activities</h2>
            <p style={{ color: "var(--text-light)", marginTop: 10 }}>Nurturing creativity, teamwork and leadership skills.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 16 }}>
            {COCURRICULAR.map((a, i) => (
              <div key={i} className="card-hover" style={{
                background: "#fff", padding: "32px 16px", textAlign: "center",
                border: "1px solid var(--border)", cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
              }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>{a.icon}</div>
                <div style={{ fontWeight: 600, color: "var(--green-dark)", fontSize: 15 }}>{a.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section style={{ padding: "72px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 12, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)", marginBottom: 10 }}>School Life</div>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 700, color: "var(--green-dark)" }}>Recent Events</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
            {EVENTS.slice(0, 9).map((ev, i) => (
              <div key={i} className="card-hover" style={{ background: "#fff", border: "1px solid var(--border)", padding: "18px 20px", display: "flex", gap: 14, alignItems: "flex-start", boxShadow: "0 2px 6px rgba(0,0,0,0.04)" }}>
                <div style={{ background: "var(--green)", color: "#fff", padding: "6px 10px", textAlign: "center", flexShrink: 0, minWidth: 52 }}>
                  <div style={{ fontSize: 18, fontWeight: 700, lineHeight: 1 }}>{ev.date.split(" ")[0]}</div>
                  <div style={{ fontSize: 10, letterSpacing: 0.5 }}>{ev.date.split(" ")[1]}</div>
                  <div style={{ fontSize: 10 }}>{ev.date.split(" ")[2]}</div>
                </div>
                <div style={{ fontSize: 14, color: "#333", fontWeight: 500, lineHeight: 1.4 }}>{ev.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* QR CODE SECTION */}
      <section style={{ padding: "72px 24px", background: "var(--cream-dark)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          
          {/* Heading */}
          <div style={{ marginBottom: 40 }}>
            <div style={{ 
              fontSize: 12, 
              letterSpacing: 3, 
              textTransform: "uppercase", 
              color: "var(--gold)", 
              marginBottom: 10 
            }}>
              Quick Access
            </div>

            <h2 style={{ 
              fontSize: "clamp(24px, 3.5vw, 36px)", 
              fontWeight: 700, 
              color: "var(--green-dark)" 
            }}>
              Scan & Apply
            </h2>

            <p style={{ fontSize: 14, color: "#555", marginTop: 10 }}>
              Scan the QR code to open the application form instantly
            </p>
          </div>

          {/* QR Code */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <div style={{
              background: "#fff",
              padding: 20,
              borderRadius: 12,
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
            }}>
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://docs.google.com/forms/d/e/1FAIpQLSdBvsU0faXmhevB5sAcSaJQQDMhTmsCJSGMrzpWqul01aZLmA/viewform"
                alt="QR Code"
                style={{ width: 200, height: 200 }}
              />
            </div>
          </div>

          {/* Button (optional) */}
          <div style={{ marginTop: 24 }}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdBvsU0faXmhevB5sAcSaJQQDMhTmsCJSGMrzpWqul01aZLmA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: "10px 20px", fontSize: 14 }}
            >
              Open Form
            </a>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0f2a1a", color: "rgba(255,255,255,0.75)", padding: "40px 24px 20px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 36, marginBottom: 36 }}>
            <div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 16, marginBottom: 12 }}>Sriram Vidhya Mandir</div>
              <p style={{ fontSize: 13, lineHeight: 1.7 }}>A CBSE affiliated school committed to holistic education, nurturing young minds since 2014.</p>
            </div>
            <div>
            </div>   
            <div>
              <div style={{ color: "var(--gold-light)", fontWeight: 700, fontSize: 13, letterSpacing: 1, textTransform: "uppercase", marginBottom: 14 }}>Admissions Open</div>
              <p style={{ fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>Pre-KG to Class X. Apply now for Academic Year 2025–26.</p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdBvsU0faXmhevB5sAcSaJQQDMhTmsCJSGMrzpWqul01aZLmA/viewform" className="btn-gold" style={{ fontSize: 13, padding: "10px 20px" }}>Apply Now</a>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 20, textAlign: "center", fontSize: 12 }}>
            © 2026 Sriram Vidhya Mandir School (CBSE), Thiruvallur. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      {scrolled && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ position: "fixed", bottom: 24, right: 24, width: 44, height: 44, background: "var(--green)", color: "#fff", border: "none", cursor: "pointer", fontSize: 18, zIndex: 800, boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}>
          ↑
        </button>
      )}
    </div>
  );
}
