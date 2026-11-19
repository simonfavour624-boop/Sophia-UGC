export type PackageOption = '1 Video' | '3 Videos' | 'Monthly Package';

export type PortfolioCategory = 'All' | 'Skincare' | 'Makeup & Hair' | 'Ads & Lifestyle';

export interface PortfolioItem {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, 'All'>;
  platform: string;
  views: string;
  duration: string;
  hook: string;
  outcome: string;
  description: string;
  image: string;
  recommendedPackage: PackageOption;
}

export interface ServicePackage {
  id: string;
  name: string;
  price: string;
  subtitle: string;
  popular?: boolean;
  dropdownValue: PackageOption;
  features: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  brand: string;
  city: string;
  metric: string;
}

export const HERO_IMAGE = '/src/assets/images/hero_sophia_skincare_1795052084797.jpg';
export const ABOUT_IMAGE = '/src/assets/images/about_sophia_creator_1795052084777.jpg';

export const TRUST_STATS = [
  { value: '120+', label: 'Videos Created' },
  { value: '5M+', label: 'Views Generated' },
  { value: '30+', label: 'Brands Worked With' },
  { value: '4.9/5', label: 'Rating' },
];

export const TRUSTED_BRANDS = [
  'GlowSkin Manila',
  'LumiDew PH',
  'Sunnies Ritual',
  'Botanika Hair Co.',
  'PureVeda Cebu',
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'skincare-morning-routine',
    title: 'Skincare Morning Routine',
    category: 'Skincare',
    platform: 'TikTok Shop',
    views: '485K Views',
    duration: '0:34',
    hook: '"If your moisturizer feels heavy in Manila humidity, watch this."',
    outcome: '3.8x ROAS on TikTok Shop Spark Ads',
    description:
      'Natural daylight bathroom routine showing product texture, zero-whitecast finish, and immediate skin glow under humid Philippine weather.',
    image: '/src/assets/images/ugc_skincare_routine_1795052085646.jpg',
    recommendedPackage: '3 Videos',
  },
  {
    id: 'makeup-grwm',
    title: 'Makeup GRWM',
    category: 'Makeup & Hair',
    platform: 'Instagram Reels',
    views: '620K Views',
    duration: '0:42',
    hook: '"My 5-minute everyday Filipina fresh look before running errands in BGC."',
    outcome: '14,200+ saves & 2.4x profile click-through',
    description:
      'Relatable Get Ready With Me reel highlighting buildable lip & cheek tint shade match on medium-warm Filipina skin.',
    image: '/src/assets/images/ugc_makeup_grwm_1795052086247.jpg',
    recommendedPackage: '3 Videos',
  },
  {
    id: 'hair-care-review',
    title: 'Hair Care Review',
    category: 'Makeup & Hair',
    platform: 'Shopee Video',
    views: '310K Views',
    duration: '0:29',
    hook: '"How I tamed frizzy commute hair without feeling greasy."',
    outcome: '41% add-to-cart lift during 11.11 campaign',
    description:
      'Honest before-and-after serum demonstration filmed in crisp window light with close-up shine and bounce results.',
    image: '/src/assets/images/ugc_hair_care_1795052087310.jpg',
    recommendedPackage: '1 Video',
  },
  {
    id: 'product-unboxing',
    title: 'Product Unboxing',
    category: 'Skincare',
    platform: 'Instagram & TikTok',
    views: '540K Views',
    duration: '0:26',
    hook: '"POV: Your skincare restock finally arrived from Lazada Mall."',
    outcome: '92% 3-second thumbstop rate',
    description:
      'Tactile ASMR unboxing and first-impression texture swatch designed to showcase luxury packaging and cleanser bottle aesthetics.',
    image: '/src/assets/images/ugc_product_unboxing_1795052086077.jpg',
    recommendedPackage: '1 Video',
  },
  {
    id: 'tiktok-ad',
    title: 'TikTok Ad',
    category: 'Ads & Lifestyle',
    platform: 'Paid Spark Ad',
    views: '1.2M Views',
    duration: '0:31',
    hook: '"Stop skipping SPF just because it leaves a sticky cast."',
    outcome: '40% lower CPA across Metro Manila ad sets',
    description:
      'Direct-response conversion ad featuring three rapid scroll-stopping hooks, UV camera proof, and clear TikTok yellow-basket CTA.',
    image: '/src/assets/images/ugc_tiktok_ad_1795052087020.jpg',
    recommendedPackage: 'Monthly Package',
  },
  {
    id: 'lifestyle-vlog',
    title: 'Lifestyle Vlog',
    category: 'Ads & Lifestyle',
    platform: 'TikTok & Reels',
    views: '390K Views',
    duration: '0:48',
    hook: '"Come with me for iced coffee and my handbag beauty essentials."',
    outcome: 'Organic brand recall & high comment engagement',
    description:
      'Soft-sell cafe day-in-the-life mini vlog weaving sunscreen reapplication and lip balm seamlessly into an authentic Manila routine.',
    image: '/src/assets/images/ugc_lifestyle_vlog_1795052088006.jpg',
    recommendedPackage: 'Monthly Package',
  },
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'single-video',
    name: '1 UGC Video',
    price: '₱3,500',
    subtitle: 'Ideal for testing a hero SKU or launching a fresh ad hook.',
    dropdownValue: '1 Video',
    features: [
      '1 Vertical Video (9:16 HD / 4K)',
      '1 Scroll-Stopping Hook',
      'Delivered in 3 Days',
      'Natural Taglish or English Script',
      'Clean Captions & Color Grading',
    ],
  },
  {
    id: 'three-videos',
    name: '3 UGC Videos',
    price: '₱8,500',
    subtitle: 'Best value for brands A/B testing hooks on TikTok & Reels.',
    popular: true,
    dropdownValue: '3 Videos',
    features: [
      '3 Vertical Videos',
      '3 Distinct Opening Hooks',
      '1 Revision Included',
      'Delivered in 5 Days',
      'TikTok Shop & Shopee Ready',
    ],
  },
  {
    id: 'full-month',
    name: 'Full Month Package',
    price: '₱22,000',
    subtitle: 'Always-on creator pipeline for scaling beauty & skincare brands.',
    dropdownValue: 'Monthly Package',
    features: [
      '10 Vertical Videos per Month',
      'Full Paid Ad Usage Rights',
      'Dedicated Creator Partnership',
      'Monthly Hook & Angle Strategy',
      'Priority Turnaround & Raw Clips',
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'glowskin-manila',
    quote:
      "Sophia's videos increased our sales by 40% in just three weeks. Her morning skincare routine felt completely natural to Filipina shoppers and outperformed all our studio ads on TikTok Shop.",
    name: 'Maria Santos',
    role: 'Brand Manager',
    brand: 'GlowSkin Manila',
    city: 'Manila',
    metric: '+40% TikTok Shop Sales',
  },
  {
    id: 'sunkissed-cebu',
    quote:
      'We needed authentic Taglish-friendly content that did not feel scripted. Sophia delivered three crisp sunscreen hooks that doubled our Shopee click-through rate within the first campaign week.',
    name: 'Angelica Cruz',
    role: 'Marketing Lead',
    brand: 'LumiDew PH',
    city: 'Cebu',
    metric: '2.1x Shopee CTR Lift',
  },
  {
    id: 'botanika-davao',
    quote:
      'From unboxing to final edit, Sophia handles everything professionally. Her hair serum review brought in over 300K organic views and helped us sell out our first restock batch ahead of schedule.',
    name: 'Bea Lim',
    role: 'Founder',
    brand: 'Botanika Hair Co.',
    city: 'Davao',
    metric: 'First Batch Sold Out',
  },
];
