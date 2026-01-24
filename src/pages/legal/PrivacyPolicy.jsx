import React from 'react';
import Layout from '../../components/layout/Layout';

import Hero from '../../components/ui/Hero';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <Hero 
        title={<>Privacy <span className="text-primary">Policy</span></>}
        subtitle={`Last Updated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`}
      />

      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p className="text-slate-600 mb-4">
              Raj Software Training Institute ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or enroll in our training programs.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
            <p className="text-slate-600 mb-4">We may collect personal information that you provide to us, including but not limited to:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Contact Information (name, email address, phone number, mailing address)</li>
              <li>Educational and Professional Background</li>
              <li>Payment Information (processed through secure third-party payment gateways)</li>
              <li>Information provided in contact forms or during counseling sessions</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-slate-600 mb-4">We strictly use your data for academic and placement purposes:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>To facilitate student enrollment and maintain academic records.</li>
              <li>To coordinate with hiring partners for placement interviews.</li>
              <li>To issue NASSCOM-aligned certifications upon course completion.</li>
              <li>To communicate crucial updates regarding batch timings or cancellations.</li>
              <li>To improve our curriculum based on student feedback and performance metrics.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Security</h2>
            <p className="text-slate-600 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Third-Party Services</h2>
            <p className="text-slate-600 mb-4">
              We may use third-party services for payment processing, website analytics, and communication (e.g., EmailJS, Google Analytics). These third parties have their own privacy policies and we recommend you review them.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Your Rights</h2>
            <p className="text-slate-600 mb-4">
              You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us at privacy@rajinstitute.com.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Changes to This Policy</h2>
            <p className="text-slate-600 mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contact Us</h2>
            <p className="text-slate-600">
              If you have any questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 p-6 bg-slate-100 rounded-2xl">
              <p className="font-bold text-slate-900">Raj Software Training Institute</p>
              <p className="text-slate-600">123 Tech Park, Silicon Valley, Bangalore - 560001</p>
              <p className="text-slate-600">Email: info@rajinstitute.com</p>
              <p className="text-slate-600">Phone: +91 98765 43210</p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
