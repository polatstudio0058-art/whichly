
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Whichly",
  description: "Learn how Whichly handles information and protects your privacy.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#080808] px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-bold text-[#C4391A] hover:opacity-80">
          ← Back to Whichly
        </Link>

        <p className="mt-12 text-sm font-bold uppercase tracking-[0.25em] text-[#C4391A]">
          PRIVACY POLICY
        </p>

        <h1 className="mt-4 text-4xl font-black sm:text-6xl">
          Your privacy matters.
        </h1>

        <p className="mt-4 text-sm text-zinc-500">
          Last updated: November 1, 2026
        </p>

        <div className="mt-10 space-y-8 text-base leading-8 text-zinc-400">
          <section>
            <h2 className="mb-2 text-xl font-bold text-white">1. Introduction</h2>
            <p>
              Welcome to Whichly. This Privacy Policy explains how information
              may be collected and used when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-white">2. Information We Collect</h2>
            <p>
              Whichly does not require users to create an account. We do not
              intentionally collect personal information such as your name,
              address, or phone number through the comparison experience.
              However, basic technical information may be processed by our
              hosting provider to operate and secure the website.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-white">3. Cookies</h2>
            <p>
              Our website or third-party services may use cookies and similar
              technologies to improve functionality, understand website usage,
              and support advertising where enabled.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-white">4. Google AdSense</h2>
            <p>
              We may use Google AdSense to display advertisements. Google and
              its partners may use cookies or similar technologies to show
              ads based on visits to this or other websites. Users can learn
              more about Google's advertising practices and manage their
              settings through Google's advertising controls.
            </p>
            <p className="mt-3">
              Learn more at{" "}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C4391A] hover:underline"
              >
                Google's Advertising Policies
              </a>.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-white">5. Third-Party Services</h2>
            <p>
              We may rely on third-party services for hosting, analytics,
              security, and advertising. These services may process technical
              information according to their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-white">6. Children's Privacy</h2>
            <p>
              Whichly is not intended to knowingly collect personal information
              from children. If you believe a child has provided personal
              information to us, please contact us.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-white">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy when our website or services
              change. Any updates will be published on this page.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-white">8. Contact</h2>
            <p>
              If you have questions about this Privacy Policy, you can reach
              us through our <Link href="/contact" className="text-[#C4391A] hover:underline">Contact page</Link>.
            </p>
          </section>
        </div>

        <div className="mt-14 border-t border-zinc-800 pt-8">
          <p className="text-sm text-zinc-500">Whichly — Stay curious.</p>
        </div>
      </div>
    </main>
  );
}
