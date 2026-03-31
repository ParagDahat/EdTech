import { HoverEffect } from "../components/ui/Testomonials";

export function CardHoverEffectDemo() {
  return (
    <>
      <div className="bg-gray-700 pt-20 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl text-white md:text-4xl font-bold mb-4">
            Student Success Stories
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Hear from our graduates who have transformed their careers through
            our programs.
          </p>
        </div>
        <div className="max-w-28xl  font-lato mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </div>
    </>
  );
}
export const projects = [
  {
    title: "Tanishka Gajbhiye",
    description:
      "I had a very good experience with the company. Had an amazing learning experience. The staff and management is very friendly and helps you out at every step.",
    link: "https://stripe.com",
  },
  {
    title: "Ar. Antariksh",
    description:
      "Professional People.. helping others become professional.",
    link: "https://netflix.com",
  },
  {
    title: "Kushal Paliwal",
    description:
      "I am glad that i got this Consultansy, they helped me to get a job in very less time and also i am learning software testing here .costing is very low for software testing",
    link: "https://google.com",
  },
  {
    title: "Sneha Chaudhary",
    description:
      "It's very great firm. Got many opportunities through them. Thank you calibre technology.",
    link: "https://meta.com",
  },
  {
    title: "Prateek Agrawal",
    description:"Mr. Rushabh and his team are really good and completely dedicated to their work. I am really satisfied with their services.",
    link: "https://amazon.com",
  },
  {
    title: "Akshay Kamdi",
    description:"They improve my skills n knowledge for free...They are consulting counsellor.For job and educational",
    link: "https://microsoft.com",
  },
  {
    title: "Nikes Kat",
    description:"Visit once they will solve your any problem regarding job, internship, traning and placement, projects, personality development etc.",
    link: "https://microsoft.com",
  },
  {
    title: "Anshuman Gaikwad",
    description:"Go for it. They are very trustworthy and supportive in terms of providing jobs and trainings.",
    link: "https://microsoft.com",
  },
];
