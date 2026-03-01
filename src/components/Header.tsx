import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-[3.4vw] py-[1vw] fixed top-0 w-full z-10 bg-yale-t75 transition-all duration-[270ms] ease-in-out backdrop-blur-[0.27vw] shadow-[0_0.5vw_1vw_var(--color-oxford-t90)] hover:brightness-125 group/header">
      <Link href="/">
        <div className="relative w-[9vw] h-[3vw]">
          {/* We use a simple img tag with group-hover to swap the image src, similar to the CSS content trick */}
          <img
            src="/assets/img/logos/colorLogo.svg"
            alt="La InfoWeb de Bases de Datos Logo"
            className="w-full h-auto transition-all group-hover/header:drop-shadow-[0.02vw_0.027vw_0.42vw_var(--color-robin-egg-t90)] hover:[content:url('/assets/img/logos/monoLogo.svg')]"
          />
        </div>
      </Link>
      <nav>
        <ul className="flex me-[4vw] items-center list-none gap-[3.7vw]">
          {["API", "Internet", "Web", "HTTP & TCP"].map((item, index) => {
            // Mapping names to IDs in index.html, e.g., topic-1
            const id = `/#topic-${index + 1}`;
            return (
              <li key={item}>
                <Link
                  href={id}
                  className="no-underline font-genos text-[3.7vw] text-lavander hover:text-robin-egg hover:drop-shadow-[0.1vw_0.17vw_0_var(--color-steel-pink)] transition-all"
                >
                  {item === "HTTP & TCP" ? "Http & TCP/IP" : item}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
