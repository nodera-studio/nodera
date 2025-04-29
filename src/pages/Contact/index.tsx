import React from 'react';
import Header from '@/components/common/Header/Header';
import Footer from '@/components/common/Footer/Footer';
import PageHero from '@/components/common/PageHero/PageHero';
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Textarea } from "@/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />

      <main className="relative flex-grow pt-[60px]">
        <PageHero 
          title="Contact Us" 
          subtitle="Let's discuss how we can help bring your digital vision to life" 
        />

        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                    <Input id="name" required placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                    <Input id="email" type="email" required placeholder="your@email.com" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                    <Input id="subject" required placeholder="How can we help?" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                    <Textarea id="message" required placeholder="Tell us about your project" rows={5} />
                  </div>
                  <Button type="submit">Send Message</Button>
                </form>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Vienna, Austria</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p>Somestrasse 123</p>
                      <p>1010 Vienna</p>
                      <p>+43 123 456789</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Bucharest, Romania</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p>Strada Example 45</p>
                      <p>010101 Bucharest</p>
                      <p>+40 765 123456</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Email</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <a href="mailto:info@nodera.com" className="text-blue-600 hover:underline">
                        info@nodera.com
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
