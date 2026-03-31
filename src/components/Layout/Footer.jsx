import React from 'react'
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
} from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black text-white w-full py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="font-bold text-2xl mb-4">
              <span className="text-white">EdTech</span>
              <span className="text-red-600"></span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering the next generation of developers with cutting-edge
              education and hands-on experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/courses" className="text-gray-400 hover:text-white">
                  Courses
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-400 hover:text-white">
                  Why Us
                </a>
              </li>
            </ul>
          </div>
          {/* <div>
            <h3 className="text-lg font-bold mb-4">Courses</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Full-Stack Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Data Science & AI
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  View All Courses
                </a>
              </li>
            </ul>
          </div> */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPinIcon
                  size={20}
                  className="text-red-600 mr-2 mt-1 flex-shrink-0"
                />
                <span className="text-gray-400">
                 Nagpur
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon
                  size={20}
                  className="text-red-600 mr-2 flex-shrink-0"
                />
                <span className="text-gray-400">00000000</span>
              </li>
              <li className="flex items-center">
                <MailIcon
                  size={20}
                  className="text-red-600 mr-2 flex-shrink-0"
                />
                <span className="text-gray-400">edtech.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:text-left">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2026 Edteh. All rights reserved.
          </div>
          <div className="space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
