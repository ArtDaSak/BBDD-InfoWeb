"use client";

import React, { useState } from "react";
import TopicLayout, { SubtopicLink } from "@/components/TopicLayout";
import Link from "next/link";
import "./animations.css";

const links: SubtopicLink[] = [
  { href: "#subtopic-1", label: "Definición" },
  { href: "#subtopic-2", label: "Práctica" },
  { href: "#example", label: "Ejemplos" },
  { href: "#references", label: "Referencias" },
];

export default function Topic4() {
  const [httpDetails, setHttpDetails] = useState(false);
  const [httpMethods, setHttpMethods] = useState(false);
  const [httpStatus, setHttpStatus] = useState(false);

  const [tcpipDetails, setTcpipDetails] = useState(false);
  const [flowDirection, setFlowDirection] = useState<"down" | "up">("down");

  const [layerApp, setLayerApp] = useState(false);
  const [layerTrans, setLayerTrans] = useState(false);
  const [layerInet, setLayerInet] = useState(false);
  const [layerNet, setLayerNet] = useState(false);

  const toggleFlow = () => {
    setFlowDirection((prev) => (prev === "down" ? "up" : "down"));
  };

  return (
    <TopicLayout links={links}>
      <span className="flex mt-[-5vw] p-[4.7vw]" id="subtopic-1"></span>
      <div className="flex flex-col items-center mx-[1rem]">
        <h1 className="m-[0_0_1vw_7vw] font-quantico text-[4.2vw] text-steel-pink drop-shadow-[0.2vw_0.27vw_0.5vw_var(--color-yale-t75)] text-start self-start">
          Definición:
        </h1>
        <p className="text-[1.32vw] px-[5vw] py-[3vw] text-lavander drop-shadow-[0.2vw_0.27vw_0.5vw_var(--color-eminence)] bg-oxford-t90 text-center font-tomorrow rounded-[1vw]">
          <span className="inline-block text-[1.5vw] text-center font-bold">
            Los protocolos son reglas y formatos compartidos para la comunicación
            en red.
          </span>
          <br />
          <span className="mt-[0.5rem] inline-block text-start">
            <strong>HTTP (Hypertext Transfer Protocol)</strong> permite a
            navegadores y servidores intercambiar mensajes usando métodos como
            GET, POST, PUT y DELETE.
            <br />
            <br />
            <strong>TCP/IP (Transmission Control Protocol / Internet Protocol)</strong>{" "}
            es un conjunto de reglas para la transmisión de datos en red. La
            capa de aplicación incluye HTTP, y la de transporte asegura la
            entrega de datos.
          </span>
        </p>
      </div>

      <span className="flex mt-[-3.2vw] p-[0.7vw]" id="subtopic-2"></span>
      <div className="grid grid-cols-1 xl:grid-cols-[repeat(auto-fit,minmax(22vw,1fr))] gap-[3vw] xl:gap-[2vw] px-[1.7vw] xl:px-[2vw] py-[2vw] w-full mt-[7vw] box-border">
        {/* HTTP */}
        <section className="bg-oxford-t90 text-lavander rounded-[0.8vw] p-[2vw_1.5vw] min-w-0 box-border flex flex-col gap-[1vw]">
          <h2 className="font-quantico text-[1.7vw] text-steel-pink drop-shadow-[0.2vw_0.27vw_0.5vw_var(--color-yale-t75)] text-start self-start">
            HTTP (HyperText Transfer Protocol)
          </h2>
          <p className="font-tomorrow text-[1.32vw] text-lavander drop-shadow-[0.2vw_0.27vw_0.5vw_var(--color-eminence)]">
            HTTP es un protocolo de aplicación usado para la comunicación entre navegadores web y servidores.
            Cada vez que visitas un sitio web, tu navegador envía una solicitud HTTP y recibe una respuesta del servidor.
          </p>
          <ul className="font-tomorrow text-[1.32vw] text-lavander drop-shadow-[0.2vw_0.27vw_0.5vw_var(--color-eminence)] pl-[2vw]">
            <li><strong>Sin estado:</strong> No guarda información entre solicitudes.</li>
            <li><strong>Métodos:</strong> GET, POST, PUT, DELETE.</li>
            <li><strong>Puerto:</strong> 80 (HTTP) y 443 (HTTPS).</li>
            <li><strong>Funciona sobre TCP/IP.</strong></li>
          </ul>
          <button
            className="relative m-[2.7vw_auto] w-full max-w-[12vw] bg-transparent border-none p-0 flex justify-center items-center group/subbtn cursor-pointer"
            onClick={() => setHttpDetails(!httpDetails)}
          >
            <img
              src="/assets/icons/buttom.svg"
              alt="Toggle button"
              className="w-full h-auto object-contain block group-hover/subbtn:[content:url('/assets/icons/buttomHover.svg')] group-hover/subbtn:opacity-75"
            />
            <span className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-[55%] text-lavander font-tomorrow text-[1.27vw] drop-shadow-[0.2vw_0.27vw_0.5vw_#242124] text-center z-10 whitespace-nowrap group-hover/subbtn:drop-shadow-[0.2vw_0.27vw_0.5vw_var(--color-robin-egg)] group-hover/subbtn:brightness-125">
              Funcionamiento
            </span>
          </button>
          
          {httpDetails && (
            <div className="font-tomorrow text-[1.32vw] text-lavander drop-shadow-[0.2vw_0.27vw_0.5vw_var(--color-eminence)]">
              <p>El navegador (cliente) envía una solicitud HTTP al servidor.<br />Este responde con una respuesta que contiene los datos solicitados (HTML, JSON, imágenes...).</p>
              <br/>
              <p>Todo el intercambio ocurre mediante una conexión TCP, lo que garantiza que la información llegue de forma ordenada.</p>
              
              <div className="flex justify-between items-center h-[13vw] gap-[1.5vw] mt-[1.5vw] py-[1.5vw] border-y-[0.1vw] border-y-yale relative flex-wrap">
                <div 
                  className="flex flex-col items-center flex-1 min-w-[8vw] relative cursor-pointer text-robin-egg transition-all hover:scale-105 hover:text-steel-pink"
                  onClick={() => setHttpMethods(!httpMethods)}
                >
                  <div className="w-[7vw] h-[7vw]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                    </svg>
                  </div>
                  <p className="mt-[0.5vw]">Cliente</p>
                  
                  {httpMethods && (
                    <div className="absolute top-[-7vw] left-[60%] min-w-[22vw] max-w-[22vw] bg-gradient-to-br from-oxford via-yale to-robin-egg border-l-[0.28vw] border-l-robin-egg text-lavander p-[1.1vw_1.4vw] rounded-[0.85vw] text-[1.32vw] animate-fadein shadow-[0_0.28vw_1.1vw_var(--color-oxford-t90)] z-[7] text-left cursor-default">
                      <h4 className="font-quantico">Métodos HTTP</h4>
                      <ul className="pl-[2vw]">
                          <li><strong>GET:</strong> Solicita datos.</li>
                          <li><strong>POST:</strong> Envía datos al servidor.</li>
                          <li><strong>PUT:</strong> Reemplaza un recurso existente.</li>
                          <li><strong>DELETE:</strong> Elimina un recurso.</li>
                          <li><strong>PATCH:</strong> Aplica modificaciones parciales a un recurso.</li>
                      </ul>
                    </div>
                  )}
                </div>

                <div className="flex-[2] flex flex-col justify-center relative">
                    <div className="relative h-[2vw] my-[0.7vw] flex items-center justify-center arrow-animated arrow-request">
                        <span className="bg-robin-egg px-[0.53vw] py-[0.13vw] text-[0.9vw] z-[1] text-oxford font-tomorrow">HTTP Request</span>
                    </div>
                    <div className="relative h-[2vw] my-[0.7vw] flex items-center justify-center arrow-animated arrow-response">
                        <span className="bg-robin-egg px-[0.53vw] py-[0.13vw] text-[0.9vw] z-[1] text-oxford font-tomorrow">HTTP Response</span>
                    </div>
                </div>

                <div 
                  className="flex flex-col items-center flex-1 min-w-[8vw] relative cursor-pointer text-robin-egg transition-all hover:scale-105 hover:text-steel-pink"
                  onClick={() => setHttpStatus(!httpStatus)}
                >
                  <div className="w-[7vw] h-[7vw]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
                    </svg>
                  </div>
                  <p className="mt-[0.5vw]">Servidor</p>
                  
                  {httpStatus && (
                    <div className="absolute top-[-12vw] right-[60%] min-w-[27vw] max-w-[27vw] bg-gradient-to-bl from-oxford via-yale to-robin-egg border-r-[0.28vw] border-r-robin-egg text-lavander p-[1.1vw_1.4vw] rounded-[0.85vw] text-[1.32vw] animate-fadein shadow-[0_0.28vw_1.1vw_var(--color-oxford-t90)] z-[7] text-left cursor-default">
                        <h4 className="font-quantico">Rangos de Códigos de Estado</h4>
                        <ul className="pl-[2vw]">
                            <li><strong>1xx – Informativos:</strong> El servidor recibió la solicitud y continúa el proceso.</li>
                            <li><strong>2xx – Éxito:</strong> La solicitud fue recibida, entendida y aceptada correctamente.</li>
                            <li><strong>3xx – Redirecciones:</strong> Se requiere una acción adicional para completar la solicitud.</li>
                            <li><strong>4xx – Errores del Cliente:</strong> La solicitud contiene errores (ej: recurso no encontrado, mal formato).</li>
                            <li><strong>5xx – Errores del Servidor:</strong> El servidor falló al completar una solicitud válida.</li>
                        </ul>
                    </div>
                  )}
                </div>
              </div>
              <br />
              <p>El cliente envía una solicitud HTTP al servidor, que procesa la solicitud y devuelve una respuesta.<br />Este proceso se repite cada vez que se realiza una nueva solicitud.</p>
            </div>
          )}
        </section>

        {/* TCP/IP */}
        <section className="bg-oxford-t90 text-lavander rounded-[0.8vw] p-[2vw_1.5vw] min-w-0 box-border flex flex-col gap-[1vw]">
          <h2 className="font-quantico text-[1.7vw] text-steel-pink drop-shadow-[0.2vw_0.27vw_0.5vw_var(--color-yale-t75)] text-start self-start">
            TCP/IP (Transmission Control Protocol / Internet Protocol)
          </h2>
          <p className="font-tomorrow text-[1.32vw] text-lavander drop-shadow-[0.2vw_0.27vw_0.5vw_var(--color-eminence)]">
            TCP/IP es un conjunto de protocolos que define cómo los datos deben ser empaquetados, enviados, transmitidos y recibidos en redes. Es la base del funcionamiento de Internet.
          </p>
          <br />
          <h3 className="font-quantico text-[1.7vw] text-steel-pink drop-shadow-[0.2vw_0.27vw_0.5vw_var(--color-yale-t75)] text-start self-start">Capas del modelo TCP/IP:</h3>
          <ul className="font-tomorrow text-[1.32vw] text-lavander drop-shadow-[0.2vw_0.27vw_0.5vw_var(--color-eminence)] pl-[2vw]">
            <li><strong>Capa de Aplicación:</strong> Maneja servicios y protocolos como HTTP, FTP, DNS.</li>
            <li><strong>Capa de Transporte:</strong> Encargada del control de flujo y fiabilidad mediante TCP (fiable) o UDP (rápido pero no fiable).</li>
            <li><strong>Capa de Internet:</strong> Se encarga del direccionamiento y enrutamiento a través del protocolo IP.</li>
            <li><strong>Capa de Acceso a la Red:</strong> Administra la transmisión física a través de tecnologías como Ethernet, WiFi, entre otras.</li>
          </ul>

          <button
            className="relative m-[2.7vw_auto] w-full max-w-[12vw] bg-transparent border-none p-0 flex justify-center items-center group/subbtn cursor-pointer"
            onClick={() => setTcpipDetails(!tcpipDetails)}
          >
            <img
              src="/assets/icons/buttom.svg"
              alt="Toggle button"
              className="w-full h-auto object-contain block group-hover/subbtn:[content:url('/assets/icons/buttomHover.svg')] group-hover/subbtn:opacity-75"
            />
            <span className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-[55%] text-lavander font-tomorrow text-[1.27vw] drop-shadow-[0.2vw_0.27vw_0.5vw_#242124] text-center z-10 whitespace-nowrap group-hover/subbtn:drop-shadow-[0.2vw_0.27vw_0.5vw_var(--color-robin-egg)] group-hover/subbtn:brightness-125">
              Funcionamiento
            </span>
          </button>

          {tcpipDetails && (
            <div className="font-tomorrow text-[1.32vw] text-lavander drop-shadow-[0.2vw_0.27vw_0.5vw_var(--color-eminence)]">
              <p>TCP divide los datos en paquetes, los numera y los envía. El receptor los reordena y confirma su recepción. Si algún paquete no llega, se reenvía automáticamente.</p>
              <br/>
              <p>IP se encarga de que los paquetes lleguen al destino correcto, basándose en direcciones IP y rutas definidas.</p>
              <br/>
              <p>Las capas trabajan de forma conjunta para garantizar una transmisión confiable de extremo a extremo en redes complejas como Internet.</p>
              
              <div className="flex justify-center m-[1.3vw_0_0.7vw_0]">
                  <button 
                    onClick={toggleFlow}
                    className="bg-robin-egg text-oxford border-none px-[1.3vw] py-[0.7vw] rounded-[0.53vw] font-genos text-[1vw] cursor-pointer transition-all hover:bg-steel-pink hover:text-lavander shadow-[0_0.13vw_0.4vw_rgba(0,0,0,0.3)] flex items-center justify-center gap-[0.5vw]"
                  >
                    Flujo actual: {flowDirection === "down" ? "Enviar" : "Recibir"} 
                    <img 
                      src={flowDirection === "down" ? "/assets/icons/arrowBottom.svg" : "/assets/icons/arrowTop.svg"} 
                      className="w-[1.2vw] mb-[0.27vw]" 
                      alt="Arrow direction" 
                    />
                  </button>
              </div>

              <div className={`flex flex-col items-center mt-[2vw] gap-[1vw] relative pl-0 tcpip-stack-animated ${flowDirection === "down" ? "tcpip-stack-down" : "tcpip-stack-up"}`}>
                  
                  <div className="w-[80vw] max-w-[27vw] bg-yale-t75 text-lavander p-[1vw_1.5vw] text-center border-[0.13vw] border-robin-egg rounded-[0.8vw] font-genos text-[1.1vw] cursor-pointer transition-all hover:bg-robin-egg-t90 shadow-[0_0.13vw_0.27vw_rgba(0,0,0,0.3)] hover:shadow-[0_0.27vw_0.8vw_rgba(0,0,0,0.4)] hover:scale-105 z-[1] relative" onClick={() => setLayerApp(!layerApp)}>
                      Capa de Aplicación
                      {layerApp && (
                          <div className="bg-oxford-t90 p-[0.8vw_1vw] text-[0.95vw] border-l-[0.27vw] border-l-robin-egg mt-[0.7vw] rounded-[0.53vw] text-lavander animate-fadein w-full box-border text-left font-tomorrow cursor-default">
                              Protocolos como HTTP, FTP, DNS. Gestiona la interfaz de usuario y los servicios de red.
                          </div>
                      )}
                  </div>
                  
                  <div className="w-[80vw] max-w-[27vw] bg-yale-t75 text-lavander p-[1vw_1.5vw] text-center border-[0.13vw] border-robin-egg rounded-[0.8vw] font-genos text-[1.1vw] cursor-pointer transition-all hover:bg-robin-egg-t90 shadow-[0_0.13vw_0.27vw_rgba(0,0,0,0.3)] hover:shadow-[0_0.27vw_0.8vw_rgba(0,0,0,0.4)] hover:scale-105 z-[1] relative" onClick={() => setLayerTrans(!layerTrans)}>
                      Capa de Transporte
                      {layerTrans && (
                          <div className="bg-oxford-t90 p-[0.8vw_1vw] text-[0.95vw] border-l-[0.27vw] border-l-robin-egg mt-[0.7vw] rounded-[0.53vw] text-lavander animate-fadein w-full box-border text-left font-tomorrow cursor-default">
                              Garantiza la entrega de los datos mediante TCP (fiable) o UDP (rápido).
                          </div>
                      )}
                  </div>

                  <div className="w-[80vw] max-w-[27vw] bg-yale-t75 text-lavander p-[1vw_1.5vw] text-center border-[0.13vw] border-robin-egg rounded-[0.8vw] font-genos text-[1.1vw] cursor-pointer transition-all hover:bg-robin-egg-t90 shadow-[0_0.13vw_0.27vw_rgba(0,0,0,0.3)] hover:shadow-[0_0.27vw_0.8vw_rgba(0,0,0,0.4)] hover:scale-105 z-[1] relative" onClick={() => setLayerInet(!layerInet)}>
                      Capa de Internet
                      {layerInet && (
                          <div className="bg-oxford-t90 p-[0.8vw_1vw] text-[0.95vw] border-l-[0.27vw] border-l-robin-egg mt-[0.7vw] rounded-[0.53vw] text-lavander animate-fadein w-full box-border text-left font-tomorrow cursor-default">
                              Se encarga del direccionamiento IP y enrutamiento de los paquetes a su destino.
                          </div>
                      )}
                  </div>

                  <div className="w-[80vw] max-w-[27vw] bg-yale-t75 text-lavander p-[1vw_1.5vw] text-center border-[0.13vw] border-robin-egg rounded-[0.8vw] font-genos text-[1.1vw] cursor-pointer transition-all hover:bg-robin-egg-t90 shadow-[0_0.13vw_0.27vw_rgba(0,0,0,0.3)] hover:shadow-[0_0.27vw_0.8vw_rgba(0,0,0,0.4)] hover:scale-105 z-[1] relative" onClick={() => setLayerNet(!layerNet)}>
                      Capa de Acceso a la Red
                      {layerNet && (
                          <div className="bg-oxford-t90 p-[0.8vw_1vw] text-[0.95vw] border-l-[0.27vw] border-l-robin-egg mt-[0.7vw] rounded-[0.53vw] text-lavander animate-fadein w-full box-border text-left font-tomorrow cursor-default">
                              Controla la transmisión física a través de Ethernet, WiFi, etc.
                          </div>
                      )}
                  </div>
              </div>

              <p className="mt-[1.7vw] font-tomorrow text-lavander flex items-center justify-center gap-[0.5vw]">
                  <img src="/assets/icons/idea.svg" className="w-[1.7vw] mb-[0.27vw]" alt="Idea" /> 
                  Este diagrama muestra el flujo de datos en TCP/IP.
              </p>
            </div>
          )}
        </section>
      </div>

      <span className="flex mt-[-5vw] p-[4.7vw]" id="example"></span>
      <div className="flex flex-col items-center mx-[2vw] mb-[2vw]">
        <h1 className="m-[0_0_1vw_7vw] font-quantico text-[4.2vw] text-steel-pink drop-shadow-[0.2vw_0.27vw_0.5vw_var(--color-yale-t75)] text-start self-start">
          Ejemplos:
        </h1>
        <p className="text-[1.32vw] px-[5vw] py-[3vw] text-lavander drop-shadow-[0.2vw_0.27vw_0.5vw_var(--color-eminence)] bg-oxford-t90 text-center font-tomorrow rounded-[1vw]">
          <span className="inline-block text-start">
             - Un <strong>GET</strong> HTTP con <strong>curl</strong> muestra cómo un cliente solicita un recurso: <strong>curl -I http://www.example.com</strong> devuelve el encabezado de respuesta (p. ej. <strong>HTTP/1.1 200 OK</strong>).<br /><br />
             - Un programa de <strong>ping</strong> envía paquetes ICMP sobre IP (nivel de red) para verificar conectividad, ilustrando el uso de protocolos subyacentes.
             Al descargar un archivo grande, TCP segmenta el archivo en varios paquetes y confirma la entrega de cada segmento para garantizar integridad.
             HTTP/2 y HTTP/3: versiones más nuevas de HTTP usan conexiones TCP o QUIC (sobre UDP) multiplexadas, mejorando rendimiento.
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
              La documentación de IBM describe cómo TCP/IP define el formato y el envío de paquetes entre aplicación y red.
              Se señala que “un cliente realiza una solicitud HTTP a un servidor…
              El objetivo es acceder a un recurso.
              La respuesta HTTP… proporciona el recurso solicitado o informa errores”.
              MDN resalta que HTTP es escalable y extensible gracias a su modelo cliente-servidor y uso de cabeceras.
              Diversos textos académicos (p. ej., Kurose & Ross, Comer) describen en detalle las capas TCP/IP y el funcionamiento de TCP/IP en redes.
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
