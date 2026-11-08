import Mark from '../components/Mark';
import StrataField from '../components/StrataField';
import { FLAGSHIP } from '../lib/curated';
import { formatPushed, getProjects } from '../lib/github';
import styles from './strata.module.css';

const EMAIL = 'hello@dcbarletta.com';

const APPROACH = [
  ['i.', 'Field', 'Start from observed reality — the data, the users, the site conditions. Biology taught measurement; construction taught tolerances.'],
  ['ii.', 'Structure', 'Design the load path before the finish. Data models, APIs, and interfaces laid as courses that each bear weight.'],
  ['iii.', 'Surface', 'The visible layer earns its place: legible, fast, honest about what is measured and what is imagined.'],
];

const SERVICES = [
  ['01', 'Product engineering', 'Full-stack React / TypeScript / Node / Next.js applications, taken from data model to deployed product — end to end.'],
  ['02', 'Scientific dashboards & data viz', 'Hand-built SVG instrumentation and telemetry interfaces. Colorblind-validated palettes, data tables behind every chart, no library bloat.'],
  ['03', 'Data pipelines & API integration', 'Live event ingestion, third-party API orchestration, and the full path from raw feed to legible interface.'],
  ['04', 'Operations & trust-and-safety tooling', 'Moderation queues, policy workflows, and the internal consoles that keep platforms healthy.'],
  ['05', 'Interactive 3D & game systems', 'Roblox Studio + Luau gameplay systems and Blender asset pipelines, with ecology-driven world logic.'],
  ['06', 'Design-led web presence', 'Fast, search-ready sites for studios and small businesses, built with the same production discipline as the product work.'],
];

export const revalidate = 3600;

export default async function Home() {
  const projects = await getProjects();
  return <div className={styles.site}>
    <header className={styles.header}>
      <a href="#top" className={styles.wordmark} aria-label="Strata Works">
        <Mark /><span>Strata Works<small>Engineering studio · D.C. Barletta</small></span>
      </a>
      <nav className={styles.nav} aria-label="Navigation">
        <a href="#approach">Approach</a>
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
    <main id="top">
      <section className={styles.hero} aria-labelledby="hero-title">
        <StrataField />
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Software · Science · Structure</p>
          <h1 id="hero-title" className={styles.heroTitle}>Built <em>in layers.</em></h1>
          <p className={styles.tagline}>Strata Works is the engineering studio of Daniel C. Barletta — biologist, full-stack engineer, and builder. Product software, scientific interfaces, and living worlds, each layer bearing load.</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#work">See the work <span aria-hidden="true">↓</span></a>
            <a className={styles.quietLink} href={`mailto:${EMAIL}?subject=Strata Works inquiry`}>Start a project</a>
          </div>
        </div>
        <div className={styles.heroFoot}><span>Strata Works / Portfolio</span><span>Fault seam · bedded layers · slow breathing field</span></div>
      </section>

      <section id="approach" className={styles.section}>
        <div className={styles.sectionHead}>
          <div><p className={styles.eyebrow}>Approach</p><h2 className={styles.sectionTitle}>Every layer bears load.</h2></div>
          <p>Geologic beds, masonry courses, software stacks, story structure — the same rule holds. Nothing decorative that cannot also carry weight.</p>
        </div>
        <div className={styles.layerList}>
          {APPROACH.map(([n, title, body]) => <article key={title} className={styles.layerItem}>
            <span className={styles.layerIndex}>{n}</span><h3>{title}</h3><p>{body}</p>
          </article>)}
        </div>
      </section>

      <section id="services" className={styles.section}>
        <div className={styles.sectionHead}>
          <div><p className={styles.eyebrow}>Services</p><h2 className={styles.sectionTitle}>What the studio takes on.</h2></div>
          <p>One engineer, full depth. Projects where biology, construction, and production software compound instead of merely coexisting.</p>
        </div>
        <div className={styles.serviceGrid}>
          {SERVICES.map(([n, title, body]) => <article key={n} className={styles.serviceCard}>
            <span className={styles.serviceNum}>{n}</span><h3>{title}</h3><p>{body}</p>
          </article>)}
        </div>
      </section>

      <section id="work" className={styles.section}>
        <div className={styles.sectionHead}>
          <div><p className={styles.eyebrow}>Selected work</p><h2 className={styles.sectionTitle}>One project per layer.</h2></div>
          <p>Curated for structural bones — each entry demonstrates a different skill, with live repository data pulled from GitHub.</p>
        </div>
        <div className={styles.workGrid}>
          {projects.map((p) => <article key={p.repo} className={styles.workCard}>
            <p className={styles.eyebrow}>{p.layer}</p>
            <h3>{p.title}</h3>
            <p>{p.blurb}</p>
            <div className={styles.stack}>{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
            <div className={styles.liveRow}>
              {p.live ? <>
                <span><span className={styles.liveDot} />live from GitHub</span>
                {p.live.language && <span><strong>{p.live.language}</strong></span>}
                {p.live.pushedAt && <span>updated {formatPushed(p.live.pushedAt)}</span>}
              </> : <span>repository</span>}
              <a className={styles.repoLink} href={p.url}>GitHub ↗</a>
            </div>
          </article>)}
          <article className={`${styles.workCard} ${styles.flagship}`}>
            <p className={styles.eyebrow}>{FLAGSHIP.layer}</p>
            <h3>{FLAGSHIP.title}</h3>
            <p>{FLAGSHIP.blurb}</p>
            <div className={styles.stack}>{FLAGSHIP.stack.map((s) => <span key={s}>{s}</span>)}</div>
            <div className={styles.flagshipLinks}>
              {FLAGSHIP.links.map(([label, href]) => <a key={href} href={href}>{label} ↗</a>)}
            </div>
          </article>
        </div>
      </section>

      <section id="about" className={`${styles.section} ${styles.about}`}>
        <div><p className={styles.eyebrow}>About</p><h2>An unusual cross-section.</h2></div>
        <div>
          <p>Daniel C. Barletta trained as a biologist, spent years building in the physical world — framing, masonry, landscape — and now ships production software. Strata Works is where those layers compound: scientific interfaces that respect the data, product software that respects the user, and imagined worlds that respect their own ecology.</p>
          <p>He is also the author D.C. Barletta, whose World of Tethys series and its interactive platform serve as the studio&apos;s long-running proving ground for systems that have to hold together under narrative, ecological, and engineering load at once.</p>
          <p className={styles.aboutNote}>Good systems are built in layers — and every layer bears load.</p>
        </div>
      </section>

      <section id="contact" className={`${styles.section} ${styles.contact}`}>
        <p className={styles.eyebrow}>Contact</p>
        <h2>Lay the first course.</h2>
        <p>Project inquiries, collaborations, and consulting — one conversation to find out whether the bones are right.</p>
        <a className={styles.emailLink} href={`mailto:${EMAIL}?subject=Strata Works inquiry`}>{EMAIL} <span aria-hidden="true">↗</span></a>
      </section>
    </main>
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} Strata Works · Daniel C. Barletta</span>
      <span><a href="https://dcbarletta.com">dcbarletta.com</a> · <a href="https://worldoftethys.com">worldoftethys.com</a> · <a href="https://github.com/DanielBarletta81">GitHub</a></span>
    </footer>
  </div>;
}
