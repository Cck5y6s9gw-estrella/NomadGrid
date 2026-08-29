import type { GuideSection } from "@/data/cityGuides";
import { renderRichText } from "@/lib/richText";

export default function CityGuideSection({
  title,
  section,
  sourcesLabel,
}: {
  title: string;
  section: GuideSection;
  sourcesLabel: string;
}) {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-3">{title}</h2>
      <div className="space-y-4">{renderRichText(section.content)}</div>
      {section.sources.length > 0 && (
        <div className="mt-4 flex flex-wrap items-baseline gap-x-1 gap-y-1 text-xs text-muted">
          <span className="font-medium text-foreground mr-1">{sourcesLabel}</span>
          {section.sources.map((s, i) => (
            <span key={s.url}>

                <a href={s.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-accent hover:underline"
              >
                {s.label}
              </a>
              {i < section.sources.length - 1 ? <span className="mx-1">·</span> : null}
            </span>
          ))}
        </div>
      )}
    </section>
  );
}
