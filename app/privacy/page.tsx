'use client';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">1. Introduction</h2>
          <p className="text-gray-700 mb-4">
            AI Fix Lab ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">2. Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            We may collect information about you in a variety of ways. The information we may collect on the site includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with the site or when you choose to participate in various activities related to the site.</li>
            <li><strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the site.</li>
            <li><strong>Data From Social Networks:</strong> User information from social networking sites, including your name, your social network username, location, gender, birth date, email address, profile picture, and public data for contacts, if you connect your account to such social networks.</li>
            <li><strong>Mobile Device Data:</strong> Device information, such as your mobile device ID, model, manufacturer, and mobile operating system.</li>
            <li><strong>Third-Party Data:</strong> Information from third parties, such as personal information or network friends, if you connect your account to the third party and grant the site permission to access this information.</li>
            <li><strong>Data From Contests, Giveaways, and Surveys:</strong> Personal and preference information you may provide when entering contests or giveaways and to determine winners, award prizes, deliver special offers, and send promotional emails.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">3. Use of Your Information</h2>
          <p className="text-gray-700 mb-4">
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Generate a personal profile about you so that future visits to the site will be personalized as possible.</li>
            <li>Increase the efficiency and operation of the site.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the site.</li>
            <li>Notify you of updates to the site.</li>
            <li>Offer new products, services, and/or recommendations to you.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">4. Disclosure of Your Information</h2>
          <p className="text-gray-700 mb-4">
            We may share information we have collected about you in certain situations:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information is necessary to comply with the law.</li>
            <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, and customer service.</li>
            <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with a merger, sale, bankruptcy, dissolution, reorganization, similar transaction or proceeding, or other business transaction.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">5. Security of Your Information</h2>
          <p className="text-gray-700 mb-4">
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">6. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have questions or comments about this Privacy Policy, please contact us at:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Email: privacy@aifixlab.com</li>
            <li>GitHub: <a href="https://github.com/newsintech/ai-fix-lab" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://github.com/newsintech/ai-fix-lab</a></li>
            <li>Website: <a href="https://aifixlab.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://aifixlab.vercel.app</a></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">7. Changes to This Privacy Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the "Last updated" date of this Privacy Policy and by providing a prominent notice on our site.
          </p>
        </section>
      </div>
    </div>
  );
}
