import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  // Grab the search params to check if we are loading inside the Flutter app
  const [searchParams] = useSearchParams();
  const isAppMode = searchParams.get('mode') === 'app';

  return (
    // Dynamically change the top padding: tight (pt-8) for app, spacious (pt-32) for web
    <div className={`${isAppMode ? 'pt-8' : 'pt-32'} pb-24 bg-zinc-50 dark:bg-[#0a0a0a] min-h-screen transition-colors duration-500`}>
      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        
        {/* Header */}
        <div className="mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
            Effective Date: July 13, 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
          
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">1. Introduction</h2>
            <p className="mb-4">
              At DriveMate, your privacy is our absolute priority. This Privacy Policy explains our data practices when you use the DriveMate mobile application and website, operated by BRC HUB LLP ("we", "us", or "our"). 
            </p>
            <p>
              We built DriveMate on a strict offline-first architecture. This means we fundamentally believe that your vehicle data belongs to you, and it should stay on your device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">2. Local Storage & Data Ownership</h2>
            <p className="mb-4">
              Unlike traditional cloud-based applications, DriveMate stores your vehicle details, service history, and renewal documents (such as Insurance and PUC certificates) directly on your local device storage. 
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-zinc-700 dark:text-zinc-300">
              <li>We do not upload your vehicle logs to our servers.</li>
              <li>We do not sell, rent, or monetize your personal information.</li>
              <li>Your data is accessible to you even without an active internet connection.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">3. Information We Collect</h2>
            <p className="mb-4">
              Because of our offline-first approach, the data collection on our end is minimal to non-existent.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-zinc-900 dark:text-white font-bold mb-1">App Usage Data (Optional)</h3>
                <p>If you opt-in to anonymous analytics, we may collect basic crash reports and performance metrics to help us improve the app. This data is entirely stripped of personally identifiable information.</p>
              </div>
              <div>
                <h3 className="text-zinc-900 dark:text-white font-bold mb-1">Website Contact Forms</h3>
                <p>If you reach out to us via our contact or feedback forms, we will collect your name, email address, and the contents of your message solely for the purpose of responding to your inquiry.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">4. Smart Alerts and Notifications</h2>
            <p>
              DriveMate uses your device's native notification system to alert you about upcoming renewals and maintenance schedules. These background checks are performed locally on your hardware. We do not track your notification interactions remotely.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">5. Third-Party Services</h2>
            <p>
              We do not integrate with third-party tracking or advertising SDKs. The app may utilize standard platform services provided by Apple (iOS) and Google (Android) for basic functionality, which are governed by their respective privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">6. Changes to this Policy</h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes in our practices or for legal, regulatory, or operational reasons. The updated version will be indicated by a revised "Effective Date" at the top of this page.
            </p>
          </section>

          {/* Hide the Contact Us section entirely if viewed inside the Flutter app */}
          {!isAppMode && (
            <section className="bg-zinc-100 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 mt-12">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">7. Contact Us</h2>
              <p className="mb-4">
                If you have any questions or concerns regarding this Privacy Policy or how your data is handled, please reach out to us.
              </p>
              <p className="text-zinc-900 dark:text-white font-semibold">
                BRC HUB LLP
              </p>
              <Link to="/contact" className="text-[#F46B2C] hover:text-[#da5515] transition-colors font-semibold mt-2 inline-block">
                Go to Contact Form &rarr;
              </Link>
            </section>
          )}

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;