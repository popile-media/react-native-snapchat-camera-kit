// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'React Native Snapchat Camera-Kit',
  tagline: 'A simple and easy-to-use interface for Snapchat Camera-Kit',
  favicon: 'img/favicon.ico',
  // Set the production url of your site here
  url: 'https://popile-media.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/react-native-snapchat-camera-kit/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'popile-media', // Usually your GitHub org/user name.
  projectName: 'react-native-snapchat-camera-kit', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        sitemap: {
          changefreq: 'weekly',
          priority: 1.0,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/popile-media/react-native-snapchat-camera-kit/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.jpg',
    navbar: {
      title: 'Camera-Kit',
      logo: {
        alt: 'Camera-Kit Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'guidesSidebar',
          position: 'left',
          label: 'Guides',
        },
        {
          to: 'docs/api',
          label: 'API',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'example-app',
          position: 'left',
          label: 'Example App',
        },
        {
          href: 'https://github.com/popile-media/react-native-snapchat-camera-kit',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Guides',
              to: 'docs/guides/getting-started',
            },
            {
              label: 'API',
              to: 'docs/api',
            },
            {
              label: 'Example App',
              to: 'docs/example-app',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/popile-media/react-native-snapchat-camera-kit/discussions',
            },
            {
              label: 'Bug Report',
              href: 'https://github.com/popile-media/react-native-snapchat-camera-kit/issues/new/choose',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Offical Site',
              href: 'https://ar.snap.com/camera-kit',
            },
            {
              label: 'Offical Documentation',
              href: 'https://docs.snap.com/camera-kit/home',
            },
            {
              label: 'Request Access',
              href: 'https://camera-kit.snapchat.com/request',
            },
            {
              label: 'Forum',
              href: 'https://community.snap.com/snapar/categories/camera-kit',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Popile Inc.`,
    },
    metadata: [
      {
        name: 'keywords',
        content:
          'documentation, coding, docs, guides, camera, react, native, react-native',
      },
      {
        name: 'og:title',
        content: 'React Native Snapchat Camera-Kit Documentation',
      },
      {
        name: 'og:type',
        content: 'application',
      },
      {
        name: 'og:description',
        content: 'A simple and easy-to-use interface for Snapchat Camera-Kit.',
      },
    ],
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['swift', 'java', 'kotlin'],
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
  },
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        name: 'CameraKit',
        entryPoints: ['../src'],
        exclude: '../src/index.tsx',
        tsconfig: '../tsconfig.json',
        watch: process.env.TYPEDOC_WATCH,
        excludePrivate: true,
        excludeProtected: true,
        excludeExternals: true,
        excludeInternal: true,
        readme: 'none',
        sidebar: {
          indexLabel: 'Overview',
        },
      },
    ],
  ],
};

module.exports = config;
