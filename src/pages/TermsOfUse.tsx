import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfUse: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-zinc-50 dark:bg-[#0a0a0a] min-h-screen transition-colors duration-500">
      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        
        {/* Header */}
        <div className="mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#F46B2C] hover:text-[#da5515] transition-colors mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight mb-4">
            Terms of Use
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
            Effective Date: July 13, 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
          
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By downloading, accessing, or using the DriveMate mobile application or website, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the application. These terms constitute a legally binding agreement between you and BRC HUB LLP.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">2. Description of Service</h2>
            <p>
              DriveMate is a vehicle management application designed to help users track maintenance records, manage vehicle documents, and set reminders for insurance, PUC, and service intervals. The application operates primarily on an offline-first basis, meaning core functionalities rely on your device's local storage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">3. User Responsibilities & Data Backup</h2>
            <p className="mb-4">
              Because DriveMate is an offline-first application, your data is not automatically synced to a central cloud server operated by us.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-zinc-700 dark:text-zinc-300">
              <li>You are solely responsible for backing up your data using the device's native backup solutions (e.g., iCloud, Google Drive) or DriveMate's manual export features.</li>
              <li>We are not responsible for any loss of vehicle records, reminders, or data due to device failure, app uninstallation, or accidental deletion.</li>
              <li>You agree to use the app for personal, non-commercial purposes unless explicitly authorized otherwise.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">4. Accuracy of Reminders</h2>
            <p>
              While DriveMate attempts to provide timely notifications for your vehicle renewals and service schedules based on the inputs you provide, we do not guarantee the delivery, accuracy, or timing of these alerts. You are ultimately responsible for ensuring compliance with all local laws and regulations regarding vehicle maintenance and documentation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">5. Intellectual Property</h2>
            <p>
              All content, features, designs, and functionality within the DriveMate app and website, including but not limited to text, graphics, logos, and software, are the exclusive property of BRC HUB LLP and are protected by intellectual property laws. You may not copy, modify, distribute, or reverse-engineer any part of the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, BRC HUB LLP shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use DriveMate. This includes, but is not limited to, damages for loss of profits, data, or other intangible losses, or any fines incurred due to missed vehicular renewals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">7. Modifications to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. We will provide reasonable notice of any significant changes by updating the "Effective Date" at the top of this page. Your continued use of DriveMate after any such changes constitutes your acceptance of the new Terms of Use.
            </p>
          </section>

          <section className="bg-zinc-100 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 mt-12">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">8. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact our support team.
            </p>
            <p className="text-zinc-900 dark:text-white font-semibold">
              BRC HUB LLP
            </p>
            <Link to="/contact" className="text-[#F46B2C] hover:text-[#da5515] transition-colors font-semibold mt-2 inline-block">
              Submit a Query &rarr;
            </Link>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;