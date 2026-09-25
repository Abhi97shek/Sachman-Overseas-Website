import Image from "next/image";

const posts = [
  {
    name: "Sarabjeet",
    result: "UK study visa approved",
    image: "/images/results/sarabjeet.jpg",
    width: 1440,
    height: 1800,
    href: "https://www.facebook.com/photo.php?fbid=1573874118087939",
    alt: "Sachman Institute post: UK study visa approved for Sarabjeet from Pathankot",
  },
  {
    name: "Shaurya Partap Singh",
    result: "IELTS cleared · 6.5",
    image: "/images/results/shaurya.jpg",
    width: 394,
    height: 525,
    href: "https://www.facebook.com/photo.php?fbid=1563832715758746",
    alt: "Sachman Institute post: Shaurya Partap Singh cleared IELTS with an overall 6.5",
  },
  {
    name: "Rutvik",
    result: "IELTS cleared · 6.5",
    image: "/images/results/rutvik.jpg",
    width: 960,
    height: 1280,
    href: "https://www.facebook.com/photo.php?fbid=1560210099454341",
    alt: "Sachman Institute post: Rutvik cleared IELTS with an overall 6.5",
  },
  {
    name: "Simranjeet Kaur",
    result: "IELTS cleared · 6.5",
    image: "/images/results/simranjeet.jpg",
    width: 960,
    height: 1280,
    href: "https://www.facebook.com/photo.php?fbid=1559324366209581",
    alt: "Sachman Institute post: Simranjeet Kaur cleared IELTS with an overall 6.5",
  },
];

export function ResultPosts() {
  return (
    <section id="results" className="px-3 pt-2 pb-8 sm:px-4 md:px-5 md:pb-12">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-[linear-gradient(165deg,#d7f1ff_0%,#f5fbff_38%,#ffffff_100%)] px-4 py-8 sm:rounded-[2rem] sm:px-6 sm:py-10 md:px-8 md:py-12">
        <div data-reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-[#0b7a7a] uppercase">From the centre</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              IELTS cleared. Visas approved.
            </h2>
          </div>
          <a
            href="https://www.instagram.com/sachmaninstitute/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-fit shrink-0 items-center gap-2 rounded-full bg-white/80 px-4 text-sm font-semibold text-ink ring-1 ring-ink/10 hover:bg-white"
          >
            <svg viewBox="0 0 24 24" aria-hidden className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7">
              <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
              <circle cx="12" cy="12" r="3.6" />
              <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
            </svg>
            Instagram
          </a>
        </div>

        <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1 [scrollbar-width:none] sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
          {posts.map((post) => (
            <a
              key={post.name}
              href={post.href}
              target="_blank"
              rel="noreferrer"
              className="group w-[78%] shrink-0 snap-start sm:w-auto"
            >
              <span className="relative block overflow-hidden rounded-[1.35rem] bg-white shadow-[0_16px_40px_rgba(10,40,70,0.12)]">
                <Image
                  src={post.image}
                  alt={post.alt}
                  width={post.width}
                  height={post.height}
                  className="h-auto w-full transition duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 78vw"
                />
                <span className="pointer-events-none absolute top-3 right-3 inline-flex h-8 items-center rounded-full bg-white/90 px-3 text-xs font-semibold text-ink opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
                  Open post
                </span>
              </span>
              <span className="mt-3 block px-1">
                <span className="block font-display text-lg font-semibold tracking-tight text-ink">{post.name}</span>
                <span className="mt-0.5 block text-sm text-[#0b7a7a]">{post.result}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
