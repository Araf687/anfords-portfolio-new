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
// import { Button, Input, TextArea, Card, CardContent, CardHeader, CardTitle } from '@shadcn/ui';

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
    // Handle form submission, e.g., send data to an API
  };

  const contactCards = [
    {
      icon: <Image src={supportIcon} alt="support" height={80} />,
      heading: "Support",
      desc: "Our friendly team is here to help.",
      contact: "support@anfords.com",
    },
    {
      icon: <MessageCircleMore size={45}  className="my-4"/>,
      heading: "Sales",
      desc: "Questions or queries? Get in touch!",
      contact: "sales@anfords.com",
    },
    {
      icon: <Phone size={45} className="my-4"/>,
      heading: "Phone",
      desc: "Mon-Fri from 8am to 5pm",
      contact: "+880-2-9353698",
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center py-14 space-y-6">
        <SectionHeading>Get In Touch With Our Team</SectionHeading>
        <p className="text-[#1263AD] pb-5">
          We have the team and know-how to help you scale 10x faster
        </p>

        {/* Hover Image Wrapper */}
        <div className="relative group h-[450px] w-auto">
          {/* Default image */}
          <Image
            src={contactUsImg}
            alt="Contact Us"
            className="transition-opacity duration-300 group-hover:opacity-0"
            height={450}
          />

          {/* Hover image */}
          <Image
            src={hoverContactUsImg}
            alt="Contact Us Hover"
            className="absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            height={450}
          />
        </div>
      </div>
      <div className="px-20 pb-14">
        {" "}
        <div className="flex items-center gap-6">
          {contactCards.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 border-2 p-5 rounded-lg flex flex-col items-center space-y-2 xs:w-[full] w-[33%]"
            >
              {item?.icon}
              <p className="text-xl">{item?.heading}</p>
              <p>{item?.desc}</p>
              <p className="bg-gray-100 py-2 px-3 rounded-lg">{item?.contact}</p>
            </div>
          ))}
        </div>
      </div>

      <Section className="bg-[#1F416A]">
        <div className="flex items-center gap-4 w-full">
          <div className="flex-1 text-white space-y-4">
            <p className="text-lg">Our Location</p>
            <p className="text-4xl ">Visit our Head office </p>
            <p className="text-lg">Find us at these location</p>
          </div>
          <div className="flex-1">
            <Image src={map} alt="map" height={350} className="" />
          </div>
        </div>
      </Section>

      <div className="max-w-6xl mx-auto my-20">
        <SectionHeading className="text-center mb-20">
          Still have Questions?
        </SectionHeading>
        <div className="flex items-center gap-3">
          <Image src={question} alt="question" height={370} />

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex-1">
            <div>
              <label htmlFor="name">Name</label>
              <Input
                id="name"
                {...register("name", { required: "Name is required" })}
                className="w-full mt-1"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
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
                <p className="text-red-500">{errors.email.message}</p>
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
                <p className="text-red-500">{errors.message.message}</p>
              )}
            </div>

            <Button type="submit" className="w-full bg-[#1263AD]">
              Submit <Send size={26} className="pl-3" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
