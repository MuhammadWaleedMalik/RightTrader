import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const Cookies: React.FC = () => {
  const { t } = useLanguage();

  const cookieTypes = [
    {
      title: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services.',
      examples: ['Session cookies', 'Authentication cookies', 'Security cookies']
    },
    {
      title: 'Performance Cookies',
      description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular.',
      examples: ['Analytics cookies', 'Performance monitoring', 'Site optimization']
    },
    {
      title: 'Functional Cookies',
      description: 'These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.',
      examples: ['Language preferences', 'User interface customization', 'Remember login status']
    },
    {
      title: 'Targeting Cookies',
      description: 'These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.',
      examples: ['Advertising cookies', 'Social media cookies', 'Behavioral tracking']
    }
  ];

  const controlMethods = [
    {
      title: 'Browser Settings',
      description: 'Most web browsers allow you to control cookies through their settings preferences. You can set your browser to refuse cookies or to alert you when cookies are being sent.'
    },
    {
      title: 'Opt-Out Tools',
      description: 'You can opt out of certain third-party advertising cookies by visiting the Network Advertising Initiative opt-out page or the Digital Advertising Alliance opt-out page.'
    },
    {
      title: 'Cookie Consent Manager',
      description: 'You can manage your cookie preferences using our cookie consent manager, which appears when you first visit our site.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            {t('cookiePolicy')}
          </h1>
          <p className="text-gray-600 mb-8">
            Last updated: January 1, 2024
          </p>

          <div className="prose max-w-none">
            <p className="text-gray-700 mb-8">
              This Cookie Policy explains how RightsTrade uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                What are cookies?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Types of cookies we use
              </h2>
              <div className="space-y-6">
                {cookieTypes.map((type, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {type.title}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {type.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {type.examples.map((example, exampleIndex) => (
                        <span
                          key={exampleIndex}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                How to control cookies
              </h2>
              <div className="space-y-6">
                {controlMethods.map((method, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {method.title}
                    </h3>
                    <p className="text-gray-700">
                      {method.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Important Note
              </h3>
              <p className="text-gray-700">
                Please note that if you choose to disable cookies, some features of our website may not function properly. Essential cookies cannot be disabled as they are necessary for the basic functionality of our trading platform.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-8 border-t border-gray-200"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <div className="mt-4 text-gray-700">
                <p>Email: cookies@rightstrade.com</p>
                <p>Phone: +1-800-RIGHTS-TRADE</p>
                <p>Address: 123 Trading Street, Financial District, NY 10001</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cookies;