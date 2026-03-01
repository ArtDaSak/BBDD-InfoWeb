export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-eminence text-lavander font-quantico text-[0.9vw] text-center p-[0.2vw] z-10">
      <p>
        Créditos y Desarrollo Disponibles en:{" "}
        <a
          href="https://github.com/ArtDaSak/BBDD-InfoWeb"
          target="_blank"
          aria-label="Ir al Repositorio de GitHub del Proyecto."
          className="text-robin-egg no-underline"
        >
          BBDD-InfoWeb
        </a>
        .
      </p>
    </footer>
  );
}
