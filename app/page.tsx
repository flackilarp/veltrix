"use client";

import { useState } from "react";

const assets = [
  { ticker: "USDT", name: "Tether", value: "$1.00", change: "Stablecoin" },
  { ticker: "BTC", name: "Bitcoin", value: "₿", change: "Digital gold" },
  { ticker: "ETH", name: "Ethereum", value: "Ξ", change: "Smart contracts" },
  { ticker: "BNB", name: "BNB", value: "◆", change: "BNB Chain" },
  { ticker: "SOL", name: "Solana", value: "◎", change: "High performance" },
  { ticker: "USDC", name: "USD Coin", value: "$1.00", change: "Stablecoin" },
];

export default function Home() {
  const [tab, setTab] = useState("Overview");
  const [plan, setPlan] = useState("Flexible");
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#"><span className="brand-mark">V</span><span>VELTRIX</span></a>
        <nav><a href="#assets">Assets</a><a href="#products">Products</a><a href="#about">About</a></nav>
        <a className="login" href="#dashboard">Open dashboard <span>↗</span></a>
      </header>

      <section className="hero">
        <div className="eyebrow"><span className="dot" /> DIGITAL ASSET PLATFORM</div>
        <h1>Beyond<br /><em>Digital Assets.</em></h1>
        <p className="hero-copy">A considered approach to the evolving world of digital assets. Explore a platform concept built around clarity, access and thoughtful design.</p>
        <div className="hero-actions"><a className="button gold" href="#products">Explore platform <span>↗</span></a><a className="text-link" href="#about">Discover VELTRIX</a></div>
        <div className="hero-note">A DIGITAL FINANCE CONCEPT <span>•</span> EST. 2026</div>
        <div className="orb orb-one" /><div className="orb orb-two" />
      </section>

      <section className="ticker-strip"><span>BUILT FOR THE NEXT ERA</span><b>BTC</b><b>ETH</b><b>USDT</b><b>BNB</b><b>SOL</b><b>USDC</b></section>

      <section className="section" id="assets">
        <div className="section-head"><div><div className="eyebrow">SUPPORTED ASSETS</div><h2>One platform.<br /><em>Multiple possibilities.</em></h2></div><p>Explore a curated selection of leading digital assets in this platform demonstration.</p></div>
        <div className="asset-grid">{assets.map(a => <article className="asset-card" key={a.ticker}><div className="asset-icon">{a.ticker.slice(0,1)}</div><div><strong>{a.name}</strong><small>{a.ticker}</small></div><span className="asset-value">{a.value}</span><small className="asset-desc">{a.change}</small></article>)}</div>
      </section>

      <section className="product-section" id="products">
        <div className="eyebrow">PLATFORM CONCEPT</div><h2>Choose your<br /><em>investment approach.</em></h2>
        <div className="product-grid">
          <article className="product-card"><div className="product-top"><span>01 / FLEXIBLE</span><span>↗</span></div><h3>Flexible</h3><p>A concept for variable participation, with outcomes that would depend on actual strategy performance and applicable terms.</p><button onClick={() => setPlan("Flexible")}>Explore flexible <span>↗</span></button></article>
          <article className="product-card featured"><div className="product-top"><span>02 / FIXED-TERM</span><span>✳</span></div><h3>Fixed-term</h3><p>A concept for defined durations and disclosed terms. Any real product would require clear risk and liquidity disclosures.</p><button onClick={() => setPlan("Fixed-term")}>Explore fixed-term <span>↗</span></button></article>
        </div>
      </section>

      <section className="dashboard section" id="dashboard">
        <div className="dashboard-heading"><div><div className="eyebrow">PREVIEW ENVIRONMENT</div><h2>Your assets,<br /><em>at a glance.</em></h2></div><span className="demo-pill">DEMO ONLY</span></div>
        <div className="dash-shell">
          <aside className="dash-side"><div className="dash-brand"><span className="brand-mark">V</span> VELTRIX</div>{["Overview","Portfolio","Activity","Settings"].map(x => <button className={tab === x ? "active" : ""} onClick={() => setTab(x)} key={x}>{x}</button>)}</aside>
          <div className="dash-main"><div className="dash-welcome"><div><small>WELCOME BACK</small><h3>{tab}</h3></div><span>● DEMO ACCOUNT</span></div>
            <div className="balance-card"><small>DEMO PORTFOLIO VALUE</small><div className="balance">$24,680.50</div><p>Illustrative balance · Not real funds</p></div>
            <div className="dash-stats"><div><small>ASSETS</small><b>06</b></div><div><small>ACTIVE PLANS</small><b>02</b></div><div><small>ACCOUNT STATUS</small><b className="gold-text">Preview</b></div></div>
            <div className="activity"><div className="activity-head"><b>Recent activity</b><small>DEMO DATA</small></div><div className="activity-row"><span>Portfolio created</span><small>Sample entry</small><b>—</b></div><div className="activity-row"><span>Asset overview viewed</span><small>Sample entry</small><b>—</b></div></div>
          </div>
        </div>
      </section>

      <section className="about section" id="about"><div className="eyebrow">OUR PRINCIPLES</div><h2>Clarity is the<br /><em>new currency.</em></h2><p>VELTRIX is currently a visual product demonstration. Real investment services, deposits, withdrawals, custody, and returns are not available through this website.</p></section>
      <footer><a className="brand" href="#"><span className="brand-mark">V</span><span>VELTRIX</span></a><span>Beyond Digital Assets.</span><small>© 2026 VELTRIX. Demo concept only. Not financial advice.</small></footer>
      <div className="disclaimer">DEMO WEBSITE — NO REAL DEPOSITS, WITHDRAWALS OR INVESTMENT RETURNS.</div>
    </main>
  );
}
