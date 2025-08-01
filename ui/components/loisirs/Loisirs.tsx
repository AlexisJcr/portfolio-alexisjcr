"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Plane, Heart, Music, Video } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/design-system/Card/card"

interface Loisir {
  id: string
  title: string
  icon: React.ReactNode
  description: string
  gradient: string
  iconColor: string
}

const loisirs: Loisir[] = [
  {
    id: "voyages",
    title: "Voyages",
    icon: <Plane className="w-8 h-8" />,
    description:
      "Passionné par la découverte de nouvelles cultures et destinations, j'ai eu la chance de voyager en Italie, ainsi qu'au Vietnam à plusieurs reprises. Ces expériences, très différentes tant sur le plan culturel que géographique, m'ont permis de m'immerger dans des modes de vie variés, de renforcer ma capacité d'adaptation, et d'élargir ma vision du monde. Ces voyages ont également été l'occasion de partager mes compétences dans le domaine numérique à travers des conférences et des rencontres professionnelles, enrichissant ainsi ces séjours d'échanges techniques et humains.",
    gradient: "from-blue-500 to-cyan-400",
    iconColor: "text-blue-600",
  },
  {
    id: "humanitaire",
    title: "Humanitaire",
    icon: <Heart className="w-8 h-8" />,
    description:
      "Lors de mes deux voyages au Vietnam, j'ai eu l'opportunité de m'impliquer dans une action humanitaire au sein de l'association FFSC (Friends For Street Childrens) à Ho Chi Minh-Ville. Avec notre groupe de voyageurs français, nous avons consacré du temps aux enfants d'un des orphelinats catholique : animations, échanges, moments de partage, remise de cadeaux et contribution financière par des dons. Cette expérience humaine forte a profondément enrichi le sens de ces voyages alliant engagement social et ouverture culturelle.",
    gradient: "from-red-500 to-pink-400",
    iconColor: "text-red-600",
  },
  {
    id: "guitare",
    title: "Guitare",
    icon: <Music className="w-8 h-8" />,
    description:
      "Un rêve d'enfance, devenu réalité : depuis plus de 3 ans, j'apprends et je pratique la guitare en autodidacte. Un défi personnel que je relève avec passion en explorant différents styles musicaux. Ce premier grand pas dans le monde de la musique me donne aujourd'hui envie de découvrir d'autres insturments, notamment le piano.",
    gradient: "from-purple-500 to-indigo-400",
    iconColor: "text-purple-600",
  },
  {
    id: "montage",
    title: "Montage Vidéo",
    icon: <Video className="w-8 h-8" />,
    description:
      "Le montage vidéo, une passion née naturellement à la suite de mes voyages, et expériences marquantes. Grâce à un apprentissage personnel sur DaVinci Resolve, j'ai appris à me créer des souvenirs en traduisant les moments vécus par des scènes épiques ou nostalgiques. Réaliser des vidéos après un événement ou un voyage me permet de replonger dans mes souvenirs et de revivre ces instants.",
    gradient: "from-green-500 to-emerald-400",
    iconColor: "text-green-600",
  },
]

export default function MesLoisirs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section id="loisirs" className="py-20 px-4 bg-gradient-to-br from-gray-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Mes Loisirs
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Les passions qui m'animent au-delà du développement
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {loisirs.map((loisir) => (
            <motion.div key={loisir.id} variants={cardVariants} whileHover="hover">
              <motion.div variants={hoverVariants}>
                <Card className="h-full overflow-hidden border-0 shadow-xl bg-gray-800/80 backdrop-blur-sm">
                  <CardHeader className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${loisir.gradient} opacity-10`} />
                    <div className="relative flex items-center gap-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`p-3 rounded-full bg-white shadow-lg ${loisir.iconColor}`}
                      >
                        {loisir.icon}
                      </motion.div>
                      <CardTitle className="text-2xl font-bold text-gray-100">{loisir.title}</CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-lg mt-4 text-gray-200 leading-relaxed">{loisir.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 italic">"Les loisirs révèlent qui nous sommes vraiment"</p>
        </motion.div>
      </div>
    </section>
  )
}
