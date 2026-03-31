import React from 'react'
import { motion } from 'framer-motion'
import { X, Clock, Calendar, BookOpen, CheckCircle } from 'lucide-react'
export function CourseModal({ course, onClose }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{
          scale: 0.9,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0.9,
          opacity: 0,
        }}
        className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
              <p className="text-gray-600">{course.description}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-2 text-gray-600">
              <Clock size={18} />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar size={18} />
              <span>{course.startDate}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <BookOpen size={18} />
              <span>{course.level}</span>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4">What You'll Learn</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {course.topics.map((topic, index) => (
                <motion.div
                  key={topic}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle size={16} className="text-red-600" />
                  <span>{topic}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center border-t pt-6">
            <div className="text-2xl font-bold text-red-600">
              {course.price}
            </div>
            <div className="flex gap-4">
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="px-6 py-2 bg-red-600 text-white rounded-md font-medium"
              >
                Enroll Now
              </motion.button>
              {/* <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="px-6 py-2 border border-gray-300 rounded-md font-medium"
              >
                Download Syllabus
              </motion.button> */}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
