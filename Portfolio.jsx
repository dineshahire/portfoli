import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Code, Database, Globe, Smartphone, Menu, X, Star, Zap, Rocket, Heart, Award, Users, Calendar, ChevronDown, Play, Eye } from 'lucide-react';
import { PenTool } from 'lucide-react'; // Example UI/UX icon







const Portfolio = () => {
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleElements, setVisibleElements] = useState(new Set());
  const heroRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;

          

          
        }


  useEffect(() => {
  const animationFrame = () => {
    setFollowerPosition(prev => ({
      x: prev.x + (mousePosition.x - prev.x) * 0.15,
      y: prev.y + (mousePosition.y - prev.y) * 0.15,
    }));
    requestAnimationFrame(animationFrame);
  };
  animationFrame();
}, [mousePosition]);

        
      }
      
    };

    
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    



    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const skills = [
    { 
      category: ' UI/UX Tools',
      items: [
        { name: 'Figma', level: 95, icon: <Code className="w-6 h-6" />, color: 'from-cyan-400 to-blue-500' },
        { name: 'After Effects', level: 92, icon: <Zap className="w-6 h-6" />, color: 'from-yellow-400 to-orange-500' },
        { name: 'Framer', level: 88, icon: <Code className="w-6 h-6" />, color: 'from-blue-400 to-indigo-500' },
        { name: 'canva', level: 90, icon: <Globe className="w-6 h-6" />, color: 'from-gray-400 to-gray-600' }
      ]
    },
    { 
      category: 'Programing Languages',
      items: [
        { name: 'Html/CSS', level: 87, icon: <Database className="w-6 h-6" />, color: 'from-green-400 to-emerald-500' },
        { name: 'PHP', level: 83, icon: <Code className="w-6 h-6" />, color: 'from-blue-400 to-indigo-500' },
        { name: 'MySQL', level: 80, icon: <Database className="w-6 h-6" />, color: 'from-emerald-400 to-teal-500' },
        { name: 'SQL', level: 78, icon: <Database className="w-6 h-6" />, color: 'from-blue-500 to-cyan-500' }
      ]
    },
    { 
      category: 'Technologies/Library',
      items: [
        { name: 'React.js', level: 75, icon: <Smartphone className="w-6 h-6" />, color: 'from-pink-400 to-purple-500' },
        { name: ' Jira', level: 85, icon: <Code className="w-6 h-6" />, color: 'from-purple-400 to-pink-500' },
        { name: ' Kali Linux & Parrot Os', level: 92, icon: <Github className="w-6 h-6" />, color: 'from-gray-400 to-gray-600' },
        { name: 'XAMPP', level: 89, icon: <Globe className="w-6 h-6" />, color: 'from-orange-400 to-red-500' }
      ]
    }
  ];

  const projects = [
    {
      title: 'BuzzBean - Mobile Design',
      description: 'Pouring creativity and warmth into every pixel☕️my coffee app design isn’t just about ordering coffee, it’s about making every digital sip feel like home. Crafted with love❤️inspired by real connections, and brewed for delightful discovery. Let’s stir up the joy of coffee together!',
      tech: ['Figma', 'Canva', 'Animation', 'Creative Animation'],
      image: 'https://plus.unsplash.com/premium_vector-1737563596883-9128de3fe0a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmVlJTIwYXBwfGVufDB8fDB8fHww',
      status: 'Aesthetic',
      gradient: 'from-purple-600 to-pink-600',
      metrics: { users: '1.5K+', rating: '4.8★', conversion: '12%' },
      featured: true,
      demoUrl: "https://shorturl.at/NdCp1"
    },
    {
      title: 'StyleHub - Mobile Design',
      description: 'A Fashion Shopping App Prototype! From splash screens to product detail pages, every screen is designed with a user-first approach, blending elegance, functionality, and modern aesthetics.',
      tech: ['figma', 'Animation', 'Creative Design', 'Canva', 'After Effects'],
      image: 'https://plus.unsplash.com/premium_photo-1683288295841-782fa47e4770?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      status: 'Dress Like Cool',
      gradient: 'from-cyan-600 to-blue-600',
      metrics: { cities: '15+', accuracy: '94%', efficiency: '+35%' },
      featured: true,
      demoUrl: "https://shorturl.at/ydP2B"
    },
    {
      title: 'LamboVerse',
      description: 'A sleek Lamborghini-themed animated website concept that blends luxury design with smooth, interactive motion.Pushing my UI/UX skills to the next gear!',
      tech: ['Figma', 'After Effects', 'Cool Animation', 'Canva', 'Creative Design'],
      image: 'https://media.istockphoto.com/id/493505362/photo/suv-car-transportation-vehicle-generic-energy-concept.jpg?s=2048x2048&w=is&k=20&c=5ZHJ3Srag9igFEKEoTyBwyF82Mu3iE9blhegSrupv_k=',
      status: 'Fully Loaded Animation',
      gradient: 'from-emerald-600 to-teal-600',
      metrics: { votes: '50K+', uptime: '99.9%', security: 'A+' },
      featured: true,
       demoUrl: "https://www.figma.com/proto/2HE8vLejMZdJRWRtEdNdSp/LamboVerse?page-id=0%3A1&node-id=2-12&starting-point-node-id=2%3A12&t=Mshy51ij9MvjQFFy-1"
    },
    {
      title: 'MedEase',
      description: 'MedEase, a healthcare app that makes doctor appointments, pill reminders, and health tracking super easy and accessible!',
      tech: ['Figma', 'Canva'],
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop',
      status: 'Featured',
      gradient: 'from-indigo-600 to-purple-600',
      featured: false,
      demoUrl: "https://lnkd.in/dYSppdpp"

    },
    {
      title: 'LocalExplorer',
      description: 'where I showcase how the design ensures a seamless trekking experience. From entering your destination to receiving live updates on weather and safety conditions, every detail is crafted for user convenience and safety.',
      tech: ['Figma', 'Canva', 'Creativity'],
      image: 'https://media.istockphoto.com/id/1417543506/photo/september-16th-2021-uttarakhand-india-a-solo-hiker-hikers-with-a-backpack-looking-towards-the.jpg?s=612x612&w=0&k=20&c=dhKcXYibOatt31nfkMADlHyrSk9tzjreuFLxV5jNFFk=',
      status: 'Open Source',
      gradient: 'from-green-600 to-blue-600',
      metrics: { stars: '1.2K', contributors: '45+', downloads: '50K+' },
      featured: false,
      demoUrl: "https://www.linkedin.com/posts/dinesh-ahire-204a0a245_localexplorer-uiuxdesign-webdesign-activity-7309655262716420097-kHmw?utm_source=share&utm_medium=member_desktop&rcm=ACoAADzXDKQBPnDljD7VwMOAQX3pHxS7tQffemw"
    },
    {
      title: 'Customer Mangement System',
      description: 'A web-based customer management system designed to help businesses efficiently handlecustomer grievances and improve service response times.',
      tech: ['Php', 'Html&CSS', 'MySQL', 'XAMPP'],
      image: 'https://github.com/dineshahire/deltasoft---customer-management-system/blob/main/logo.jpg?raw=true',
      status: 'Company Project',
      gradient: 'from-yellow-600 to-orange-600',
      metrics: { savings: '23%', users: '500+', accuracy: '96%' },
      featured: false,
      demoUrl: "https://github.com/dineshahire/deltasoft---customer-management-system"
    }
  ];

  const experiences = [
    {
      company: 'E - Sutra Techlogies pvt ltd',
      role: 'UI/UX Designer Intern',
      period: 'Jul 2025 - SEP 2025',
      description: 'Worked as a UI/UX Designer on client projects, creating user-focused solutions for business challenges.Created user flows, wireframes, and high-fidelity prototypes using Figma to visualize key functionalities.Collaborated with developers to ensure smooth handoff and pixel-perfect implementation',
      achievements: ['Designed user flows, wireframes, and prototypes in Figma.', 'Delivered user-focused solutions for client projects.', 'Collaborated with developers for smooth handoff and implementation.'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      company: 'YPP Techlogies pvt led',
      role: 'UI Designer',
      period: 'JAN 2024 - MAR 2024',
      description: 'Created responsive user interfaces and implemented modern design systems. Collaborated with design team to improve user experience.',
      achievements: ['Redesigned user dashboard', 'Improved UX metrics by 25%', 'Led frontend architecture decisions'],
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const achievements = [
    { icon: <Star className="w-8 h-8" />, number: '25+', label: 'Projects Delivered', color: 'text-yellow-400' },
    { icon: <Award className="w-8 h-8" />, number: '5', label: 'Hackathons Won', color: 'text-purple-400' },
    { icon: <Users className="w-8 h-8" />, number: '10K+', label: 'Users Impacted', color: 'text-cyan-400' },
    { icon: <Rocket className="w-8 h-8" />, number: '99%', label: 'Client Satisfaction', color: 'text-pink-400' }
  ];

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

 


  const cursorStyle = {
  position: 'fixed',
  left: mousePosition.x,
  top: mousePosition.y,
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  pointerEvents: 'none',
  zIndex: 9999,
  transform: 'translate(-50%, -50%)',
  background: 'radial-gradient(circle, rgba(236,72,153,0.35) 0%, rgba(139,92,246,0.45) 100%)',
  boxShadow: '0 0 60px 20px rgba(236,72,153,0.20), 0 0 0px 0px rgba(236,72,153,0.05)',
  transition: 'background .35s, box-shadow .15s',
  mixBlendMode: 'lighten'
};

const mainCursorStyle = {
  position: 'fixed',
  left: mousePosition.x,
  top: mousePosition.y,
  width: 20,
  height: 20,
  borderRadius: '50%',
  backgroundColor: '#ec4899',
  pointerEvents: 'none',
  transform: 'translate(-50%, -50%)',
  zIndex: 9999,
  transition: 'background-color 0.3s ease',
  boxShadow: '0 0 8px 2px #ec4899',
};

const followerCursorStyle = {
  position: 'fixed',
  left: followerPosition.x,
  top: followerPosition.y,
  width: 40,
  height: 40,
  borderRadius: '50%',
  border: '2px solid #ec4899',
  pointerEvents: 'none',
  transform: 'translate(-50%, -50%)',
  zIndex: 9998,
  animation: 'pulse 2s infinite',
};




  return (
    
    

    <div className="min-h-screen bg-black text-white overflow-hidden relative cursor-none">

      <div style={cursorStyle}></div>
      <div style={followerCursorStyle}></div>
      
<div style={mainCursorStyle}></div>



      {/* Enhanced Animated Background */}
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black via-black to-cyan-900/20" />
        
        {/* Improved Floating Orbs */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-30"
            style={{
              width: `${80 + i * 40}px`,
              height: `${80 + i * 40}px`,
              background: `linear-gradient(45deg, ${i % 3 === 0 ? '#8b5cf6' : i % 3 === 1 ? '#06b6d4' : '#ec4899'}, ${i % 3 === 0 ? '#ec4899' : i % 3 === 1 ? '#10b981' : '#f59e0b'})`,
              left: `${5 + i * 12}%`,
              top: `${5 + i * 12}%`,
              animation: `float-${i} ${8 + i * 2}s ease-in-out infinite`,
              filter: 'blur(30px)',
              transform: `translate(${mousePosition.x / (30 + i * 10)}px, ${mousePosition.y / (30 + i * 10)}px)`
            }}
          />
        ))}

        {/* Enhanced Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            transform: `translate(${scrollY * 0.05}px, ${scrollY * 0.02}px)`
          }}
        />
      </div>

      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-2xl border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-3xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              <span className="hover:scale-110 transition-transform duration-300 cursor-pointer">Dinesh</span>
            </div>
            
            <div className="hidden md:flex space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-6 py-3 rounded-full transition-all duration-500 group ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30'
                      : 'hover:bg-white/10 hover:text-purple-300'
                  }`}
                >
                  <span className="relative z-10 font-medium">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full" />
                </button>
              ))}
            </div>

            <button
              className="md:hidden p-3 rounded-xl hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-6 pt-2 space-y-3 border-t border-white/10">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-6 py-4 rounded-xl hover:bg-white/10 transition-colors text-lg"
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Enhanced Hero Section */}
       {/* Enhanced Hero Section */}
      <section id="home" ref={heroRef} className="min-h-screen flex flex-col items-center justify-center relative pt-32 pb-20">
        <div className="text-center z-10 max-w-6xl mx-auto px-6">
          {/* Enhanced Avatar with Photo */}
          <div className={`mb-12 transition-all duration-1500 ${isLoaded ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
            <div className="relative group w-48 h-48 mx-auto">
              {/* Rotating Border Ring */}
              <div className="absolute -inset-2 w-52 h-52">
                <div className="w-full h-full bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 rounded-full animate-spin opacity-75" style={{ animationDuration: '8s' }} />
              </div>
              
              {/* Photo Container */}
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-black shadow-2xl group-hover:scale-105 transition-transform duration-500 z-10">
                {/* Photo placeholder - replace src with your actual photo */}
                <img 
                  src="https://plus.unsplash.com/premium_vector-1742923267856-96497712c3bf?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Dinesh Ahire - UI/UX Designer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-cyan-900/20 group-hover:from-purple-900/30 group-hover:to-cyan-900/30 transition-all duration-500" />
                
                {/* Glowing effect on hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-cyan-500/0 group-hover:from-purple-500/20 group-hover:via-pink-500/20 group-hover:to-cyan-500/20 transition-all duration-500" />
              </div>
              
              {/* Status Indicator */}
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-400 rounded-full border-4 border-black animate-pulse shadow-lg z-20">
                <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75" />
              </div>
              
              {/* Enhanced floating particles */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 rounded-full animate-ping opacity-60"
                  style={{
                    background: `linear-gradient(45deg, ${i % 3 === 0 ? '#8b5cf6' : i % 3 === 1 ? '#06b6d4' : '#ec4899'}, ${i % 3 === 0 ? '#ec4899' : i % 3 === 1 ? '#10b981' : '#f59e0b'})`,
                    left: `${50 + 60 * Math.cos(i * Math.PI / 4)}%`,
                    top: `${50 + 60 * Math.sin(i * Math.PI / 4)}%`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: `${2 + i * 0.2}s`
                  }}
                />
              ))}
            </div>
          </div>
          
          <div className={`transition-all duration-1500 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-6">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30 text-purple-300 font-medium text-lg mb-6">
                👋 Hello, I'm
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 relative">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x bg-400% leading-tight">
                Dinesh Ahire
              </span>
            </h1>
          </div>
          
          <div className={`transition-all duration-1500 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative inline-block mb-8">
              <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 relative z-10">
               UI/UX DESIGNER
              </h2>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-2xl animate-pulse" />
            </div>
          </div>
          
          <div className={`transition-all duration-1500 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
             Transforming ideas into stunning user experiences through creative design, intuitive interfaces, and human-centered innovation. Let’s design the future together.
            </p>
          </div>
          
          <div className={`transition-all duration-1500 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button 
                onClick={() => scrollToSection('projects')}
                className="group relative px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-xl overflow-hidden transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Rocket className="w-6 h-6" />
                  View My Work
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-purple-600/50 to-pink-600/50 blur-xl" />
              </button>
              
              <a href="/ResumeDinesh.pdf" download="ResumeDinesh.pdf">
             <button className="group relative px-12 py-5 border-2 border-transparent bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full p-[2px] hover:scale-110 transition-all duration-300">
            <div className="bg-black rounded-full px-10 py-4 group-hover:bg-black/80 transition-colors">
              <span className="flex items-center gap-3 font-bold text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        <Download className="w-6 h-6 text-cyan-400" />
        Download Resume
      </span>
    </div>
  </button>
</a>

            </div>
          </div>
        

          {/* Stats - Only visible on larger screens to avoid clutter */}
          {/* <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-1000 delay-${1100 + index * 200} ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                <div className={`${achievement.color} mb-3 flex justify-center`}>
                  {achievement.icon}
                </div>
                <div className="text-3xl md:text-4xl font-black text-white mb-2">{achievement.number}</div>
                <div className="text-gray-400 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div> */}
        </div>

        {/* Enhanced Floating Achievement Cards - Desktop Only */}
        {/* <div className="absolute inset-0 pointer-events-none hidden xl:block">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`absolute bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transition-all duration-1000 delay-${1000 + index * 200} ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:scale-110`}
              style={{
                left: `${index < 2 ? 5 + index * 15 : 75 + (index - 2) * 15}%`,
                top: `${index < 2 ? 25 + index * 20 : 25 + (index - 2) * 20}%`,
                transform: `translate(${mousePosition.x / (80 + index * 30)}px, ${mousePosition.y / (80 + index * 30)}px) rotate(${(index * 10 - 15)}deg)`,
                maxWidth: '200px'
              }}
            >
              <div className={`${achievement.color} mb-3 flex justify-center`}>
                {achievement.icon}
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-white mb-1">{achievement.number}</div>
                <div className="text-sm text-gray-300 font-medium">{achievement.label}</div>
              </div>
            </div>
          ))}
        </div> */}

        {/* Scroll Indicator */}
        { <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div> }
      </section>
 

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate UI/UX designer with a sharp eye for detail and a love for crafting intuitive, visually engaging digital experiences. From wireframes
                   to high-fidelity prototypes, I focus on blending creativity with usability to design interfaces that not only look great but also feel effortless to navigate.
                </p>
                <p>
                  My journey in design began with curiosity about how people interact with technology, which has grown into a deep commitment 
                  to building user-friendly products that make an impact. I specialize in design thinking, user research, prototyping, 
                  and creating pixel-perfect designs that resonate with users.
                </p>
                <p>
                  When I'm not designing, you'll find me exploring new design trends, experimenting with creative tools, 
                  or sharing knowledge to inspire upcoming designers in the community.
                </p>
              </div>
              
              <div className="mt-12 flex flex-wrap gap-4">
                {['Problem Solver', 'Team Player', 'Fast Learner', 'Creative Thinker'].map((trait, index) => (
                  <span 
                    key={trait}
                    className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30 text-purple-300 font-medium hover:border-purple-400/50 transition-colors"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Calendar className="w-8 h-8 text-purple-400" />
                    <div>
                      <h3 className="text-xl font-bold text-white">Experience</h3>
                      <p className="text-gray-400">2+ Years in Development</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Award className="w-8 h-8 text-cyan-400" />
                    <div>
                      <h3 className="text-xl font-bold text-white">Education</h3>
                      <p className="text-gray-400">Computer Science Engineering</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Users className="w-8 h-8 text-pink-400" />
                    <div>
                      <h3 className="text-xl font-bold text-white">Collaboration</h3>
                      <p className="text-gray-400">Team Lead</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Constantly evolving skill set with focus on modern technologies and best practices
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mt-8" />
          </div>
          
          <div className="space-y-16">
            {skills.map((category, categoryIndex) => (
              <div key={category.category} className="relative">
                <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {category.category}
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.items.map((skill, index) => (
                    <div 
                      key={skill.name}
                      className="group relative perspective-1000"
                      style={{ animationDelay: `${categoryIndex * 300 + index * 150}ms` }}
                    >
                      <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-3 hover:rotate-y-12 preserve-3d shadow-xl hover:shadow-purple-500/25">
                        <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"
                             style={{ background: `linear-gradient(135deg, ${skill.color.split(' ')[1]}, ${skill.color.split(' ')[3]})` }} />
                        
                        <div className="relative z-10 text-center">
                          <div className={`w-14 h-14 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                            {skill.icon}
                          </div>
                          
                          <h4 className="text-lg font-bold mb-3 text-white">{skill.name}</h4>
                          
                          <div className="relative mb-2">
                            <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                              <div 
                                className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1500 ease-out shadow-sm`}
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                            <div className="text-sm font-bold text-purple-300 mt-2">
                              {skill.level}%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Innovative solutions that showcase technical excellence and creative problem-solving
            </p>
          </div>
          
          {/* Featured Projects */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-purple-300 mb-8 text-center">🌟 Spotlight Projects</h3>
            <div className="grid lg:grid-cols-3 gap-10">
              {projects.filter(project => project.featured).map((project, index) => (
                <div 
                  key={project.title}
                  className="group relative"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Enhanced Status Badge */}
                  <div className={`absolute -top-4 left-6 z-20 px-6 py-2 bg-gradient-to-r ${project.gradient} rounded-full text-white text-sm font-bold shadow-lg transform hover:scale-110 transition-transform`}>
                    ✨ {project.status}
                  </div>
                  
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-6 hover:rotate-1 shadow-2xl hover:shadow-cyan-500/25">
                    <div className="relative overflow-hidden group">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-125"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                      
                      {/* Enhanced Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-pink-600/0 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      
                      {/* Project Metrics Overlay */}
                      <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <div className="bg-black/60 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                          <div className="flex gap-4 text-sm">
                            {Object.entries(project.metrics).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div className="text-white font-bold">{value}</div>
                                <div className="text-gray-400 text-xs capitalize">{key}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-purple-500/50 transition-colors hover:scale-110">
                          <Eye className="w-5 h-5" />
                        </button>
                        <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-pink-500/50 transition-colors hover:scale-110">
                          <Github className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span 
                            key={tech}
                            className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 hover:border-purple-400/50 transition-colors hover:scale-105"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-4">
                        

                        <div className="flex gap-4">
  <a
    href={project.demoUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 flex items-center gap-2 justify-center"
  >
    <Play className="w-4 h-4" />
    Live Demo
    <PenTool className="w-5 h-5" />  {/* UI/UX icon */}
  </a>
</div>

                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Other Projects */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-cyan-300 mb-8 text-center">💼 Additional Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter(project => !project.featured).map((project, index) => (
                <div 
                  key={project.title}
                  className="group relative bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    
                    <div className={`absolute top-3 left-3 px-3 py-1 bg-gradient-to-r ${project.gradient} rounded-full text-white text-xs font-bold`}>
                      {project.status}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded text-xs">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <a
  href={project.demoUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="flex-1 py-2 px-4 bg-gradient-to-r from-purple-600/50 to-pink-600/50 rounded-lg text-sm font-semibold hover:from-purple-600 hover:to-pink-600 transition-all flex items-center justify-center"
>
  View
</a>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Professional Journey
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Building expertise through hands-on experience and meaningful contributions
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-cyan-500 to-pink-500 rounded-full opacity-30" />
            
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.company}
                  className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full border-4 border-black shadow-lg z-10" />
                  
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${exp.gradient} rounded-xl flex items-center justify-center`}>
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                          <p className="text-purple-300 font-medium">{exp.company}</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-cyan-300 text-sm font-medium border border-cyan-500/30">
                          {exp.period}
                        </span>
                      </div>
                      
                      <p className="text-gray-400 mb-6 leading-relaxed">{exp.description}</p>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-purple-300 mb-3">Key Achievements:</h4>
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center gap-3 text-gray-300">
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full" />
                            <span className="text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="hidden lg:block w-2/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Connect & Create
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate on your next big idea? Let's discuss how we can bring your vision to life 
              with innovative technology and exceptional user experiences.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-8">
                Get In Touch
              </h3>
              
              {[
                { 
                  icon: <Mail className="w-8 h-8" />, 
                  title: 'Email', 
                  value: 'dineshahire9892@gmail.com',
                  subtitle: 'Drop me a message anytime',
                  color: 'from-red-500 to-pink-500',
                  link: 'mailto:your.email@example.com'
                },
                { 
                  icon: <Phone className="w-8 h-8" />, 
                  title: 'Phone', 
                  value: '+91 9321770167',
                  subtitle: 'Available for calls & meetings',
                  color: 'from-green-500 to-emerald-500',
                  link: 'tel:+919321770167'
                },
                { 
                  icon: <MapPin className="w-8 h-8" />, 
                  title: 'Location', 
                  value: 'Maharashtra, India',
                  subtitle: 'Open to remote opportunities',
                  color: 'from-blue-500 to-cyan-500',
                  link: '#'
                }
              ].map((contact, index) => (
                <a
                  key={contact.title}
                  href={contact.link}
                  className="group block bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:bg-white/10"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                      {contact.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{contact.title}</h4>
                      <p className="text-lg text-purple-300 font-medium mb-1">{contact.value}</p>
                      <p className="text-gray-400 text-sm">{contact.subtitle}</p>
                    </div>
                  </div>
                </a>
              ))}
              
              {/* Social Links */}
              <div className="pt-8">
                <h4 className="text-xl font-bold text-white mb-6">Connect on Social</h4>
                <div className="flex gap-4">
                  {[
                    { icon: <Github className="w-6 h-6" />, href: 'https://github.com/dineshahire', color: 'hover:text-gray-300', bg: 'hover:bg-gray-600/20' },
                    { icon: <Linkedin className="w-6 h-6" />, href: 'https://www.linkedin.com/in/dinesh-ahire-204a0a245/', color: 'hover:text-blue-400', bg: 'hover:bg-blue-600/20' },
                    { icon: <Globe className="w-6 h-6" />, href: 'https://www.instagram.com/dinesh_ahire_369/', color: 'hover:text-green-400', bg: 'hover:bg-green-600/20' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 hover:-translate-y-2 ${social.color} ${social.bg} shadow-lg hover:shadow-2xl`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-purple-300 font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-xl focus:border-purple-400 focus:outline-none transition-colors text-white placeholder-gray-400"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-purple-300 font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-xl focus:border-purple-400 focus:outline-none transition-colors text-white placeholder-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-purple-300 font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-xl focus:border-purple-400 focus:outline-none transition-colors text-white placeholder-gray-400"
                    placeholder="Project Discussion"
                  />
                </div>
                
                <div>
                  <label className="block text-purple-300 font-medium mb-2">Message</label>
                  <textarea 
                    rows="5"
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-xl focus:border-purple-400 focus:outline-none transition-colors text-white placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
                >
                  <span className="flex items-center gap-3 justify-center">
                    <Rocket className="w-5 h-5" />
                    Send Message
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    
     

      {/* Enhanced Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          onClick={() => scrollToSection('home')}
          className="group p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110"
        >
          <ChevronDown className="w-6 h-6 text-white group-hover:scale-125 transition-transform rotate-180" />
        </button>
      </div>

      {/* Enhanced Custom CSS */}
      <style jsx>{`
        @keyframes pulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.7;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.5);
    opacity: 0.3;
  }
}

      `}</style>
    </div>
  );
};

export default Portfolio;