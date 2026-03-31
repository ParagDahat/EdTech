import React from 'react'
import { CodeIcon, ArrowRightIcon } from 'lucide-react'
import { motion } from 'framer-motion'
export function CourseHero() {
  return (
    <section className="w-full md:h-96 md:flex bg-gradient-to-br from-gray-900 to-black text-white pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center ">
        <motion.div
          className="md:w-1/2 mb-10 md:mb-0"
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
          >
            Master Coding.{' '}
            <span className="text-red-600 block">Build Your Future.</span>
          </motion.h1>
          <motion.p
            className="text-xl mb-8 text-gray-300"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
            }}
          >
            Learn programming from industry experts and launch your tech career
            with our cutting-edge curriculum.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
            }}
          >
        
          </motion.div>
        </motion.div>
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{
            opacity: 0,
            x: 50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
        >
          <div className="relative">
            <motion.div
              className="bg-red-600 w-64 h-64 md:w-80 md:h-80 rounded-full absolute opacity-20 blur-xl -top-10 -left-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="bg-black border-4 border-red-600 rounded-xl p-8 relative z-10 shadow-2xl"
              whileHover={{
                scale: 1.02,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
              }}
            >
              <div className="font-mono text-sm md:text-base text-green-400">
                <div className="flex items-center mb-4">
                  <CodeIcon className="mr-2" />
                  <span>Hello, World!</span>
                </div>
                <pre className="text-xs md:text-sm">
                  {`function learnToCode() {
  const skills = [];
  const dedication = true;
  while (dedication) {
    skills.push("New Skill");
    console.log("Leveling Up!");
  }
  return skills;
}`}
                </pre>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
