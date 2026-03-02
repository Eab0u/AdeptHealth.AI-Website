"use client";

import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";
import { HeroVisual } from "@/src/components/sections/HeroVisual";

export function Hero() {
  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl lg:leading-tight">
              Healthcare AI consulting that{" "}
              <span className="text-[var(--primary)]">ships.</span>
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-lg">
              Strategy, implementation, and governance for safe, compliant AI in
              clinical and operational workflows.
            </p>
            <div className="mt-7 grid w-full gap-3 sm:inline-flex">
              <Button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
              >
                Contact
              </Button>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-2 text-xs text-zinc-600 dark:text-zinc-300">
              <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1">
                Trusted by healthcare operators
              </span>
              <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1">
                Compliance-aware delivery
              </span>
            </div>
          </div>
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
