import TopicLayout, { SubtopicLink } from "@/components/TopicLayout";
import Link from "next/link";

const links: SubtopicLink[] = [
  { href: "#subtopic-1", label: "Definición" },
  { href: "#subtopic-2", label: <>Algunos Conceptos<br />Clave</> },
  { href: "#example", label: "Ejemplos" },
  { href: "#references", label: "Referencias" },
];

export default function Topic2() {
  return (
    <TopicLayout links={links}>
      <span className="flex mt-[-5vw] p-[4.7vw]" id="subtopic-1"></span>
      <div className="flex flex-col items-center mx-[2vw] mb-[2vw]">
        <h1 className="m-[0_0_1vw_7vw] font-quantico text-[4.2vw] text-steel-pink drop-shadow-[0.2vw_0.27vw_0.5vw_var(--color-yale-t75)] text-start self-start">
          Definición:
        </h1>
        <p className="text-[1.32vw] px-[5vw] py-[3vw] text-lavander drop-shadow-[0.2vw_0.27vw_0.5vw_var(--color-eminence)] bg-oxford-t90 text-center font-tomorrow rounded-[1vw]">
          <span className="inline-block text-[1.5vw] text-center">
            Internet es una red de redes global que conecta computadoras y dispositivos en todo el mundo.
          </span>
          <br />
          <span className="mt-[0.7vw] inline-block text-start">
            Funciona mediante conmutación de paquetes: los datos se dividen en fragmentos pequeños (paquetes) que viajan por diversas rutas hasta su destino.<br />
            No existe un centro de control único; en cambio, es una red distribuida de dispositivos (routers, switches, servidores) que intercambian información según protocolos comunes. Gracias a esta arquitectura distribuida, Internet es muy resistente: si falla un nodo o un cable, los paquetes se reencaminan por otra ruta sin interrumpir la red en su conjunto.<br />
            Para comunicarse, los dispositivos utilizan direcciones IP únicas que identifican cada máquina en la red, y el sistema de nombres DNS traduce direcciones legibles (como www.ejemplo.com) a estas direcciones numéricas.
          </span>
        </p>
      </div>

      <div className="flex flex-col items-center mx-[2vw] mb-[2vw]">
        <p className="text-[1.32vw] px-[5vw] py-[3vw] text-lavander drop-shadow-[0.2vw_0.27vw_0.5vw_var(--color-eminence)] bg-oxford-t90 text-center font-tomorrow rounded-[1vw]">
          <span className="mt-[0.7vw] inline-block text-start">
            Los paquetes contienen la información útil dividida en segmentos manejables, junto con metadatos (cabecera) que indican destino, origen y control de errores.
            Cuando envías información (por ejemplo, un correo electrónico o una foto), esta se fragmenta en paquetes.
            Cada paquete viaja por la red, pasando por routers y switches que usan algoritmos de enrutamiento para decidir la mejor ruta.
            Al llegar al destino, los paquetes se reensamblan en el orden correcto para reconstruir el mensaje original.
          </span>
        </p>
      </div>

      <span className="flex mt-[-5vw] p-[4.7vw]" id="subtopic-2"></span>
      <div className="flex flex-col items-center mx-[2vw] mb-[2vw]">
        <p className="text-[1.32vw] px-[5vw] py-[3vw] text-lavander drop-shadow-[0.2vw_0.27vw_0.5vw_var(--color-eminence)] bg-oxford-t90 text-center font-tomorrow rounded-[1vw]">
          <span className="inline-block text-[1.5vw] text-center font-bold">
            Algunos conceptos clave:
          </span>
          <br />
          <span className="mt-[0.7vw] inline-block text-start">
            <strong>• Modelo de capas:</strong> Internet se basa en capas de red (p. ej., el modelo TCP/IP).
            Cada capa (física, enlace, red, transporte, aplicación) aporta funciones específicas, de forma que capas superiores (como la de aplicación) utilizan servicios de capas inferiores.<br />
            <br />
            <strong>• Protocolos:</strong> Reglas compartidas para el formato de mensajes y procedimientos. Por ejemplo, TCP/IP define cómo se envían datos fiablemente y cómo se enrutan los paquetes. El protocolo IP maneja direcciones y ruteo, mientras que TCP garantiza entrega ordenada y sin errores mediante el establecimiento de una conexión.<br />
            <br />
            <strong>• Medios físicos:</strong> La información viaja a través de cables (fibra óptica, cable coaxial) y señales inalámbricas (Wi-Fi, 4G/5G). En todos los casos, los datos son convertidos en pulsos eléctricos o de luz (“bits”) para el transporte físico.
          </span>
        </p>
      </div>

      <span className="flex mt-[-5vw] p-[4.7vw]" id="example"></span>
      <div className="flex flex-col items-center mx-[2vw] mb-[2vw]">
        <h1 className="m-[0_0_1vw_7vw] font-quantico text-[4.2vw] text-steel-pink drop-shadow-[0.2vw_0.27vw_0.5vw_var(--color-yale-t75)] text-start self-start">
          Ejemplos:
        </h1>
        <p className="text-[1.32vw] px-[5vw] py-[3vw] text-lavander drop-shadow-[0.2vw_0.27vw_0.5vw_var(--color-eminence)] bg-oxford-t90 text-center font-tomorrow rounded-[1vw]">
          <span className="inline-block text-start">
            - Al navegar a una página web, tu computadora envía una petición a través de tu proveedor de Internet, pasa por varios routers mundiales y llega al servidor destino. El servidor responde enviando paquetes con el contenido de la página que tu navegador reensambla.<br />
            <br />
            - Envío de correo electrónico: tu mensaje es troceado en paquetes por SMTP/TCP/IP, viaja por la red hasta el servidor de destino y allí se vuelve a armar para entregar el correo.<br />
            <br />
            - Streaming de video: servicios como YouTube almacenan datos en centros de datos. Cuando ves un video, tu dispositivo recibe paquetes de audio y video desde múltiples servidores (a veces via redes de distribución CDN) para optimizar la transmisión.<br />
            <br />
            - Dispositivos IoT: sensores envían datos periódicamente en paquetes pequeños a servidores remotos para monitoreo, utilizando protocolos estandarizados.
          </span>
        </p>
      </div>

      <span className="flex mt-[-5vw] p-[4.7vw]" id="references"></span>
      <div className="flex flex-col items-center mx-[2vw] mb-[2vw]">
        <h1 className="m-[0_0_1vw_7vw] font-quantico text-[4.2vw] text-steel-pink drop-shadow-[0.2vw_0.27vw_0.5vw_var(--color-yale-t75)] text-start self-start">
          Referencias:
        </h1>
        <p className="text-[1.32vw] px-[5vw] py-[3vw] text-lavander drop-shadow-[0.2vw_0.27vw_0.5vw_var(--color-eminence)] bg-oxford-t90 text-center font-tomorrow rounded-[1vw]">
          <span className="inline-block text-start">
            Se explica que «Internet es una enorme colección de redes que se conectan entre sí», y que opera con conmutación de paquetes.
            Los dispositivos en la red se comunican siguiendo protocolos estandarizados. Como señalan diversas fuentes, los datos se dividen en paquetes, viajan por routers y se ensamblan al llegar.
            IBM también describe cómo TCP/IP utiliza capas para mover datos desde la aplicación del remitente hasta el destinatario.
          </span>
        </p>
        <Link
          href="/references"
          className="relative mt-[2.7vw] w-full max-w-[20vw] bg-transparent border-none p-0 flex justify-center items-center group/btn transition-all hover:drop-shadow-[0.1vw_0.17vw_0_var(--color-robin-egg)]"
          aria-label="Saber más acerca de referencias"
        >
          <img
            src="/assets/icons/buttom.svg"
            alt="Imagen del botón a la página del tema, compuesto por unos colores turquesa y rosa neon."
            className="w-full h-auto object-contain block transition-all group-hover/btn:[content:url('/assets/icons/buttomHover.svg')] group-hover/btn:opacity-75"
          />
          <span className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-[55%] text-lavander font-tomorrow text-[2.1vw] drop-shadow-[0.2vw_0.27vw_0.5vw_#242124] text-center z-10 whitespace-nowrap transition-all group-hover/btn:drop-shadow-[0.2vw_0.27vw_0.5vw_var(--color-robin-egg)] group-hover/btn:brightness-125">
            Saber más
          </span>
        </Link>
      </div>
      <div className="h-[20vw]"></div>
    </TopicLayout>
  );
}
