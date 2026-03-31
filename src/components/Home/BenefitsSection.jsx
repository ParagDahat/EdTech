import React from 'react'
import {
  CheckCircleIcon,
  UsersIcon,
  BriefcaseIcon,
  AwardIcon,
} from 'lucide-react'
export function BenefitsSection() {
  const benefits = [
    {
      title: 'Expert Instructors',
      description:
        'Learn from industry professionals with years of real-world experience.',
      icon: <UsersIcon className="h-12 w-12 text-red-600" />,
    },
    {
      title: 'Job Placement',
      description:
        'Get connected with our network of hiring partners after graduation.',
      icon: <BriefcaseIcon className="h-12 w-12 text-red-600" />,
    },
    {
      title: 'Industry-Recognized Certification',
      description:
        'Earn certificates that are valued by top employers worldwide.',
      icon: <AwardIcon className="h-12 w-12 text-red-600" />,
    },
  ]
  return (
    <section id="benefits" className="w-full py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing the best coding education to help you
            succeed in tech.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600 text-xl">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-20 bg-black text-white rounded-xl p-8 md:p-12 shadow-xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Our Success Rate
              </h3>
              <p className="mb-6 text-xl">
                Our students consistently achieve their career goals through our
                comprehensive curriculum and dedicated support system.
              </p>
              <ul className="space-y-2">
                {[
                  '92% job placement rate',
                  'Average salary increase of 45%',
                  'Over 10,000 graduates worldwide',
                ].map((stat, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 animate-pulse  text-red-600 mr-2" />
                    <span className='text-xl italic' >{stat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/3 bg-red-600 rounded-lg p-6 text-center">
              <div className="text-6xl  mb-2">92%</div>
              <div className="text-xl">
                of our students get hired within 6 months of graduation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
