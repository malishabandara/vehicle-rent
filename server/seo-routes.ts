import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

// SEO metadata for different routes
const seoData = {
  '/': {
    title: 'CNS Travels | #1 Vehicle Hire Sri Lanka | Nano, Van, Bus, Lorry Hire Colombo Kandy Galle',
    description: 'Sri Lanka\'s leading vehicle hire service! Affordable car hire, van hire, bus hire & lorry hire. Professional drivers, 24/7 service, islandwide coverage. Book Nano, Mini, Wagon R, Sedan, Luxury cars, KDH vans, AC buses, Dimo Batta. Airport transfers, tours, corporate transport. Serving Colombo, Kandy, Galle, Nuwara Eliya & all Sri Lanka.',
    keywords: 'rent a car Sri Lanka, car rental Sri Lanka, vehicle hire Sri Lanka, car hire Sri Lanka, van hire Sri Lanka, bus hire Sri Lanka, lorry hire Sri Lanka, self drive car rental Sri Lanka, car rental Colombo, car rental Kandy, car rental Galle, car rental Negombo, car rental Nuwara Eliya, cheap car rental Sri Lanka, affordable car hire Sri Lanka, luxury car rental Sri Lanka, airport car rental Sri Lanka, Colombo airport car rental, Katunayake airport taxi, Bandaranaike airport car rental, airport pickup Sri Lanka, vehicle with driver Sri Lanka, chauffeur service Sri Lanka, private transport Sri Lanka, group transport Sri Lanka, corporate transport Sri Lanka, wedding car hire Sri Lanka, tour transport Sri Lanka, Sri Lanka transport service, islandwide transport Sri Lanka, intercity transport Sri Lanka, Nano car hire Sri Lanka, Mini car hire Sri Lanka, Wagon R hire Sri Lanka, Sedan car hire Sri Lanka, Luxury car hire Sri Lanka, Mini van hire Sri Lanka, AC van hire Sri Lanka, KDH van hire Sri Lanka, Hiace van hire Sri Lanka, bus rental Sri Lanka, coach hire Sri Lanka, Dimo Batta hire Sri Lanka, box lorry hire Sri Lanka, pickup rental Sri Lanka, cargo transport Sri Lanka, moving truck Sri Lanka, 4x4 rental Sri Lanka, SUV rental Sri Lanka, Yakkala car hire, Gampaha car hire, Negombo car hire, Colombo car hire, Kandy car hire, Galle car hire, Nuwara Eliya car hire, Ella car hire, Sigiriya car hire, Sri Lanka travel, Sri Lanka tours, Sri Lanka transport, car rental rates Sri Lanka, vehicle booking Sri Lanka, online car rental Sri Lanka, instant car rental Sri Lanka, same day car rental Sri Lanka, weekend car rental Sri Lanka, monthly car rental Sri Lanka, long term car rental Sri Lanka',
    canonical: 'https://www.cnstravels.com/'
  },
  '/fleet': {
    title: 'Vehicle Fleet - Vehicle Hire Sri Lanka | CNS Travels | Nano, Mini, Van, Bus, Lorry Hire',
    description: 'Explore our comprehensive vehicle fleet for hire in Sri Lanka. Choose from Nano cars, Mini cars, Wagon R, Sedan cars, Luxury cars, Mini vans, AC vans, KDH vans, buses, AC buses, and lorries. Professional drivers included.',
    keywords: 'vehicle fleet Sri Lanka, car rental fleet Sri Lanka, Nano car hire, Mini car hire, Wagon R hire, Sedan car hire, Luxury car hire, Mini van hire, AC van hire, KDH van hire, bus rental Sri Lanka, AC bus hire, lorry hire Sri Lanka, Dimo Batta hire',
    canonical: 'https://www.cnstravels.com/'
  },
  '/services': {
    title: 'Vehicle Hire Services Sri Lanka | Airport Transfer, Tours, Corporate Transport | CNS Travels',
    description: 'Professional vehicle hire services in Sri Lanka including airport transfers, group tours, corporate transport, and logistics solutions. 24/7 service with professional drivers.',
    keywords: 'vehicle hire services Sri Lanka, airport transfer Sri Lanka, tour transport Sri Lanka, corporate transport Sri Lanka, group transport Sri Lanka, logistics Sri Lanka, 24/7 vehicle hire Sri Lanka',
    canonical: 'https://www.cnstravels.com/'
  },
  '/about': {
    title: 'About CNS Travels - Sri Lanka\'s Premier Vehicle Hire Service | CNS Travels',
    description: 'Learn about CNS Travels, Sri Lanka\'s leading vehicle hire service. Professional car hire, van hire, bus hire and lorry hire with experienced drivers across Sri Lanka.',
    keywords: 'about CNS Travels, vehicle hire company Sri Lanka, car rental company Sri Lanka, professional drivers Sri Lanka, trusted transport partner Sri Lanka',
    canonical: 'https://www.cnstravels.com/'
  },
  '/contact': {
    title: 'Contact CNS Travels - Book Your Vehicle Hire in Sri Lanka | Get Instant Quote',
    description: 'Contact CNS Travels for vehicle hire bookings in Sri Lanka. Get instant quotes for car hire, van hire, bus hire and lorry hire services. Professional drivers, 24/7 service, islandwide coverage.',
    keywords: 'contact CNS Travels, book car rental Sri Lanka, vehicle hire booking Sri Lanka, instant quote Sri Lanka, car rental contact Sri Lanka',
    canonical: 'https://www.cnstravels.com/'
  }
};

export function handleSEO(req: Request, res: Response) {
  const path = req.path;
  const seo = seoData[path] || seoData['/'];
  
  res.json({
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    canonical: seo.canonical
  });
}

export function serveIndexWithSEO(req: Request, res: Response) {
  const indexPath = path.join(process.cwd(), 'index.html');
  
  try {
    let html = fs.readFileSync(indexPath, 'utf8');
    
    // Replace meta tags based on the route
    const path = req.path;
    const seo = seoData[path] || seoData['/'];
    
    // Update title
    html = html.replace(
      /<title>.*?<\/title>/,
      `<title>${seo.title}</title>`
    );
    
    // Update meta description
    html = html.replace(
      /<meta name="description" content=".*?" \/>/,
      `<meta name="description" content="${seo.description}" />`
    );
    
    // Update meta keywords
    html = html.replace(
      /<meta name="keywords" content=".*?" \/>/,
      `<meta name="keywords" content="${seo.keywords}" />`
    );
    
    // Update canonical URL
    html = html.replace(
      /<link rel="canonical" href=".*?" \/>/,
      `<link rel="canonical" href="${seo.canonical}" />`
    );
    
    res.send(html);
  } catch (error) {
    console.error('Error serving index.html:', error);
    res.status(500).send('Internal Server Error');
  }
}
