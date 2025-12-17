'use client';

import './App.css';
import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  ExternalLink,
} from 'lucide-react';
import { projects } from './data/projects';
import { experiences } from './data/experiences';
import { skills } from './data/skills';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='min-h-screen bg-[#0a0a0a] text-white'>
      {/* Navigation */}
      <nav className='fixed top-0 w-full z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-zinc-800'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
          <a href='/' className='text-xl font-bold'>
            TESIMUNE
          </a>

          <div className='hidden md:flex items-center gap-8'>
            <a href='#home' className='hover:text-zinc-400 transition-colors'>
              Home
            </a>
            <a href='#works' className='hover:text-zinc-400 transition-colors'>
              Works
            </a>
            <a href='#skills' className='hover:text-zinc-400 transition-colors'>
              Skills
            </a>
            <a href='#about' className='hover:text-zinc-400 transition-colors'>
              About
            </a>
            <a
              href='mailto:tesimune@gmail.com'
              className='px-4 py-2 border border-zinc-700 rounded-md hover:bg-zinc-800 transition-colors'
            >
              Let’s connect
            </a>
          </div>

          <button
            className='md:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden bg-[#0a0a0a] border-t border-zinc-800 px-6 py-4'>
            <div className='flex flex-col gap-4'>
              <a href='#home' onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
              <a href='#works' onClick={() => setIsMenuOpen(false)}>
                Works
              </a>
              <a href='#skills' onClick={() => setIsMenuOpen(false)}>
                Skills
              </a>
              <a href='#about' onClick={() => setIsMenuOpen(false)}>
                About
              </a>
              <a
                href='mailto:tesimune@gmail.com'
                className='px-4 py-2 border border-zinc-700 rounded-md hover:bg-zinc-800 transition-colors text-center'
              >
                Let’s connect
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id='home'
        className='min-h-screen flex items-center justify-center px-6 pt-20'
      >
        <div className='max-w-5xl w-full'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <p className='text-zinc-400 mb-4'>Based in Nigeria (UTC +1)</p>
              <p className='text-zinc-300 mb-6 leading-relaxed'>
                Independent, results-driven Software Engineer with more than
                eight years of professional experience.
              </p>
              <p className='text-zinc-400 mb-8'>
                email me:{' '}
                <a
                  href='mailto:tesimune@gmail.com'
                  className='text-white hover:text-zinc-400 transition-colors'
                >
                  tesimune@gmail.com
                </a>
              </p>
              <h1 className='text-4xl md:text-6xl font-bold leading-tight text-balance'>
                Hey there! I’m a Full-Stack Software Engineer with over eight
                years of experience.
              </h1>
              <p className='text-zinc-400 mt-6 leading-relaxed'>
                I specialize in building scalable web applications using modern
                technologies, from frontend frameworks to backend services and
                cloud infrastructure.
              </p>
            </div>
            <div className='relative aspect-square'>
              <img
                src='/images/teslim.jpg'
                alt='Teslim Abdulwahab'
                className='w-full h-full object-cover rounded-lg'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Works */}
      <section id='works' className='py-24 px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex items-center justify-between mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold'>Recent works</h2>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map((project) => (
              <div
                key={project.id}
                className='group bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-600 transition-all'
              >
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='relative aspect-video overflow-hidden'>
                    <img
                      src={project.image || '/placeholder.svg'}
                      alt={project.title}
                      className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                    />
                  </div>
                  <div className='p-6'>
                    <h3 className='text-xl font-bold mb-2 group-hover:text-zinc-400 transition-colors flex items-center gap-2'>
                      {project.title}
                      <ExternalLink className='w-4 h-4' />
                    </h3>
                    <p className='text-zinc-400 text-sm mb-4'>
                      {project.description}
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className='text-xs px-2 py-1 bg-zinc-800 rounded-full text-zinc-300'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          <div className='mt-12 text-center'>
            <p className='text-zinc-400 leading-relaxed max-w-3xl mx-auto mb-8'>
              Curious to dive into some of my work? While much of what I've
              created is tied to private projects, I'm eager to share my
              experiences and insights. If you're interested in discussing the
              details, feel free to reach out for a more in-depth conversation.
            </p>
            <a
              href='mailto:tesimune@gmail.com'
              className='inline-block px-6 py-3 border border-zinc-700 rounded-md hover:bg-zinc-800 transition-colors'
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Skills & Technologies Section */}
      <section id='skills' className='py-24 px-6 bg-zinc-900/30'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-3xl md:text-4xl font-bold mb-12'>
            Skills & Technologies
          </h2>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {skills.map((category) => (
              <div
                key={category.id}
                className='bg-zinc-900 border border-zinc-800 rounded-lg p-6'
              >
                <div className='flex items-center gap-3 mb-4'>
                  <div className='text-zinc-400'>{category.icon}</div>
                  <h3 className='text-xl font-bold'>{category.category}</h3>
                </div>
                <div className='flex flex-wrap gap-2'>
                  {category.items.map((skill, i) => (
                    <span
                      key={i}
                      className='px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='py-24 px-6 bg-zinc-900/50'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-2xl md:text-3xl font-bold mb-4'>About me</h2>
          <div className='grid md:grid-cols-2 gap-12 items-start'>
            <div className='relative aspect-4/5'>
              <img
                src='/images/tesimune.jpg'
                alt='Teslim Abdulwahab'
                className='w-full h-full object-cover rounded-lg'
              />
            </div>
            <div>
              <h3 className='text-xl md:text-2xl font-bold mb-8 leading-relaxed'>
                I have a proven track record in building scalable, dynamic, and
                high-performance web & mobile applications. Specialized in both
                frontend and backend development with expertise in modern
                frameworks and cloud technologies.
              </h3>

              <div className='space-y-6'>
                {experiences.map((exp) => (
                  <div key={exp.id} className='border-l-2 border-zinc-700 pl-6'>
                    <p className='text-sm text-zinc-400 mb-1'>{exp.period}</p>
                    <p className='text-xs text-zinc-500 mb-2'>{exp.type}</p>
                    <h4 className='text-lg font-bold'>{exp.role}</h4>
                    <p className='text-zinc-300'>{exp.company}</p>
                    <p className='text-sm text-zinc-400 mt-2'>{exp.location}</p>
                  </div>
                ))}
              </div>

              <div className='mt-12 pt-8 border-t border-zinc-800'>
                <p className='text-zinc-400 mb-4'>
                  A skilled Full-Stack Developer with over 4 years of
                  experience.
                </p>
                <div className='space-y-2'>
                  <p className='text-sm'>
                    <span className='text-zinc-400'>Contact (me)</span>
                  </p>
                  <a
                    href='mailto:tesimune@gmail.com'
                    className='block hover:text-zinc-400 transition-colors'
                  >
                    tesimune@gmail.com
                  </a>
                  <a
                    href='/documents/tesimune.pdf'
                    target='_blank'
                    className='inline-block text-zinc-400 hover:text-white transition-colors'
                    rel='noreferrer'
                  >
                    View Resume →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='border-t border-zinc-800 py-12 px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
            <div className='flex items-center gap-8'>
              <a href='#home' className='hover:text-zinc-400 transition-colors'>
                Home
              </a>
              <a
                href='#about'
                className='hover:text-zinc-400 transition-colors'
              >
                About
              </a>
              <a
                href='#works'
                className='hover:text-zinc-400 transition-colors'
              >
                Works
              </a>
            </div>
            <div className='flex items-center gap-6'>
              <a
                href='https://github.com/tesimune'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-zinc-400 transition-colors'
              >
                <Github className='w-5 h-5' />
              </a>
              <a
                href='https://linkedin.com/in/tesimune'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-zinc-400 transition-colors'
              >
                <Linkedin className='w-5 h-5' />
              </a>
              <a
                href='mailto:tesimune@gmail.com'
                className='hover:text-zinc-400 transition-colors'
              >
                <Mail className='w-5 h-5' />
              </a>
            </div>
          </div>
          <div className='text-center mt-8 text-zinc-400 text-sm'>
            ©2025 TESIMUNE
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-8 right-8 p-3 bg-white text-black rounded-full hover:bg-zinc-200 transition-all shadow-lg'
          aria-label='Back to top'
        >
          <ArrowUp className='w-5 h-5' />
        </button>
      )}
    </div>
  );
}

export default App;
