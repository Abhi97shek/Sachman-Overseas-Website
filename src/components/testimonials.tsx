import Image from "next/image";

const posts = [
  {
    name: "Sarabjeet",
    result: "UK study visa approved",
    detail: "Bachelor of Arts, A.B. College · Masters in the UK",
    image: "/images/results/sarabjeet.jpg",
    width: 1440,
    height: 1800,
    href: "https://www.facebook.com/photo.php?fbid=1573874118087939",
    alt: "Sachman Institute post: UK study visa approved for Sarabjeet from Pathankot",
  },
  {
    name: "Shaurya Partap Singh",
    result: "IELTS cleared · Overall 6.5",
    detail: "Listening 6.5 · Reading 6.0 · Writing 6.0 · Speaking 6.5",
    image: "/images/results/shaurya.jpg",
    width: 394,
    height: 525,
    href: "https://www.facebook.com/photo.php?fbid=1563832715758746",
    alt: "Sachman Institute post: Shaurya Partap Singh cleared IELTS with an overall 6.5",
  },
  {
    name: "Rutvik",
    result: "IELTS cleared · Overall 6.5",
    detail: "Listening 7.0 · Reading 6.0 · Writing 6.5 · Speaking 6.5",
    image: "/images/results/rutvik.jpg",
    width: 960,
    height: 1280,
    href: "https://www.facebook.com/photo.php?fbid=1560210099454341",
    alt: "Sachman Institute post: Rutvik cleared IELTS with an overall 6.5",
  },
  {
    name: "Simranjeet Kaur",
    result: "IELTS cleared · Overall 6.5",
    detail: "Listening 6.0 · Reading 7.0 · Writing 6.0 · Speaking 6.5",
    image: "/images/results/simranjeet.jpg",
    width: 960,
    height: 1280,
    href: "https://www.facebook.com/photo.php?fbid=1559324366209581",
    alt: "Sachman Institute post: Simranjeet Kaur cleared IELTS with an overall 6.5",
  },
];

export function Testimonials() {
  return (
    <section id="stories" className="px-4 py-12 sm:px-6 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-tide uppercase">Results</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
              IELTS cleared. Visas approved.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Recent posts from the Pathankot centre. Each card opens the original post.
            </p>
          </div>
          <a
            href="https://www.instagram.com/sachmaninstitute/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-white hover:bg-ink/90"
          >
            <svg viewBox="0 0 24 24" aria-hidden className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7">
              <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
              <circle cx="12" cy="12" r="3.6" />
              <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
            </svg>
            Instagram
          </a>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {posts.map((post) => (
            <a
              key={post.name}
              href={post.href}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-[1.25rem] bg-white shadow-[0_10px_30px_rgba(18,22,28,0.06)] ring-1 ring-ink/8 transition-transform hover:-translate-y-1"
            >
              <Image
                src={post.image}
                alt={post.alt}
                width={post.width}
                height={post.height}
                className="h-auto w-full"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
              <span className="block px-3 py-3 sm:px-4 sm:py-4">
                <span className="block text-sm font-semibold text-ink">{post.name}</span>
                <span className="mt-1 block text-sm text-[#0b7a7a]">{post.result}</span>
                <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">{post.detail}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
