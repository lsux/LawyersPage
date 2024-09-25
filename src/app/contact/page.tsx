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
        pageName="Comunícate con nosotros."
        description="Nuestros miembros del Estudio Jurídico esperan para atenderte."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
