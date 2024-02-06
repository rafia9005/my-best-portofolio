import LoaderComponent from "@/components/elements/Loader";
import HeroLayout from "@/components/layouts/HeroLayout";
import NavbarLayout from "@/components/layouts/NavbarLayout";
import AboutLayout from "@/components/layouts/AboutLayout";
import ExprerienceLayout from "@/components/layouts/ExprerienceLayout";
import { useEffect } from "react";
import TriggerLayout from "@/components/layouts/TriggerLayout";
import ProjectLayout from "@/components/layouts/ProjectLayout";
import TechStackLayout from "@/components/layouts/TechStackLayout";
import ContactLayout from "@/components/layouts/ContactLayout";
import FooterLayout from "@/components/layouts/FooterLayout";
export default function Home() {
  
  return (
    <LoaderComponent>
      <NavbarLayout />
      <HeroLayout />
      <AboutLayout/>
      <ExprerienceLayout/>
      <TriggerLayout/>
      <ProjectLayout/>
      <TechStackLayout/>
      <ContactLayout/>
      <FooterLayout/>
    </LoaderComponent>
  );
}
