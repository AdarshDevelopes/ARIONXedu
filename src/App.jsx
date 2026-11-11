
import React, { useState } from "react";
import {
  BookOpen, GraduationCap, LayoutDashboard,
  ClipboardList, Trophy, UserRound, Search,
  Bell, Moon, Sun, Menu, Sparkles, PlayCircle,
  ChevronRight, Atom, Calculator, FlaskConical,
  Dna, Code2
} from "lucide-react";

const themes = [
  { name: "Midnight", value: "midnight" },
  { name: "Snow", value: "snow" },
  { name: "Forest", value: "forest" },
  { name: "Galaxy", value: "galaxy" },
  { name: "Sunset", value: "sunset" }
];

const subjects = [
  { name: "Physics", icon: Atom, color: "blue", lessons: "12 Lessons" },
  { name: "Chemistry", icon: FlaskConical, color: "purple", lessons: "10 Lessons" },
  { name: "Mathematics", icon: Calculator, color: "orange", lessons: "16 Lessons" },
  { name: "Biology", icon: Dna, color: "green", lessons: "9 Lessons" }
];

const features = [
  { name: "My Courses", icon: BookOpen },
  { name: "Live Learning", icon: PlayCircle },
  { name: "Mock Tests", icon: ClipboardList },
  { name: "Leaderboard", icon: Trophy }
];

export default function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("arionx-theme") || "midnight"
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  function changeTheme(value) {
    setTheme(value);
    localStorage.setItem("arionx-theme", value);
  }

  return (
    <div className="app" data-theme={theme}>
      <header className="topbar">
        <button className="icon-button" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu />
        </button>

        <a className="brand" href="#">
          <span className="brand-icon"><GraduationCap /></span>
          <span>ARIONX<span className="brand-highlight">edu</span></span>
        </a>

        <div className="header-actions">
          <button className="icon-button" aria-label="Notifications">
            <Bell />
          </button>
          <button
            className="icon-button"
            aria-label="Toggle appearance"
            onClick={() => changeTheme(theme === "snow" ? "midnight" : "snow")}
          >
            {theme === "snow" ? <Moon /> : <Sun />}
          </button>
          <div className="avatar">A</div>
        </div>
      </header>

      <div className="layout">
        <aside className={`sidebar ${menuOpen ? "sidebar-open" : ""}`}>
          <p className="sidebar-label">LEARNING SPACE</p>
          <nav>
            <a className="nav-link active" href="#"><LayoutDashboard /> Home</a>
            <a className="nav-link" href="#"><BookOpen /> My Courses</a>
            <a className="nav-link" href="#"><ClipboardList /> Tests</a>
            <a className="nav-link" href="#"><Trophy /> Leaderboard</a>
            <a className="nav-link" href="#"><UserRound /> My Profile</a>
          </nav>

          <p className="sidebar-label theme-label">APPEARANCE</p>
          <div className="theme-list">
            {themes.map(item => (
              <button
                key={item.value}
                className={`theme-option ${theme === item.value ? "selected" : ""}`}
                onClick={() => changeTheme(item.value)}
              >
                <span className={`theme-dot ${item.value}`} />
                {item.name}
                {theme === item.value && <span className="theme-check">✓</span>}
              </button>
            ))}
          </div>

          <div className="developer-link">
            <Code2 size={18} />
            <span>Login As A Developer</span>
          </div>
        </aside>

        <main className="main-content">
          <section className="welcome-section">
            <div>
              <p className="eyebrow"><Sparkles size={15} /> YOUR LEARNING JOURNEY</p>
              <h1>Learn. Explore.<br /><span>Achieve More.</span></h1>
              <p className="welcome-text">
                Welcome to ARIONXedu — your personal space for learning and growth.
              </p>
            </div>
            <div className="hero-art">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="hero-cap"><GraduationCap /></div>
              <Sparkles className="spark spark-one" />
              <Sparkles className="spark spark-two" />
            </div>
          </section>

          <section className="search-area">
            <Search />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search courses, subjects and lessons..."
            />
            <button onClick={() => setSearch("")}>Clear</button>
          </section>

          <section className="section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">EXPLORE</p>
                <h2>Your Learning Space</h2>
              </div>
              <button className="text-button">View all <ChevronRight size={16} /></button>
            </div>

            <div className="feature-grid">
              {features.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button className="feature-card" key={item.name}>
                    <span className={`feature-icon feature-${index}`}><Icon /></span>
                    <span>{item.name}</span>
                    <ChevronRight className="feature-arrow" size={17} />
                  </button>
                );
              })}
            </div>
          </section>

          <section className="section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">BUILD YOUR FOUNDATION</p>
                <h2>Explore Subjects</h2>
              </div>
              <button className="text-button">Explore all <ChevronRight size={16} /></button>
            </div>

            <div className="subject-grid">
              {subjects
                .filter(subject => subject.name.toLowerCase().includes(search.toLowerCase()))
                .map(subject => {
                  const Icon = subject.icon;
                  return (
                    <article className="subject-card" key={subject.name}>
                      <div className={`subject-icon ${subject.color}`}><Icon /></div>
                      <h3>{subject.name}</h3>
                      <p>{subject.lessons}</p>
                      <button className="subject-action">Explore <ChevronRight size={16} /></button>
                    </article>
                  );
                })}
            </div>
          </section>

          <section className="developer-banner">
            <div className="developer-symbol"><Code2 /></div>
            <div>
              <h3>Developer Access</h3>
              <p>Manage and maintain the learning platform.</p>
            </div>
            <button className="developer-button">Login <ChevronRight size={17} /></button>
          </section>

          <footer>
            <div className="brand footer-brand">ARIONX<span className="brand-highlight">edu</span></div>
            <p>Learn something new. Every single day.</p>
            <span>© 2026 ARIONXedu</span>
          </footer>
        </main>
      </div>
    </div>
  );
    }
  
