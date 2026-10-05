module.exports = {
  siteTitle: 'Zohra Kaouter KEBAILI',
  siteDescription:
    'Zohra Kaouter KEBAILI is an R&D Software Engineer and PhD holder, based in France, who loves learning, research, and teaching.',
  siteKeywords:
    'Zohra kebaili, kebaili, kaouter kebaili, zohrakaouterkebaili, software engineer, developer, research, academia, genai, phd,rennes',
  siteUrl: 'https://zohrakaouter.github.io',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Zohra Kaouter KEBAILI',
  location: 'Rennes, France',
  email: 'kebaili.zohra.kaouter@gmail.com',
  github: 'https://github.com/zohrakaouter',
  twitterHandle: '@',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/zohrakaouter',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/zohra-kaouter-kebaili',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/yashitanamdeo',
    },

    {
      name: 'X',
      url: 'https://x.com/KebailiZohra',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
