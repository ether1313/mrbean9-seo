/* eslint-disable react-refresh/only-export-components -- shared brand helpers + small components */
import { Fragment, type ReactNode } from "react";

/** MrBean9 wordmark: weight 900 + cream tone */
export const mrBean9MarkClassName = "font-black text-[#fdf5e6f2]";

export function MrBean9Word({ className = "" }: { className?: string }): ReactNode {
  return <span className={[mrBean9MarkClassName, className].filter(Boolean).join(" ")}>MrBean9</span>;
}

export function MrBean9CapsWord({ className = "" }: { className?: string }): ReactNode {
  return <span className={[mrBean9MarkClassName, className].filter(Boolean).join(" ")}>MRBEAN9</span>;
}

/** Replaces literal "MrBean9" in plain strings (does not touch mrbean9.com). */
export function renderWithMrBean9(text: string): ReactNode {
  return text.split(/(MrBean9)/g).map((part, i) =>
    part === "MrBean9" ? (
      <span key={i} className={mrBean9MarkClassName}>
        MrBean9
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}
