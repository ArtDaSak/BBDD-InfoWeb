import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Home Anchor & Logo */}
      <span className="flex p-[0.5vw]" id="home"></span>
      <span className="flex justify-center items-center mt-[12vw] w-full group/logo">
        <img
          src="/assets/img/logos/colorLogo.svg"
          alt="La InfoWeb de Bases de Datos Logo"
          className="w-[50vw] h-auto drop-shadow-[0.2vw_0.27vw_7vw_var(--color-oxford)] transition-all group-hover/logo:drop-shadow-none"
        />
      </span>

      {/* Topics */}
      <TopicCard
        id="topic-1"
        title="API"
        centerQuote={<>¿Cómo puede una app del clima saber el estado del tiempo en tu ciudad en tiempo real?<br />¿Qué permite que dos programas se entiendan aunque hablen &quot;idiomas&quot; distintos?<br />¿Por qué tantas apps diferentes pueden usar Google Maps sin crearlo desde cero?</>}
        startQuote="Cada vez que tu app del clima acierta o ves un mapa integrado en otra app… hay una API detrás. Te explicamos qué son y por qué están en todo lo que usas."
        href="/topic1"
      />

      <TopicCard
        id="topic-2"
        title="Internet"
        centerQuote={<>¿Cómo es posible que podamos comunicarnos con personas de todo el mundo en segundos?<br />¿Qué pasa realmente cuando mandas un mensaje o ves un video por Internet?<br />¿Por qué Internet sigue funcionando aunque un servidor o una red falle?</>}
        startQuote="¿Alguna vez te preguntaste cómo viaja tu mensaje hasta el otro lado del mundo en segundos? Spoiler: no va en línea recta, pero siempre llega. Descubrí cómo funciona la red que lo hace posible."
        href="/topic2"
      />

      <TopicCard
        id="topic-3"
        title="Web"
        centerQuote={<>¿Es lo mismo Internet que la Web? ¿Por qué muchas personas los confunden?<br />¿Cómo llega una página web desde un servidor hasta tu pantalla?<br />¿Qué sucede detrás de escena cuando haces clic en un enlace?</>}
        startQuote="Le das clic a un link y, ¡boom!, aparece una página. Pero… ¿cómo pasa eso realmente? Vamos a desarmar el proceso que hace visible la Web ante tus ojos."
        href="/topic3"
      />

      <TopicCard
        id="topic-4"
        title="Protocolos HTTP & TCP/IP"
        centerQuote={<>¿Qué asegura que los datos lleguen completos y en orden, aunque vayan por caminos distintos?<br />¿Cómo sabe tu dispositivo exactamente a qué servidor conectarse al visitar una página?<br />¿Qué significa el «http://» que aparece antes de algunas páginas web?</>}
        startQuote="Aunque no los veas, HTTP y TCP/IP están en cada clic, mensaje o video que cargas. Son el idioma secreto de Internet, y acá te contamos cómo funcionan."
        href="/topic4"
      />
    </div>
  );
}

function TopicCard({
  id,
  title,
  centerQuote,
  startQuote,
  href,
}: {
  id: string;
  title: string;
  centerQuote: React.ReactNode;
  startQuote: React.ReactNode;
  href: string;
}) {
  return (
    <>
      <span className="flex p-[0.5vw]" id={id}></span>
      <div className="flex flex-col items-center m-[5.7vw]">
        <h1 className="my-[1.7vw] font-genos text-[7vw] text-center text-steel-pink drop-shadow-[0.2vw_0.27vw_0.5vw_var(--color-yale-t75)]">
          {title}
        </h1>
        <p className="text-[1.32vw] px-[5vw] py-[3vw] text-oxford drop-shadow-[0.2vw_0.27vw_0.5vw_var(--color-eminence)] bg-robin-egg-t90 text-center font-tomorrow rounded-[1vw]">
          <span className="inline-block text-[1.5vw] text-center text-lavander">
            {centerQuote}
          </span>
          <br />
          <span className="mt-[2vw] inline-block text-start">
            {startQuote}
          </span>
        </p>
        <Link
          href={href}
          className="relative mt-[2.7vw] w-full max-w-[20vw] bg-transparent border-none p-0 flex justify-center items-center group/btn transition-all hover:drop-shadow-[0.1vw_0.17vw_0_var(--color-robin-egg)]"
          aria-label={`Ir a ${title}`}
        >
          <img
            src="/assets/icons/buttom.svg"
            alt="Imagen del botón a la página del tema, compuesto por unos colores turquesa y rosa neon."
            className="w-full h-auto object-contain block transition-all group-hover/btn:[content:url('/assets/icons/buttomHover.svg')] group-hover/btn:opacity-75"
          />
          <span className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-[55%] text-lavander font-tomorrow text-[2.1vw] drop-shadow-[0.2vw_0.27vw_0.5vw_#242124] text-center z-10 whitespace-nowrap transition-all group-hover/btn:drop-shadow-[0.2vw_0.27vw_0.5vw_var(--color-robin-egg)] group-hover/btn:brightness-125">
            Ver más
          </span>
        </Link>
      </div>
    </>
  );
}
