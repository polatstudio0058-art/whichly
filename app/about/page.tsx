
import Link from "next/link";

export const metadata = {
  title: "About Us | Whichly",
  description:
    "Discover the story behind Whichly, where two choices lead to one surprising truth.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#080808] px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-sm font-bold text-[#C4391A] hover:opacity-80"
        >
          ← Back to Whichly
        </Link>

        <p className="mt-12 text-sm font-bold uppercase tracking-[0.25em] text-[#C4391A]">
          ABOUT WHICHLY
        </p>

        <h1 className="mt-4 text-4xl font-black sm:text-6xl">
          Two choices.
          <br />
          One surprising truth.
        </h1>

        <div className="mt-10 space-y-6 text-lg leading-8 text-zinc-400">
          <p>
            Whichly is a place for curious minds. We take two seemingly
            unrelated things and put them side by side to reveal facts
            that are surprising, unexpected, and sometimes hard to believe.
          </p>

          <p>
            Is a university older than an empire? Can a planet be less
            dense than water? Does a familiar animal have a surprising
            advantage over something much bigger?
          </p>

          <p>
            Every comparison starts with a simple question. You make
            your choice, discover the answer, and learn something new.
          </p>

          <p>
            Our goal is simple: make learning interesting, make curiosity
            contagious, and remind people that the world is full of
            unexpected connections.
          </p>
        </div>

        <div className="mt-14 border-t border-zinc-800 pt-8">
          <p className="text-sm text-zinc-500">
            Whichly — Stay curious.
          </p>
        </div>
      </div>
    </main>
  );
}
