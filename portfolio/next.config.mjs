
  // basePath: "/react-portfolio",
  // assetPrefix:"/react-portfolio/",
  // output:"export",
  import createNextIntlPlugin from 'next-intl/plugin';
    
  const withNextIntl = createNextIntlPlugin('./i18n/request.js');
    
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    basePath: "/react-portfolio",
     assetPrefix:"/react-portfolio/",
     output:"export",
  };
  export default withNextIntl(nextConfig);