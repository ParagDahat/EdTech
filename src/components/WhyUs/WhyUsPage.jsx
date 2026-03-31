import React from 'react'
import { motion } from 'framer-motion'
import { BookOpenIcon, UsersIcon, TrophyIcon, CodeIcon } from 'lucide-react'
import { FeatureCard } from './FeatureCard'
import { useNavigate } from 'react-router-dom'
import WhyUsHero from './WhyUsHero'
import MentorsSection from './MentorSection'


export const WhyUsPage = () => {
    const navigate = useNavigate();
  const mentors = [
    {
      name: 'Vrushabh Chaple',
      role: 'Senior  Instructor',
      image: '',
      linkedin: '#',
      github: '#',
      description:
        '10+ years of experience in teaching',
    },
    {
      name: 'Komal Ghate',
      role: 'HR Expert',
      image: '',
      linkedin: '#',
      github: '#',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Parag Dahat',
      role: ' Frontend Specialist',
      image: '',
      linkedin: '#',
      github: '#',
      description:
        'Design-focused developer with expertise in modern frontend frameworks',
    },
  ]
  return (
    <div className="min-h-screen bg-gray-50 mt-16 font-lato">
      <WhyUsHero />
      {/* Hero Section */}
      
      {/* Features Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center  mb-12">
          Our Unique Advantages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
          
            Icon={BookOpenIcon}
            title="Comprehensive Curriculum"
            description="Industry-aligned courses designed for modern tech careers"
          />
          <FeatureCard
            Icon={UsersIcon}
            title="Expert Mentorship"
            description="Learn directly from experienced industry professionals"
          />
          <FeatureCard
            Icon={TrophyIcon}
            title="Proven Success"
            description="90% of our graduates land tech jobs within 6 months"
          />
          <FeatureCard
            Icon={CodeIcon}
            title="Hands-on Learning"
            description="Build real projects using the latest technologies"
          />
        </div>
      </section>
      {/* Mentors Section */}
      <section className="py-20  bg-black opacity-90 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Expert Mentors
          </h2>
          <MentorsSection />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            className="text-3xl font-bold mb-6"
          >
            Ready to Start Your Coding Journey?
          </motion.h2>
          <motion.button
            initial={{
              scale: 0.9,
            }}
            whileInView={{
              scale: 1,
            }}
            whileHover={{
              scale: 1.05,
            }}
            className="bg-white animate-bounce text-red-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            onClick={()=>navigate('/getstarted')}
          >
           
            Enroll Now
          </motion.button>
        </div>
       
      </section>
    </div>
  )
}
