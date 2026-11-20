import React, { useState, useEffect, useRef } from 'react';
import { 
  Code, 
  Cpu, 
  Database, 
  Layout, 
  Palette, 
  Layers, 
  Globe, 
  Network, 
  Rocket, 
  Atom, 
  Navigation, 
  Boxes, 
  Smartphone, 
  FileCode2, 
  Server, 
  Terminal, 
  Key, 
  ShieldCheck, 
  CreditCard, 
  GitBranch, 
  Github, 
  Send, 
  Code2, 
  UploadCloud 
} from 'lucide-react';
import { skillCategories, heroQuickPills } from '../data/skills';
import ChapterLabel from '../components/ChapterLabel';
import CornerStamps from '../components/CornerStamps';
import MangaBanner from '../components/MangaBanner';
import { animateSection } from '../animations/animations';

export default function Skills() {
  const containerRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const cleanup = animateSection(containerRef);
    return () => {
      if (cleanup) cleanup();
    };
  }, [selectedCategory]);

  const iconMap = {
    Code: <Code size={18} />,
    Cpu: <Cpu size={18} />,
    Database: <Database size={18} />,
    Layout: <Layout size={18} />,
    Palette: <Palette size={18} />,
    Layers: <Layers size={18} />,
    Globe: <Globe size={18} />,
    Network: <Network size={18} />,
    Rocket: <Rocket size={18} />,
    Atom: <Atom size={18} />,
    Navigation: <Navigation size={18} />,
    Boxes: <Boxes size={18} />,
    Smartphone: <Smartphone size={18} />,
    FileCode2: <FileCode2 size={18} />,
    Server: <Server size={18} />,
    Terminal: <Terminal size={18} />,
    Key: <Key size={18} />,
    ShieldCheck: <ShieldCheck size={18} />,
    CreditCard: <CreditCard size={18} />,
    GitBranch: <GitBranch size={18} />,
    Github: <Github size={18} />,
    Send: <Send size={18} />,
    Code2: <Code2 size={18} />,
    UploadCloud: <UploadCloud size={18} />
  };

  const displayedCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(c => c.id === selectedCategory);

  return (
    <div className="page-wrapper skills-page" ref={containerRef}>
      <CornerStamps positions={['top-left', 'bottom-right']} />

      <section className="section skills-section">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <ChapterLabel chapter="CHAPTER 04" title="MY TECHNICAL ARSENAL" />
            <h1 className="section-title">
              TOOLS OF MY <span className="text-red">TRADE.</span>
            </h1>
            <p className="section-subtitle">
              Verified technical capabilities organized into comic-panel categories — spanning modern MERN full-stack development, server architecture, database modeling, and core algorithmic concepts.
            </p>
          </div>

          {/* Quick Filter Buttons */}
          <div className="skills-filter-row reveal-on-scroll">
            <button 
              className={`btn-filter ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All Arsenal Categories
            </button>
            {skillCategories.map(cat => (
              <button
                key={cat.id}
                className={`btn-filter ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Categories Blocks */}
          <div className="skills-categories-stack">
            {displayedCategories.map((category) => (
              <div key={category.id} className="skills-category-block comic-card reveal-on-scroll">
                <div className="category-header-row">
                  <div>
                    <span className="chapter-badge" style={{ transform: 'none', marginBottom: '6px' }}>
                      {category.badge}
                    </span>
                    <h2 className="category-title">{category.title}</h2>
                    <p className="category-desc">{category.description}</p>
                  </div>
                  <div className="category-count-badge">
                    <span>{category.skills.length} VERIFIED SKILLS</span>
                  </div>
                </div>

                <div className="skills-cards-grid">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="skill-item-card">
                      <div className="skill-item-top">
                        <div 
                          className="skill-icon-pill" 
                          style={{ backgroundColor: skill.bg, color: skill.text }}
                        >
                          {iconMap[skill.icon] || <Code size={18} />}
                        </div>
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-tag-pill">{skill.tag}</span>
                      </div>
                      <p className="skill-role-text">{skill.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Manga CTA Banner */}
          <MangaBanner />
        </div>
      </section>
    </div>
  );
}
