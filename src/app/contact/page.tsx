import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página de contacto | Free Next.js Template for Startup and SaaS",
  description: "Esta es la Página de contacto de la firma de abogados Sosa Caraballo.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Página de contacto"
        description="Contacta con nosotros si deseas que te brindemos de nuestros servicios especializados."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
