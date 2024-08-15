export const Header = () => {
  const headerItems = [
    {
      title: "Experiencia",
      label: "experiencia",
      url: "experiencia",
    },
    {
      title: "Proyectos",
      label: "proyectos",
      url: "/proyectos",
    },
    {
      title: "Sobre mi",
      label: "sobre-mi",
      url: "/#sobre-mi",
    },
    {
      title: "Contacto",
      label: "contacto",
      url: "/#contacto",
    },
  ];
  return (
    <header className="container flex mx-auto w-full justify-center">
      <nav className="flex">
        <ul className="flex">
          {headerItems.map((item, index) => (
            <li key={index} className="mx-4">
              <a href={item.url} className="font-medium uppercase tracking-wider">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
