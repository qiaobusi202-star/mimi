import Link from "next/link";

import { PageShell } from "@/components/layout/PageShell";
import { siteConfig } from "@/lib/site-config";
import {
  awards,
  campusExperience,
  education,
  resumeLabels,
  resumeProfile,
  selfEvaluation,
  skills,
  workExperience,
} from "@/lib/resume-data";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 text-xs font-normal uppercase tracking-[0.32em] text-muted/70">
      {children}
    </h2>
  );
}

export default function ResumePage() {
  const L = resumeLabels.zh;

  return (
    <PageShell
      label={{ en: "Resume", zh: "简历" }}
      title={resumeProfile.name}
    >
      <div className="mb-12 space-y-2 border-b border-white/[0.06] pb-8">
        <p className="text-base font-light tracking-wide text-foreground">
          {resumeProfile.title.zh}
        </p>
        <p className="text-sm text-muted/80">
          {resumeProfile.location.zh} · {resumeProfile.phone} ·{" "}
          <a
            href={`mailto:${resumeProfile.email}`}
            className="transition-colors hover:text-accent"
          >
            {resumeProfile.email}
          </a>
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href={siteConfig.resumePdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border border-accent/30 bg-accent/5 px-4 py-2 text-[11px] tracking-[0.12em] text-accent transition-all hover:bg-accent/10"
          >
            PDF 简历 ↗
          </Link>
        </div>
      </div>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <aside className="space-y-10">
          <section>
            <SectionTitle>{L.education}</SectionTitle>
            <p className="text-sm font-light text-foreground">
              {education.school.zh}
            </p>
            <p className="mt-1 text-sm text-muted/80">{education.major.zh}</p>
            <p className="mt-2 text-[11px] tracking-wider text-muted/60">
              {education.period}
            </p>
            <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-muted/50">
              {L.courses}
            </p>
            <ul className="mt-2 space-y-1 text-xs font-light leading-relaxed text-muted/75">
              {education.courses.zh.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </section>

          <section>
            <SectionTitle>{L.skills}</SectionTitle>
            <ul className="flex flex-wrap gap-2">
              {skills.tools.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-muted"
                >
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted/70">{skills.code.zh}</p>
          </section>

          <section>
            <SectionTitle>{L.awards}</SectionTitle>
            {awards.map((a) => (
              <div key={a.year} className="text-sm">
                <span className="text-muted/60">{a.year}</span>
                <p className="mt-1 font-light text-foreground/90">
                  {a.title.zh}
                </p>
              </div>
            ))}
          </section>
        </aside>

        <div className="space-y-10">
          <section>
            <SectionTitle>{L.experience}</SectionTitle>
            <ul className="space-y-8">
              {workExperience.map((item) => (
                <li
                  key={item.period + item.org.zh}
                  className="border-b border-white/[0.06] pb-8 last:border-0"
                >
                  <p className="text-[11px] tracking-[0.18em] text-muted/60">
                    {item.period}
                  </p>
                  <p className="mt-2 text-base font-light text-foreground">
                    {item.org.zh}
                  </p>
                  <p className="mt-1 text-sm text-accent/80">{item.role.zh}</p>
                  <ul className="mt-3 space-y-1.5 text-xs font-light leading-relaxed text-muted/80">
                    {item.highlights.zh.map((h) => (
                      <li key={h}>· {h}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <SectionTitle>{L.campus}</SectionTitle>
            {campusExperience.map((item) => (
              <div
                key={item.period}
                className="border-b border-white/[0.06] pb-8"
              >
                <p className="text-[11px] tracking-[0.18em] text-muted/60">
                  {item.period}
                </p>
                <p className="mt-2 text-base font-light text-foreground">
                  {item.org.zh}
                </p>
                <p className="mt-1 text-sm text-accent/80">{item.role.zh}</p>
                <ul className="mt-3 space-y-1.5 text-xs font-light leading-relaxed text-muted/80">
                  {item.highlights.zh.map((h) => (
                    <li key={h}>· {h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section>
            <SectionTitle>{L.about}</SectionTitle>
            <ul className="space-y-3 text-sm font-light leading-relaxed text-muted/85">
              {selfEvaluation.zh.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </PageShell>
  );
}