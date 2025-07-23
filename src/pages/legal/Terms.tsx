import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const Terms: React.FC = () => {
  const { t } = useLanguage();

  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: 'By accessing and using RightsTrade, you accept and agree to be bound by the terms and provision of this agreement.'
    },
    {
      title: '2. Use License',
      content: 'Permission is granted to temporarily download one copy of the materials on RightsTrade for personal, non-commercial transitory viewing only.'
    },
    {
      title: '3. Disclaimer',
      content: 'The materials on RightsTrade are provided on an "as is" basis. RightsTrade makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.'
    },
    {
      title: '4. Limitations',
      content: 'In no event shall RightsTrade or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on RightsTrade, even if RightsTrade or a RightsTrade authorized representative has been notified orally or in writing of the possibility of such damage.'
    },
    {
      title: '5. Accuracy of Materials',
      content: 'The materials appearing on RightsTrade could include technical, typographical, or photographic errors. RightsTrade does not warrant that any of the materials on its website are accurate, complete, or current.'
    },
    {
      title: '6. Links',
      content: 'RightsTrade has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by RightsTrade of the site.'
    },
    {
      title: '7. Modifications',
      content: 'RightsTrade may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.'
    },
    {
      title: '8. Governing Law',
      content: 'These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which RightsTrade operates.'
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
            {t('termsOfService')}
          </h1>
          <p className="text-gray-600 mb-8">
            Last updated: January 1, 2024
          </p>

          <div className="prose max-w-none">
            <p className="text-gray-700 mb-8">
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the RightsTrade website and services (the "Service") operated by RightsTrade ("us", "we", or "our").
            </p>

            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    {section.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-700">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 text-gray-700">
                <p>Email: legal@rightstrade.com</p>
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

export default Terms;