import React from 'react'
import { motion } from 'framer-motion'
export function CourseFilters({ selectedCategory, setSelectedCategory }) {
  const categories = [
    {
      id: 'all',
      name: 'All Courses',
    },
    {
      id: 'development',
      name: 'Development',
    },
    {
      id: 'data',
      name: 'Data',
    },
    {
      id: 'marketing',
      name: 'Marketing',
    },
    {
      id: 'design',
      name: 'Design',
    },
    {
      id: 'business',
      name: 'Business',
    },
  ]
  return (
    <motion.div
      className=" py-8  px-6 md:px-12 border-b sticky top-16 z-40 backdrop-blur-sm bg-white/90"
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.4,
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-center">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            className={`px-6 py-2 rounded-full text-xl  font-medium transition-colors ${selectedCategory === category.id ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            onClick={() => setSelectedCategory(category.id)}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            {category.name}
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}
