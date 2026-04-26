import { useEffect, useState } from "react";

const NUMBERS = [
  { label: "Pooja Singla", phone: "918699409973" },
  { label: "Keshav Singla", phone: "917087056330" },
];

export default function WhatsAppButton() {
  const [userName, setUserName] = useState("");
  const [page, setPage] = useState("");

  useEffect(() => {
    // 👤 Get saved name (if exists)
    const name = localStorage.getItem("user_name") || "";
    setUserName(name);

    // 🌐 Get current page path
    const path = window.location.pathname;
    setPage(path);
  }, []);

  // 🧠 Dynamic message builder
  const getMessage = () => {
    let msg = "Hi, I'm interested in a solar consultation from Ratandeep Traders.";

    // if (userName) {
    //   msg = `Hi, this is ${userName}. I'm interested in a solar consultation from Ratandeep Traders.`;
    // }

    // if (page) {
    //   msg += ` (Page: ${page})`;
    // }

    return encodeURIComponent(msg);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 group flex flex-col items-end">

      {/* Tooltip */}
      <div className="mb-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none">
        <div className="rounded-lg bg-black text-white text-xs px-3 py-1 shadow-lg">
          Chat with us
        </div>
      </div>

      {/* Popup */}
      <div className="mb-3 flex flex-col gap-2 rounded-2xl bg-white/90 backdrop-blur-md p-3 shadow-[0_8px_30px_rgba(0,0,0,0.2)] 
      opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 
      pointer-events-none group-hover:pointer-events-auto transition-all duration-200">

        {NUMBERS.map((item, index) => (
          <a
            key={index}
            href={`https://wa.me/${item.phone}?text=${getMessage()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 rounded-xl px-4 py-2 text-sm hover:bg-gray-100 transition"
          >
            <span>{item.label}</span>

            <span className="flex items-center gap-1 text-xs text-gray-500">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              Online
            </span>
          </a>
        ))}
      </div>

      {/* Button */}
      <div className="relative">
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>

        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="relative flex h-14 w-14 items-center justify-center rounded-full 
          shadow-[0_8px_20px_rgba(0,0,0,0.25)] 
          transition-all hover:scale-110 hover:shadow-2xl"
          style={{ backgroundColor: "#25D366", color: "#fff" }}
        >
          <svg viewBox="0 0 32 32" fill="currentColor" className="h-7 w-7">
            <path d="M16.001 3C9.383 3 4 8.383 4 15c0 2.646.86 5.087 2.324 7.072L5 29l7.146-1.286A11.94 11.94 0 0016 27c6.617 0 12-5.383 12-12S22.618 3 16.001 3z..." />
          </svg>
        </a>
      </div>
    </div>
  );
}