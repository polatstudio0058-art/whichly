
import Link from "next/link";

export const metadata = {
  title: "Contact | Whichly",
  description: "Get in touch with the Whichly team.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#080808] px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-bold text-[#C4391A] hover:opacity-80">
          ← Back to Whichly
        </Link>

        <p className="mt-12 text-sm font-bold uppercase tracking-[0.25em] text-[#C4391A]">
          CONTACT
        </p>

        <h1 className="mt-4 text-4xl font-black sm:text-6xl">
          Let's talk.
        </h1>

        <div className="mt-10 space-y-6 text-lg leading-8 text-zinc-400">
          <p>
            Have a question, spotted an error, or want to share an interesting
            comparison? We'd love to hear from you.
          </p>

          <p>
            For general questions, corrections, feedback, or business inquiries,
            you can reach us by email.
          </p>

          <a
            href="mailto:polatstudio0058@gmail.com"
            className="inline-block rounded-xl bg-[#C4391A] px-6 py-3 text-sm font-bold text-white transition hover:opacity-80"
          >
            Email Whichly
          </a>
        </div>

        <div className="mt-14 border-t border-zinc-800 pt-8">
          <p className="text-sm text-zinc-500">Whichly — Stay curious.</p>
        </div>
      </div>
    </main>
  );
}
