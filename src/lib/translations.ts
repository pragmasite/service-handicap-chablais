export type Language = "fr" | "en";

export const translations = {
  fr: {
    nav: {
      services: "Prestations",
      gallery: "Réalisations",
      hours: "Horaires",
      contact: "Contact",
      call: "Appeler",
      profession: "SERVICE DE TRANSPORT",
      aboutUs: "À propos",
    },
    hero: {
      badge: "Service spécialisé de transport",
      title1: "Mobilité",
      title2: "sans compromis",
      description: "Assistance spécialisée pour les personnes à mobilité réduite dans le Chablais et au-delà",
      sendEmail: "Envoyer un email",
      location: "Muraz (Collombey), Suisse",
    },
    about: {
      label: "À propos",
      title1: "Notre mission",
      title2: "Une accessibilité totale",
      p1: "Service Handicap Chablais est votre partenaire de confiance pour le transport et l'accompagnement des personnes à mobilité réduite. Depuis des années, nous nous engageons à offrir un service de qualité supérieure avec professionnalisme et empathie.",
      p2: "Nous comprenons que chaque déplacement est important. Notre équipe formée et expérimentée garantit une prise en charge sécurisée, confortable et respectueuse pour tous nos passagers.",
      stat1: "Années d'expérience",
      stat2: "Clients satisfaits",
      stat3: "Avis positifs",
      features: [
        { title: "Accessibilité complète", description: "Véhicules adaptés et aménagés pour tous types de handicaps" },
        { title: "Équipe professionnelle", description: "Personnel formé, courtois et attentif à vos besoins" },
        { title: "Fiabilité garantie", description: "Horaires respectés et service de qualité en toutes circonstances" },
        { title: "Transport flexible", description: "Trajets individuels ou collectifs selon vos besoins" },
      ],
    },
    services: {
      label: "Nos prestations",
      title: "Services professionnels",
      description: "Une gamme complète de services d'accompagnement et de transport",
      items: [
        { title: "Transport en fauteuil roulant", description: "Trajets sécurisés pour les personnes en fauteuil roulant avec véhicules complètement aménagés" },
        { title: "Assistance à mobilité réduite", description: "Aide et accompagnement pour les personnes avec difficultés de déplacement" },
        { title: "Transport pour personnes malvoyantes", description: "Service spécialisé avec accompagnement pour les personnes atteintes de déficience visuelle" },
        { title: "Transport collectif", description: "Trajets de groupe adaptés pour associations, structures médico-sociales et collectivités" },
        { title: "Accompagnement personnalisé", description: "Service sur mesure répondant à vos besoins spécifiques" },
        { title: "Transport dans le Chablais et région", description: "Couverture géographique complète du Chablais et régions voisines" },
      ],
    },
    gallery: {
      label: "Nos réalisations",
      title: "Galerie",
      description: "Découvrez nos véhicules et services",
      images: [
        { title: "Assistance à bord" },
        { title: "Transport confortable" },
      ],
    },
    hours: {
      label: "Disponibilité",
      title: "Horaires d'ouverture",
      header: "Heures d'ouverture",
      today: "Aujourd'hui",
      closed: "Fermé",
      days: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
    },
    contact: {
      label: "Contact",
      title1: "Nous vous",
      title2: "répondons",
      description: "N'hésitez pas à nous contacter pour plus d'informations ou pour demander un devis",
      phone: "Téléphone",
      email: "Email",
      address: "Adresse",
      cta: "Demander un devis",
      callNow: "Appeler maintenant",
      mapTitle: "Localisation",
    },
    footer: {
      tagline: "Service de transport spécialisé",
      description: "Service Handicap Chablais - Transport et accompagnement pour personnes à mobilité réduite",
      navigation: "Navigation",
      about: "À propos",
      copyright: "Tous droits réservés.",
    },
    disclaimer: {
      title: "Aperçu du site",
      items: [
        "Ce site web est un brouillon de prévisualisation",
        "Il n'est pas référencé sur Google",
        "Il peut contenir des erreurs ou des inexactitudes",
      ],
      button: "J'ai compris",
    },
  },
  en: {
    nav: {
      services: "Services",
      gallery: "Gallery",
      hours: "Hours",
      contact: "Contact",
      call: "Call",
      profession: "TRANSPORT SERVICE",
      aboutUs: "About",
    },
    hero: {
      badge: "Specialized transportation service",
      title1: "Mobility",
      title2: "without compromise",
      description: "Specialized assistance for people with reduced mobility in Chablais and beyond",
      sendEmail: "Send an email",
      location: "Muraz (Collombey), Switzerland",
    },
    about: {
      label: "About",
      title1: "Our mission",
      title2: "Complete accessibility",
      p1: "Service Handicap Chablais is your trusted partner for transportation and assistance for people with reduced mobility. For years, we have been committed to providing superior quality service with professionalism and empathy.",
      p2: "We understand that every journey is important. Our trained and experienced team ensures safe, comfortable and respectful care for all our passengers.",
      stat1: "Years of experience",
      stat2: "Satisfied clients",
      stat3: "Positive reviews",
      features: [
        { title: "Complete accessibility", description: "Vehicles adapted and equipped for all types of disabilities" },
        { title: "Professional team", description: "Trained, courteous and attentive staff to your needs" },
        { title: "Guaranteed reliability", description: "Punctual schedules and quality service in all circumstances" },
        { title: "Flexible transportation", description: "Individual or group trips according to your needs" },
      ],
    },
    services: {
      label: "Our services",
      title: "Professional services",
      description: "A complete range of transportation and assistance services",
      items: [
        { title: "Wheelchair transportation", description: "Safe trips for wheelchair users with fully adapted vehicles" },
        { title: "Mobility assistance", description: "Help and support for people with movement difficulties" },
        { title: "Transport for visually impaired", description: "Specialized service with accompaniment for people with visual impairment" },
        { title: "Group transportation", description: "Group trips adapted for associations, medical-social facilities and local authorities" },
        { title: "Personalized assistance", description: "Custom service meeting your specific needs" },
        { title: "Chablais and region transport", description: "Complete geographical coverage of Chablais and surrounding regions" },
      ],
    },
    gallery: {
      label: "Our work",
      title: "Gallery",
      description: "Discover our vehicles and services",
      images: [
        { title: "On-board assistance" },
        { title: "Comfortable transportation" },
      ],
    },
    hours: {
      label: "Availability",
      title: "Opening hours",
      header: "Opening hours",
      today: "Today",
      closed: "Closed",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
    contact: {
      label: "Contact",
      title1: "We're",
      title2: "here to help",
      description: "Don't hesitate to contact us for more information or to request a quote",
      phone: "Phone",
      email: "Email",
      address: "Address",
      cta: "Request a quote",
      callNow: "Call now",
      mapTitle: "Location",
    },
    footer: {
      tagline: "Specialized transportation service",
      description: "Service Handicap Chablais - Transportation and assistance for people with reduced mobility",
      navigation: "Navigation",
      about: "About",
      copyright: "All rights reserved.",
    },
    disclaimer: {
      title: "Website preview",
      items: [
        "This website is a draft preview",
        "It is not indexed on Google",
        "It may contain errors or inaccuracies",
      ],
      button: "Got it",
    },
  },
};

export interface Translations {
  nav: {
    services: string;
    gallery: string;
    hours: string;
    contact: string;
    call: string;
    profession: string;
    aboutUs: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    description: string;
    sendEmail: string;
    location: string;
  };
  about: {
    label: string;
    title1: string;
    title2: string;
    p1: string;
    p2: string;
    stat1: string;
    stat2: string;
    stat3: string;
    features: Array<{ title: string; description: string }>;
  };
  services: {
    label: string;
    title: string;
    description: string;
    items: Array<{ title: string; description: string }>;
  };
  gallery: {
    label: string;
    title: string;
    description: string;
    images: Array<{ title: string }>;
  };
  hours: {
    label: string;
    title: string;
    header: string;
    today: string;
    closed: string;
    days: string[];
  };
  contact: {
    label: string;
    title1: string;
    title2: string;
    description: string;
    phone: string;
    email: string;
    address: string;
    cta: string;
    callNow: string;
    mapTitle: string;
  };
  footer: {
    tagline: string;
    description: string;
    navigation: string;
    about: string;
    copyright: string;
  };
  disclaimer: {
    title: string;
    items: string[];
    button: string;
  };
}
