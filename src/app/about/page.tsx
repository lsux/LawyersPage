import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre nosotros Page",
  description: "Pagina que habla sobre la informacion general del Estudio Juridico.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Sobre nosotros"
        description="Somos la integración de un equipo multidisciplinario de profesionales con la finalidad prestar asesoría integral, apegados a los estándares de calidad, que creamos una Asociación con proyección a nivel internacional para atender a empresas trasnacionales y nacionales."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
