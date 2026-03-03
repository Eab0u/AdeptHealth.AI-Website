import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { Card } from "@/src/components/ui/Card";
import { siteConfig } from "@/src/lib/site";

export function Trust() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <Card className="p-8 sm:p-10">
          <SectionHeading
            eyebrow="Trust and Compliance"
            title="AI delivery with governance built in."
          />
          <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.trustItems.map((item) => (
              <li
                key={item.title}
                className="group rounded-xl border bg-[var(--surface-muted)] px-4 py-3"
              >
                <p className="text-sm font-medium">{item.title}</p>
                <div className="grid grid-rows-[0fr] transition-all duration-300 ease-out group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]">
                  <p className="overflow-hidden pt-0 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300 group-hover:pt-2 group-focus-within:pt-2">
                    {item.blurb}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </Container>
    </section>
  );
}
