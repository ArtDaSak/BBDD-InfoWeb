import TopicLayout, { SubtopicLink } from "@/components/TopicLayout";
import Link from "next/link";

const links: SubtopicLink[] = [
  { href: "#subtopic-1", label: "Definición" },
  { href: "#subtopic-2", label: "Puntos Clave" },
  { href: "#example", label: "Ejemplos" },
  { href: "#references", label: "Referencias" },
];

export default function Topic3() {
  return (
    <TopicLayout links={links}>
      <span className="flex mt-[-5vw] p-[4.7vw]" id="subtopic-1"></span>
      <div className="flex flex-col items-center mx-[2vw] mb-[2vw]">
        <h1 className="m-[0_0_1vw_7vw] font-quantico text-[4.2vw] text-steel-pink drop-shadow-[0.2vw_0.27vw_0.5vw_var(--color-yale-t75)] text-start self-start">
          Definición:
        </h1>
        <p className="text-[1.32vw] px-[5vw] py-[3vw] text-lavander drop-shadow-[0.2vw_0.27vw_0.5vw_var(--color-eminence)] bg-oxford-t90 text-center font-tomorrow rounded-[1vw]">
          <span className="inline-block text-[1.5vw] text-center font-bold">
            World Wide Web
          </span>
          <br />
          <span className="mt-[0.7vw] inline-block text-start">
            La WWW o la Web es un sistema de documentos e información interconectados mediante hipervínculos, accesibles a través de Internet.
            Inventada por Tim Berners-Lee en 1989 como un sistema de hipertextos distribuido, la Web permite navegar entre páginas web de forma intuitiva.<br />
            Cada página web es un documento de hipertexto (normalmente HTML) que puede contener textos, imágenes y enlaces a otros documentos.
            Un navegador web interpreta estos documentos: envía peticiones HTTP para obtener recursos (documentos HTML, imágenes, scripts) y los muestra al usuario como páginas interactivas.
          </span>
        </p>
      </div>

      <div className="flex flex-col items-center mx-[2vw] mb-[2vw]">
        <p className="text-[1.32vw] px-[5vw] py-[3vw] text-lavander drop-shadow-[0.2vw_0.27vw_0.5vw_var(--color-eminence)] bg-oxford-t90 text-center font-tomorrow rounded-[1vw]">
          <span className="mt-[0.7vw] inline-block text-start">
            Técnicamente, la Web usa el protocolo HTTP (o HTTPS) en la capa de aplicación sobre TCP/IP para solicitar recursos.
            Por ejemplo, al escribir una URL, el navegador realiza una petición HTTP GET al servidor correspondiente.<br />
            El servidor web (que puede consistir en varios equipos y balanceadores) procesa la solicitud y devuelve el recurso solicitado (o un mensaje de error).
            Los usuarios navegan haciendo clic en hipervínculos que son traducidos por el navegador en nuevas peticiones HTTP.<br />
            Gracias a esta estructura cliente-servidor y al uso de URL, la Web se ha expandido rápidamente como plataforma de información.
            Aunque en la capa de aplicación la Web es independiente, se asienta sobre la infraestructura de Internet (cableado, routers, protocolos IP/TCP) para el transporte físico de los datos.
          </span>
        </p>
      </div>

      <span className="flex mt-[-5vw] p-[4.7vw]" id="subtopic-2"></span>
      <div className="flex flex-col items-center mx-[2vw] mb-[2vw]">
        <p className="text-[1.32vw] px-[5vw] py-[3vw] text-lavander drop-shadow-[0.2vw_0.27vw_0.5vw_var(--color-eminence)] bg-oxford-t90 text-center font-tomorrow rounded-[1vw]">
          <span className="mt-[0.7vw] inline-block text-start">
            <strong>• Lenguajes clave:</strong> HTML (estructura de páginas web), CSS (estilos visuales), JavaScript (lógica en el navegador). Las páginas pueden ser estáticas o generadas dinámicamente por aplicaciones del lado del servidor.<br />
            <br />
            <strong>• Arquitectura cliente-servidor:</strong> El navegador (cliente) siempre inicia la comunicación enviando peticiones al servidor; el servidor nunca inicia por sí mismo la transferencia de contenido.<br />
            <br />
            <strong>• Hipervínculos:</strong> Elementos en las páginas que, al activarse, desencadenan nuevas peticiones HTTP para cargar otros documentos. Esto permite la navegación en la Web.
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
            - Al buscar en Google, tu navegador envía una petición HTTP con la consulta. Google devuelve una página de resultados HTML con enlaces, la cual el navegador procesa y muestra.<br />
            <br />
            - Wikipedia: cada entrada es una página web. Hacer clic en un enlace dentro del texto genera una nueva petición HTTP para cargar la página correspondiente.<br />
            <br />
            - Comercio electrónico: cuando compras en línea, tu navegador interactúa con diversos servidores (p. ej. catálogo de productos, pagos) a través de múltiples peticiones HTTP y APIs REST en el backend para completar la transacción.<br />
            <br />
            - Aplicaciones web modernas: sitios tipo single-page app (SPA) cargan inicialmente una página HTML y luego usan JavaScript para hacer peticiones dinámicas a APIs web, actualizando la vista sin recargar completamente.
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
            Tal como explica MDN, una página web es un documento de hipertexto que el navegador traduce en peticiones HTTP para mostrar contenido.
            Berners-Lee definió la Web como un sistema de hipertextos distribuido para facilitar el acceso global a la información.
            Además, la arquitectura en capas de la Web implica que HTTP es un protocolo de aplicación que se apoya en los protocolos de red inferiores (TCP/IP).
            Los elementos interactivos (enlaces) permiten navegar por la Web solicitando nuevas páginas al servidor mediante HTTP.
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
