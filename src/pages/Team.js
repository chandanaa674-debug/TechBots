import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Team.css';

// Mentor Imports
import mentor1 from '../assets/mentors/mentor1.jpeg';
import mentor2 from '../assets/mentors/mentor2.jpeg';
import mentor3 from '../assets/mentors/mentor3.jpeg';

// Student Imports
// Student Imports
// Student Imports
import safwanImg from '../assets/students/safwan.png';
import akashImg from '../assets/students/Akash.jpeg';
import poojaImg from '../assets/students/pooja.jpeg';
import aniruddhImg from '../assets/students/Aniruddh.jpeg';
import abhishekImg from '../assets/students/abhishek.png';
import ananyaImg from '../assets/students/Ananya.jpeg';
import mohithImg from '../assets/students/mohith.png';
import prachiImg from '../assets/students/Prachi.jpeg';
import manvithImg from '../assets/students/Manvith.jpeg';
import ashwinImg from '../assets/students/ashwin.png';
import dishaImg from '../assets/students/Dish.jpeg';
import shailendraImg from '../assets/students/Shailendra.jpeg';
import chandanaImg from '../assets/workshops/chandana.jpeg';
import adarshImg from '../assets/students/Adarsh.jpeg';
import varunImg from '../assets/students/Varun.png';
import sharathImg from '../assets/students/sharathImg.jpeg';
import rakshithaImg from '../assets/students/Rakshitha.jpeg';
import shravanImg from '../assets/students/Shravan.jpeg';
import chethanImg from '../assets/students/Chethan.jpeg';

// --- HELPER COMPONENT: LetterStagger Animation ---
const LetterStagger = ({ text }) => {
  const letters = text.split("");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.span
      style={{ display: "inline-block" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

const Team = () => {
  const coFounders = [
    {
      name: "Ashwin Bhat",
      role: "Co-Founder",
     
     
      image: ashwinImg
    },
    {
      name: "Mahammad Safwan T",
      role: "Co-Founder",
      
      image: safwanImg
    },
    {
      name: "Mohith K U",
      role: "Co-Founder",
     
      image: mohithImg
    }
  ];

  const mentors = [
    {
      name: "Dr. Soorya Krishna K",
      role: "Faculty Mentor",
      title: "HOD, Dept. of ECE, SIT",
      info: "Ph.D. with 18 years of teaching experience; specialist in VLSI and IoT.",
      image: mentor3
    },
    {
      name: "Dr.Shailesh S Shetty",
      role: "Faculty Mentor",
      title: "HOD, Dept. of CS & Business System, SIT",
      info: "M.Tech in Computer Engineering; expert in ML, AI, and Blockchain.",
      image: mentor2
    },
    {
      name: "Mr.Aditya R Poonja",
      role: "Industry Mentor",
      title: "BDE, AIC Nitte Incubation Centre",
      info: "5+ years of Deep-Tech experience; focused on Startup Growth and AI/ML.",
      image: mentor1
    }
  ];
const executive = [
    {
      name: "Adarsh",
      role: "President",
      
      image: adarshImg
    },
    {
      name: "Abhishek",
      role: "Secretary",
     
      image: abhishekImg
    },
    {
      name: "Aniruddh",
      role: "Treasurer",
      
      image: aniruddhImg
    },
    {
      name: "Shailendra",
      role: "Joint Secretary",
      
      image: shailendraImg
    },
  ];

  const techLeads = [
    
     {
      name: "Chethan",
      role: "Hardware Lead",
      
      image: chethanImg
    },
    {
      name: "Shravan",
      role: "Hardware Co-Lead",
      
      image: shravanImg
    },
    {
      name: "Akash",
      role: "Software Lead",
      
      image: akashImg
    },
    {
      name: "Chandana A",
      role: "Software Co-Lead",
      
      image: chandanaImg
    },
    {
      name: "Disha",
      role: "OutReach Coordinator",
      
      image: dishaImg
    },
    {
      name: "Ananya Udupi",
      role: "OutReach Coordinator",
      
      image: ananyaImg
    },
    {
      name: "Sharath",
      role: "Documentation Lead",
      
      image: sharathImg
    },
    {
      name: "Manvith",
      role: "Documentation Co-Lead",
      
      image: manvithImg
    },
    {
      name: "Prachi",
      role: "Media Lead",
      image: prachiImg
    },
    {
      name: "Rakshitha",
      role: "Media Co-Lead",
      
      image: rakshithaImg
    },
    {
      name: "Pooja",
      role: "Workshop Coordinator",
      image: poojaImg
    },
    {
      name: "Varun",
      role: "Event Coordinator",
      
      image: varunImg
    }
  ];
  
      
  

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 50, damping: 20 } 
    }
  };

  return (
    <div className="team-container">
      {/* HERO */}
      <section className="team-hero">
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.h3 
            className="gold-label"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            The Architects
          </motion.h3>
          
          <h1>
            <LetterStagger text="Meet the Core Team" />
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            The collective intelligence driving innovation at Srinivas Institute of Technology.
          </motion.p>
        </div>
      </section>

      {/* CO-FOUNDER CARDS */}
      <section className="team-tier cofounder-tier">
        <h2 className="tier-title">Co-Founders</h2>
        <motion.div 
          className="mentor-grid cofounder-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {coFounders.map((founder, i) => (
            <motion.div key={i} className="mentor-card" variants={cardVariants}>
              <img src={founder.image} alt={founder.name} className="profile-photo" />
              <div className="m-text">
                <span className="m-tag">{founder.role}</span>
                <h4>{founder.name}</h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* MENTOR CARDS */}
      <section className="team-tier">
        <h2 className="tier-title">Visionary Mentors</h2>
        <motion.div 
          className="mentor-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {mentors.map((m, i) => (
            <motion.div key={i} className="mentor-card" variants={cardVariants}>
              <img src={m.image} alt={m.name} className="profile-photo" />
              <div className="m-text">
                <span className="m-tag">{m.role}</span>
                <h4>{m.name}</h4>
                <h5>{m.title}</h5>
                <p>{m.info}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* STUDENT CORE TEAM */}
      <section className="team-tier alt-dark">
        {/* Inner wrapper for centering content on wide screens */}
        <div className="tier-inner-wrap">
          <h2 className="tier-title">Executive Leadership</h2>
          <motion.div 
            className="student-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {executive.map((s, i) => (
              <motion.div key={i} className="student-card tier-2" variants={cardVariants}>
                <img src={s.image} alt={s.name} className="profile-photo-sq" />
                <h4>{s.name}</h4>
                <span className="s-role">{s.role}</span>
                <p className="s-focus">{s.focus}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TECHNICAL LEADS */}
      <section className="team-tier">
        <h2 className="tier-title">Technical & Coordination Leads</h2>
        <motion.div 
          className="leads-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {techLeads.map((l, i) => (
            <motion.div key={i} className="student-card tier-3" variants={cardVariants}>
              <img src={l.image} alt={l.name} className="profile-photo-sm" />
              <h4>{l.name}</h4>
              <span className="s-role">{l.role}</span>
              <span className="s-dept">{l.dept}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Team; 