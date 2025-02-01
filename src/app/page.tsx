import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Sectors from "@/components/Sectors";
import Team from "@/components/Team";
import Video from "@/components/Video";
import { PAGE_DESCRIPTION, PAGE_TITLE } from "@/texts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Sectors />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Team />
      <Blog />
      <Contact />
    </>
  );
}
