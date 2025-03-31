import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'About',
      links: [
        {
          text: 'About Us',
          href: getPermalink('/about'),
        },
        {
          text: 'FAQs',
          href: getPermalink('/faqs'),
        },
        {
          text: 'Reviews',
          href: getPermalink('/reviews'),
        },
      ],
    },
    {
      text: 'Services',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: 'Pricing',
      href: '/pricing',
    },
    {
      text: 'Articles',
      href: getPermalink('/blog'),
    },
  ],
  actions: [{ text: 'Get Started', href: '/contact', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Quick Links',
      links: [
        { text: 'Home', href: '#' },
        { text: 'About', href: '#' },
        { text: 'Services', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Articles', href: '#' },
        { text: 'Contact', href: '#' },
      ],
    },
    {
      title: 'About',
      links: [
        { text: 'About Us', href: '#' },
        { text: 'FAQs', href: '#' },
        { text: 'Reviews', href: '#' },
      ],
    },
    {
      title: 'Services',
      links: [
        { text: 'Web Design', href: '#' },
        { text: 'Web Development', href: '#' },
        { text: 'Workflow Automations', href: '#' },
        { text: 'Employee Management System', href: '#' },
        { text: 'Software Integrations', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'Whatsapp: +1 (647) 767 - 8840', href: '#' },
        { text: 'Email: info@impactwebstudio.ca', href: '#' },
        { text: 'Careers', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  // socialLinks: [
  //   { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
  //   { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
  //   { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  //   { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  //   { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  // ],
  footNote: `
    Designed & Developed by <a class="text-blue-600 underline dark:text-muted" href="https://impactwebstudio.ca/"> Impact Web Studio</a> · All rights reserved.
  `,
};
