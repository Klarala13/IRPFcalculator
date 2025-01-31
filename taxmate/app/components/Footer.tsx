const Footer = () => {
  return (
    <>
      <hr className="w-full border-t border-gray-300 my-8" />
      <footer className="flex flex-col sm:flex-row items-center justify-between w-full max-w-3xl mx-auto pb-6 text-sm text-gray-600">
        <p>
          &copy; {new Date().getFullYear()} Calcula tu IRPF. Todos los derechos
          reservados.
        </p>
        <a
          href="/legal"
          className="text-[var(--corporate-color)] hover:text-[#4A8E6A] font-semibold hover:underline"
        >
          Términos y Condiciones
        </a>
      </footer>
    </>
  );
};

export default Footer;
