import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <article
      className={`rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.6)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_-20px_rgba(0,0,0,0.65)] ${className}`}
    >
      {children}
    </article>
  );
}
