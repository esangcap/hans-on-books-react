import Image from "next/image"
import { Contact } from "@/components/contact"
import { ArrowUpRight, Check } from "@/components/icons"
import { Reveal } from "@/components/reveal"
import { SiteHeader } from "@/components/site-header"

const services = [
  ["01", "Monthly bookkeeping", "Accurate categorization, reconciliations, and a dependable close every month."],
  ["02", "Cleanup & catch-up", "Untangle overdue records and rebuild a clean, reliable financial foundation."],
  ["03", "Financial reporting", "Decision-ready profit and loss, balance sheet, and cash flow reporting."],
  ["04", "Systems & automation", "Smarter QuickBooks and spreadsheet workflows that reduce repetitive work."],
]

const steps = [
  ["Discover", "We learn how your business runs, where the friction lives, and what clarity would change."],
  ["Organize", "We reconcile the past, structure the workflow, and establish a reliable monthly rhythm."],
  ["Understand", "You receive clean reports with context—not a pile of numbers left to decipher."],
]

export default function Home() {
  return <>
    <SiteHeader />
    <main>
      <section id="top" className="hero">
        <div className="hero-noise" />
        <div className="shell hero-layout">
          <div className="hero-copy">
            <p className="hero-kicker">Bookkeeping for growing businesses</p>
            <h1>Good books.<br /><em>Clear decisions.</em></h1>
            <p className="hero-intro">We bring calm, structure, and useful financial insight to the numbers behind your business.</p>
            <div className="hero-actions"><a className="button primary" href="#contact">Book a discovery call <ArrowUpRight /></a><a className="text-link" href="#services">Explore our services <span>↓</span></a></div>
          </div>
          <div className="hero-visual" aria-label="An organized monthly financial ledger">
            <div className="brand-mark"><Image src="/assets/images/logo/favicon.ico/Icon Only - No Background.png" alt="" width={1024} height={1024} loading="eager" /></div>
            <div className="ledger-card">
              <div className="ledger-head"><div><span>Monthly overview</span><strong>July 2026</strong></div><span className="ledger-status"><i /> Books closed</span></div>
              <div className="ledger-total"><span>Net operating income</span><strong>₱328,000</strong><small>+12.8% from last month</small></div>
              <div className="chart" aria-hidden="true"><svg viewBox="0 0 500 150" preserveAspectRatio="none"><defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#57aa78" stopOpacity=".42"/><stop offset="1" stopColor="#57aa78" stopOpacity="0"/></linearGradient></defs><path d="M0 126C48 119 65 112 97 116s49-43 90-33 54 24 91-3 58-11 84-36 69-11 138-38V150H0Z" fill="url(#area)"/><path d="M0 126C48 119 65 112 97 116s49-43 90-33 54 24 91-3 58-11 84-36 69-11 138-38" fill="none" stroke="#73c490" strokeWidth="3" vectorEffect="non-scaling-stroke"/></svg></div>
              <div className="ledger-foot"><span><i className="emerald" /> Revenue <b>₱842k</b></span><span><i className="gold" /> Expenses <b>₱514k</b></span></div>
            </div>
            <div className="reconcile-chip"><Check /><span><small>Bank reconciliation</small><strong>Completed</strong></span></div>
          </div>
        </div>
        <div className="hero-proof shell"><span>QuickBooks Online</span><span>Financial reporting</span><span>Workflow automation</span><span>Remote partnership</span></div>
      </section>

      <section id="services" className="services-section"><div className="shell">
        <Reveal className="section-intro"><p className="kicker">What we do</p><h2>Financial order,<br />built around you.</h2><p>From month-end close to custom systems, every engagement is designed to make your financial operations feel lighter.</p></Reveal>
        <div className="service-list">{services.map(([number, title, copy], index) => <Reveal key={title} delay={index * 70}><article className="service-row"><span>{number}</span><h3>{title}</h3><p>{copy}</p><a href="#contact" aria-label={`Ask about ${title}`}><ArrowUpRight /></a></article></Reveal>)}</div>
      </div></section>

      <section id="process" className="process-section"><div className="shell process-grid">
        <Reveal className="process-title"><p className="kicker light">A better monthly rhythm</p><h2>Your numbers should bring focus—not friction.</h2><p>Our process is structured enough to be dependable and personal enough to fit the way you work.</p><a href="#contact">See how we can help <ArrowUpRight /></a></Reveal>
        <div className="process-steps">{steps.map(([title, copy], index) => <Reveal key={title} delay={index * 90}><article><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></article></Reveal>)}</div>
      </div></section>

      <section id="about" className="about-section"><div className="shell about-grid">
        <Reveal className="about-art"><div className="book-lines"><span /><span /><span /><span /><span /></div><Image src="/assets/images/logo/favicon.ico/Icon Only - No Background.png" alt="Hans On Books emblem" width={1024} height={1024} /></Reveal>
        <Reveal className="about-copy" delay={100}><p className="kicker">Why Hans On Books</p><h2>There&apos;s a human story behind every number.</h2><p className="lead">Hans On Books helps owners feel informed, prepared, and in control of their finances.</p><p>We pair careful bookkeeping with thoughtful systems and plain-language reporting. The result is more than tidy accounts—it&apos;s a financial foundation you can trust as your business grows.</p><div className="about-points"><span><Check /> Accurate by design</span><span><Check /> Built for your workflow</span><span><Check /> Explained in plain language</span></div></Reveal>
      </div></section>

      <section id="insights" className="insights-section"><div className="shell">
        <Reveal className="insights-head"><div><p className="kicker">Useful by nature</p><h2>Clarity you can use.</h2></div><p>Practical thinking for healthier books and better business decisions.</p></Reveal>
        <div className="insight-grid"><Reveal><a href="#contact" className="featured-insight"><span className="insight-label">Cash flow · 6 min read</span><h3>Profit is a signal.<br />Cash is your runway.</h3><p>Why the two tell different stories—and how to read both.</p><ArrowUpRight /></a></Reveal><div className="insight-list">{[["Month-end", "A cleaner close starts before the last day"], ["QuickBooks", "Five signs your setup needs attention"], ["Reporting", "The three reports every owner should know"]].map(([tag, title], index) => <Reveal key={title} delay={index * 70}><a href="#contact"><span>{tag}</span><h3>{title}</h3><ArrowUpRight /></a></Reveal>)}</div></div>
      </div></section>
      <Contact />
    </main>
    <footer><div className="shell footer-main"><a href="#top" className="footer-brand"><Image src="/assets/images/logo/Dark Background.png" alt="Hans On Books" width={1774} height={887} /></a><p>Good books. Clear decisions.<br />A steadier way forward.</p><div className="footer-links"><a href="#services">Services</a><a href="#process">Process</a><a href="#about">About</a><a href="#contact">Contact</a></div></div><div className="shell footer-bottom"><span>© 2026 Hans On Books</span><span>Bookkeeping solutions · Philippines & worldwide</span></div></footer>
  </>
}
