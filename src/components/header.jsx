
export const Header = () => {

  const headerItems = [
    {
        title: "Experiencia",
        label: "experiencia",
        url: "/#experiencia",
    },
    {
        title: "Proyectos",
        label: "proyectos",
        url: "/#proyectos",
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
    <header className="container mx-auto flex justify-between items-center">
        <nav>
          <ul className="flex">
            {headerItems.map((item, index) => (
              <li key={index} className="mx-2">
                <a href={item.url} className="hover:bg-200">{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
    </header>
    )
}
