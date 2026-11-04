"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import contactUsImg from "@/assets/image/contact us/banner.png";
import hoverContactUsImg from "@/assets/image/contact us/bannerHover.png";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHero from "@/components/ui/PageHero";
import UiButton from "@/components/ui/uiButton";
import map from "@/assets/image/contact us/mapDhaka.png";
import question from "@/assets/image/contact us/question.png";
import { MapPin, MessageCircleMore, Phone } from "lucide-react";
import supportIcon from "@/assets/icons/contact-us/support.png";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const contactCards = [
  {
    icon: <Image src={supportIcon} alt="" height={36} width={36} />,
    heading: "Support",
    desc: "Our friendly team is here to help.",
    contact: "info@anfordslimited.com",
    href: "mailto:info@anfordslimited.com",
  },
  {
    icon: <MessageCircleMore size={28} />,
    heading: "Sales",
    desc: "Questions or queries? Get in touch!",
    contact: "info@anfordslimited.com",
    href: "mailto:info@anfordslimited.com",
  },
  {
    icon: <Phone size={28} />,
    heading: "Phone",
    desc: "Mon-Fri from 8am to 5pm",
    contact: "+880-2-9353698",
    href: "tel:+88029353698",
  },
];

const fieldClass =
  "mt-2 h-12 rounded-xl border-slate-200 bg-white focus-visible:ring-2 focus-visible:ring-brand-sky/40 focus-visible:ring-offset-0";

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <div>
      {/* Header Section */}
      <PageHero
        crumb="Contact Us"
        title="Get In Touch With Our Team"
        description="We have the team and know-how to help you scale 10x faster"
      />

      {/* Contact Cards overlapping the hero */}
      <div className="container relative -mt-10 sm:-mt-14">
        <Stagger className="grid gap-4 sm:grid-cols-3 sm:gap-5">
          {contactCards.map((item) => (
            <StaggerItem key={item.heading}>
              <a
                href={item.href}
                className="group flex h-full flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_50px_-25px_rgba(0,31,78,0.35)] transition-all duration-500 hover:-translate-y-1 hover:border-brand-sky/40"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-blue/10 text-brand-blue transition-all duration-500 group-hover:bg-brand-blue group-hover:text-white">
                  {item.icon}
                </span>
                <p className="text-xl font-semibold text-brand-navy">{item.heading}</p>
                <p className="text-sm text-slate-500">{item.desc}</p>
                <p className="mt-auto w-fit rounded-full bg-brand-mist px-4 py-2 text-sm font-medium text-brand-royal transition-colors group-hover:bg-brand-green/10 group-hover:text-brand-green">
                  {item.contact}
                </p>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* Hover Image */}
      <Reveal className="container py-14 sm:py-20">
        <div className="group relative mx-auto aspect-[1502/597] w-full max-w-5xl [container-type:inline-size]">
          <Image src={contactUsImg} alt="Contact Us" fill className="object-contain transition-opacity duration-500 group-hover:opacity-0" />
          <Image
            src={hoverContactUsImg}
            alt=""
            fill
            className="object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
          {/* location tooltip over the Dhaka pin, shown with the hover map */}
          <div className="pointer-events-none absolute left-[74.1%] top-[32.7%] -translate-x-1/2 -translate-y-full opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <p className="whitespace-nowrap rounded-[0.6cqw] bg-[#111827] px-[1.6cqw] py-[1cqw] text-[clamp(10px,1.2cqw,17px)] font-semibold text-white">
              Dhaka, Bangladesh
            </p>
            <span className="mx-auto block h-0 w-0 border-x-[0.8cqw] border-t-[0.9cqw] border-x-transparent border-t-[#111827]" />
          </div>
        </div>
      </Reveal>

      {/* Map Section */}
      <section className="bg-brand-ink py-16 text-white sm:py-20">
        <div className="container grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="space-y-4 text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-mint">Our Location</p>
            <p className="text-3xl font-semibold md:text-5xl">Visit our Head Office</p>
            <p className="text-lg text-white/70">Find us at these locations</p>
            <a
              href="https://maps.google.com/?q=Dhaka,+Bangladesh"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-start gap-3 rounded-2xl bg-white/5 p-4 text-left text-sm text-white/85 ring-1 ring-white/10 transition-colors hover:bg-white/10"
            >
              <MapPin className="mt-0.5 shrink-0 text-brand-mint" size={18} />
              Dhaka, Bangladesh
            </a>
          </Reveal>
          <Reveal direction="left">
            <div className="overflow-hidden rounded-3xl ring-1 ring-white/10">
              <Image src={map} alt="Anfords head office in Dhaka, Bangladesh" className="h-auto w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Question Form Section */}
      <section className="container py-16 sm:py-24">
        <SectionHeading className="mb-12 text-center">Still have Questions?</SectionHeading>
        <div className="grid items-center gap-10 md:grid-cols-[0.8fr_1fr]">
          <Reveal className="hidden md:block">
            <Image src={question} alt="" className="h-auto w-full max-w-sm animate-float" />
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="space-y-5 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl sm:p-8"
            >
              <div>
                <label htmlFor="name" className="text-sm font-medium text-brand-navy">Name</label>
                <Input
                  id="name"
                  aria-invalid={!!errors.name}
                  {...register("name", { required: "Name is required" })}
                  className={fieldClass}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-brand-navy">Email</label>
                <Input
                  id="email"
                  type="email"
                  aria-invalid={!!errors.email}
                  {...register("email", { required: "Email is required" })}
                  className={fieldClass}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-brand-navy">Message</label>
                <Textarea
                  id="message"
                  aria-invalid={!!errors.message}
                  {...register("message", { required: "Message is required" })}
                  className="mt-2 min-h-[140px] rounded-xl border-slate-200 focus-visible:ring-2 focus-visible:ring-brand-sky/40 focus-visible:ring-offset-0"
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
              </div>

              <UiButton type="submit" className="w-full justify-center">
                Submit
              </UiButton>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
