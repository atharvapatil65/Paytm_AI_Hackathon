"use client";

import { useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BarChart3, BellRing, BookOpen, Bot,
  Check, ChevronRight, Clock3, CreditCard, Gift, Globe2, Headphones,
  HeartHandshake, Instagram, Landmark, Menu, MessageCircle, Mic2, Package,
  Play, ReceiptText, ShoppingBag, Sparkles, Store, TicketCheck,
  TrendingUp, Users, Wallet, X,
} from "lucide-react";
import Demo from "./Demo";

const problems = [
  { icon: Store, title: "A great shop, hard to find online", text: "A physical storefront can only serve the people who pass by." },
  { icon: MessageCircle, title: "Every question needs a person", text: "Queries arrive on multiple channels and take time away from the counter." },
  { icon: BookOpen, title: "The ledger lives in too many places", text: "Credit, payments, and follow ups are still tracked by hand." },
  { icon: TrendingUp, title: "Growth is left to guesswork", text: "Past customers, patterns, and opportunities are easy to miss." },
];

const featureGroups = [
  {
    number: "01", eyebrow: "BE DISCOVERED", title: "Your shop can be everywhere.",
    description: "Create a digital storefront, add products and inventory, and let customers order from the places they already use.",
    icon: ShoppingBag, tint: "sky", items: ["Online web store", "WhatsApp & Instagram orders", "Paytm payments & payment links"],
    visual: "commerce",
  },
  {
    number: "02", eyebrow: "SERVE FASTER", title: "Every conversation gets a thoughtful answer.",
    description: "Policy-aware AI helps with common questions across web, social, and voice. It verifies issues, opens tickets, and escalates complex cases.",
    icon: Headphones, tint: "lavender", items: ["AI customer support", "Voice and social channels", "Verified ticket escalation"],
    visual: "support",
  },
  {
    number: "03", eyebrow: "STAY ON TOP", title: "The money story, finally clear.",
    description: "A digital khata connects transactions, credit, and pending payments. Saha can surface what is due and help send timely reminders.",
    icon: Wallet, tint: "peach", items: ["Digital khata", "Customer & business dues", "Message and voice reminders"],
    visual: "khata",
  },
  {
    number: "04", eyebrow: "GROW WITH INTENT", title: "Turn everyday data into the next good move.",
    description: "Understand sales and customers, bring previous buyers back, and discover support available through relevant government schemes.",
    icon: BarChart3, tint: "mint", items: ["Actionable growth insights", "Personalized offers & loyalty", "Scheme eligibility guidance"],
    visual: "growth",
  },
];

const channels = [
  { icon: Globe2, label: "Web store" }, { icon: MessageCircle, label: "WhatsApp" },
  { icon: Instagram, label: "Instagram" }, { icon: Store, label: "In-store / POS" },
  { icon: Mic2, label: "Voice" }, { icon: CreditCard, label: "Paytm" },
];

function Brand({ light = false }: { light?: boolean }) {
  return <a href="#top" className={`brand ${light ? "brand-light" : ""}`} aria-label="SAHAKAR home">
    <span className="brand-mark"><span /><span /><span /><span /></span>
    <span>SAHAKAR<span className="brand-dot">.</span></span>
  </a>;
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return <div className="section-heading">
    <span className="eyebrow"><span className="eyebrow-line" />{eyebrow}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>;
}

function MiniVisual({ type }: { type: string }) {
  if (type === "commerce") return <div className="feature-visual feature-visual-commerce">
    <div className="shop-window">
      <div className="shop-top"><span className="small-logo">S</span><span>Meera&apos;s Store</span><span className="tiny-pill">OPEN</span></div>
      <div className="shop-banner"><span>Everyday essentials,<br /><b>one tap away.</b></span><ShoppingBag size={44} strokeWidth={1.5} /></div>
      <div className="product-row"><div className="product"><span>☕</span><b>Masala Chai</b><small>₹80</small></div><div className="product"><span>🍯</span><b>Wild Honey</b><small>₹320</small></div><div className="product"><span>🫙</span><b>Homemade Pickle</b><small>₹180</small></div></div>
    </div>
    <div className="float-card commerce-float"><span className="float-icon green"><Check size={15} /></span><span><b>New order received</b><small>Paid with Paytm · ₹580</small></span></div>
  </div>;
  if (type === "support") return <div className="feature-visual feature-visual-support"><div className="chat-card">
    <div className="chat-head"><span className="avatar-mini">A</span><span><b>Customer conversation</b><small>WhatsApp · just now</small></span><span className="online-dot" /></div>
    <div className="chat-bubble customer">My jar arrived damaged. Can you help?</div>
    <div className="chat-bubble agent"><span className="mini-saha"><Sparkles size={13} /> Saha</span><br />I&apos;m sorry about that. Could you share your order ID and a photo? I&apos;ll verify it and raise a ticket.</div>
    <div className="ticket-line"><TicketCheck size={17} /><span>Ticket #1024 created</span><span>Needs review</span></div>
  </div></div>;
  if (type === "khata") return <div className="feature-visual feature-visual-khata"><div className="khata-card">
    <div className="khata-head"><span><small>DIGITAL KHATA</small><strong>Everything adds up.</strong></span><ReceiptText size={26} /></div>
    <div className="khata-metrics"><div><small>Total collected</small><b>₹48,250</b><span>↑ 12% this week</span></div><div><small>Pending dues</small><b>₹7,800</b><span>3 payments to follow up</span></div></div>
    <div className="ledger-row"><span className="ledger-avatar">RK</span><span><b>Ravi Kumar</b><small>Due in 2 days</small></span><strong>₹2,400</strong></div>
    <div className="ledger-row"><span className="ledger-avatar pink">SP</span><span><b>Sana Patel</b><small>Overdue by 1 day</small></span><strong>₹1,200</strong></div>
  </div><div className="float-card khata-float"><BellRing size={18} /><span>Friendly reminder ready</span></div></div>;
  return <div className="feature-visual feature-visual-growth"><div className="growth-card">
    <div className="growth-head"><span><small>SAHA&apos;S INSIGHT</small><b>Here&apos;s an opportunity</b></span><Sparkles size={20} /></div>
    <div className="growth-bars"><span style={{height:"38%"}} /><span style={{height:"54%"}} /><span style={{height:"47%"}} /><span style={{height:"73%"}} /><span style={{height:"61%"}} /><span style={{height:"90%"}} /><span style={{height:"82%"}} /></div>
    <p>18 regulars haven&apos;t visited in 30 days. A personal offer could bring them back.</p>
    <div className="growth-action"><Gift size={16} /> Create a comeback offer <ArrowRight size={16} /></div>
  </div><div className="scheme-float"><Landmark size={18} /><span>Scheme match found</span><Check size={16} /></div></div>;
}

export default function LandingPage() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const scrollTo = (id: string) => { setMobileMenu(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  return <main id="top">
    <header className="site-header">
      <div className="container nav-inner"><Brand />
        <nav className={mobileMenu ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          <a href="#features" onClick={() => setMobileMenu(false)}>Features</a><a href="#how-it-works" onClick={() => setMobileMenu(false)}>How it works</a>
          <button className="nav-demo" onClick={() => scrollTo("demo")}>Try demo <ArrowUpRight size={16} /></button>
        </nav><button className="menu-toggle" aria-label={mobileMenu ? "Close menu" : "Open menu"} onClick={() => setMobileMenu(!mobileMenu)}>{mobileMenu ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
    </header>

    <section className="hero">
      <div className="hero-glow hero-glow-one" /><div className="hero-glow hero-glow-two" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-tag"><span className="pulse-dot" /> PAYTM AI HACKATHON <span className="tag-separator" /> MERCHANT GROWTH AI</div>
          <h1>Every small shop<br />deserves a <em>big future.</em></h1>
          <p>Meet <strong>SAHAKAR</strong> — an AI business partner that helps local merchants sell online, serve customers, manage money, and find their next opportunity.</p>
          <div className="hero-actions"><button className="button-primary" onClick={() => scrollTo("features")}>Explore Features <ArrowRight size={19} /></button><button className="button-secondary" onClick={() => scrollTo("demo")}><span className="play-circle"><Play size={13} fill="currentColor" /></span> Demo Mode</button></div>
          <div className="hero-note"><span className="avatar-stack"><span>🛍️</span><span>💬</span><span>📈</span></span><span>One connected journey, from first sale to lasting growth.</span></div>
        </div>
        <div className="hero-art" aria-label="Illustration of a merchant dashboard connected to Saha AI">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="hero-card hero-sales"><span className="hero-card-icon blue"><TrendingUp size={19} /></span><span><small>TODAY&apos;S SALES</small><b>₹12,480</b><small className="positive">↗ 18% vs yesterday</small></span></div>
          <div className="hero-card hero-message"><span className="hero-card-icon green"><MessageCircle size={18} /></span><span><b>New WhatsApp order</b><small>Ready for Paytm checkout</small></span></div>
          <div className="main-dashboard"><div className="dashboard-top"><span><span className="dash-dot" /> Merchant workspace</span><span className="dashboard-dots"><i /><i /><i /></span></div>
            <div className="dashboard-body"><div className="dash-greeting"><span><small>GOOD MORNING, MEERA 👋</small><strong>Your business is looking up.</strong></span><span className="date-chip">Today · Sep 25</span></div>
              <div className="dash-stats"><div><small>Sales</small><b>₹12.4k</b><span className="mini-line" /></div><div><small>Orders</small><b>32</b><span className="mini-line purple" /></div><div><small>Customers</small><b>118</b><span className="mini-line teal" /></div></div>
              <div className="dash-saha"><span className="saha-bot"><Bot size={27} /></span><span><small>SAHA HAS AN IDEA</small><b>8 customers may be ready for a comeback offer.</b></span><ArrowUpRight size={18} /></div>
              <div className="dash-list"><div><span className="list-icon orange"><ShoppingBag size={15} /></span><span>New online order</span><b>₹580</b></div><div><span className="list-icon lilac"><Wallet size={15} /></span><span>Payment received</span><b>₹1,200</b></div></div>
            </div>
          </div>
          <div className="saha-badge"><span className="saha-orb"><Sparkles size={24} /></span><span><b>Hi, I&apos;m Saha</b><small>Let&apos;s grow together ✨</small></span></div>
        </div>
      </div>
      <div className="hero-bottom container"><span>BUILT FOR THE AMBITION BEHIND EVERY LOCAL BUSINESS</span><button onClick={() => scrollTo("demo")}>Scroll to explore <ArrowDown size={16} /></button></div>
    </section>

    <Demo />

    <section className="story-section" id="story"><div className="container"><div className="story-intro"><div><span className="eyebrow"><span className="eyebrow-line" /> THE EVERYDAY REALITY</span><h2>Meet the merchant<br />behind the numbers.</h2></div><p>Meera runs a neighborhood store. Her customers love her products. But growing the business means juggling messages, handwritten credit, missed follow ups, and decisions made with incomplete information.</p></div>
      <div className="problem-grid">{problems.map((p, i) => <div className="problem-card" key={p.title}><span className="problem-num">0{i+1}</span><div className="problem-icon"><p.icon size={23} strokeWidth={1.7} /></div><h3>{p.title}</h3><p>{p.text}</p></div>)}</div>
      <div className="story-turn"><span className="story-turn-icon"><Sparkles size={21} /></span><p>Now imagine one partner that sees the whole picture and helps Meera act on it.</p><strong>That&apos;s SAHAKAR. <ArrowRight size={17} /></strong></div>
    </div></section>

    <section className="features-section" id="features"><div className="container"><SectionHeading eyebrow="THE SAHAKAR JOURNEY" title="One partner. Every part of the business." text="Follow Meera’s day and see how connected tools become a clearer path to growth." />
      <div className="feature-list">{featureGroups.map((feature, index) => <article className={`feature-row ${index % 2 ? "reverse" : ""}`} key={feature.number}><div className="feature-copy"><span className="feature-number">{feature.number} / 04</span><span className="feature-eyebrow">{feature.eyebrow}</span><h3>{feature.title}</h3><p>{feature.description}</p><div className="feature-points">{feature.items.map(item => <span key={item}><span className="check-small"><Check size={12} strokeWidth={3} /></span>{item}</span>)}</div><button className="text-link" onClick={() => scrollTo("demo")}>See it in Demo Mode <ArrowRight size={17} /></button></div><MiniVisual type={feature.visual} /></article>)}</div>
    </div></section>

    <section className="brain-section" id="how-it-works"><div className="container"><div className="brain-heading"><span className="eyebrow light"><span className="eyebrow-line" /> HOW IT ALL CONNECTS</span><h2>Many touchpoints.<br /><em>One business brain.</em></h2><p>Orders, queries, and payments flow in from every channel. Saha uses the connected business context to help the merchant take the next action.</p></div>
      <div className="flow-layout"><div className="flow-channels"><span className="flow-label">01 · CUSTOMER TOUCHPOINTS</span><div className="channel-grid">{channels.map(c => <div key={c.label}><c.icon size={21} /><span>{c.label}</span></div>)}</div></div><div className="flow-connector"><span /><ChevronRight size={24} /></div><div className="flow-core"><div className="core-orbit"><span className="core-inner"><Bot size={42} /><b>Saha</b><small>AI Business Agent</small></span></div><span className="flow-label">02 · THE CONNECTED BRAIN</span></div><div className="flow-connector"><span /><ChevronRight size={24} /></div><div className="flow-actions"><span className="flow-label">03 · MERCHANT ACTIONS</span><div><span><ShoppingBag size={17} /> Sell online</span><span><Headphones size={17} /> Support customers</span><span><BellRing size={17} /> Follow up on dues</span><span><BarChart3 size={17} /> Find growth</span></div></div></div>
      <div className="brain-data"><span>ONE BUSINESS BRAIN</span><div>{[{icon:Package,label:"Inventory"},{icon:Users,label:"Customers"},{icon:ShoppingBag,label:"Orders"},{icon:CreditCard,label:"Payments"},{icon:BarChart3,label:"Sales"},{icon:BookOpen,label:"Khata"}].map(item => <span key={item.label}><item.icon size={17} />{item.label}</span>)}</div></div>
    </div></section>

    <section className="impact-section"><div className="container impact-grid"><div><span className="eyebrow"><span className="eyebrow-line" /> THE BIGGER PICTURE</span><h2>When the small things get easier,<br /><em>big things happen.</em></h2><p>SAHAKAR is designed to give merchants more time, better customer experiences, faster cash flow, and the confidence to grow.</p></div><div className="impact-cards"><div><span><ClockIcon /></span><b>Less manual work</b><small>Support, orders, and follow ups move faster.</small></div><div><span><HeartHandshake size={23} /></span><b>Happier customers</b><small>Helpful answers wherever they reach out.</small></div><div><span><TrendingUp size={23} /></span><b>More growth</b><small>Insights become timely, useful actions.</small></div></div></div></section>

    <footer className="footer"><div className="container footer-top"><div><Brand light /><p>Your AI business partner for every merchant.</p></div><div><span>EXPLORE</span><a href="#story">The story</a><a href="#features">Features</a><a href="#demo">Demo Mode</a></div><div><span>PROJECT</span><p>Paytm AI Hackathon</p><p>Track: Merchant Growth AI</p><p>Team SAHAKAR</p></div></div><div className="container footer-bottom"><span>© 2026 SAHAKAR. A hackathon concept experience.</span><span>Made for the merchants who make every neighborhood.</span></div></footer>
  </main>;
}

function ClockIcon() { return <Clock3 size={23} />; }
