import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col" id="home">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <a
        href="https://wa.me/94718885557?text=Hello%20CNS%20Travels"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="h-7 w-7"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M26.52 5.48A13.17 13.17 0 0 0 16.5 1.33C8.88 1.33 2.67 7.54 2.67 15.16c0 2.4.63 4.74 1.83 6.82l-1.95 7.13 7.31-1.92c1.99 1.09 4.23 1.67 6.64 1.67h.01c7.62 0 13.83-6.21 13.83-13.83 0-3.81-1.51-7.37-4.32-10.15Zm-10.02 22.57h-.01c-2.18 0-4.31-.58-6.18-1.68l-.44-.26-4.34 1.14 1.16-4.24-.29-.44a11.91 11.91 0 0 1-1.57-5.41c0-6.43 5.24-11.67 11.67-11.67 3.12 0 6.06 1.21 8.26 3.41s3.41 5.14 3.41 8.26c0 6.43-5.24 11.67-11.67 11.67Z" />
          <path d="M19.11 17.56c-.36-.18-2.13-1.05-2.46-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-.36-.18-1.51-.56-2.88-1.78-1.06-.95-1.78-2.12-1.99-2.48-.21-.36-.02-.56.16-.74.17-.17.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.81-1.95-1.11-2.67-.29-.7-.59-.6-.81-.61l-.69-.01c-.24 0-.63.09-.96.45-.33.36-1.26 1.23-1.26 3 0 1.77 1.29 3.48 1.47 3.72.18.24 2.54 3.88 6.16 5.44.86.37 1.53.59 2.05.75.86.27 1.64.23 2.25.14.69-.1 2.13-.87 2.43-1.7.3-.84.3-1.56.21-1.71-.09-.15-.33-.24-.69-.42Z" />
        </svg>
      </a>
    </div>
  );
}
