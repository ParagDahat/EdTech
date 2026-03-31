import React from 'react'
import { motion } from 'framer-motion'
import { Clock, BookOpen, ArrowRight } from 'lucide-react'
export function CourseCard({ course, onClick }) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      whileHover={{
        y: -5,
      }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 cursor-pointer"
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-red-50 rounded-lg">{course.icon}</div>
          <span className="text-sm font-medium text-gray-500">
            {course.level}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <Clock size={16} className="mr-1" />
            {course.duration}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <BookOpen size={16} className="mr-1" />
            {course.topics.length} modules
          </div>
        </div>
        <div className="flex items-center justify-between pt-4 border-t">
          <motion.button
            whileHover={{
              x: 5,
            }}
            className="text-black hover:text-red-600 flex items-center gap-1 font-medium"
          >
            Learn More <ArrowRight size={16} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
