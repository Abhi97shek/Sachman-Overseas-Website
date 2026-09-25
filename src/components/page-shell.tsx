import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader variant="solid" />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  );
}
