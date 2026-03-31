import React from 'react';
import { motion } from 'framer-motion';

export const FeatureCard = ({ title, description, Icon }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <div className="bg-red-600 hover:animate-pulse w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        <Icon className="text-white " size={24} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};
