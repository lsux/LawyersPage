import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "El Estudio Juridico de Sosa caraballo renueva imagen.",
    paragraph:
      "Despues de 28 años de trayectoria, el Estudio Juridico de Sosa Caraballo renueva su imagen para seguir construyendo un legado de excelencia y compromiso.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Ismael Cala",
      image: "/images/blog/author-01.png",
      designation: "Periodista y escritor.",
    },
    tags: ["Corporativo"],
    publishDate: "4 de Octubre 2024",
  },
  {
    id: 2,
    title: "Cierre del curso de mediacion laboral.",
    paragraph:
      "Desde el 23 al 28 de septiembre se llevo a cabo el curso de mediacion laboral, con una duracion de 24 horas academicas, de forma presencil en las instalaciones de la sede de la UCAB Guayana.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Luis Olavarrieta.",
      image: "/images/blog/author-02.png",
      designation: "Periodista.",
    },
    tags: ["Laboral"],
    publishDate: "29 de Septiembre 2024",
  },
  {
    id: 3,
    title: "Cierre del programa de negociación global con la delegación MUNUCAB Guayana.",
    paragraph:
      "El cierre del programa de programa de negociación global, organizado por la Coordinacion Academica del Colegio de Abogados del Estado Bolivar y la delegación MUNUCAB Guayana.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Valeria Gonzalez.",
      image: "/images/blog/author-03.png",
      designation: "Coordinadora de comunicaciones MUNUCAB.",
    },
    tags: ["Negociacion"],
    publishDate: "27 de Septiembre 2024",
  },
];
export default blogData;
