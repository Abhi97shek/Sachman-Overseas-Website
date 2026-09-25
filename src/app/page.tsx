import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Destinations } from "@/components/destinations";
import { Universities } from "@/components/universities";
import { Testimonials } from "@/components/testimonials";
import { ResultPosts } from "@/components/result-posts";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <Services />
        <Destinations />
        <Universities />
        <Testimonials />
        <ResultPosts />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
