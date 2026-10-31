
import Link from "next/link";

export const metadata = {
  title: "Sources | Whichly",
  description: "Learn how Whichly researches and verifies its comparisons.",
};

export default function SourcesPage() {
  return (
    <main className="min-h-screen bg-[#080808] px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-bold text-[#C4391A] hover:opacity-80">
          ← Back to Whichly
        </Link>

        <p className="mt-12 text-sm font-bold uppercase tracking-[0.25em] text-[#C4391A]">
          OUR SOURCES
        </p>

        <h1 className="mt-4 text-4xl font-black sm:text-6xl">
          Facts deserve sources.
        </h1>

        <div className="mt-10 space-y-6 text-lg leading-8 text-zinc-400">
          <p>
            At Whichly, every comparison starts with a question. But curiosity
            alone is not enough. We believe surprising facts should be backed
            by reliable information.
          </p>

          <p>
            We aim to use trustworthy sources such as scientific publications,
            academic institutions, official statistics, historical records,
            and recognized research organizations.
          </p>

          <p>
            Each comparison includes a source link so readers can explore the
            original information and learn more about the subject.
          </p>

          <p>
            Some figures may vary between sources because of different
            measurement methods, definitions, or estimates. Where relevant,
            we aim to explain these differences.
          </p>

          <p>
            If you notice an incorrect fact, outdated figure, or broken source
            link, please let us know through our{" "}
            <Link href="/contact" className="text-[#C4391A] hover:underline">
              Contact page
            </Link>.
          </p>
        </div>

        <div className="mt-14 border-t border-zinc-800 pt-8">
          <p className="text-sm text-zinc-500">Whichly — Stay curious.</p>
        </div>
      </div>
    </main>
  );
}
