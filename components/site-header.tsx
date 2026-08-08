"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { ArrowUpRight, Close, Menu } from "./icons"

const links = [["services", "Services"], ["process", "Process"], ["about", "About"], ["insights", "Insights"]]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 18)
    update(); addEventListener("scroll", update, { passive: true })
    return () => removeEventListener("scroll", update)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])
  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
    <div className="shell nav-wrap">
      <a href="#top" className="brand" aria-label="Hans On Books home"><Image src="/assets/images/logo/Horizontal Logo.png" alt="Hans On Books" width={1920} height={819} priority /></a>
      <nav className="desktop-nav" aria-label="Primary navigation">{links.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
      <a className="nav-cta" href="#contact">Book a call <ArrowUpRight /></a>
      <button className="menu-button" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <Close /> : <Menu />}</button>
    </div>
    <div className={`mobile-panel ${open ? "is-open" : ""}`}><nav aria-label="Mobile navigation">{links.map(([id, label], index) => <a key={id} style={{ "--i": index } as React.CSSProperties} href={`#${id}`} onClick={() => setOpen(false)}>{label}<span>0{index + 1}</span></a>)}<a href="#contact" onClick={() => setOpen(false)}>Book a discovery call <ArrowUpRight /></a></nav></div>
  </header>
}
