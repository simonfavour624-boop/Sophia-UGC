import { useState, type FormEvent } from 'react';
import {
  AlertCircle,
  ArrowRight,
  Check,
  CheckCircle2,
  Instagram,
  Mail,
  MapPin,
  Play,
  Star,
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { SafeImage } from './components/SafeImage';
import { VideoModal } from './components/VideoModal';
import {
  ABOUT_IMAGE,
  HERO_IMAGE,
  PORTFOLIO_ITEMS,
  SERVICE_PACKAGES,
  TESTIMONIALS,
  TRUSTED_BRANDS,
  TRUST_STATS,
  type PackageOption,
  type PortfolioCategory,
  type PortfolioItem,
} from './data/portfolioData';

const CATEGORIES: PortfolioCategory[] = ['All', 'Skincare', 'Makeup & Hair', 'Ads & Lifestyle'];

function TikTokIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3 15.28a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.81a8.26 8.26 0 0 0 4.79 1.52V6.88c-.3 0-.59-.06-.88-.19Z" />
    </svg>
  );
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('All');
  const [selectedVideo, setSelectedVideo] = useState<PortfolioItem | null>(null);

  // Booking form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [brandName, setBrandName] = useState('');
  const [selectedPackage, setSelectedPackage] = useState<PackageOption>('3 Videos');
  const [message, setMessage] = useState('');
  const [packagePreselectedNote, setPackagePreselectedNote] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [submittedInquiry, setSubmittedInquiry] = useState<{
    name: string;
    brandName: string;
    packageChoice: PackageOption;
    email: string;
  } | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectPackage = (pkg: PackageOption) => {
    setSelectedPackage(pkg);
    setSubmittedInquiry(null);
    setFormError(null);
    setPackagePreselectedNote(`${pkg} selected for your inquiry.`);
    scrollToSection('contact');
  };

  const handleBookFromModal = (pkg: PackageOption) => {
    setSelectedVideo(null);
    handleSelectPackage(pkg);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedBrand = brandName.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedBrand || !trimmedMessage) {
      setFormError('Please fill in your name, email, brand name, and campaign message.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setFormError('Please enter a valid work or brand email address.');
      return;
    }

    setSubmittedInquiry({
      name: trimmedName,
      brandName: trimmedBrand,
      packageChoice: selectedPackage,
      email: trimmedEmail,
    });
    setPackagePreselectedNote(null);
  };

  const handleResetForm = () => {
    setName('');
    setEmail('');
    setBrandName('');
    setMessage('');
    setSubmittedInquiry(null);
    setFormError(null);
  };

  const filteredWork =
    activeCategory === 'All'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div id="top" className="min-h-screen flex flex-col bg-white text-[#111111]">
      {/* 1. TOP NAVBAR */}
      <Navbar onNavigate={scrollToSection} />

      <main className="flex-1">
        {/* 2. HERO SECTION */}
        <section className="bg-white py-14 sm:py-20 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
              {/* Left Column: Editorial Headline, Subtext & Dual Actions */}
              <div className="lg:col-span-7 flex flex-col justify-center py-2">
                <div className="mb-5 space-y-1.5">
                  <p className="text-sm font-medium text-[#111111]/65 flex flex-wrap items-center gap-2">
                    <span className="font-semibold text-[#111111]">Sophia Reyes</span>
                    <span aria-hidden="true">·</span>
                    <span>Beauty, Skincare &amp; Lifestyle UGC</span>
                    <span aria-hidden="true">·</span>
                    <span>Manila, Philippines</span>
                  </p>
                  <p className="text-sm font-medium text-[#111111]/75 flex flex-wrap items-center gap-2 tabular-nums">
                    <a
                      href="https://instagram.com/sophiaugc.ph"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-[#9D4456] hover:text-[#111111] underline underline-offset-4 decoration-[#E89BA8] transition-colors"
                    >
                      <Instagram className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>@sophiaugc.ph</span>
                    </a>
                    <span aria-hidden="true" className="text-[#111111]/35">
                      |
                    </span>
                    <span>45K Followers on TikTok</span>
                  </p>
                </div>

                <h1 className="font-display text-[clamp(2.25rem,4vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-[#111111] text-balance max-w-2xl mb-6">
                  UGC That Makes Filipino Brands Go Viral
                </h1>

                <p className="text-base sm:text-lg leading-relaxed text-[#111111]/75 max-w-xl mb-8">
                  I help beauty &amp; skincare brands in the Philippines create authentic,
                  high-converting content for TikTok, Instagram Reels &amp; Ads.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => scrollToSection('work')}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#111111] rounded-xl hover:bg-[#2A2A2A] active:scale-[0.98] transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
                  >
                    <span>View My Work</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => scrollToSection('contact')}
                    className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-[#111111] bg-[#F7D6D8]/60 hover:bg-[#F7D6D8] border border-[#111111]/10 rounded-xl active:scale-[0.98] transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
                  >
                    Book Me
                  </button>
                </div>

                <p className="mt-8 pt-6 border-t border-[#111111]/10 text-sm text-[#111111]/65 max-w-lg">
                  &ldquo;I create scroll-stopping UGC that sells for beauty &amp; lifestyle brands in
                  the Philippines.&rdquo;
                </p>
              </div>

              {/* Right Column: Large Portrait Container */}
              <div className="lg:col-span-5 flex">
                <div className="relative w-full rounded-2xl overflow-hidden bg-[#F5EFE6] shadow-[0_20px_50px_rgba(17,17,17,0.08)] min-h-[380px] sm:min-h-[460px] lg:min-h-[520px]">
                  <SafeImage
                    src={HERO_IMAGE}
                    alt="Sophia Reyes holding a skincare serum bottle and smiling in natural Manila studio light"
                    fallbackTitle="Sophia Reyes · Manila"
                    className="w-full h-full lg:h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. TRUST BAR */}
        <section
          aria-label="Brand trust and creator performance metrics"
          className="bg-[#F5EFE6] border-y border-[#111111]/10 py-10 sm:py-12"
        >
          <div className="max-w-[1200px] mx-auto px-6 space-y-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-[#111111]/10">
              <p className="font-display text-sm font-semibold text-[#111111]">
                Trusted by 30+ Filipino Brands
              </p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm font-semibold tracking-tight text-[#111111]/55">
                {TRUSTED_BRANDS.map((brand) => (
                  <span key={brand} className="whitespace-nowrap">
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {TRUST_STATS.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] tabular-nums">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[#111111]/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. MY WORK / PORTFOLIO */}
        <section id="work" className="bg-white py-20 sm:py-24 scroll-mt-16">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="max-w-xl space-y-3">
                <p className="text-xs font-semibold tracking-wide text-[#9D4456]">
                  Portfolio Showcase
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] text-balance">
                  Recent UGC Work
                </h2>
                <p className="text-[15px] leading-relaxed text-[#111111]/70">
                  Short-form videos engineered to stop the scroll in the first three seconds and
                  convert viewers into checkouts on TikTok Shop, Shopee, and Instagram.
                </p>
              </div>

              {/* Interactive Category Filter Tabs */}
              <div
                role="tablist"
                aria-label="Filter UGC portfolio by category"
                className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#F5EFE6] rounded-xl self-start md:self-auto"
              >
                {CATEGORIES.map((category) => {
                  const isActive = activeCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveCategory(category)}
                      className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                        isActive
                          ? 'bg-white text-[#111111] shadow-xs'
                          : 'text-[#111111]/65 hover:text-[#111111]'
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3-Column Video Thumbnail Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredWork.map((item) => (
                <article
                  key={item.id}
                  className="group relative rounded-2xl overflow-hidden bg-[#F5EFE6] shadow-[0_12px_32px_rgba(17,17,17,0.06)] transition-transform duration-200 hover:-translate-y-1"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedVideo(item)}
                    aria-label={`Play preview for ${item.title} (${item.views})`}
                    className="w-full text-left block relative aspect-[3/4] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
                  >
                    <SafeImage
                      src={item.image}
                      alt={`${item.title} — ${item.platform} UGC video by Sophia Reyes`}
                      fallbackTitle={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />

                    {/* Measured Contrast Scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                    {/* Centered Tactile Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="w-14 h-14 rounded-full bg-white/95 text-[#111111] flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110 group-hover:bg-[#F7D6D8]">
                        <Play className="w-5 h-5 fill-current ml-0.5" aria-hidden="true" />
                      </span>
                    </div>

                    {/* Bottom Video Info & Views Count */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <div className="flex items-center gap-2 text-xs font-medium text-white/85 mb-1.5">
                        <span>{item.platform}</span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums">{item.views}</span>
                      </div>
                      <h3 className="font-display text-lg font-bold tracking-tight text-white">
                        {item.title}
                      </h3>
                    </div>
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5. SERVICES & RATES IN PHILIPPINE PESO */}
        <section id="services" className="bg-[#F5EFE6] py-20 sm:py-24 scroll-mt-16">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-2xl mb-12 space-y-3">
              <p className="text-xs font-semibold tracking-wide text-[#9D4456]">
                Packages &amp; Investment
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] text-balance">
                Services &amp; Rates
              </h2>
              <p className="text-[15px] leading-relaxed text-[#111111]/75">
                Transparent Philippine Peso pricing built for beauty, skincare, and lifestyle
                brands ready to scale organic reach and paid ad ROAS.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              {SERVICE_PACKAGES.map((pkg) => {
                const isPopular = Boolean(pkg.popular);
                return (
                  <div
                    key={pkg.id}
                    className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-shadow duration-200 ${
                      isPopular
                        ? 'bg-white border-2 border-[#E89BA8] shadow-[0_20px_50px_rgba(17,17,17,0.08)]'
                        : 'bg-white border border-[#111111]/10 shadow-[0_10px_30px_rgba(17,17,17,0.04)]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-4 min-h-[24px]">
                        <h3 className="font-display text-xl font-bold tracking-tight text-[#111111]">
                          {pkg.name}
                        </h3>
                        {isPopular && (
                          <span className="text-xs font-bold tracking-wide text-[#9D4456] bg-[#F7D6D8] px-2.5 py-1 rounded-md whitespace-nowrap shrink-0">
                            MOST POPULAR
                          </span>
                        )}
                      </div>

                      <div className="mb-3 flex items-baseline gap-2">
                        <span className="font-display text-4xl font-bold tracking-tight text-[#111111] tabular-nums">
                          {pkg.price}
                        </span>
                      </div>

                      <p className="text-sm leading-relaxed text-[#111111]/70 pb-6 mb-6 border-b border-[#111111]/10">
                        {pkg.subtitle}
                      </p>

                      <ul className="space-y-3.5 mb-8">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-sm text-[#111111]/85">
                            <Check
                              className="w-4 h-4 text-[#9D4456] mt-0.5 shrink-0"
                              aria-hidden="true"
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleSelectPackage(pkg.dropdownValue)}
                      className={`w-full py-3.5 px-5 text-sm font-semibold rounded-xl transition-all duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111] ${
                        isPopular
                          ? 'bg-[#111111] text-white hover:bg-[#2A2A2A]'
                          : 'bg-[#F5EFE6] text-[#111111] hover:bg-[#F7D6D8]'
                      }`}
                    >
                      Select Package
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. ABOUT ME */}
        <section id="about" className="bg-white py-20 sm:py-24 scroll-mt-16">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
              {/* Photo on Left */}
              <div className="lg:col-span-5 flex">
                <div className="w-full rounded-2xl overflow-hidden bg-[#F5EFE6] shadow-[0_18px_45px_rgba(17,17,17,0.07)] min-h-[380px] sm:min-h-[440px]">
                  <SafeImage
                    src={ABOUT_IMAGE}
                    alt="Sophia Reyes smiling at her Manila content studio desk with camera and skincare bottles"
                    fallbackTitle="Sophia Reyes · Studio"
                    className="w-full h-full lg:h-full object-cover"
                  />
                </div>
              </div>

              {/* Text on Right */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                <p className="text-xs font-semibold tracking-wide text-[#9D4456]">About Me</p>

                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] text-balance">
                  Hi, I&apos;m Sophia...
                </h2>

                <div className="space-y-4 text-[15px] sm:text-base leading-relaxed text-[#111111]/75 max-w-2xl">
                  <p>
                    I&apos;m a beauty, skincare, and lifestyle UGC creator based in Manila,
                    Philippines. I partner with local and regional brands to craft content that
                    feels like a trusted recommendation from a friend—real, warm, and relatable,
                    never like a scripted commercial.
                  </p>
                  <p>
                    Whether your shoppers discover you while scrolling TikTok Shop at midnight,
                    browsing Shopee Mall and Lazada during payday sales, or watching Instagram
                    Reels, I film natural-light routines, honest texture demos, and punchy hooks
                    tailored specifically for Filipino audiences.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#111111]/10">
                  <div>
                    <p className="font-display text-sm font-bold text-[#111111] mb-1">
                      Platforms
                    </p>
                    <p className="text-sm text-[#111111]/70">
                      Shopee, Lazada, TikTok Shop &amp; Instagram
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-[#111111] mb-1">
                      Delivery Style
                    </p>
                    <p className="text-sm text-[#111111]/70">
                      Natural Taglish or crisp English voiceovers
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-[#111111] mb-1">
                      Manila Dispatch
                    </p>
                    <p className="text-sm text-[#111111]/70">
                      Fast product receiving in Metro Manila
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. TESTIMONIALS */}
        <section id="testimonials" className="bg-[#F5EFE6] py-20 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-2xl mb-12 space-y-3">
              <p className="text-xs font-semibold tracking-wide text-[#9D4456]">Client Love</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] text-balance">
                What Filipino Brands Say
              </h2>
              <p className="text-[15px] leading-relaxed text-[#111111]/75">
                Real results from beauty founders and marketing managers across Manila, Cebu, and
                Davao.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((review) => (
                <article
                  key={review.id}
                  className="bg-white rounded-2xl p-7 border border-[#111111]/8 shadow-[0_10px_30px_rgba(17,17,17,0.04)] flex flex-col justify-between gap-6"
                >
                  <div className="space-y-4">
                    {/* 5-Star Rating */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star
                            key={idx}
                            className="w-4 h-4 fill-[#E89BA8] text-[#E89BA8]"
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <span className="text-xs font-semibold text-[#9D4456] tabular-nums">
                        {review.metric}
                      </span>
                    </div>

                    <blockquote className="text-[15px] leading-relaxed text-[#111111]/85">
                      &ldquo;{review.quote}&rdquo;
                    </blockquote>
                  </div>

                  <div className="pt-4 border-t border-[#111111]/10">
                    <p className="font-display text-sm font-bold text-[#111111]">{review.name}</p>
                    <p className="text-xs text-[#111111]/65 mt-0.5">
                      {review.role}, {review.brand} · {review.city}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 8. CONTACT / BOOKING FORM */}
        <section id="contact" className="bg-white py-20 sm:py-24 scroll-mt-16">
          <div className="max-w-[920px] mx-auto px-6">
            <div className="text-center max-w-xl mx-auto mb-10 space-y-3">
              <p className="text-xs font-semibold tracking-wide text-[#9D4456]">Book a Campaign</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] text-balance">
                Let&apos;s Work Together
              </h2>
              <p className="text-[15px] leading-relaxed text-[#111111]/70">
                Tell me about your product, target platform, and launch timeline. I respond to all
                brand inquiries within 24 hours.
              </p>
            </div>

            <div className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-10 border border-[#111111]/10 shadow-[0_14px_40px_rgba(17,17,17,0.04)]">
              {submittedInquiry ? (
                <div className="py-6 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#F7D6D8] text-[#111111] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#111111]">
                    Inquiry Received, {submittedInquiry.name}
                  </h3>
                  <p className="text-[15px] text-[#111111]/75 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out on behalf of{' '}
                    <strong className="text-[#111111]">{submittedInquiry.brandName}</strong>. Your
                    request for{' '}
                    <strong className="text-[#111111]">{submittedInquiry.packageChoice}</strong> has
                    been noted, and I&apos;ll reply to{' '}
                    <span className="underline">{submittedInquiry.email}</span> within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="mt-2 px-5 py-2.5 text-sm font-semibold text-[#111111] bg-white border border-[#111111]/15 rounded-xl hover:bg-[#F5EFE6] transition-colors cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} noValidate className="space-y-5">
                  {packagePreselectedNote && (
                    <div
                      role="status"
                      className="flex items-center gap-2.5 text-sm font-medium text-[#111111] bg-[#F7D6D8]/70 rounded-xl px-4 py-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#9D4456] shrink-0" aria-hidden="true" />
                      <span>{packagePreselectedNote}</span>
                    </div>
                  )}

                  {formError && (
                    <div
                      role="alert"
                      className="flex items-center gap-2.5 text-sm font-medium text-[#8B1E2E] bg-[#FDECEC] border border-[#8B1E2E]/20 rounded-xl px-4 py-3"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-[#111111] mb-1.5"
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Camille Navarro"
                        className="w-full px-4 py-3 text-sm bg-white border border-[#111111]/15 rounded-xl text-[#111111] placeholder:text-[#111111]/40 focus:outline-none focus:border-[#111111] transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-[#111111] mb-1.5"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="camille@yourbrand.ph"
                        className="w-full px-4 py-3 text-sm bg-white border border-[#111111]/15 rounded-xl text-[#111111] placeholder:text-[#111111]/40 focus:outline-none focus:border-[#111111] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-brand"
                        className="block text-sm font-medium text-[#111111] mb-1.5"
                      >
                        Brand Name
                      </label>
                      <input
                        id="contact-brand"
                        type="text"
                        required
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                        placeholder="e.g. GlowSkin Manila"
                        className="w-full px-4 py-3 text-sm bg-white border border-[#111111]/15 rounded-xl text-[#111111] placeholder:text-[#111111]/40 focus:outline-none focus:border-[#111111] transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-package"
                        className="block text-sm font-medium text-[#111111] mb-1.5"
                      >
                        What Do You Need?
                      </label>
                      <select
                        id="contact-package"
                        value={selectedPackage}
                        onChange={(e) => setSelectedPackage(e.target.value as PackageOption)}
                        className="w-full px-4 py-3 text-sm bg-white border border-[#111111]/15 rounded-xl text-[#111111] focus:outline-none focus:border-[#111111] transition-colors cursor-pointer"
                      >
                        <option value="1 Video">1 Video (₱3,500)</option>
                        <option value="3 Videos">3 Videos (₱8,500 — Most Popular)</option>
                        <option value="Monthly Package">Monthly Package (₱22,000)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-[#111111] mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share your product link, campaign goals (TikTok Shop, Shopee, Reels, or Paid Ads), and preferred delivery date..."
                      className="w-full px-4 py-3 text-sm bg-white border border-[#111111]/15 rounded-xl text-[#111111] placeholder:text-[#111111]/40 focus:outline-none focus:border-[#111111] transition-colors resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-[#111111] rounded-xl hover:bg-[#2A2A2A] active:scale-[0.99] transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
                  >
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>

            {/* Direct Contact Row Below Form */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
              <a
                href="mailto:hello@sophiaugc.ph"
                className="flex items-center justify-center sm:justify-start gap-3 px-5 py-4 rounded-xl bg-[#F5EFE6]/70 hover:bg-[#F7D6D8]/50 transition-colors"
              >
                <Mail className="w-4 h-4 text-[#9D4456] shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs text-[#111111]/60">Email</p>
                  <p className="text-sm font-semibold text-[#111111]">hello@sophiaugc.ph</p>
                </div>
              </a>

              <a
                href="https://instagram.com/sophiaugc.ph"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center sm:justify-start gap-3 px-5 py-4 rounded-xl bg-[#F5EFE6]/70 hover:bg-[#F7D6D8]/50 transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#9D4456] shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs text-[#111111]/60">Instagram</p>
                  <p className="text-sm font-semibold text-[#111111]">@sophiaugc.ph</p>
                </div>
              </a>

              <div className="flex items-center justify-center sm:justify-start gap-3 px-5 py-4 rounded-xl bg-[#F5EFE6]/70">
                <MapPin className="w-4 h-4 text-[#9D4456] shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs text-[#111111]/60">Location</p>
                  <p className="text-sm font-semibold text-[#111111]">Manila, Philippines</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 9. FOOTER */}
      <footer className="bg-[#F5EFE6] border-t border-[#111111]/10 py-8">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#111111]/75 text-center sm:text-left">
            &copy; 2026 Sophia Reyes - UGC Creator | Manila, Philippines
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/sophiaugc.ph"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @sophiaugc.ph"
              className="w-10 h-10 rounded-xl bg-white border border-[#111111]/10 text-[#111111] hover:bg-[#F7D6D8] transition-colors flex items-center justify-center"
            >
              <Instagram className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="https://tiktok.com/@sophiaugc.ph"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok @sophiaugc.ph"
              className="w-10 h-10 rounded-xl bg-white border border-[#111111]/10 text-[#111111] hover:bg-[#F7D6D8] transition-colors flex items-center justify-center"
            >
              <TikTokIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:hello@sophiaugc.ph"
              aria-label="Email hello@sophiaugc.ph"
              className="w-10 h-10 rounded-xl bg-white border border-[#111111]/10 text-[#111111] hover:bg-[#F7D6D8] transition-colors flex items-center justify-center"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>

      {/* Interactive Video Reel Preview Modal */}
      <VideoModal
        item={selectedVideo}
        onClose={() => setSelectedVideo(null)}
        onBookSimilar={handleBookFromModal}
      />
    </div>
  );
}
