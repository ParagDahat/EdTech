
import AnimatedMentors from "./ui/AnimatedMentors";

function AnimatedMentorsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Vrushabh Chaple",
      designation: "CEO at Calibre",
      src: "/vrushab.webp",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Komal Ghate",
      designation: "CTO at InnovateSphere",
      src: "/vrushab.webp",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Parag Dahat",
      designation: "Operations Director at CloudScale",
      src: "/parag.webp",
    },
    
  ];

  return <AnimatedMentors testimonials={testimonials}  />;
}

export default AnimatedMentorsDemo;
