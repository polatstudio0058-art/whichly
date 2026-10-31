
"use client";

import { useEffect, useState } from "react";
import { questions } from "../data/questions";
import { translations } from "../data/translations";


export default function Home() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [language, setLanguage] = useState<"en" | "tr">("en");
const [languageReady, setLanguageReady] = useState(false);

useEffect(() => {
  const savedLanguage = localStorage.getItem("whichly-language");

  if (savedLanguage === "tr" || savedLanguage === "en") {
    setLanguage(savedLanguage);
  }

  setLanguageReady(true);
}, []);

useEffect(() => {
  if (languageReady) {
    localStorage.setItem("whichly-language", language);
  }
}, [language, languageReady]);

  const question = questions[current];
  const translation = translations[question.id];

const displayQuestion =
  language === "tr" && translation
    ? {
        ...question,
        ...translation,
        a: { ...question.a, ...translation.a },
        b: { ...question.b, ...translation.b },
      }
    : question;
  const isCorrect = selected === question.answer;

  function choose(option: string) {
    if (selected !== null) return;
    setSelected(option);
  }

  function nextQuestion() {
    setCurrent((current + 1) % questions.length);
    setSelected(null);
  }

  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="/" className="text-2xl font-black tracking-tight">
          which<span className="text-[#C4391A]">ly</span>
          <span className="ml-2 align-top text-xs font-medium text-zinc-500">
            BETA
          </span>
        </a>
       <div className="flex items-center gap-4">
  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
    Curiosity, compared.
  </div>

  <div className="flex rounded-lg border border-zinc-800 p-1">
    <button
      onClick={() => setLanguage("en")}
      className={`rounded-md px-3 py-1 text-xs font-bold ${
        language === "en"
          ? "bg-white text-black"
          : "text-zinc-500 hover:text-white"
      }`}
    >
      EN
    </button>

    <button
      onClick={() => setLanguage("tr")}
      className={`rounded-md px-3 py-1 text-xs font-bold ${
        language === "tr"
          ? "bg-white text-black"
          : "text-zinc-500 hover:text-white"
      }`}
    >
      TR
    </button>
  </div>
</div>
      </header>

      <section className="mx-auto max-w-5xl px-5 pb-16 pt-10 sm:pt-16">
        <div className="mb-8 flex items-center justify-between text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
<span>
  {language === "tr"
    ? ({
        Animals: "Hayvanlar",
        Science: "Bilim",
        History: "Tarih",
        Money: "Para",
        World: "Dünya",
        Human: "İnsan",
        Technology: "Teknoloji",
        Sports: "Spor",
        Nature: "Doğa",
        Society: "Toplum",
      }[question.category] ?? question.category)
    : question.category}
</span>

<span>
  {language === "tr" ? "SORU" : "QUESTION"}{" "}
  {String(current + 1).padStart(2, "0")} /{" "}
  {String(questions.length).padStart(2, "0")}
</span>
        </div>

        <h1 className="mx-auto max-w-3xl text-center text-4xl font-black leading-tight tracking-tight sm:text-6xl">
          {displayQuestion.question}
        </h1>
        <p className="mt-5 text-center text-sm text-zinc-500 sm:text-base">
          Two choices. One surprising truth.
        </p>

        <div className="my-10 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-zinc-800" />
          <span className="text-xs font-black tracking-[0.3em] text-zinc-600">
            {language === "tr" ? "SEÇİMİNİ YAP" : "MAKE YOUR PICK"}
          </span>
          <div className="h-px w-16 bg-zinc-800" />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {[displayQuestion.a, displayQuestion.b].map((option, index) => {
            const key = index === 0 ? "a" : "b";
            const isSelected = selected === key;
            const isAnswer = question.answer === key;
            const reveal = selected !== null;
            const accent =
              index === 0
                ? "border-[#C4391A] hover:bg-[#C4391A]/10"
                : "border-[#60A5FA] hover:bg-[#60A5FA]/10";
            const accentText =
              index === 0 ? "text-[#C4391A]" : "text-[#60A5FA]";

            return (
              <button
                key={option.name}
                onClick={() => choose(key)}
                disabled={selected !== null}
                className={`group relative flex min-h-[280px] flex-col items-center justify-center overflow-hidden rounded-2xl border bg-[#101010] p-7 text-center transition duration-300 sm:min-h-[330px] ${
                  reveal && isAnswer
                    ? "border-emerald-400 bg-emerald-400/5"
                    : reveal && isSelected
                      ? "border-red-500 bg-red-500/5"
                      : accent
                } ${selected === null ? "cursor-pointer hover:-translate-y-1" : "cursor-default"}`}
              >
                <span
                  className={`absolute left-5 top-5 text-xs font-black tracking-[0.2em] ${accentText}`}
                >
                  {language === "tr" ? "SEÇENEK" : "OPTION"} {key.toUpperCase()}
                </span>

                {option.image ? (
  <img
    src={option.image}
    alt={option.name}
    className="mb-5 h-32 w-32 object-contain transition duration-300 group-hover:scale-110 sm:h-40 sm:w-40"
  />
) : (
  <span className="mb-5 text-7xl transition duration-300 group-hover:scale-110 sm:text-8xl">
    {option.icon}
  </span>
)}

                <span className="text-3xl font-black tracking-tight">
                  {option.name}
                </span>
                <span className="mt-2 text-sm text-zinc-500">
                  {option.description}
                </span>

                {reveal && (
                  <span
                    className={`mt-6 rounded-full px-4 py-2 text-sm font-bold ${
                      isAnswer
                        ? "bg-emerald-400/10 text-emerald-400"
                        : "bg-red-400/10 text-red-400"
                    }`}
                  >
                    {isAnswer
  ? language === "tr" ? "✓ Doğru cevap" : "✓ Correct answer"
  : language === "tr" ? "✕ Bu değil" : "✕ Not this one"}
                  </span>
                )}

                <span
                  className={`absolute bottom-5 right-5 text-xl ${accentText}`}
                >
                  {reveal && isAnswer ? "✓" : "↗"}
                </span>
              </button>
            );
          })}
        </div>

        {selected !== null && (
          <section className="mt-6 rounded-2xl border border-zinc-800 bg-[#101010] p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-400">
                {language === "tr"
  ? isCorrect
    ? "Doğru bildin!"
    : "Şaşırdın mı? Artık biliyorsun."
  : isCorrect
    ? "You got it right!"
    : "Surprised? Now you know."}
              </span>
              <span className="text-sm text-zinc-500">
                {language === "tr" ? "Cevap:" : "The answer is"}{" "}
{displayQuestion[selected === "a" ? "a" : "b"].name}.
              </span>
            </div>

            <h2 className="mt-5 text-2xl font-black sm:text-3xl">
  {displayQuestion.headline}
</h2>

<div className="mt-5 rounded-2xl border border-[#C4391A]/30 bg-[#C4391A]/10 p-5 sm:p-6">
  <p className="text-xs font-bold uppercase tracking-widest text-[#F28B70]">
    {language === "tr" ? "ŞAŞIRTICI GERÇEK" : "THE SURPRISING FACT"}
  </p>
  <p className="mt-3 text-xl font-black leading-relaxed text-white sm:text-2xl">
    {displayQuestion.statistic}
  </p>
</div>

<p className="mt-5 max-w-3xl leading-7 text-zinc-400">
  {displayQuestion.explanation}
</p>

            <a
              href={question.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex text-sm font-semibold text-[#60A5FA] underline underline-offset-4"
            >
              {language === "tr" ? "Kaynak:" : "Source:"} {question.source} ↗
            </a>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-800 pt-6">
              <span className="text-sm text-zinc-500">
                {language === "tr"
  ? `${current + 1} / ${questions.length} soru`
  : `${current + 1} of ${questions.length} questions`}
              </span>
              <button
                onClick={nextQuestion}
                className="rounded-xl bg-white px-6 py-3 text-sm font-black text-black transition hover:bg-zinc-200"
              >
                {language === "tr" ? "Sonraki soru →" : "Next question →"}
              </button>
            </div>
          </section>
        )}

        
<footer className="mt-14 flex flex-col items-center gap-4 border-t border-zinc-900 pt-7 text-center text-xs text-zinc-600 sm:flex-row sm:justify-between">
  <span>© 2026 Whichly. Stay curious.</span>

  <nav className="flex flex-wrap justify-center gap-5">
    <a href="/about" className="transition hover:text-white">
      About Us
    </a>
    <a href="/privacy" className="transition hover:text-white">
      Privacy Policy
    </a>
    <a href="/contact" className="transition hover:text-white">
      Contact
    </a>
    <a href="/sources" className="transition hover:text-white">
      Sources
    </a>
  </nav>
</footer>

      </section>
    </main>
  );
}
