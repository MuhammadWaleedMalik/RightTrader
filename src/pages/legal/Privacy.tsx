import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const Privacy: React.FC = () => {
  const { t } = useLanguage();

  const sections = [
    {
      title: '1. Information We Collect',
      content: 'We collect information you provide directly to us, such as when you create an account, make a trade, or contact us. This may include your name, email address, phone number, and financial information.'
    },
    {
      title: '2. How We Use Your Information',
      content: 'We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and communicate with you about products, services, and events.'
    },
    {
      title: '3. Information Sharing',
      content: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this privacy policy or as required by law.'
    },
    {
      title: '4. Data Security',
      content: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
    },
    {
      title: '5. Cookies and Tracking',
      content: 'We use cookies and similar tracking technologies to collect information about your browsing activities and to remember your preferences. You can control cookies through your browser settings.'
    },
    {
      title: '6. Third-Party Services',
      content: 'Our service may contain links to third-party websites or services that are not owned or controlled by us. We are not responsible for the privacy practices of these third parties.'
    },
    {
      title: '7. Data Retention',
      content: 'We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required by law.'
    },
    {
      title: '8. Your Rights',
      content: 'You have the right to access, update, or delete your personal information. You may also have the right to restrict or object to certain processing of your data.'
    },
    {
      title: '9. Children\'s Privacy',
      content: 'Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13.'
    },
    {
      title: '10. Changes to This Policy',
      content: 'We may update this privacy policy from time to time. We will notify you of any material changes by posting the new privacy policy on this page.'
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
            {t('privacyPolicy')}
          </h1>
          <p className="text-gray-600 mb-8">
            Last updated: January 1, 2024
          </p>

          <div className="prose max-w-none">
            <p className="text-gray-700 mb-8">
              At RightsTrade, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our trading platform and services.
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
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 text-gray-700">
                <p>Email: privacy@rightstrade.com</p>
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

export default Privacy;