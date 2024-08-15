import { ExperienceItem } from "../components/experienceItem";

export const Experience = () => {
  const EXPERIENCIE = [
    {
      date: "Actualmente...",
      title: "Analista de Calidad de Software",
      company: "ACL - Externo Tarjetas Cencosud Scotiabank",
      description:
        "Responsable de la calidad de software de la plataforma de Tarjetas Cencosud Scotiabank. Apoyo en la implementación de pruebas automatizadas para identificar estado de flujos y realizar regresiones.",
      link: "https://www.aclti.com/es/",
    },
    {
      date: "Actualidad",
      title: "Desarrollador de Software",
      company: "Proyectos Personales",
      description:
        "Desarrollo de software para proyectos personales. Implementación de tecnologías como React, Spring boot, Java, Scrapy (Python) , entre otros.",
      link: "https://github.com/sehermosillaf/",
    },
  ];
  return (
    <ol className="relative mt-16">
      {EXPERIENCIE.map((experiencie, index) => (
        <li key={index}>
          <ExperienceItem {...experiencie} />
        </li>
      ))}
    </ol>
  );
};
