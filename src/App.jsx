import { useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Car,
  CheckCircle2,
  Cog,
  Factory,
  FileCog,
  HardHat,
  Layers3,
  Mail,
  MapPinned,
  Menu,
  Phone,
  ScanLine,
  ShieldCheck,
  Upload,
  Zap,
} from 'lucide-react';

const featureBlocks = [
  {
    title: 'Stop Struggling with "Dumb" Files',
    body: 'Convert STL, mesh, and point-cloud data into editable parametric CAD models your team can modify with confidence.',
    Icon: FileCog,
    tone: 'bg-aqua/10 text-aqua',
  },
  {
    title: 'Eliminate Downtime from Missing Prints',
    body: 'Recreate damaged, obsolete, or undocumented parts so maintenance and production teams can keep moving.',
    Icon: Zap,
    tone: 'bg-signal/15 text-amber-700',
  },
  {
    title: 'Zero-Fitment Risk',
    body: 'Validate critical interfaces, tolerances, and mating geometry before parts reach fabrication or installation.',
    Icon: ShieldCheck,
    tone: 'bg-emerald-100 text-emerald-700',
  },
];

const industries = [
  {
    title: 'Mining & Heavy Industry',
    body: 'Reverse engineer wear parts, castings, guards, brackets, and high-value equipment components.',
    Icon: HardHat,
  },
  {
    title: 'Automotive & Aerospace',
    body: 'Create accurate CAD for legacy parts, tooling, aerodynamic surfaces, fixtures, and custom assemblies.',
    Icon: Car,
  },
  {
    title: 'Manufacturing',
    body: 'Digitise jigs, fixtures, tooling, machine parts, and prototypes into production-ready geometry.',
    Icon: Factory,
  },
  {
    title: 'Architecture & Heritage',
    body: 'Capture complex built forms, facade details, and restoration components for documentation and fabrication.',
    Icon: Building2,
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Precision 3D Scanning',
    body: 'We capture your physical part using high-resolution scanning methods selected for size, finish, and tolerance requirements.',
    Icon: ScanLine,
  },
  {
    step: '02',
    title: 'Point Cloud Processing',
    body: 'Raw scan data is cleaned, aligned, and converted into a reliable mesh or point-cloud reference for engineering work.',
    Icon: Layers3,
  },
  {
    step: '03',
    title: 'Parametric Modeling',
    body: 'Your final CAD model is rebuilt with usable design intent, feature history, and export formats for downstream production.',
    Icon: Cog,
  },
];

const compatibility = ['SolidWorks', 'Autodesk Inventor', 'Solid Edge', 'STEP', 'IGES', 'Parasolid'];
const featureCardTones = ['bg-cyan-50', 'bg-amber-50', 'bg-emerald-50'];
const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Industry', href: '#industry' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#quote' },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-ink text-white shadow-lg shadow-black/10">
      <div className="hidden border-b border-white/10 bg-black/35 sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs font-bold text-slate-300 lg:px-8">
          <a href="mailto:quotes@creatustechnologies.com.au" className="flex items-center gap-2 hover:text-signal">
            <Mail className="h-3.5 w-3.5 text-signal" />
            quotes@creatustechnologies.com.au
          </a>
          <span className="flex items-center gap-2">
            <MapPinned className="h-3.5 w-3.5 text-signal" />
            NSW reverse engineering specialists
          </span>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3 focus-ring rounded-md" aria-label="Creatus Technologies home">
          <span className="grid h-11 w-11 place-items-center rounded-sm bg-signal text-lg font-black text-ink shadow-ring">
            CT
          </span>
          <span className="leading-tight">
            <span className="block text-base font-black tracking-wide text-white sm:text-lg">Creatus</span>
            <span className="block text-xs font-semibold uppercase text-slate-400">Technologies</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-black text-slate-300 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-signal">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:+61280000000"
            className="hidden items-center gap-2 rounded-md px-3 py-2 text-sm font-bold text-slate-200 transition hover:bg-white/10 md:flex"
          >
            <Phone className="h-4 w-4 text-signal" />
            +61 2 8000 0000
          </a>
          <a
            href="#quote"
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-sm bg-signal px-4 py-2.5 text-sm font-black text-ink shadow-sm transition hover:bg-amber-300"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4" />
          </a>
          <button className="focus-ring grid h-10 w-10 place-items-center rounded-sm border border-white/10 text-white lg:hidden" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-[linear-gradient(90deg,rgba(0,0,0,0.18)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px),radial-gradient(circle_at_18%_12%,rgba(245,158,11,0.2),transparent_34%),linear-gradient(135deg,#111827_0%,#172026_55%,#050505_100%)] bg-[size:96px_96px,96px_96px,auto,auto]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:min-h-[650px] lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex items-center gap-2 border-l-4 border-signal bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-wide text-signal shadow-ring">
            <BadgeCheck className="h-4 w-4" />
            Scan-to-CAD specialists in NSW
          </p>
          <h1 className="text-4xl font-black uppercase leading-[0.98] text-white sm:text-5xl lg:text-7xl">
            Convert Physical Parts to Production-Ready <span className="text-signal">CAD Models</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            High-accuracy reverse engineering for manufacturing, mining, and automotive. Get STL to STEP/IGES
            conversion with guaranteed accuracy.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#quote"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-sm bg-signal px-6 py-4 text-base font-black uppercase text-ink shadow-soft transition hover:bg-amber-300"
            >
              Request a Quote
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="tel:+61280000000"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-sm border border-white/20 bg-white/10 px-6 py-4 text-base font-black uppercase text-white transition hover:border-signal hover:text-signal"
            >
              <Phone className="h-5 w-5" />
              Call the team
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 rounded-sm bg-signal/20 blur-2xl" aria-hidden="true" />
          <div className="absolute -right-3 -top-3 h-full w-full border border-signal/35" aria-hidden="true" />
          <img
            src="/assets/scan-cad-hero.jpg"
            alt="Industrial part being prepared for 3D scanning and CAD reverse engineering"
            className="relative aspect-[16/10] w-full rounded-sm border border-white/10 object-cover shadow-soft"
            width="1717"
            height="916"
            fetchPriority="high"
          />
        </div>
      </div>

      <div className="border-y border-slate-200 bg-white shadow-xl shadow-black/5">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <p className="text-sm font-black uppercase text-ink">Trusted CAD workflow support</p>
          <div className="grid flex-1 grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {compatibility.map((item) => (
              <div
                key={item}
                className="rounded-sm border border-slate-200 bg-slate-50 px-3 py-3 text-center text-sm font-black uppercase text-graphite shadow-ring"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <aside id="quote" className="lg:sticky lg:top-24 lg:self-start">
      <form onSubmit={handleSubmit} className="overflow-hidden rounded-sm border border-slate-200 bg-white shadow-soft">
        <div className="bg-ink p-5 text-white sm:p-6">
          <p className="text-sm font-black uppercase text-signal">Project quote</p>
          <h2 className="mt-2 text-2xl font-black uppercase leading-tight">Tell us about your part</h2>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Share the basics and we will review your scan-to-CAD requirements.
          </p>
        </div>

        <div className="space-y-4 p-5 sm:p-6">
          <label className="block">
            <span className="text-sm font-bold text-graphite">Name *</span>
            <input
              required
              type="text"
              name="name"
              autoComplete="name"
              className="focus-ring mt-2 w-full rounded-sm border border-slate-300 bg-white px-4 py-3 text-ink"
              placeholder="Your name"
            />
          </label>
          <label className="block">
            <span className="text-sm font-bold text-graphite">Email *</span>
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              className="focus-ring mt-2 w-full rounded-sm border border-slate-300 bg-white px-4 py-3 text-ink"
              placeholder="you@company.com"
            />
          </label>
          <label className="block">
            <span className="text-sm font-bold text-graphite">Phone *</span>
            <input
              required
              type="tel"
              name="phone"
              autoComplete="tel"
              className="focus-ring mt-2 w-full rounded-sm border border-slate-300 bg-white px-4 py-3 text-ink"
              placeholder="+61"
            />
          </label>
          <label className="block">
            <span className="text-sm font-bold text-graphite">File Upload</span>
            <span className="focus-ring mt-2 flex cursor-pointer items-center gap-3 rounded-sm border border-dashed border-slate-300 bg-slate-50 px-4 py-4 text-sm font-bold text-steel transition hover:border-signal hover:bg-amber-50">
              <Upload className="h-5 w-5 text-signal" />
              Attach STL, scan, image, or drawing
              <input type="file" name="file" className="sr-only" />
            </span>
          </label>
          <label className="block">
            <span className="text-sm font-bold text-graphite">Comments</span>
            <textarea
              name="comments"
              rows="4"
              className="focus-ring mt-2 w-full resize-y rounded-sm border border-slate-300 bg-white px-4 py-3 text-ink"
              placeholder="Part size, material, tolerances, required file format..."
            />
          </label>

          <button
            type="submit"
            className="focus-ring mt-2 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-signal px-6 py-4 text-base font-black uppercase text-ink transition hover:bg-amber-300"
          >
            Submit Request
            <ArrowRight className="h-5 w-5" />
          </button>

          {submitted && (
            <p className="mt-4 flex items-start gap-2 rounded-sm bg-emerald-50 p-3 text-sm font-bold leading-6 text-emerald-800">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
              Thanks. Your frontend quote request has been captured for this demo.
            </p>
          )}
        </div>
      </form>
    </aside>
  );
}

function SectionHeading({ eyebrow, title, children, dark = false }) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow && (
        <p className={`flex items-center gap-3 text-sm font-black uppercase tracking-wide ${dark ? 'text-signal' : 'text-signal'}`}>
          <span className="h-0.5 w-8 bg-current" />
          {eyebrow}
        </p>
      )}
      <h2 className={`mt-3 text-3xl font-black uppercase leading-tight sm:text-4xl ${dark ? 'text-white' : 'text-ink'}`}>{title}</h2>
      {children && <p className={`mt-4 text-lg leading-8 ${dark ? 'text-slate-300' : 'text-steel'}`}>{children}</p>}
    </div>
  );
}

function MainContent() {
  return (
    <main className="bg-[linear-gradient(90deg,rgba(15,23,42,0.055)_1px,transparent_1px),linear-gradient(180deg,rgba(15,23,42,0.055)_1px,transparent_1px),#f4f6f8] bg-[size:96px_96px]">
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1fr)_390px] lg:px-8">
        <div className="rounded-sm border border-slate-200 bg-white p-6 shadow-ring sm:p-8">
          <p className="mb-4 flex items-center gap-3 text-sm font-black uppercase tracking-wide text-signal">
            <span className="h-0.5 w-8 bg-current" />
            Who we are
          </p>
          <h1 className="text-3xl font-black uppercase leading-tight text-ink sm:text-5xl">
            Scan to CAD & Reverse Engineering Services in NSW
          </h1>
          <p className="mt-5 text-lg leading-8 text-steel">
            Creatus Technologies helps engineering, maintenance, and production teams convert real-world parts into
            accurate CAD data ready for design, inspection, tooling, and manufacture. From obsolete mining components
            to automotive prototypes and production fixtures, we turn physical geometry into reliable digital models.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {['Guaranteed accuracy', 'Manufacturing-ready files', 'Fast NSW support'].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-sm bg-slate-50 p-3 text-sm font-black text-graphite">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-signal" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <QuoteForm />
      </section>

      <div className="mx-auto max-w-7xl space-y-14 px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
        <section id="services" className="scroll-mt-28">
          <SectionHeading
            eyebrow="Engineering outcomes"
            title="Tailored 3D Solutions for Your Complex Engineering Challenges"
          >
            Get clean geometry, reliable measurement confidence, and CAD files that fit how your engineers already
            work.
          </SectionHeading>
          <div className="grid gap-4 md:grid-cols-3">
            {featureBlocks.map(({ title, body, Icon, tone }, index) => (
              <article
                key={title}
                className={`relative min-h-64 overflow-hidden rounded-sm border border-slate-200 p-6 shadow-ring ${featureCardTones[index]}`}
              >
                <span className="absolute right-4 top-0 text-8xl font-black leading-none text-slate-200/60">
                  0{index + 1}
                </span>
                <div className={`relative mb-10 inline-grid h-12 w-12 place-items-center rounded-sm ${tone}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="relative text-xl font-black uppercase tracking-wide text-ink">{title}</h3>
                <p className="relative mt-3 text-sm leading-6 text-steel">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="industry" className="scroll-mt-28 rounded-sm bg-ink p-6 text-white shadow-soft sm:p-8">
          <SectionHeading
            eyebrow="Industries"
            title="Comprehensive Scan-to-CAD Workflows for Every Industry"
            dark
          >
            Practical workflows for one-off parts, legacy assets, high-value equipment, and production environments.
          </SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2">
            {industries.map(({ title, body, Icon }, index) => (
              <article key={title} className="relative min-h-56 overflow-hidden rounded-sm border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10">
                <span className="absolute right-4 top-2 text-8xl font-black leading-none text-white/5">
                  0{index + 1}
                </span>
                <Icon className="relative h-8 w-8 text-signal" />
                <h3 className="relative mt-12 text-xl font-black uppercase tracking-wide text-white">{title}</h3>
                <p className="relative mt-3 text-sm leading-6 text-slate-300">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="scroll-mt-28">
          <SectionHeading eyebrow="Process" title="Our 3-Step Reverse Engineering Process">
            A clear path from physical sample to editable production model.
          </SectionHeading>
          <div className="grid gap-4 lg:grid-cols-3">
            {processSteps.map(({ step, title, body, Icon }) => (
              <article key={title} className="relative min-h-64 overflow-hidden rounded-sm border border-slate-200 bg-white p-6 shadow-ring">
                <span className="absolute right-4 top-0 text-8xl font-black leading-none text-slate-100">{step}</span>
                <span className="relative grid h-14 w-14 place-items-center rounded-sm bg-signal/15 text-signal">
                  <Icon className="h-8 w-8" />
                </span>
                <h3 className="mt-12 text-xl font-black uppercase tracking-wide text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-steel">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-sm bg-black p-6 text-white shadow-soft sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="flex items-center gap-3 text-sm font-black uppercase tracking-wide text-signal">
                <span className="h-0.5 w-8 bg-current" />
                CAD deliverables
              </p>
              <h2 className="mt-3 text-3xl font-black uppercase leading-tight sm:text-4xl">
                Native Files for Your Existing Workflow
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Receive clean, production-ready outputs compatible with SolidWorks, Autodesk Inventor, Solid Edge,
                STEP, IGES, and Parasolid.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {compatibility.map((item) => (
                <div key={item} className="rounded-sm border border-white/15 bg-white/10 px-3 py-5 text-center text-sm font-black uppercase transition hover:border-signal hover:text-signal">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-sm border border-signal/40 bg-signal p-6 shadow-soft sm:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl font-black uppercase leading-tight text-ink">
                Ready to Start Your Project? Get a Rapid Quote Today
              </h2>
              <p className="mt-3 text-lg leading-8 text-graphite">
                Upload a file, share a drawing, or describe the part and we will help define the right scan-to-CAD
                workflow.
              </p>
            </div>
            <a
              href="#quote"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-sm bg-ink px-6 py-4 text-base font-black uppercase text-white shadow-sm transition hover:bg-graphite"
            >
              Request a Quote
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-300 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p className="font-bold text-white">Creatus Technologies</p>
        <div className="flex flex-wrap gap-4">
          <a className="flex items-center gap-2 hover:text-signal" href="tel:+61280000000">
            <Phone className="h-4 w-4 text-signal" />
            +61 2 8000 0000
          </a>
          <a className="flex items-center gap-2 hover:text-signal" href="mailto:quotes@creatustechnologies.com.au">
            <Mail className="h-4 w-4 text-signal" />
            quotes@creatustechnologies.com.au
          </a>
          <span className="flex items-center gap-2">
            <MapPinned className="h-4 w-4 text-signal" />
            NSW, Australia
          </span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <MainContent />
      <Footer />
    </>
  );
}
