const Footer = () => {
  return (
    <>
      <hr className="w-full border-t border-gray-200 my-8 pt-12" />
      <footer className="flex flex-row ">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Calcula tu IRPF. Todos los derechos
          reservados.
        </p>
        <a
          className="flex items-center gap-2 text-blue-500 hover:underline hover:underline-offset-4"
          href="/legal"
        >
          Términos y Condiciones
        </a>
      </footer>
    </>
  );
};

export default Footer;
