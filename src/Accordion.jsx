import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const AccordionItem = ({ title, content, isExpanded, onToggle }) => {
  const cardVariants = {
    collapsed: {
      height: '60px',
      transition: { type: 'spring', stiffness: 300, damping: 15 },
    },
    expanded: {
      height: 'auto',
      transition: { type: 'spring', stiffness: 300, damping: 15 },
    },
  };

  const contentVariants = {
    collapsed: { opacity: 0 },
    expanded: {
      opacity: 1,
      transition: { delay: 0.1 },
    },
  };

  const chevronVariants = {
    collapsed: { rotate: 0 },
    expanded: { rotate: 180 },
  };

  return (
    <motion.div
      className="w-90 dark:bg-gray-800 my-4 h-full cursor-pointer select-none overflow-hidden rounded-lg border dark:border-gray-700"
      variants={cardVariants}
      initial="collapsed"
      animate={isExpanded ? 'expanded' : 'collapsed'}
      onClick={onToggle}
    >
      <div className="flex items-center justify-between p-4 text-gray-900 dark:text-gray-100">
        <h2 className="m-0 text-sm font-semibold text-red-500">{title}</h2>
        <motion.div variants={chevronVariants}>
          <ChevronDown size={18} />
        </motion.div>
      </div>
      <motion.div
        className="text-md select-none px-4 py-4"
        variants={contentVariants}
        initial="collapsed"
        animate={isExpanded ? 'expanded' : 'collapsed'}
      >
        <p className="m-0 text-sm text-gray-900 dark:text-gray-100">{content}</p>
      </motion.div>
    </motion.div>
  );
};

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isExpanded={expandedIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

const accordionItems = [
  {
    title: 'Explore Knowledge',
    content:
      'Discover new worlds of information with our interactive learning platform.',
  },
  {
    title: 'Innovative Learning',
    content:
      'Experience cutting-edge educational techniques that adapt to your unique learning style.',
  },
  {
    title: 'Global Community',
    content:
      'Connect with learners worldwide and share insights in our vibrant, diverse community.',
  },
  {
    title: 'Personalized Growth',
    content:
      'Track your progress and receive tailored recommendations to accelerate your learning journey.',
  },
];

const AccordionExample = () => {
  return (
    <div>
      <div className="p-8">
        <Accordion items={accordionItems} />
      </div>
    </div>
  );
};

export default AccordionExample;