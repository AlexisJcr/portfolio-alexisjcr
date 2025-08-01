"use client"
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-100 mb-10"
        >
          À propos de Moi
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center text-gray-100"
        >
          <p className="mb-4 text-xl">
          Apprenti développeur fullstack spécialisé dans le Web et l'IoT. Passionné par le numérique, je souhaite développer mes compétences en programmation.
          </p>
          <p className='mb-4 text-xl'>
          Curieux et engagé, je m'informe sur les technologies et innovations du moment.
          </p>
          <p className='text-xl'>
            Mon objectif est d'apprendre les meilleurs méthodes et réflexes afin de réaliser une application solide, performante et conviviale selon un design UX/UI réfléchi.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About

