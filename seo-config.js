// SEO Configuration for CNS Travels Vehicle Hire Service
// This file contains all SEO-related configurations and utilities

export const seoConfig = {
  // Site Information
  siteName: "CNS Travels",
  siteUrl: "https://www.cnstravels.com",
  siteDescription: "Sri Lanka's trusted vehicle hire service offering car rental, van hire, bus hire and lorry hire with professional drivers. Airport transfers, tours and logistics solutions.",
  
  // Primary Keywords
  primaryKeywords: [
    "vehicle hire Sri Lanka",
    "car hire Sri Lanka", 
    "van hire Sri Lanka",
    "bus hire Sri Lanka",
    "lorry hire Sri Lanka",
    "car rental Sri Lanka",
    "vehicle rental Sri Lanka",
    "rent a car Sri Lanka",
    "hire a van Sri Lanka",
    "hire a bus Sri Lanka",
    "hire a lorry Sri Lanka"
  ],
  
  // Secondary Keywords
  secondaryKeywords: [
    "airport transfer Sri Lanka",
    "Colombo airport transfer",
    "Katunayake airport taxi",
    "vehicle with driver Sri Lanka",
    "chauffeur service Sri Lanka",
    "private transport Sri Lanka",
    "group transport Sri Lanka",
    "corporate transport Sri Lanka",
    "wedding car hire Sri Lanka",
    "tour transport Sri Lanka",
    "Sri Lanka transport service",
    "islandwide transport Sri Lanka",
    "intercity transport Sri Lanka"
  ],
  
  // Vehicle-Specific Keywords
  vehicleKeywords: [
    "Nano car hire",
    "Mini car hire", 
    "Wagon R hire",
    "Sedan car hire",
    "Luxury car hire",
    "Mini van hire",
    "AC van hire",
    "KDH van hire",
    "Hiace van hire",
    "bus rental Sri Lanka",
    "coach hire Sri Lanka",
    "Dimo Batta hire",
    "box lorry hire",
    "pickup rental Sri Lanka",
    "cargo transport Sri Lanka",
    "moving truck Sri Lanka",
    "4x4 rental Sri Lanka",
    "SUV rental Sri Lanka"
  ],
  
  // Location-Based Keywords
  locationKeywords: [
    "Yakkala car hire",
    "Gampaha car hire",
    "Negombo car hire",
    "Colombo car hire",
    "Kandy car hire",
    "Galle car hire",
    "Nuwara Eliya car hire",
    "Ella car hire",
    "Sigiriya car hire",
    "Sri Lanka travel",
    "Sri Lanka tours",
    "Sri Lanka transport"
  ],
  
  // Meta Tags Configuration
  metaTags: {
    title: "CNS Travels | Car, Van, Bus, Dimo Batta & Lorry Hire Sri Lanka | Airport Taxi Yakkala Gampaha",
    description: "CNS Travels offers affordable car rental, van hire, bus hire and lorry hire in Sri Lanka. Book airport transfers, tours and logistics. Vehicles include Nano, Mini, Wagon R, Sedan, Luxury, KDH, Hiace, Dolphin, Caravan, Mazda, Dimo Batta, box lorry and more. Serving Yakkala, Gampaha and islandwide.",
    keywords: "vehicle hire Sri Lanka, car hire Sri Lanka, van hire Sri Lanka, bus hire Sri Lanka, lorry hire Sri Lanka, car rental Sri Lanka, vehicle rental Sri Lanka, rent a car Sri Lanka, hire a van Sri Lanka, hire a bus Sri Lanka, hire a lorry Sri Lanka, cheap car hire Sri Lanka, luxury car hire Sri Lanka, airport transfer Sri Lanka, Colombo airport transfer, Katunayake airport taxi, airport pickup Sri Lanka, vehicle with driver Sri Lanka, chauffeur service Sri Lanka, private transport Sri Lanka, group transport Sri Lanka, corporate transport Sri Lanka, wedding car hire Sri Lanka, tour transport Sri Lanka, Sri Lanka transport service, islandwide transport Sri Lanka, intercity transport Sri Lanka, Nano car hire, Mini car hire, Wagon R hire, Sedan car hire, Luxury car hire, Mini van hire, AC van hire, KDH van hire, Hiace van hire, bus rental Sri Lanka, coach hire Sri Lanka, Dimo Batta hire, box lorry hire, pickup rental Sri Lanka, cargo transport Sri Lanka, moving truck Sri Lanka, 4x4 rental Sri Lanka, SUV rental Sri Lanka, Yakkala car hire, Gampaha car hire, Negombo car hire, Colombo car hire, Kandy car hire, Galle car hire, Nuwara Eliya car hire, Ella car hire, Sigiriya car hire, Sri Lanka travel, Sri Lanka tours, Sri Lanka transport",
    author: "CNS Travels",
    robots: "index,follow",
    canonical: "https://www.cnstravels.com/"
  },
  
  // Open Graph Configuration
  openGraph: {
    type: "website",
    url: "https://www.cnstravels.com/",
    siteName: "CNS Travels",
    title: "CNS Travels | Car, Van, Bus, Dimo Batta & Lorry Hire Sri Lanka",
    description: "Affordable car, van, bus and lorry hire in Sri Lanka. Airport transfers, tours and logistics. Dimo Batta, box lorry, KDH vans and more.",
    image: "https://www.cnstravels.com/logo.jpeg",
    locale: "en_US"
  },
  
  // Twitter Card Configuration
  twitter: {
    card: "summary_large_image",
    title: "CNS Travels | Car, Van, Bus, Dimo Batta & Lorry Hire Sri Lanka",
    description: "Affordable vehicle hire in Sri Lanka: cars, vans, buses, lorries, Dimo Batta. Airport pickup, tours and logistics.",
    image: "https://www.cnstravels.com/logo.jpeg",
    creator: "@CNSTravels",
    site: "@CNSTravels"
  },
  
  // Structured Data Configuration
  structuredData: {
    businessType: "AutoRental",
    businessName: "CNS Travels",
    description: "Professional car rental, van hire, bus hire and lorry hire service in Sri Lanka. Airport transfers, tours, corporate transport and logistics solutions.",
    telephone: ["+94718885557", "+94777197273"],
    email: "cnstravels5@gmail.com",
    address: {
      locality: "Yakkala",
      region: "Gampaha",
      country: "LK"
    },
    geo: {
      latitude: "7.085872",
      longitude: "80.033463"
    },
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "$$",
    paymentAccepted: "Cash, Credit Card",
    currenciesAccepted: "LKR, USD",
    serviceTypes: [
      "Car Rental",
      "Van Hire", 
      "Bus Hire",
      "Lorry Hire",
      "Airport Transfer",
      "Tour Transport",
      "Corporate Transport",
      "Logistics"
    ],
    aggregateRating: {
      ratingValue: "4.8",
      reviewCount: "150"
    }
  },
  
  // Performance Optimization Settings
  performance: {
    preloadCriticalResources: true,
    dnsPrefetch: [
      "//cdn.builder.io",
      "//wa.me",
      "//maps.google.com"
    ],
    preconnect: [
      "https://cdn.builder.io"
    ],
    imageOptimization: true,
    lazyLoading: true
  },
  
  // Analytics Configuration (add your tracking IDs)
  analytics: {
    googleAnalytics: "", // Add your GA4 tracking ID
    googleTagManager: "", // Add your GTM ID
    facebookPixel: "", // Add your Facebook Pixel ID
    hotjar: "" // Add your Hotjar ID
  },
  
  // Social Media Links
  socialMedia: {
    whatsapp: "https://wa.me/94718885557",
    facebook: "", // Add your Facebook page URL
    instagram: "", // Add your Instagram URL
    twitter: "", // Add your Twitter URL
    linkedin: "", // Add your LinkedIn URL
    youtube: "" // Add your YouTube channel URL
  }
};

// SEO Utility Functions
export const seoUtils = {
  // Generate dynamic page titles
  generatePageTitle: (pageName, includeSiteName = true) => {
    const baseTitle = includeSiteName ? `${pageName} | CNS Travels` : pageName;
    return baseTitle;
  },
  
  // Generate dynamic meta descriptions
  generateMetaDescription: (content, maxLength = 160) => {
    return content.length > maxLength 
      ? content.substring(0, maxLength - 3) + "..."
      : content;
  },
  
  // Generate keyword-rich content
  generateKeywordRichContent: (baseContent, keywords) => {
    let enrichedContent = baseContent;
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      if (!enrichedContent.match(regex)) {
        // Add keyword naturally if not already present
        enrichedContent += ` ${keyword}`;
      }
    });
    return enrichedContent;
  },
  
  // Validate SEO elements
  validateSEO: (title, description, keywords) => {
    const issues = [];
    
    if (!title || title.length < 30) {
      issues.push("Title should be at least 30 characters long");
    }
    
    if (!description || description.length < 120) {
      issues.push("Description should be at least 120 characters long");
    }
    
    if (!keywords || keywords.split(',').length < 10) {
      issues.push("Should include at least 10 keywords");
    }
    
    return issues;
  }
};

export default seoConfig;
