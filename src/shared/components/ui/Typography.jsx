import { cn } from "@/shared/utils/utils";

export const H1 = ({ className, children }) => (
  <h1 className={cn("text-4xl lg:text-5xl font-bold font-sans tracking-tight text-brand-blue", className)}>
    {children}
  </h1>
);

export const H2 = ({ className, children }) => (
  <h2 className={cn("text-3xl lg:text-4xl font-bold font-sans tracking-tight text-brand-blue", className)}>
    {children}
  </h2>
);

export const P = ({ className, children }) => {
  return (
    <p className={cn("text-base lg:text-lg font-normal font-sans leading-relaxed text-slate-700", className)}>
      {children}
    </p>
  );
};
