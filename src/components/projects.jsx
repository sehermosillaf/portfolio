

export const Projects = () => {
  const PROJECTS = [
    {
      title: "Boxing Landing Page",
      description:
        "Langind page de un gimnasio de boxeo. Creada con React",
      link: "https://svgl.vercel.app/",
      github: "https://github.com/sehermosillaf/BoxingReact/tree/main/boxing-react",
      image: "project1.jpg",
    },
    {
      title: "Ofertómetro - Web para validar ofertas con su precio historico",
      description:
        "Plataforma gratuita con precios historicos de diferentes tiendas. Creada desde cero con React y Tailwind CSS. Ademas de NodeJS y Express para el backend y el scrapping de datos.",
      link: "https://adventjs.dev",
      image: "ofertometro.jpg",
    },
  ]
  return (
    <ol id="proyectos">
      {PROJECTS.map((project, index) => (
        <li key={index} className="mt-10">
         <article className="flex flex-col space-x-2 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
          <div className="relative flex-shrink-0 w-full h-64 md:w-64 md:h-48">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
            <div className="flex gap-4">
              <a
                href={project.link}
                className="text-blue-500 hover:underline dark:text-blue-400"
                target="_blank"
              >
                Ver proyecto
              </a>
              <a
                href={project.github}
                className="text-blue-500 hover:underline dark:text-blue-400"
                target="_blank"
              >
                Ver código
              </a>
            </div>
          </div>
         </article>
        </li>
      ))}
    </ol>
  );
}
