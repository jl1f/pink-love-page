import Image from "next/image";

const kittens = [
  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cute%20kitten%21.jpg",
    alt: "Cute kitten sitting on grass",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cute%20kitten.jpg",
    alt: "Black and white kitten portrait",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cute%20White%20Kitten%20%284985408192%29.jpg",
    alt: "Cute white kitten",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center">
        <section className="relative w-full overflow-hidden rounded-[2.8rem] border border-[var(--line)] bg-[var(--white-soft)] p-6 shadow-[0_35px_120px_rgba(140,44,89,0.28)] backdrop-blur sm:p-10 lg:p-14">
          <div className="absolute -top-20 left-10 h-44 w-44 rounded-full bg-[rgba(255,153,204,0.35)] blur-3xl" />
          <div className="absolute bottom-0 right-10 h-52 w-52 rounded-full bg-[rgba(214,83,138,0.22)] blur-3xl" />
          <div className="absolute inset-x-12 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(176,74,120,0.55),transparent)]" />

          <div className="relative grid gap-10 lg:grid-cols-[0.95fr_1.1fr_0.95fr] lg:items-center">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {kittens.slice(0, 2).map((kitten, index) => (
                <article
                  key={kitten.src}
                  className={`overflow-hidden rounded-[2rem] border border-white/80 bg-[rgba(255,255,255,0.92)] p-3 shadow-[0_24px_60px_rgba(140,44,89,0.18)] ${index === 1 ? "lg:ml-10" : ""}`}
                >
                  <Image
                    src={kitten.src}
                    alt={kitten.alt}
                    width={600}
                    height={600}
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="aspect-square w-full rounded-[1.5rem] object-cover"
                    unoptimized
                  />
                </article>
              ))}
            </div>

            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--pink-5)]">
                made with love
              </p>
              <h1 className="mt-5 text-5xl font-semibold leading-none text-[var(--rose-deep)] sm:text-6xl lg:text-7xl">
                to my lmorh
              </h1>

              <div className="mx-auto mt-8 max-w-2xl rounded-[2rem] border border-[var(--line)] bg-[rgba(255,255,255,0.8)] px-6 py-7 shadow-[0_20px_50px_rgba(140,44,89,0.16)]">
                <p className="text-2xl leading-10 text-[var(--rose-deep)] sm:text-3xl">
                  اسف اذا زعلانه مني
                </p>
                <p className="mt-3 text-lg text-[var(--rose-ink)] sm:text-xl">
                  I&apos;m sorry if you&apos;re upset with me.
                </p>
                <p className="mt-6 text-2xl font-semibold text-[var(--pink-5)] sm:text-3xl">
                  احبك مرا
                </p>
                <p className="mt-2 text-lg text-[var(--rose-ink)] sm:text-xl">
                  I love you so much.
                </p>
              </div>

              <div className="mt-8 flex flex-col items-center gap-3">
                <a
                  href="https://music.apple.com/us/song/1193701400"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[linear-gradient(135deg,var(--pink-5),var(--pink-6))] px-8 py-3 text-base font-semibold text-white shadow-[0_16px_34px_rgba(176,74,120,0.35)] transition-transform duration-300 hover:-translate-y-1"
                >
                  listen here
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <article className="overflow-hidden rounded-[2rem] border border-white/80 bg-[rgba(255,255,255,0.92)] p-3 shadow-[0_24px_60px_rgba(140,44,89,0.18)]">
                <Image
                  src={kittens[2].src}
                  alt={kittens[2].alt}
                  width={600}
                  height={600}
                  sizes="(max-width: 1024px) 100vw, 28vw"
                  className="aspect-square w-full rounded-[1.5rem] object-cover"
                  unoptimized
                />
              </article>

              <article className="overflow-hidden rounded-[2rem] border border-white/80 bg-[rgba(255,255,255,0.92)] p-3 shadow-[0_24px_60px_rgba(140,44,89,0.18)] lg:mt-8">
                <Image
                  src="/my-love.jpg"
                  alt="My love"
                  width={700}
                  height={1000}
                  sizes="(max-width: 1024px) 100vw, 28vw"
                  className="h-[26rem] w-full rounded-[1.5rem] object-cover object-top"
                  unoptimized
                />
              </article>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
