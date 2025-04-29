import React from 'react';
import Header from '@/components/common/Header/Header';
import Footer from '@/components/common/Footer/Footer';
import PageHero from '@/components/common/PageHero/PageHero';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/ui/accordion";
import { Card, CardContent } from "@/ui/card";

const values = [
  {
    title: "Innovation",
    description: "We push boundaries and embrace new technologies to deliver cutting-edge solutions."
  },
  {
    title: "Quality",
    description: "We're committed to excellence in every aspect of our work, from design to code."
  },
  {
    title: "Integrity",
    description: "We build honest relationships based on transparency and trust."
  }
];

const faqItems = [
  {
    question: "What makes Nodera different?",
    answer: "Our approach combines strategic thinking with technical expertise. We don't just build websites—we create digital experiences that solve real business challenges and deliver measurable results. Our team brings together diverse perspectives and specialized skills to create unique solutions for each client."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity and scope. A simple website might take 3-4 weeks, while complex web applications can take 3-6 months. During our initial consultation, we'll provide a realistic timeline tailored to your specific project requirements and goals."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Absolutely! We offer various support and maintenance packages to ensure your digital presence continues to perform effectively. Our support includes regular updates, security monitoring, performance optimization, and technical assistance. We're committed to being a long-term partner in your digital success."
  }
];

const ValueCard = ({ title, description }: { title: string; description: string }) => (
  <Card className="text-center h-full">
    <CardContent className="pt-6">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p>{description}</p>
    </CardContent>
  </Card>
);

const About = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />

      <main className="relative flex-grow pt-[60px]">
        <PageHero 
          title="About Nodera" 
          subtitle="We're a design and development agency creating exceptional digital experiences" 
        />

        <section className="py-16 px-6">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-6">Our Mission</h2>
            <p className="text-lg text-center">
              To empower businesses with innovative digital solutions that drive growth and enhance user experience. 
              We believe in creating websites and applications that not only look beautiful but also deliver 
              real business results through strategic thinking and technical excellence.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <ValueCard 
                  key={index}
                  title={value.title} 
                  description={value.description} 
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-6">Our Story</h2>
            <p className="text-lg mb-6">
              Founded in 2020, Nodera has grown from a small freelance operation to a full-service 
              agency with clients across Austria and Romania. Our passion for excellence drives everything we do.
            </p>
            <p className="text-lg">
              What started as a vision to create meaningful digital experiences has evolved into a team of 
              dedicated professionals committed to helping businesses thrive in the digital landscape. Through 
              continuous learning and adaptation, we've stayed at the forefront of web design and development 
              trends while maintaining our core values and client-focused approach.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
