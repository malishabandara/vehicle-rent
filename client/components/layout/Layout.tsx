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
          viewBox="0 0 24 24"
          className="h-8 w-8"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.51 11.51 0 0012 0a11.52 11.52 0 00-10 17.46L0 24l6.72-1.76A11.5 11.5 0 0012 23.5a11.5 11.5 0 008.52-20.02zM12 21a9 9 0 01-4.61-1.27l-.33-.2-3.96 1.04 1.06-3.86-.22-.35A9 9 0 1112 21zm5.09-6.64c-.29-.15-1.69-.86-1.94-.95-.25-.09-.44-.15-.62.15-.18.29-.71.9-.87 1.09-.16.19-.32.22-.6.08-.28-.15-1.16-.43-2.21-1.37-.82-.73-1.37-1.62-1.54-1.9-.17-.28-.02-.43.12-.56.13-.13.28-.33.42-.49.14-.16.19-.28.29-.47.1-.19.05-.35-.02-.49-.08-.14-.63-1.5-.86-2.05-.23-.55-.46-.47-.62-.48l-.53-.01c-.19 0-.49.08-.74.35-.25.27-.98.96-.98 2.34 0 1.38 1.01 2.68 1.16 2.87.15.19 1.99 3 4.82 4.21.67.29 1.29.48 1.73.62.66.22 1.25.19 1.73.11.54-.08 1.6-.65 1.84-1.28.23-.63.23-1.16.16-1.28-.07-.12-.26-.19-.54-.33z"/>
        </svg>
      </a>
    </div>
  );
}
