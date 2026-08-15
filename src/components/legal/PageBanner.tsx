import type { LucideIcon } from "lucide-react";

export default function PageBanner({
  eyebrow,
  title,
  description,
  meta,
  icon: Icon,
  wide,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  meta?: string;
  icon?: LucideIcon;
  wide?: boolean;
}) {
  return (
    <div className="bg-ink border-b border-white/5">
      <div className={`${wide ? "max-w-5xl" : "max-w-3xl"} mx-auto px-4 sm:px-6 lg:px-8 py-14`}>
        <div className="flex items-center gap-3 mb-3">
          {Icon && (
            <span className="w-9 h-9 rounded-xl bg-brand/20 border border-brand/30 flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5 text-brand-bright" />
            </span>
          )}
          <span className="text-brand-bright text-[12.5px] font-bold uppercase tracking-[.18em]">{eyebrow}</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl font-black text-white mb-3 tracking-tight">{title}</h1>
        {description && <p className="text-muted-4 max-w-xl leading-relaxed">{description}</p>}
        {meta && <p className="text-muted-3 text-sm">{meta}</p>}
      </div>
    </div>
  );
}
