import React from 'react';
import Layout from '../../components/layout/Layout';

import Hero from '../../components/ui/Hero';

const TermsConditions = () => {
  return (
    <Layout>
      <Hero 
        title={<>Terms & <span className="text-primary">Conditions</span></>}
        subtitle={`Last Updated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`}
      />

      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-slate-600 mb-4">
              By accessing our website and enrolling in our courses, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Admission & Enrollment</h2>
            <p className="text-slate-600 mb-4">
              Admission to any course is subject to eligibility criteria and availability of seats. We reserve the right to refuse admission to any candidate without providing a reason. Enrollment is confirmed only after the payment of the prescribed fees.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Fees & Refund Policy</h2>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Course fees must be paid in full or as per the agreed EMI schedule.</li>
              <li>Registration fees are non-refundable under any circumstances.</li>
              <li>Refund requests for course fees will only be considered if made within 7 days of enrollment and before the start of the batch.</li>
              <li>We reserve the right to change the fee structure at any time, but this will not affect students who have already enrolled.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Code of Conduct</h2>
            <p className="text-slate-600 mb-4">
              Students are expected to maintain professional decorum during classes and interactions with faculty and peers. Any form of harassment, cheating, or plagiarism will result in immediate termination of enrollment without refund.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Intellectual Property & Training Materials</h2>
            <p className="text-slate-600 mb-4">
              All project source code, curriculum guides, and recorded sessions provided by Raj Software Institute are proprietary. They are licensed to you for personal learning purposes only. Redistribution, resale, or public sharing of these materials is strictly prohibited and may lead to legal action.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Placement Assistance</h2>
            <p className="text-slate-600 mb-4">
              While we provide comprehensive placement assistance, we do not guarantee employment. Placement depends on the student's performance in interviews and the requirements of the hiring companies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-slate-600 mb-4">
              Raj Software Training Institute shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services or for the cost of procurement of substitute services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Governing Law</h2>
            <p className="text-slate-600 mb-4">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Bangalore.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Contact Information</h2>
            <p className="text-slate-600">
              If you have any questions regarding these Terms and Conditions, please contact us at legal@rajinstitute.com.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default TermsConditions;
