import { useEffect } from 'react';

interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

const defaultSEO: SEOData = {
  title: 'CNS Travels | #1 Car Rental & Vehicle Hire Sri Lanka | Nano, Van, Bus, Lorry Hire Colombo Kandy Galle',
  description: 'Sri Lanka\'s leading vehicle hire service! Affordable car rental, van hire, bus hire & lorry hire. Professional drivers, 24/7 service, islandwide coverage. Book Nano, Mini, Wagon R, Sedan, Luxury cars, KDH vans, AC buses, Dimo Batta. Airport transfers, tours, corporate transport. Serving Colombo, Kandy, Galle, Nuwara Eliya & all Sri Lanka.',
  keywords: 'rent a car Sri Lanka, car rental Sri Lanka, vehicle hire Sri Lanka, car hire Sri Lanka, van hire Sri Lanka, bus hire Sri Lanka, lorry hire Sri Lanka, self drive car rental Sri Lanka, car rental Colombo, car rental Kandy, car rental Galle, car rental Negombo, car rental Nuwara Eliya, cheap car rental Sri Lanka, affordable car hire Sri Lanka, luxury car rental Sri Lanka, airport car rental Sri Lanka, Colombo airport car rental, Katunayake airport taxi, Bandaranaike airport car rental, airport pickup Sri Lanka, vehicle with driver Sri Lanka, chauffeur service Sri Lanka, private transport Sri Lanka, group transport Sri Lanka, corporate transport Sri Lanka, wedding car hire Sri Lanka, tour transport Sri Lanka, Sri Lanka transport service, islandwide transport Sri Lanka, intercity transport Sri Lanka, Nano car hire Sri Lanka, Mini car hire Sri Lanka, Wagon R hire Sri Lanka, Sedan car hire Sri Lanka, Luxury car hire Sri Lanka, Mini van hire Sri Lanka, AC van hire Sri Lanka, KDH van hire Sri Lanka, Hiace van hire Sri Lanka, bus rental Sri Lanka, coach hire Sri Lanka, Dimo Batta hire Sri Lanka, box lorry hire Sri Lanka, pickup rental Sri Lanka, cargo transport Sri Lanka, moving truck Sri Lanka, 4x4 rental Sri Lanka, SUV rental Sri Lanka, Yakkala car hire, Gampaha car hire, Negombo car hire, Colombo car hire, Kandy car hire, Galle car hire, Nuwara Eliya car hire, Ella car hire, Sigiriya car hire, Sri Lanka travel, Sri Lanka tours, Sri Lanka transport, car rental rates Sri Lanka, vehicle booking Sri Lanka, online car rental Sri Lanka, instant car rental Sri Lanka, same day car rental Sri Lanka, weekend car rental Sri Lanka, monthly car rental Sri Lanka, long term car rental Sri Lanka',
  canonical: 'https://www.cnstravels.com/',
  ogTitle: 'CNS Travels | #1 Car Rental & Vehicle Hire Sri Lanka | Professional Drivers',
  ogDescription: 'Sri Lanka\'s leading vehicle hire service! Affordable car rental, van hire, bus hire & lorry hire. Professional drivers, 24/7 service, islandwide coverage. Book now!',
  ogImage: 'https://www.cnstravels.com/logo.jpeg',
  twitterTitle: 'CNS Travels | #1 Car Rental & Vehicle Hire Sri Lanka | Professional Drivers',
  twitterDescription: 'Sri Lanka\'s leading vehicle hire service! Affordable car rental, van hire, bus hire & lorry hire. Professional drivers, 24/7 service, islandwide coverage. Book now!',
  twitterImage: 'https://www.cnstravels.com/logo.jpeg'
};

export function useSEO(seoData: SEOData = {}) {
  useEffect(() => {
    const seo = { ...defaultSEO, ...seoData };
    
    // Update title
    if (seo.title) {
      document.title = seo.title;
    }
    
    // Update meta description
    if (seo.description) {
      updateMetaTag('name', 'description', seo.description);
    }
    
    // Update meta keywords
    if (seo.keywords) {
      updateMetaTag('name', 'keywords', seo.keywords);
    }
    
    // Update canonical URL
    if (seo.canonical) {
      updateCanonicalURL(seo.canonical);
    }
    
    // Update Open Graph tags
    if (seo.ogTitle) {
      updateMetaTag('property', 'og:title', seo.ogTitle);
    }
    if (seo.ogDescription) {
      updateMetaTag('property', 'og:description', seo.ogDescription);
    }
    if (seo.ogImage) {
      updateMetaTag('property', 'og:image', seo.ogImage);
    }
    
    // Update Twitter tags
    if (seo.twitterTitle) {
      updateMetaTag('name', 'twitter:title', seo.twitterTitle);
    }
    if (seo.twitterDescription) {
      updateMetaTag('name', 'twitter:description', seo.twitterDescription);
    }
    if (seo.twitterImage) {
      updateMetaTag('name', 'twitter:image', seo.twitterImage);
    }
  }, [seoData]);
}

function updateMetaTag(attribute: string, value: string, content: string) {
  const meta = document.querySelector(`meta[${attribute}="${value}"]`);
  if (meta) {
    meta.setAttribute('content', content);
  } else {
    const newMeta = document.createElement('meta');
    newMeta.setAttribute(attribute, value);
    newMeta.setAttribute('content', content);
    document.head.appendChild(newMeta);
  }
}

function updateCanonicalURL(url: string) {
  let canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute('href', url);
  } else {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', url);
    document.head.appendChild(canonical);
  }
}
