import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, Moon, Sun, Code2, Database, Wrench, Award, Send, ArrowRight, Sparkles, Zap, Target } from 'lucide-react';


const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Apply theme to document root
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const projects = [
    {
      title: "Fetal Growth Monitoring System",
      description: "Deep learning system for automated fetal health assessment using ultrasound imagery. Implements CNN regression for precise head circumference measurement and gestational age prediction.",
      image: "/images/Fetal.png",
      tech: ["Deep Learning", "CNN", "PyTorch", "OpenCV", "Medical Imaging"],
      github: "https://github.com/VinothanaBalakrishnan05/Fetal-Growth-Monitoring",
      live: null,
      category: "AI/ML"
    },
    {
      title: "Multilingual Fake News Detection",
      description: "Multi-language fake news detection platform using ensemble ML models. Analyzes text patterns across English, Hindi, and Tamil to classify news authenticity in real-time.",
      image: "/images/fakenews.png",
      tech: ["NLP", "scikit-learn", "TF-IDF", "NLTK", "Streamlit"],
      github: "https://github.com/VinothanaBalakrishnan05/multilingual-fake-news",
      live: null,
      category: "AI/ML"
    },
    {
      title: "TNEA College Decision Support System",
      description: "Intelligent college recommendation system with rank-based prediction engine. Features secure authentication, role-based access control, and real-time cutoff analysis.",
      image: "/images/tnea.png",
      tech: ["React.js", "Node.js", "MySQL", "REST APIs", "ExcelJS"],
      github: "https://github.com/VinothanaBalakrishnan05/TNEA_COLLEGE_SEARCH",
      live: null,
      category: "Full Stack"
    },
    {
      title: "SEEQL - Visual SQL Learning",
      description: "Interactive platform that transforms SQL concepts into visual experiences. Features animated query execution, join visualizations, and real-time subquery demonstrations.",
      image: "/images/sql.png",
      tech: ["React.js", "JavaScript", "Data Visualization", "Animation"],
      github: "https://github.com/VinothanaBalakrishnan05/sql-visualizer",
      live: "https://seeql.vercel.app/",
      category: "React"
    }
  ];

  const skills = {
    "Core Programming": {
      icon: <Code2 size={20} />,
      items: ["C++", "C", "Python"],
      color: "#6366f1"
    },
    "Web Technologies": {
      icon: <Code2 size={20} />,
      items: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js"],
      color: "#22d3ee"
    },
    "AI/ML Stack": {
      icon: <Sparkles size={20} />,
      items: ["Scikit-learn", "OpenCV", "NLTK", "Streamlit", "Langdetect", "Mediapipe"],
      color: "#a855f7"
    },
    "Database & Tools": {
      icon: <Database size={20} />,
      items: ["MySQL", "Git", "VS Code", "Jupyter", "Postman", "ExcelJS"],
      color: "#10b981"
    }
  };

  const education = [
    {
      period: "2023 – Present",
      institution: "Velammal Institute of Technology",
      degree: "Computer Science Engineering",
      score: "9.04 CGPA",
      status: "current",
      description: "Specializing in AI/ML and Full-Stack Development"
    },
    {
      period: "2022 – 2023",
      institution: "Ravilla KRA Vidhyashram",
      degree: "Higher Secondary Education",
      score: "85%",
      status: "completed",
      description: "Mathematics and Computer Science Focus"
    }
  ];

  const achievements = [
    {
      title: "GSSoC'25 Contributor",
      description: "Contributing to production codebases in JavaScript and React ecosystem",
      icon: <Sparkles size={24} />,
      color: "#6366f1"
    },
    {
      title: "Hacktoberfest'25",
      description: "Enhanced open-source projects with performance optimizations and new features",
      icon: <Zap size={24} />,
      color: "#22d3ee"
    },
    {
      title: "Smart India Hackathon",
      description: "Selected for SIH 2024 & 2025 internal rounds",
      icon: <Target size={24} />,
      color: "#a855f7"
    }
  ];

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --bg-primary: #ffffff;
          --bg-secondary: #f8fafc;
          --bg-tertiary: #f1f5f9;
          --text-primary: #0f172a;
          --text-secondary: #475569;
          --text-tertiary: #64748b;
          --accent-primary: #6366f1;
          --accent-secondary: #22d3ee;
          --accent-purple: #a855f7;
          --accent-green: #10b981;
          --border: rgba(15, 23, 42, 0.1);
          --glass-bg: rgba(255, 255, 255, 0.7);
          --glass-border: rgba(15, 23, 42, 0.1);
          --shadow: rgba(15, 23, 42, 0.1);
          --glow: rgba(99, 102, 241, 0.2);
        }

        html.dark,
        body.dark,
        .dark {
          --bg-primary: #020617;
          --bg-secondary: #0f172a;
          --bg-tertiary: #1e293b;
          --text-primary: #f8fafc;
          --text-secondary: #cbd5e1;
          --text-tertiary: #94a3b8;
          --accent-primary: #818cf8;
          --accent-secondary: #22d3ee;
          --accent-purple: #c084fc;
          --accent-green: #34d399;
          --border: rgba(248, 250, 252, 0.1);
          --glass-bg: rgba(15, 23, 42, 0.5);
          --glass-border: rgba(248, 250, 252, 0.1);
          --shadow: rgba(0, 0, 0, 0.3);
          --glow: rgba(129, 140, 248, 0.3);
        }

        html,
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: var(--bg-primary);
          color: var(--text-primary);
          transition: background 0.3s ease, color 0.3s ease;
          overflow-x: hidden;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          min-height: 100vh;
        }

        .app {
          min-height: 100vh;
          position: relative;
          background: var(--bg-primary);
          transition: background 0.3s ease;
        }

        /* Animated Background */
        .app::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 30%, var(--glow) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(34, 211, 238, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%);
          opacity: 0.8;
          pointer-events: none;
          z-index: 0;
          animation: bgShift 20s ease infinite;
        }

        @keyframes bgShift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-5%, 5%) scale(1.05); }
          66% { transform: translate(5%, -5%) scale(0.95); }
        }

        /* Grid Pattern */
        .app::after {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px);
          background-size: 50px 50px;
          opacity: 0.3;
          pointer-events: none;
          z-index: 0;
        }

        /* Mouse Glow Effect */
        .mouse-glow {
          position: fixed;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, var(--glow) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
          transition: all 0.1s ease;
          mix-blend-mode: screen;
        }

        /* Navigation */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.25rem 0;
          backdrop-filter: blur(20px) saturate(180%);
          background: var(--glass-bg);
          border-bottom: 1px solid var(--glass-border);
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          padding: 0.75rem 0;
          box-shadow: 0 4px 24px var(--shadow);
        }

        .nav-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          font-family: 'JetBrains Mono', monospace;
          background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.05em;
        }

        .nav-links {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.9rem;
          padding: 0.625rem 1.25rem;
          border-radius: 10px;
          transition: all 0.2s ease;
          position: relative;
        }

        .nav-link:hover {
          color: var(--text-primary);
          background: var(--bg-tertiary);
        }

        .nav-link.active {
          color: var(--accent-primary);
          background: var(--bg-tertiary);
        }

        .theme-toggle {
          background: var(--bg-tertiary);
          border: 1px solid var(--border);
          border-radius: 10px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-left: 1rem;
          color: var(--text-primary);
        }

        .theme-toggle:hover {
          background: var(--bg-secondary);
          transform: scale(1.05);
          border-color: var(--accent-primary);
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 8rem 2rem 4rem;
          position: relative;
          z-index: 1;
        }

        .hero-content {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-text {
          animation: fadeInUp 0.8s ease;
        }

        .hero-title {
          font-size: 4.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: -0.03em;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 50%, var(--accent-purple) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
          animation: gradientFlow 8s ease infinite;
          background-size: 200% 200%;
        }

        @keyframes gradientFlow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .hero-subtitle {
          font-size: 1.75rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        .hero-description {
          font-size: 1.125rem;
          line-height: 1.8;
          color: var(--text-tertiary);
          margin-bottom: 2.5rem;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        /* Profile Image */
        .hero-image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          animation: fadeIn 1s ease 0.5s both;

        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .profile-wrapper {
          position: relative;
          width: 380px;
          height: 380px;
        }

        .profile-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary), var(--accent-purple));
          opacity: 0.3;
          filter: blur(50px);
          animation: profilePulse 3s ease-in-out infinite;
        }

        @keyframes profilePulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.5;
          }
        }

        .profile-frame {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          padding: 6px;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary), var(--accent-purple));
        }

        

        .profile-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid var(--bg-primary);
          background: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          display: block;
        }

        .profile-placeholder {
          width: 60%;
          height: 60%;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          border-radius: 50%;
          opacity: 0.3;
        }

        .btn {
          padding: 1rem 2rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          border: none;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.5s, height 0.5s;
        }

        .btn:hover::before {
          width: 300px;
          height: 300px;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%);
          color: white;
          box-shadow: 0 8px 24px var(--glow);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px var(--glow);
        }

        .btn-secondary {
          background: var(--bg-tertiary);
          border: 2px solid var(--border);
          color: var(--text-primary);
        }

        .btn-secondary:hover {
          background: var(--bg-secondary);
          border-color: var(--accent-primary);
          transform: translateY(-3px);
        }

        /* Section Styles */
        .section {
          padding: 6rem 2rem;
          position: relative;
          z-index: 1;
        }

        .section-content {
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-header {
          margin-bottom: 4rem;
          text-align: center;
        }

        .section-label {
          font-size: 0.875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--accent-primary);
          margin-bottom: 1rem;
          font-family: 'JetBrains Mono', monospace;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 800;
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: -0.02em;
          color: var(--text-primary);
        }

        /* Projects Section */
        .projects-grid {
          display: grid;
          gap: 2.5rem;
        }

        .project-card {
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: grid;
          grid-template-columns: 450px 1fr;
          position: relative;
          
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary), var(--accent-purple));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover::before {
          opacity: 1;
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px var(--shadow);
          border-color: var(--accent-primary);
        }

        .project-image {
          position: relative;
          overflow: hidden;
          background: var(--bg-tertiary);
          width: 100%;
          height: 100%;
        }

        .project-category {
          position: absolute;
          top: 1rem;
          left: 1rem;
          padding: 0.5rem 1rem;
          background: var(--glass-bg);
          backdrop-filter: blur(10px);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--accent-primary);
          z-index: 2;
          font-family: 'JetBrains Mono', monospace;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .project-card:hover .project-image img {
          transform: scale(1.1);
        }

        .project-content {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .project-header h3 {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 1rem;
          font-family: 'JetBrains Mono', monospace;
        }

        .project-header p {
          color: var(--text-tertiary);
          line-height: 1.7;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-tag {
          background: var(--bg-tertiary);
          color: var(--text-secondary);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.8125rem;
          font-weight: 500;
          border: 1px solid var(--border);
          transition: all 0.2s ease;
          font-family: 'JetBrains Mono', monospace;
        }

        .tech-tag:hover {
          background: var(--accent-primary);
          color: white;
          border-color: var(--accent-primary);
          transform: translateY(-2px);
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          flex: 1;
          padding: 0.875rem;
          border-radius: 10px;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-weight: 600;
          font-size: 0.875rem;
          transition: all 0.3s ease;
          border: 2px solid var(--border);
        }

        .github-link {
          background: var(--bg-tertiary);
          color: var(--text-primary);
          width: 100%;
         
        }

        .github-link:hover {
          background: var(--text-primary);
          color: var(--bg-primary);
          border-color: var(--text-primary);
          transform: translateY(-2px);
          
          
        }

        .live-link {
          background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%);
          color: white;
          border-color: transparent;
        }

        .live-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px var(--glow);
        }

        /* Skills Section */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        .skill-category {
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          padding: 2rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .skill-category::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--accent-primary), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .skill-category:hover::before {
          opacity: 1;
        }

        .skill-category:hover {
          transform: translateY(-6px);
          border-color: var(--accent-primary);
          box-shadow: 0 12px 32px var(--shadow);
        }

        .skill-category-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .skill-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .skill-category-header h3 {
          font-size: 1.25rem;
          font-weight: 700;
          font-family: 'JetBrains Mono', monospace;
        }

        .skill-items {
          display: flex;
          flex-wrap: wrap;
          gap: 0.625rem;
        }

        .skill-item {
          background: var(--bg-tertiary);
          color: var(--text-secondary);
          padding: 0.625rem 1.125rem;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 500;
          border: 1px solid var(--border);
          transition: all 0.2s ease;
          font-family: 'JetBrains Mono', monospace;
        }

        .skill-item:hover {
          background: var(--accent-primary);
          color: white;
          border-color: var(--accent-primary);
          transform: translateY(-3px);
          box-shadow: 0 4px 12px var(--glow);
        }

        /* Education Timeline - Centered */
        .education-timeline {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          padding: 2rem 0;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, var(--accent-primary), var(--accent-secondary), var(--accent-purple));
          transform: translateX(-50%);
          border-radius: 10px;
        }

        .education-item {
          display: flex;
          justify-content: center;
          margin-bottom: 4rem;
          position: relative;
        }

        .timeline-dot {
          position: absolute;
          left: 50%;
          top: 2rem;
          transform: translateX(-50%);
          width: 20px;
          height: 20px;
          background: var(--accent-primary);
          border: 4px solid var(--bg-primary);
          border-radius: 50%;
          z-index: 2;
          box-shadow: 0 0 20px var(--glow);
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 20px var(--glow); }
          50% { box-shadow: 0 0 40px var(--glow); }
        }

        .education-card {
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          border: 2px solid var(--glass-border);
          border-radius: 20px;
          padding: 2.5rem;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          max-width: 600px;
          width: 100%;
        }

        .education-card::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary), var(--accent-purple));
          border-radius: 20px;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .education-card:hover::before {
          opacity: 1;
        }

        .education-card:hover {
          transform: scale(1.03);
          box-shadow: 0 20px 40px var(--shadow);
        }

        .education-card.current {
          border-color: var(--accent-primary);
          box-shadow: 0 12px 32px var(--glow);
        }

        .education-period {
          display: inline-block;
          font-size: 0.875rem;
          font-weight: 700;
          color: white;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          padding: 0.5rem 1.25rem;
          border-radius: 20px;
          margin-bottom: 1.5rem;
          font-family: 'JetBrains Mono', monospace;
        }

        .education-details h3 {
          font-size: 1.625rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          font-family: 'JetBrains Mono', monospace;
          color: var(--text-primary);
        }

        .education-details h4 {
          font-size: 1.125rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .education-description {
          color: var(--text-tertiary);
          margin-bottom: 1rem;
          font-size: 0.9375rem;
          line-height: 1.7;
        }

        .education-score {
          display: inline-flex;
          align-items: center;
          padding: 0.5rem 1.25rem;
          background: var(--bg-tertiary);
          border: 1px solid var(--border);
          border-radius: 10px;
          font-size: 0.9375rem;
          font-weight: 700;
          color: var(--accent-primary);
          font-family: 'JetBrains Mono', monospace;
        }

        /* Achievements */
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .achievement-card {
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          border: 2px solid var(--glass-border);
          border-radius: 20px;
          padding: 2.5rem;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        .achievement-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary), var(--accent-purple));
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .achievement-card:hover::before {
          transform: scaleX(1);
        }

        .achievement-card:hover {
          transform: translateY(-8px);
          border-color: var(--accent-primary);
          box-shadow: 0 20px 40px var(--shadow);
        }

        .achievement-icon {
          width: 72px;
          height: 72px;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          animation: float 3s ease-in-out infinite;
        }

        .achievement-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1rem;
          font-family: 'JetBrains Mono', monospace;
        }

        .achievement-card p {
          color: var(--text-tertiary);
          line-height: 1.7;
          font-size: 0.9375rem;
        }

        /* Contact Section */
        .contact-content {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 4rem;
        }

        .contact-info h3 {
          font-size: 2.25rem;
          margin-bottom: 1rem;
          font-family: 'JetBrains Mono', monospace;
        }

        .contact-info > p {
          color: var(--text-tertiary);
          margin-bottom: 2.5rem;
          line-height: 1.7;
          font-size: 1.0625rem;
        }

        .contact-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-link {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.25rem;
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          border: 1px solid var(--border);
          border-radius: 12px;
          text-decoration: none;
          color: var(--text-primary);
          transition: all 0.3s ease;
        }

        .contact-link:hover {
          border-color: var(--accent-primary);
          transform: translateX(8px);
          box-shadow: 0 8px 24px var(--shadow);
        }

        .contact-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .contact-link-text strong {
          display: block;
          font-weight: 700;
          margin-bottom: 0.25rem;
          font-family: 'JetBrains Mono', monospace;
        }

        .contact-link-text span {
          font-size: 0.875rem;
          color: var(--text-tertiary);
        }

        .contact-form {
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          padding: 2.5rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.625rem;
          font-weight: 700;
          font-size: 0.875rem;
          color: var(--text-secondary);
          font-family: 'JetBrains Mono', monospace;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem 1.25rem;
          background: var(--bg-tertiary);
          border: 2px solid var(--border);
          border-radius: 10px;
          color: var(--text-primary);
          font-family: 'Inter', sans-serif;
          font-size: 0.9375rem;
          transition: all 0.2s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-primary);
          background: var(--bg-secondary);
          box-shadow: 0 0 0 3px var(--glow);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 140px;
        }

        .submit-btn {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          color: white;
          border: none;
          border-radius: 10px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-family: 'JetBrains Mono', monospace;
        }

        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px var(--glow);
        }

        .form-success {
          position: fixed;
          top: 2rem;
          right: 2rem;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          color: white;
          padding: 1.25rem 2rem;
          border-radius: 12px;
          font-weight: 700;
          animation: slideInRight 0.4s ease;
          z-index: 2000;
          box-shadow: 0 12px 32px var(--shadow);
          font-family: 'JetBrains Mono', monospace;
        }

        @keyframes slideInRight {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        /* Footer */
        .footer {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border);
          padding: 2.5rem 2rem;
          text-align: center;
        }

        .footer p {
          color: var(--text-tertiary);
          font-size: 0.875rem;
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .achievements-grid {
            grid-template-columns: 1fr;
            max-width: 500px;
          }

          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-image-container {
            order: -1;
          }

          .hero-buttons {
            justify-content: center;
          }
        }

        @media (max-width: 1024px) {
          .hero-title {
            font-size: 3.5rem;
          }

          .project-card {
            grid-template-columns: 1fr;
          }

          .project-image {
            height: 280px;
          }

          .contact-content {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .nav-links {
            gap: 0.25rem;
          }

          .nav-link {
            padding: 0.5rem 0.75rem;
            font-size: 0.85rem;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.25rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .profile-wrapper {
            width: 280px;
            height: 280px;
          }
        }
      `}</style>

      {/* Mouse Glow Effect */}
      <div 
        className="mouse-glow" 
        style={{
          left: `${mousePosition.x - 250}px`,
          top: `${mousePosition.y - 250}px`
        }}
      />

      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="logo">{'<VB />'}</div>
          <div className="nav-links">
            <a 
              href="#home" 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            >
              Home
            </a>
            <a 
              href="#projects" 
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
            >
              Skills
            </a>
            <a 
              href="#education" 
              className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}
            >
              Education
            </a>
            <a 
              href="#contact" 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            >
              Contact
            </a>
            <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Vinothana Balakrishnan</span>
            </h1>
            <h2 className="hero-subtitle">Building Intelligence Into Web Experiences</h2>
            <p className="hero-description">
              CS Engineering student specializing in AI/ML and full-stack development. I transform complex problems into elegant solutions 
              through the convergence of deep learning, natural language processing, and scalable web architectures.
            </p>
            <div className="hero-buttons">
              <a href="/resume.pdf" download="/resume.pdf" className="btn btn-primary">
                <Download size={18} />
                Resume
              </a>
              <button className="btn btn-secondary" onClick={() => scrollToSection('projects')}>
                Explore Work
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="hero-image-container">
            <div className="profile-wrapper">
              <div className="profile-glow"></div>
              <div className="profile-frame">
                <div className="profile-inner">
                  <img src="/images/vino1.jpeg" alt="Vinothana Balakrishnan" className="profile-image" />
                  <div className="profile-placeholder"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="section-content">
          <div className="section-header">
            <div className="section-label">// PORTFOLIO</div>
            <h2 className="section-title">Featured Projects</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <div className="project-category">{project.category}</div>
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <div>
                    <div className="project-header">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                    <div className="tech-tags">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-links">
                    <a href={project.github} className="project-link github-link" target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      Code
                    </a>
                    {project.live && (
                      <a href={project.live} className="project-link live-link" target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="section-content">
          <div className="section-header">
            <div className="section-label">// EXPERTISE</div>
            <h2 className="section-title">Tech Stack</h2>
          </div>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, data], index) => (
              <div key={index} className="skill-category">
                <div className="skill-category-header">
                  <div className="skill-icon">
                    {data.icon}
                  </div>
                  <h3>{category}</h3>
                </div>
                <div className="skill-items">
                  {data.items.map((skill, idx) => (
                    <span key={idx} className="skill-item">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <div className="section-content">
          <div className="section-header">
            <div className="section-label">// BACKGROUND</div>
            <h2 className="section-title">Academic Journey</h2>
          </div>
          <div className="education-timeline">
            <div className="timeline-line"></div>
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="timeline-dot"></div>
                <div className={`education-card ${edu.status}`}>
                  <span className="education-period">{edu.period}</span>
                  <div className="education-details">
                    <h3>{edu.institution}</h3>
                    <h4>{edu.degree}</h4>
                    <p className="education-description">{edu.description}</p>
                    <span className="education-score">{edu.score}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section">
        <div className="section-content">
          <div className="section-header">
            <div className="section-label">// MILESTONES</div>
            <h2 className="section-title">Achievements</h2>
          </div>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-icon">
                  {achievement.icon}
                </div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="section-content">
          <div className="section-header">
            <div className="section-label">// GET IN TOUCH</div>
            <h2 className="section-title">Let's Connect</h2>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Ready to collaborate?</h3>
              <p>I'm open to discussing innovative projects, research opportunities, and ways to create impactful technology together.</p>
              <div className="contact-links">
                <a href="mailto:vinothanakrish05@gmail.com" className="contact-link">
                  <div className="contact-icon">
                    <Mail size={20} />
                  </div>
                  <div className="contact-link-text">
                    <strong>Email</strong>
                    <span>vinothanakrish05@gmail.com</span>
                  </div>
                </a>
                <a href="https://linkedin.com/in/vinothana-balakrishnan" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <div className="contact-icon">
                    <Linkedin size={20} />
                  </div>
                  <div className="contact-link-text">
                    <strong>LinkedIn</strong>
                    <span>vinothana-balakrishnan</span>
                  </div>
                </a>
                <a href="https://github.com/VinothanaBalakrishnan05" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <div className="contact-icon">
                    <Github size={20} />
                  </div>
                  <div className="contact-link-text">
                    <strong>GitHub</strong>
                    <span>VinothanaBalakrishnan05</span>
                  </div>
                </a>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label>NAME</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label>EMAIL</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label>MESSAGE</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <button type="submit" className="submit-btn">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Vinothana Balakrishnan • Crafted with precision</p>
      </footer>

      {/* Success Message */}
      {formSubmitted && (
        <div className="form-success">
          ✓ Message Sent!
        </div>
      )}
    </div>
  );
};

export default App;