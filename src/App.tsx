import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Menu,
  X,
  ArrowRight,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Globe,
  Zap,
  Sparkles,
  Star,
  Award,
  Rocket
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const bounceTransition = {
    type: "spring" as const,
    stiffness: 400,
    damping: 10
  };

  return (
    <div className="bg-[#FFFEF2] min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#FFFEF2] border-b-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ rotate: -5, scale: 1.05 }}
              transition={bounceTransition}
              className="text-3xl font-black bg-gradient-to-r from-[#FF006E] to-[#8338EC] bg-clip-text text-transparent"
            >
              akuperdiy
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-4">
              {['Beranda', 'Tentang', 'Skills', 'Sertifikat', 'Projek', 'Kontak'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  whileHover={{ y: -2 }}
                  transition={bounceTransition}
                  className="px-6 py-2 font-bold text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all bg-white"
                >
                  {item}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 border-2 border-black bg-[#FF006E] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 space-y-2 pb-4"
            >
              {['Beranda', 'Tentang', 'Skills', 'Sertifikat', 'Projek', 'Kontak'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-3 font-bold border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  {item}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="min-h-screen flex items-center justify-center pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Avatar Blob */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring" as const, stiffness: 200, damping: 20 }}
              className="relative"
            >
              <div className="w-80 h-80 mx-auto border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rotate-6 flex items-center justify-center relative overflow-hidden">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-[#FFBE0B]/30 to-transparent z-10 pointer-events-none"
                />
                <img
                  src="public/akuperdiy.jpg"
                  alt="Muhammad Ferdiansyah"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-[#FFBE0B] border-4 border-black px-4 py-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-12"
              >
                <Sparkles className="w-8 h-8" />
              </motion.div>
            </motion.div>

            {/* Hero Text */}
            <div className="space-y-6">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block bg-[#3A86FF] border-4 border-black px-6 py-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-2"
              >
                <p className="text-white font-bold text-xl">Halo! Saya</p>
              </motion.div>

              <motion.h1
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-6xl md:text-8xl font-black leading-none"
              >
                MUHAMMAD
                <br />
                <span className="text-[#FF006E]">FERDIANSYAH</span>
              </motion.h1>

              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="space-y-3"
              >
                <div className="bg-white border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <p className="text-xl font-bold">
                    Mahasiswa Teknik Informatika Universitas Pamulang
                  </p>
                </div>
                <div className="bg-[#06FFA5] border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <p className="text-lg font-bold">
                    Web Developer • AI Enthusiast • Content Writer
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <motion.button
                  onClick={() => scrollToSection('projek')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-[#FF006E] border-4 border-black font-black text-white text-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all flex items-center gap-2"
                >
                  LIHAT PROJEK
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('kontak')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white border-4 border-black font-black text-black text-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
                >
                  HUBUNGI SAYA
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 px-6 bg-[#3A86FF] border-y-4 border-black">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black text-white mb-12 text-center drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
          >
            TENTANG SAYA
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <h3 className="text-3xl font-black mb-4 text-[#FF006E]">WHO AM I?</h3>
              <p className="text-lg font-bold leading-relaxed mb-4">
                Halo! Saya Muhammad Ferdiansyah, mahasiswa aktif Teknik Informatika di Universitas Pamulang sejak 2023, berdomisili di Tangerang Selatan, Banten.
              </p>
              <p className="text-lg font-bold leading-relaxed">
                Saya passionate dalam Web Development, E-Commerce, Database Management, dan Artificial Intelligence. Dengan background RPL dari SMK Taruna Bangsa dan pengalaman di IDN Media!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-[#FFBE0B] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-2xl font-black mb-4 flex items-center gap-2">
                  <Star className="w-6 h-6" />
                  PENDIDIKAN
                </h3>
                <div className="space-y-3">
                  <div className="bg-white border-2 border-black p-3">
                    <p className="font-black">Universitas Pamulang</p>
                    <p className="font-bold text-sm">S1 Teknik Informatika • 2023 - Sekarang</p>
                  </div>
                  <div className="bg-white border-2 border-black p-3">
                    <p className="font-black">SMK Taruna Bangsa</p>
                    <p className="font-bold text-sm">Rekayasa Perangkat Lunak (RPL)</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#06FFA5] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-2xl font-black mb-4 flex items-center gap-2">
                  <Rocket className="w-6 h-6" />
                  PENGALAMAN
                </h3>
                <div className="space-y-3">
                  <div className="bg-white border-2 border-black p-3">
                    <p className="font-black">Penulis & Editor Artikel</p>
                    <p className="font-bold text-sm">IDN Media • Magang/PKL</p>
                  </div>
                  <div className="bg-white border-2 border-black p-3">
                    <p className="font-black">Sales Intern</p>
                    <p className="font-bold text-sm">PT Niramas Utama (INACO) • Feb 2023</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black text-center mb-12"
          >
            MY <span className="text-[#8338EC]">SUPERPOWERS</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[
              { name: 'HTML', color: 'bg-[#FF006E]', icon: Code2 },
              { name: 'CSS', color: 'bg-[#3A86FF]', icon: Code2 },
              { name: 'JavaScript', color: 'bg-[#FFBE0B]', icon: Code2 },
              { name: 'PHP', color: 'bg-[#8338EC]', icon: Code2 },
              { name: 'MySQL', color: 'bg-[#06FFA5]', icon: Database },
              { name: 'C++', color: 'bg-[#FF006E]', icon: Code2 },
              { name: 'Oracle DB', color: 'bg-[#FB5607]', icon: Database },
              { name: 'SQL', color: 'bg-[#3A86FF]', icon: Database },
              { name: 'Web Dev', color: 'bg-[#06FFA5]', icon: Globe },
              { name: 'E-Commerce', color: 'bg-[#FFBE0B]', icon: Globe },
              { name: 'AI', color: 'bg-[#8338EC]', icon: Zap },
              { name: 'Writing', color: 'bg-[#FF006E]', icon: Code2 },
              { name: 'Marketing', color: 'bg-[#FB5607]', icon: Sparkles },
              { name: 'Strategy', color: 'bg-[#3A86FF]', icon: Star },
              { name: 'Planning', color: 'bg-[#06FFA5]', icon: Rocket },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, type: "spring" as const, stiffness: 300 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`${skill.color} border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all cursor-pointer`}
              >
                <skill.icon className="w-8 h-8 mb-3 mx-auto" />
                <p className="text-center font-black text-sm">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="sertifikat" className="py-20 px-6 bg-[#FF006E] border-y-4 border-black">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black text-white mb-12 text-center drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
          >
            SERTIFIKAT & AWARDS
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'AI as Smart Solutions for Indonesia\'s Future',
                issuer: 'Universitas Pamulang',
                date: 'Des 2024',
                badge: 'AI'
              },
              {
                title: 'AI in System Engineering & Technology 5.0',
                issuer: 'Universitas Pamulang',
                date: 'Okt 2023',
                badge: 'AI'
              },
              {
                title: 'Oracle Final Exam',
                issuer: 'Oracle',
                date: 'Jun 2022',
                badge: 'Database'
              },
              {
                title: 'Digital Talent Scholarship',
                issuer: 'Kominfo',
                date: 'Nov 2022 - Jan 2023',
                badge: 'Business'
              },
              {
                title: 'INACO Sales Certification',
                issuer: 'PT Niramas Utama',
                date: 'Feb 2023',
                badge: 'Sales'
              },
              {
                title: 'Seminar Nasional Keagamaan',
                issuer: 'Universitas Pamulang',
                date: '2024',
                badge: 'Seminar'
              }
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, rotate: -1 }}
                className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-[#FFBE0B] border-4 border-black flex items-center justify-center flex-shrink-0">
                    <Award className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-lg mb-2">{cert.title}</h3>
                    <p className="font-bold text-sm mb-1">{cert.issuer}</p>
                    <p className="text-xs font-bold text-gray-600 mb-2">{cert.date}</p>
                    <span className="inline-block px-3 py-1 bg-[#06FFA5] border-2 border-black text-xs font-black">
                      {cert.badge}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projek" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black text-center mb-12"
          >
            PROJEK <span className="text-[#8338EC]">COMING SOON!</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-[#FFBE0B] border-4 border-black p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-center">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 10, 0],
                  scale: [1, 1.1, 1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
                className="inline-block mb-6"
              >
                <Rocket size={100} className="drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" />
              </motion.div>

              <h3 className="text-5xl font-black mb-6">STAY TUNED!</h3>

              <p className="text-2xl font-bold mb-8 leading-relaxed">
                Lagi nyiapin projek-projek keren nih! Coding marathon mode: ON 🔥
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white border-4 border-black p-4">
                  <Code2 size={40} className="mx-auto mb-2" />
                  <p className="font-black text-sm">Web Apps</p>
                </div>
                <div className="bg-white border-4 border-black p-4">
                  <Zap size={40} className="mx-auto mb-2" />
                  <p className="font-black text-sm">AI Projects</p>
                </div>
                <div className="bg-white border-4 border-black p-4">
                  <Database size={40} className="mx-auto mb-2" />
                  <p className="font-black text-sm">Full Stack</p>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="inline-block bg-[#FF006E] border-4 border-black px-8 py-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              >
                <p className="text-white font-black text-xl">
                  💡 Punya ide kolaborasi? Yuk ngobrol!
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 px-6 bg-[#8338EC] border-t-4 border-black">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black text-white mb-12 text-center drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
          >
            YUK NGOBROL!
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
          >
            <p className="text-2xl font-black text-center mb-8">
              Siap kolaborasi atau diskusi projek bareng? Hit me up!
            </p>

            <div className="space-y-4">
              <motion.a
                href="mailto:perdiiiy7@gmail.com"
                whileHover={{ scale: 1.05, x: 4 }}
                className="flex items-center gap-4 p-4 bg-[#FF006E] border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <div className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-black text-white">EMAIL</p>
                  <p className="font-bold text-white">perdiiiy7@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/muhammad-ferdiansyah-5820b2279/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 4 }}
                className="flex items-center gap-4 p-4 bg-[#3A86FF] border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <div className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="font-black text-white">LINKEDIN</p>
                  <p className="font-bold text-white">Muhammad Ferdiansyah</p>
                </div>
              </motion.a>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mt-8 bg-[#FFBE0B] border-4 border-black p-6 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            >
              <p className="text-xl font-black">
                📍 Tangerang Selatan, Banten, Indonesia
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t-4 border-black bg-black">
        <div className="container mx-auto text-center">
          <p className="text-white font-black text-lg">
            © 2024 MUHAMMAD FERDIANSYAH • MADE WITH ❤️ & REACT
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
