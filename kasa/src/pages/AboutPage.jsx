// @ts-nocheck

// CSS and files import
import bannerFile from "../assets/AboutBanner.png";
import '../styles/AboutPage.css';

// Custom components import
import Banner from '../components/Banner';
import ExpandableBlock from "../components/ExpandableBlock";

/**
 * 
 * @returns Code for the AboutPage component (Page with informations about Kasa)
 */
function AboutPage() { 
  // Paragraph text initialization
  const reliabilityText = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";
  const respectText = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
  const serviceText = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
  const securityText = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

  return (
    <main>
      <Banner bannerPicture={bannerFile} page="About" />
      <section className="flex flex--row flex--wrap aboutSection">
        <ExpandableBlock title="Fiabilité" paragraph={reliabilityText} />
        <ExpandableBlock title="Respect" paragraph={respectText} />
        <ExpandableBlock title="Service" paragraph={serviceText} />
        <ExpandableBlock title="Sécurité" paragraph={securityText} />
      </section>
    </main>    
  );     
}
export default AboutPage;