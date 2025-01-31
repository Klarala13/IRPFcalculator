const LegalPage = () => {
  return (
    <div className="flex flex-col p-12 lg:p-20 bg-gray-50">
      <div className="flex flex-col gap-8 justify-between">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1 className="text-3xl font-bold text-[#2D6A4F]">
            Términos y Condiciones
          </h1>
          <section className="text-justify text-lg text-gray-700">
            <h2 className="text-xl font-semibold mt-6 text-[#2D6A4F]">
              1. Introducción
            </h2>
            <p>
              Bienvenido a nuestra plataforma de cálculo de IRPF. Al utilizar
              este sitio web, aceptas los siguientes Términos y Condiciones. Si
              no estás de acuerdo con ellos, por favor, no utilices nuestros
              servicios.
            </p>

            <h2 className="text-xl font-semibold mt-6 text-[#2D6A4F]">
              2. Uso del Servicio
            </h2>
            <p>
              Este sitio web tiene como finalidad ofrecer una herramienta para
              el cálculo aproximado del Impuesto sobre la Renta de las Personas
              Físicas (IRPF). Los cálculos proporcionados son estimaciones y no
              constituyen asesoramiento financiero, fiscal o legal. Recomendamos
              consultar con un profesional para cuestiones específicas
              relacionadas con tus obligaciones fiscales.
            </p>

            <h2 className="text-xl font-semibold mt-6 text-[#2D6A4F]">
              3. Limitación de Responsabilidad
            </h2>
            <p>
              No nos hacemos responsables de los errores, inexactitudes o
              consecuencias derivadas del uso de la información proporcionada
              por esta herramienta. El usuario asume toda la responsabilidad por
              el uso de los resultados obtenidos en este sitio web.
            </p>

            <h2 className="text-xl font-semibold mt-6 text-[#2D6A4F]">
              4. Propiedad Intelectual
            </h2>
            <p>
              Todo el contenido de este sitio, incluyendo texto, gráficos y
              código, es propiedad del equipo desarrollador, a menos que se
              indique lo contrario. Está prohibido copiar, modificar o
              distribuir el contenido sin autorización previa.
            </p>

            <h2 className="text-xl font-semibold mt-6 text-[#2D6A4F]">
              5. Cambios en los Términos
            </h2>
            <p>
              Nos reservamos el derecho a modificar estos Términos y Condiciones
              en cualquier momento. Los cambios serán publicados en esta página,
              y el uso continuado del sitio web implica la aceptación de los
              mismos.
            </p>
          </section>

          <h1 className="text-3xl font-bold text-[#2D6A4F] mt-12">
            Política de Privacidad
          </h1>
          <section className="text-justify text-lg text-gray-700">
            <h2 className="text-xl font-semibold mt-6 text-[#2D6A4F]">
              1. Datos Recolectados
            </h2>
            <p>
              Este sitio no recolecta datos personales a menos que el usuario
              los proporcione explícitamente a través de formularios u otros
              medios.
            </p>

            <h2 className="text-xl font-semibold mt-6 text-[#2D6A4F]">
              2. Uso de los Datos
            </h2>
            <p>
              Los datos proporcionados por los usuarios serán utilizados
              únicamente para los fines específicos indicados en el formulario
              correspondiente y no serán compartidos con terceros sin el
              consentimiento explícito del usuario.
            </p>

            <h2 className="text-xl font-semibold mt-6 text-[#2D6A4F]">
              3. Seguridad
            </h2>
            <p>
              Implementamos medidas de seguridad para proteger los datos
              proporcionados por los usuarios. Sin embargo, ningún sistema es
              completamente seguro, por lo que no podemos garantizar la
              seguridad absoluta de la información.
            </p>

            <h2 className="text-xl font-semibold mt-6 text-[#2D6A4F]">
              4. Derechos del Usuario
            </h2>
            <p>
              Los usuarios tienen derecho a acceder, rectificar y eliminar sus
              datos personales. Para ejercer estos derechos, pueden ponerse en
              contacto con nosotros a través de los medios indicados en la
              sección de contacto.
            </p>

            <h2 className="text-xl font-semibold mt-6 text-[#2D6A4F]">
              5. Cambios en la Política
            </h2>
            <p>
              Esta Política de Privacidad puede ser actualizada en cualquier
              momento. Las actualizaciones serán publicadas en esta página.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default LegalPage;
