import React, { useEffect, useRef } from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  Terminal, 
  Users 
} from 'lucide-react';
import { educationList, verifiedAchievements } from '../data/education';
import { personalInfo } from '../data/personalInfo';
import ChapterLabel from '../components/ChapterLabel';
import CornerStamps from '../components/CornerStamps';
import MangaBanner from '../components/MangaBanner';
import { animateSection } from '../animations/animations';

export default function Education() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cleanup = animateSection(containerRef);
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div className="page-wrapper education-page" ref={containerRef}>
      <CornerStamps positions={['top-left', 'bottom-right']} />

      {/* CHAPTER 05: ACADEMIC JOURNEY */}
      <section className="section education-section">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <ChapterLabel chapter="CHAPTER 05" title="MY ACADEMIC JOURNEY" />
            <h1 className="section-title">
              ACADEMIC <span className="text-red">JOURNEY.</span>
            </h1>
            <p className="section-subtitle">
              Verified academic credentials from foundational school days to engineering at Shri Vaishnav Vidyapeeth Vishwavidyalaya.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="experience-timeline-container">
            {educationList.map((edu, index) => (
              <div 
                key={edu.id} 
                className={`timeline-chronicle-card comic-card reveal-on-scroll ${edu.highlight ? 'card-highlighted' : ''}`}
              >
                {/* Header Row */}
                <div className="chronicle-header-row">
                  <div className="chronicle-badge-wrap">
                    <span className="chapter-badge" style={{ transform: 'none', marginBottom: 0 }}>
                      {edu.badge}
                    </span>
                    <span className="chronicle-period-pill">
                      <Calendar size={14} />
                      {edu.duration}
                    </span>
                  </div>

                  <div className="edu-score-pill">
                    <span className="score-label">{edu.scoreLabel}:</span>
                    <span className="score-value">{edu.score}</span>
                  </div>
                </div>

                {/* Title & Institution */}
                <div className="chronicle-title-box">
                  <h2 className="chronicle-title">{edu.degree} {edu.branch ? `— ${edu.branch}` : ''}</h2>
                  <h3 className="chronicle-institution">{edu.institution}</h3>
                </div>

                <p className="chronicle-desc">{edu.description}</p>

                {/* Relevant Coursework */}
                {edu.coursework && edu.coursework.length > 0 && (
                  <div className="chronicle-learnings-box">
                    <h4 className="learnings-title">Relevant Core Coursework:</h4>
                    <div className="coursework-tags-grid">
                      {edu.coursework.map((course, idx) => (
                        <div key={idx} className="course-tag-item">
                          <CheckCircle2 size={14} className="text-red" />
                          <span>{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CHAPTER 06: BEYOND THE CODE (ACHIEVEMENTS & ACTIVITIES) */}
          <div className="achievements-section-block reveal-on-scroll" style={{ marginTop: '72px' }}>
            <div className="section-header">
              <ChapterLabel chapter="CHAPTER 06" title="BEYOND THE CODE" />
              <h2 className="section-title">
                ACHIEVEMENTS & <span className="text-red">COMMUNITY.</span>
              </h2>
              <p className="section-subtitle">
                Demonstrated discipline in algorithmic problem solving and active involvement in the tech developer community.
              </p>
            </div>

            <div className="achievements-grid">
              {/* LeetCode Card */}
              <div className="comic-card achievement-card">
                <div className="achievement-top-row">
                  <span className="chapter-badge" style={{ transform: 'none', marginBottom: 0 }}>
                    PROBLEM SOLVING
                  </span>
                  <div className="achievement-metric-pill">
                    <Terminal size={18} className="text-red" />
                    <span>60+ Solved</span>
                  </div>
                </div>

                <h3 className="achievement-card-title">60+ LeetCode Problems Solved</h3>
                <h4 className="achievement-sub">Data Structures & Algorithms</h4>
                
                <p className="achievement-desc">
                  Consistently practicing algorithmic problem solving on LeetCode covering Arrays, Strings, Linked Lists, Trees, and Recursion to develop deep engineering intuition.
                </p>

                <div className="achievement-badge-footer">
                  <span className="footer-tag-label">VERIFIED FACT:</span>
                  <span className="verified-badge-pill">60+ LeetCode DSA</span>
                </div>
              </div>

              {/* GDG Community Card */}
              <div className="comic-card achievement-card">
                <div className="achievement-top-row">
                  <span className="chapter-badge" style={{ transform: 'none', marginBottom: 0 }}>
                    COMMUNITY
                  </span>
                  <div className="achievement-metric-pill">
                    <Users size={18} className="text-red" />
                    <span>GDG Member</span>
                  </div>
                </div>

                <h3 className="achievement-card-title">Google Developer Group (GDG)</h3>
                <h4 className="achievement-sub">Active Community Member</h4>
                
                <p className="achievement-desc">
                  Participating in developer events, collaborating with peers, staying current with modern web standards, and sharing developer knowledge.
                </p>

                <div className="achievement-badge-footer">
                  <span className="footer-tag-label">VERIFIED FACT:</span>
                  <span className="verified-badge-pill">GDG Community</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Manga CTA Banner */}
          <MangaBanner />
        </div>
      </section>
    </div>
  );
}
