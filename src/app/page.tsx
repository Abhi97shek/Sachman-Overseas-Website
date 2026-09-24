import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Destinations } from "@/components/destinations";
import { Process } from "@/components/process";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Services />
        <Destinations />
        <Process />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
