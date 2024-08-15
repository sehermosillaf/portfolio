export const AboutMe = () => {
  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p- mt-20">
      <img
        className="w-24 h-24 md:w-48 md:h-auto md:rounded-full rounded-full  mx-auto transform hover:scale-110 transition-transform duration-500 ease-in"
        src="me.jpg"
        alt=""
        width="384"
        height="512"
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium">
          <strong>+2 años de experiencia</strong>. Ingeniero en Informatica especializado
            en la <strong>calidad de software</strong> e implementación de frameworks para la <strong>automatización de pruebas</strong>.
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">
            Hola! Soy Sebastian Hermosilla
          </div>
          <div className="text-slate-700 dark:text-slate-500">
            Analista QA - Automatizador
          </div>
        </figcaption>
      </div>
    </figure>
  );
};
