"use client"

import { FormEvent, useState } from "react"
import { ArrowUpRight, Plus } from "./icons"

const faqs = [
  ["Do you work with businesses outside the Philippines?", "Yes. Our remote workflows support growing businesses worldwide, with secure document sharing and clear monthly communication."],
  ["Can you clean up overdue books?", "Absolutely. We can organize historical transactions, reconcile accounts, and build a clean foundation for ongoing bookkeeping."],
  ["Which platforms do you support?", "We primarily work with QuickBooks Online, Microsoft Excel, and Google Sheets, including custom reporting and workflow automation."],
]

export function Contact() {
  const [sent, setSent] = useState(false)
  const [active, setActive] = useState<number | null>(0)
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true) }
  return <>
    <section id="contact" className="contact-section">
      <div className="shell contact-grid">
        <div className="contact-copy"><p className="kicker light">Start with a conversation</p><h2>Ready for books that make sense?</h2><p>Tell us where things stand. We&apos;ll help you see the clearest next step—without pressure or accounting jargon.</p><div className="contact-meta"><span>Remote · Philippines</span><a href="mailto:hello@hansonbooks.com">hello@hansonbooks.com</a></div></div>
        <form className="contact-form" onSubmit={submit}>
          <div className="field-row"><label><span>Your name</span><input required name="name" autoComplete="name" placeholder="Jane Smith" /></label><label><span>Work email</span><input required type="email" name="email" autoComplete="email" placeholder="jane@company.com" /></label></div>
          <label><span>What would you like help with?</span><textarea required name="message" rows={4} placeholder="Monthly bookkeeping, cleanup, reporting..." /></label>
          <button type="submit">{sent ? "Message received — thank you" : <>Send an inquiry <ArrowUpRight /></>}</button>
          {sent && <p className="form-note" role="status">This demo form is ready to connect to your preferred inbox or CRM.</p>}
        </form>
      </div>
    </section>
    <section className="faq-section"><div className="shell faq-grid"><div><p className="kicker">Good to know</p><h2>A few answers<br />before we begin.</h2></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className="faq-item" key={question}><button onClick={() => setActive(active === index ? null : index)} aria-expanded={active === index}><span>{question}</span><Plus className={active === index ? "rotate" : ""} /></button><div className="faq-answer" data-open={active === index}><p>{answer}</p></div></div>)}</div></div></section>
  </>
}
