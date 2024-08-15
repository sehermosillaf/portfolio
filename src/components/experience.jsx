import { ExperienceItem } from "../components/experienceItem";

export const Experience = () => {
  const EXPERIENCIE = [
    {
      date: "Actualidad",
      title: "Analista QA - Automatizador",
      company: "ACLTI",
      description:
        "Responsable de la calidad de software de la plataforma de Tarjetas Cencosud Scotiabank. Apoyo en la implementación de pruebas automatizadas para identificar estado de flujos y realizar regresiones.",
      link: "https://www.aclti.com/es/",
    },
    {
      date: "Actualidad",
      title: "Desarrollador",
      company: "Proyectos Personales",
      description:
        "Desarrollo de software para proyectos personales. Implementación de tecnologías como React, Spring boot, Java, Scrapy (Python) , entre otros.",
      link: "https://github.com/sehermosillaf/",
    },
  ];
  return (
    <ol className="relative mt-16" id="experience">
      {EXPERIENCIE.map((experiencie, index) => (
        <li key={index}>
          <ExperienceItem {...experiencie} />
        </li>
      ))}
    </ol>
  );
};
