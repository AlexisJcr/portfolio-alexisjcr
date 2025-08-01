import { IconType } from 'react-icons';
import { FaCode, FaDatabase, FaServer, FaMobile, FaDesktop, FaCog } from 'react-icons/fa';

import { motion, AnimatePresence } from 'framer-motion'

interface CompetenceCardProps {
  icon: IconType;
  title: string;
  subtitle: string;
  text: string;
}

const CompetenceCard = ({
  icon: Icon,
  title,
  subtitle: subtitle,
  text: text,
}: CompetenceCardProps) => (
  <div className="bg-black z-0 rounded-lg shadow-lg p-6 flex flex-col items-center">
    <Icon className="text-5xl text-blue-500 mb-4" />
    <h3 className="text-xl text-gray-100 font-semibold text-center">{title}</h3>
    <h2 className="text-lg text-gray-200 font-medium mt-3">{subtitle}</h2>
    <p className="text-base text-gray-200 font-normal mt-3 text-center">{text}</p>
  </div>
);

const Competences = () => {

  const competences = [
    { icon: FaCode, title: "Développement Web", subtitle: "Avancé", text: "JavaScript / TypeScript" },
    { icon: FaDesktop, title: "Développement Logiciel", subtitle: "Intermédiaire", text: "Python / C++ / Java" },
    { icon: FaMobile, title: "Développement Mobile", subtitle: "Débutant", text: "Dart / Flutter" },
    { icon: FaServer, title: "Administration Réseaux", subtitle: "Avancé", text: "LAN WAN / Linux / Windows Server / Active Directory / VMWare / CISCO / MikroTik" },
    { icon: FaDatabase, title: "Bases de données", subtitle: "Intermédiaire", text: "MySQL" },
    { icon: FaCog, title: "DevOps", subtitle: "Débutant", text: "Ansible / CI CD" },
  ];


  return (
    <section id="skills" className="py-15 mb-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
          Compétences
        </h2>
        <p className="text-center text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          Mes domaines d'actions
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {competences.map((comp, index) => (
            <CompetenceCard key={index} {...comp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competences;

