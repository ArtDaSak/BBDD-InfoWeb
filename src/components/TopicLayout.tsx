import Link from "next/link";
import React from "react";

export interface SubtopicLink {
  href: string;
  label: React.ReactNode;
}

export default function TopicLayout({
  links,
  children,
}: {
  links: SubtopicLink[];
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen -z-10 bg-[url('/assets/img/backgrounds/futuristicCity.png')] bg-no-repeat bg-center bg-cover bg-fixed" />
      <div className="flex">
        {/* Sidebar Nav */}
        <div className="fixed left-0 w-[17vw] h-[110%] bg-yale-t75 shadow-[0_0.5vw_1vw_var(--color-oxford-t90)] flex flex-col items-stretch z-[9] -mt-[7vw] pt-[15vw]">
          <nav>
            <ul className="list-none p-0 m-0 flex flex-col gap-[2vw]">
              {links.map((link, idx) => (
                <li key={idx} className="w-full">
                  <Link
                    href={link.href}
                    className="block w-full px-[2vw] py-[1vw] text-lavander no-underline font-quantico text-[1.3vw] rounded-[0.7vw] transition-all hover:text-robin-egg hover:drop-shadow-[0.1vw_0.12vw_0_var(--color-steel-pink)] hover:bg-gradient-to-r hover:from-yale hover:to-oxford"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <main className="mt-[7vw] ml-[17vw] mr-[2vw] mb-[1vw] transition-all duration-200">
          {children}
        </main>
      </div>
    </>
  );
}
