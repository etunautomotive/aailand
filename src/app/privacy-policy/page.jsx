export default function PrivacyPolicy() {
  return (
    <div className="flex justify-center w-full overflow-hidden">
      <div className="w-full max-w-[1500px] mx-auto overflow-hidden">
        <div className="container mx-auto px-4 py-12 max-w-4xl mt-24 lg:mt-32 w-full">
          <h1 className="text-3xl font-bold mb-8 text-black dark:text-white">
            Privacy Policy
          </h1>

          <div className="space-y-6 text-black dark:text-white">
            <p>
              Automotive AI (operated by AAI Technologies Inc.) understands that
              your privacy is important. We are committed to protecting the
              privacy of your personally identifiable information collected
              through our website and services. This Privacy Policy explains how
              we collect, use, and protect your information.
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                INFORMATION WE COLLECT
              </h2>
              <h3 className="text-xl font-semibold mb-2">
                Non-Personal Information
              </h3>
              <p>
                When you visit our website, we may collect non-personal data
                such as:
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and navigation patterns</li>
                <li>Time and date of visits</li>
                <li>Device information</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4 mb-2">
                Personal Information
              </h3>
              <p>We may collect personal information when you:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Schedule a demo through our booking system</li>
                <li>Sign in to our platform</li>
                <li>Contact us through our website</li>
                <li>Request information about our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">USE OF COOKIES</h2>
              <p>
                Our website uses essential cookies to ensure basic functionality
                and improve user experience. These include cookies for theme
                preferences and session management. You can adjust your browser
                settings to refuse cookies, though this may limit some website
                features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                HOW WE USE YOUR INFORMATION
              </h2>
              <p>We use collected information to:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Provide and maintain our services</li>
                <li>Process demo requests and bookings</li>
                <li>Improve our website and user experience</li>
                <li>Communicate with you about our services</li>
                <li>Ensure platform security and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">DATA SECURITY</h2>
              <p>
                We implement industry-standard security measures to protect your
                data, including:
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li>Secure HTTPS encryption</li>
                <li>Regular security audits</li>
                <li>Secure data storage practices</li>
                <li>Limited access to personal information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                THIRD-PARTY SERVICES
              </h2>
              <p>We use trusted third-party services for specific functions:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Motion for demo scheduling</li>
                <li>Authentication services for user sign-in</li>
                <li>Analytics tools to improve our services</li>
              </ul>
              <p className="mt-2">
                These services have their own privacy policies and data handling
                practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">DATA RETENTION</h2>
              <p>
                We retain your personal information only for as long as
                necessary to provide our services and fulfill the purposes
                outlined in this policy. You may request deletion of your data
                by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">YOUR RIGHTS</h2>
              <p>You have the right to:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Access your personal data</li>
                <li>Request corrections to your data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                CHANGES TO THIS POLICY
              </h2>
              <p>
                We may update this Privacy Policy as our services evolve.
                Significant changes will be communicated through our website or
                email notifications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">CONTACT US</h2>
              <p>
                For questions about this Privacy Policy or to exercise your
                privacy rights, please contact:
                <a
                  href="mailto:wes@automotiveai.ca"
                  className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 ml-1"
                >
                  wes@automotiveai.ca
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
