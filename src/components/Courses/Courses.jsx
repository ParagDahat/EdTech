/* eslint-disable no-unused-vars */

import React, { useState, Children } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { CourseCard } from './CourseCard'
import { CourseFilters } from './CourseFilter'
import { CourseModal } from './CourseModal'
import {
  CodeIcon,
  MonitorIcon,
  DatabaseIcon,
  TrendingUpIcon,
  PenToolIcon,
  UsersIcon,
  PiggyBankIcon,
} from 'lucide-react'
import { CourseHero } from './CourseHero'
import { TextParallaxContentExample } from './TextParallax'


const courses = [
  {
    id: 1,
    title: 'Full Stack MERN Development',
    category: 'development',
    icon: <CodeIcon className="w-8 h-8" />,
    duration: '24 weeks',
    level: 'Beginner to Advanced',
    description:
      'Master MongoDB, Express.js, React, and Node.js to build powerful web applications.',
    topics: [
      'HTML/CSS',
      'JavaScript',
      'Git/Github',
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'RESTful APIs',
      'Authentication',
      'Deployment',
    ],
    
    startDate: 'Starts monthly',
  },
  {
    id: 2,
    title: 'Front-End Development',
    category: 'development',
    icon: <MonitorIcon className="w-8 h-8" />,
    duration: '16 weeks',
    level: 'Beginner to Intermediate',
    description:
      'Learn front-end and back-end technologies to create responsive websites.',
    topics: [
      'HTML/CSS',
      'JavaScript',
      'Git/Github',
      'Responsive Design',
      'React.js',
      'Tailwind CSS',
      'SEO',
    ],
    startDate: 'Every Two Weeks',
  },
  {
    id: 3,
    title: 'Data Analytics',
    category: 'data',
    icon: <DatabaseIcon className="w-8 h-8" />,
    duration: '20 weeks',
    level: 'Intermediate',
    description:
      'Transform raw data into meaningful insights using modern analytics tools.',
    topics: [
      'Python',
      'SQL',
      'Data Visualization',
      'Statistical Analysis',
      'Machine Learning Basics',
      'Power BI',
    ],
    startDate: 'Quarterly',
  },
  {
    id: 4,
    title: 'Digital Marketing',
    category: 'marketing',
    icon: <TrendingUpIcon className="w-8 h-8" />,
    duration: '12 weeks',
    level: 'Beginner to Advanced',
    description:
      'Master digital marketing strategies and tools for business growth.',
    topics: [
      'SEO',
      'Social Media Marketing',
      'Content Marketing',
      'PPC',
      'Email Marketing',
      'Analytics',
    ],
    startDate: 'Monthly',
  },
  {
    id: 5,
    title: 'Graphic Design',
    category: 'design',
    icon: <PenToolIcon className="w-8 h-8" />,
    duration: '16 weeks',
    level: 'Beginner to Intermediate',
    description:
      'Create stunning visual designs using industry-standard tools.',
    topics: [
      'Adobe Creative Suite',
      'UI/UX Basics',
      'Typography',
      'Brand Design',
      'Print Design',
      'Digital Design',
    ],
    startDate: 'Bi-monthly',
  },
  {
    id: 6,
    title: 'HR Management',
    category: 'business',
    icon: <UsersIcon className="w-8 h-8" />,
    duration: '14 weeks',
    level: 'Intermediate',
    description: 'Learn modern HR practices and people management strategies.',
    topics: [
      'Recruitment',
      'Employee Relations',
      'HR Analytics',
      'Training & Development',
      'Compensation',
    ],
    startDate: 'Quarterly',
  },
  {
    id: 7,
    title: 'Finance & Accounting',
    category: 'business',
    icon: <PiggyBankIcon className="w-8 h-8" />,
    duration: '18 weeks',
    level: 'Intermediate',
    description: 'Master financial accounting and business finance principles.',
    topics: [
      'Financial Accounting',
      'Business Mathematics',
      'Taxation',
      'Investment',
      'Risk Management',
    ],
    startDate: 'Quarterly',
  },
]
export function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedCourse, setSelectedCourse] = useState(null)
  const filteredCourses =
    selectedCategory === 'all'
      ? courses
      : courses.filter((course) => course.category === selectedCategory)
  return (
    <div className="min-h-screen font-lato bg-white">
      
      <main className="pt-16">
        {/* <TextParallaxContentExample /> */}
        {/* Hero Section */}
        <CourseHero/>
       
        {/* Filters */}
        <CourseFilters
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        {/* Course Grid */}
        <section className="py-16 px-6 md:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onClick={() => setSelectedCourse(course)}
                />
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      
      {/* Course Details Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <CourseModal
            course={selectedCourse}
            onClose={() => setSelectedCourse(null)}
          />
        )}
      </AnimatePresence>

      
    </div>
  )
}
