import TopicLayout, { SubtopicLink } from "@/components/TopicLayout";
import Link from "next/link";

const links: SubtopicLink[] = [
  { href: "#subtopic-1", label: "Definición" },
  { href: "#subtopic-2", label: "Endpoints y Métodos" },
  { href: "#example", label: "Ejemplos" },
  { href: "#references", label: "Referencias" },
];

export default function Topic1() {
  return (
    <TopicLayout links={links}>
      <span className="flex mt-[-5vw] p-[4.7vw]" id="subtopic-1"></span>
      <div className="flex flex-col items-center mx-[2vw] mb-[2vw]">
        <h1 className="m-[0_0_1vw_7vw] font-quantico text-[4.2vw] text-steel-pink drop-shadow-[0.2vw_0.27vw_0.5vw_var(--color-yale-t75)] text-start self-start">
          Definición:
        </h1>
        <p className="text-[1.32vw] px-[5vw] py-[3vw] text-lavander drop-shadow-[0.2vw_0.27vw_0.5vw_var(--color-eminence)] bg-oxford-t90 text-center font-tomorrow rounded-[1vw]">
          <span className="inline-block text-[1.5vw] text-center">
            Una API es un conjunto de reglas y definiciones que permite a
            diferentes programas comunicarse entre sí.
          </span>
          <br />
          <span className="mt-[0.7vw] inline-block text-start">
            Actúa como interfaz entre aplicaciones, ocultando la complejidad
            interna de un sistema y exponiendo solo lo necesario. Gracias a las
            APIs, los desarrolladores pueden reutilizar servicios existentes en
            lugar de crear todo desde cero, lo que acelera el desarrollo y facilita
            la interoperabilidad entre sistemas. Por ejemplo, una aplicación puede
            utilizar la API de Google Maps para mostrar ubicaciones sin tener que
            implementar mapas desde cero.
          </span>
        </p>
      </div>

      <span className="flex mt-[-5vw] p-[4.7vw]" id="subtopic-2"></span>
      <div className="flex flex-col items-center mx-[2vw] mb-[2vw]">
        <p className="text-[1.32vw] px-[5vw] py-[3vw] text-lavander drop-shadow-[0.2vw_0.27vw_0.5vw_var(--color-eminence)] bg-oxford-t90 text-center font-tomorrow rounded-[1vw]">
          <span className="inline-block text-[1.5vw] text-center font-bold">
            Endpoints y métodos
          </span>
          <br />
          <span className="mt-[0.7vw] inline-block text-start">
            Internamente, una API define puntos finales (endpoints) y métodos (verbo HTTP, por ejemplo GET o POST) que el cliente utiliza para solicitar servicios al servidor. La comunicación suele ocurrir sobre HTTP/HTTPS: el cliente envía una petición (por ejemplo un GET JSON) y el servidor responde con datos (como JSON o XML). Existen diversos estilos de API, por ejemplo REST (arquitectura basada en recursos y sin estado), SOAP (protocolo con estándares estrictos y sobrecarga XML) o GraphQL (consulta de datos). Las APIs RESTful se comunican típicamente mediante HTTP y retornan formatos ligeros como JSON, lo que las hace flexibles y fáciles de usar. Algunos conceptos clave son la autenticación (por ejemplo llaves API, OAuth), el versionado de la API (para mantener compatibilidad) y la seguridad (criptografía TLS, validación de entradas).
            <br />
            <br />
            <strong>• Tipos de API comunes:</strong> REST (usa HTTP y JSON, flexible), SOAP (protocolo XML con estándares de seguridad y transacciones integradas), GraphQL (consulta dinámica de datos).
            <br />
            <br />
            <strong>• Elementos de una petición:</strong> URL del endpoint + método HTTP + cabeceras (autenticación, tipo de contenido) + parámetros (query o cuerpo JSON). El servidor devuelve un código de estado (por ejemplo 200 OK, 404 Not Found) y los datos solicitados.
            <br />
            <br />
            <strong>• Ventajas:</strong> Abstracción de lógica compleja, facilidad de integración, escalabilidad (permiten arquitecturas de microservicios), y fomento de la colaboración al exponer servicios reutilizables.
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
            - Una aplicación móvil del clima llama a la API de OpenWeatherMap para obtener datos meteorológicos actualizados en JSON.
            <br />
            <br />
            - Un sitio de viajes usa la API de Google Maps para calcular rutas y mostrar mapas interactivos.
            <br />
            <br />
            - Dos microservicios dentro de una empresa se comunican mediante una API REST privada: uno maneja usuarios y otro procesa pagos.
            <br />
            <br />
            - Un sitio web muestra publicaciones de Twitter invocando la API de Twitter mediante peticiones GET, integrando contenido externo.
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
            Cloudflare Learning Center explica que una API es un «conjunto de reglas que permite a un programa trasmitir datos a otro programa». Red Hat resalta que las APIs REST se construyen sobre HTTP y devuelven datos en formatos sencillos como JSON, mientras que SOAP es un protocolo más rígido con normas integradas para seguridad y transacciones empresariales.
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
