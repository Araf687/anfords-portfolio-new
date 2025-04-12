"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import contactUsImg from "@/assets/image/contact us/banner.png";
import hoverContactUsImg from "@/assets/image/contact us/banner2.png";
import SectionHeading from "@/components/ui/SectionHeading";
import Section from "@/components/ui/Section";
import map from "@/assets/image/contact us/map.png";
import question from "@/assets/image/contact us/question.png";
import { MessageCircleMore, Phone, Send } from "lucide-react";
import supportIcon from "@/assets/icons/contact-us/support.png";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  const contactCards = [
    {
      icon: <Image src={supportIcon} alt="support" height={80} />,
      heading: "Support",
      desc: "Our friendly team is here to help.",
      contact: "support@anfords.com",
    },
    {
      icon: <MessageCircleMore size={45} className="my-4" />,
      heading: "Sales",
      desc: "Questions or queries? Get in touch!",
      contact: "sales@anfords.com",
    },
    {
      icon: <Phone size={45} className="my-4" />,
      heading: "Phone",
      desc: "Mon-Fri from 8am to 5pm",
      contact: "+880-2-9353698",
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="flex flex-col items-center xs:py-8 py-14 space-y-6 xs:space-y-2 px-4">
        <SectionHeading>Get In Touch With Our Team</SectionHeading>
        <p className="text-[#1263AD] xs:text-sm text-center pb-5">
          We have the team and know-how to help you scale 10x faster
        </p>

        {/* Hover Image */}
        <div className="relative group h-[250px] sm:h-[350px] md:h-[450px] w-full max-w-5xl">
          <Image
            src={contactUsImg}
            alt="Contact Us"
            fill
            className="object-contain transition-opacity duration-300 group-hover:opacity-0"
          />
          <Image
            src={hoverContactUsImg}
            alt="Contact Us Hover"
            fill
            className="object-contain absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          />
        </div>
      </div>

      {/* Contact Cards */}
      <div className="px-4 sm:px-10 pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactCards.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 p-5 rounded-lg flex flex-col items-center text-center space-y-2"
            >
              {item.icon}
              <p className="text-xl font-semibold">{item.heading}</p>
              <p>{item.desc}</p>
              <p className="bg-gray-100 py-2 px-3 rounded-lg text-sm">
                {item.contact}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Map Section */}
      <Section className="bg-[#1F416A] px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 w-full">
          <div className="flex-1 text-white space-y-4 text-center lg:text-left">
            <p className="text-lg">Our Location</p>
            <p className="text-3xl md:text-4xl">Visit our Head Office</p>
            <p className="text-lg">Find us at these locations</p>
          </div>
          <div className="flex-1">
            <Image src={map} alt="map" className="w-full h-auto" />
          </div>
        </div>
      </Section>

      {/* Question Form Section */}
      <div className="max-w-6xl mx-auto my-20 px-4">
        <SectionHeading className="text-center mb-12">
          Still have Questions?
        </SectionHeading>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="hidden md:block">
            <Image src={question} alt="question" className="w-full h-auto max-w-sm" />
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 flex-1 w-full"
          >
            <div>
              <label htmlFor="name">Name</label>
              <Input
                id="name"
                {...register("name", { required: "Name is required" })}
                className="w-full mt-1"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full mt-1"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <Textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                className="w-full mt-1 mb-2"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full bg-[#1263AD]">
              Submit <Send size={20} className="ml-2" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
