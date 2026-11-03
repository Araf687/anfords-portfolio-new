import React from "react";
import Image from "next/image";
import Link from "next/link";
import contactBG from "@/assets/image/landing-page/contactBG.svg";
import phoneIcon from "@/assets/icons/landing-page/phoneIcon.svg";
import mailIcon from "@/assets/icons/landing-page/mailIcon.svg";
import socialLinkIcon from "@/assets/icons/landing-page/socialLinkIcon.svg";
import locationIcon from "@/assets/icons/landing-page/locationIcon.svg";
import SectionHeading from "@/components/ui/SectionHeading";
import leafIcon from "@/assets/icons/landing-page/leaf1.svg";
import UiButton from "@/components/ui/uiButton";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { navLinks } from "@/lib/nav";

const contactLinkData = [
  {
    icon: phoneIcon,
    title: "Phone Number",
    data: [
      { label: "+880-2-9353698", href: "tel:+88029353698" },
      { label: "+880-2-8314671", href: "tel:+88028314671" },
    ],
  },
  {
    icon: mailIcon,
    title: "Email",
    data: [
      { label: "info@anfordslimited.com", href: "mailto:info@anfordslimited.com" },
      { label: "anfordsbangladeshlimited.com" },
    ],
  },
  {
    icon: locationIcon,
    title: "Location",
    data: [
      {
        label: "7/1 New Eskaton Road, Ghaus Nagar, Dhaka-1000, Bangladesh",
        href: "https://maps.google.com/?q=7/1+New+Eskaton+Road,+Dhaka-1000,+Bangladesh",
      },
    ],
  },
  {
    icon: socialLinkIcon,
    title: "Social Links",
    data: [
      { label: "facebook.com/anfordsbangladesh", href: "https://facebook.com/anfordsbangladesh" },
      {
        label: "linkedin.com/company/anfords-bangladesh",
        href: "https://linkedin.com/company/anfords-bangladesh",
      },
    ],
  },
];

const socials = [
  { Icon: Facebook, label: "Facebook", hover: "hover:bg-[#1877F2]" },
  { Icon: Twitter, label: "Twitter", hover: "hover:bg-[#1DA1F2]" },
  { Icon: Instagram, label: "Instagram", hover: "hover:bg-[#E1306C]" },
  { Icon: Youtube, label: "YouTube", hover: "hover:bg-[#FF0000]" },
];

const ContactSection = () => {
  return (
    <div className="relative overflow-hidden bg-brand-navy text-white">
      <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-brand-blue/40 blur-[140px]" />

      {/* Top Section */}
      <div className="container relative grid items-center gap-10 pb-12 pt-16 sm:pt-20 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-6">
          <SectionHeading bgVarient="dark">Get In Touch</SectionHeading>
          <Reveal delay={0.15}>
            <p className="max-w-xl text-[15px] leading-relaxed text-white/75 md:text-base">
              Have questions or need assistance? We’re here to help! Reach out to
              <span className="text-brand-sky"> Anfords Bangladesh </span> for any
              inquiries about our products, services, or partnerships. Our team is
              ready to assist you with prompt and reliable support. Let’s connect!
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <UiButton varient="light" href="/contact-us">
              Contact Us
            </UiButton>
          </Reveal>
        </div>
        <Reveal direction="left">
          <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10">
            <Image src={contactBG} alt="Anfords customer support team" className="h-auto w-full" />
          </div>
        </Reveal>
      </div>

      {/* Contact Information Section */}
      <div className="container relative pb-14">
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactLinkData.map((item) => (
            <StaggerItem key={item.title} className="h-full">
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-brand-sky/40 hover:bg-white/[0.08]">
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-white transition-transform duration-500 group-hover:rotate-[-8deg]">
                  <Image src={item.icon} alt="" height={30} />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <div className="space-y-1">
                  {item.data.map((info) =>
                    info.href ? (
                      <a
                        key={info.label}
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="block break-words text-sm text-white/70 transition-colors hover:text-brand-mint"
                      >
                        {info.label}
                      </a>
                    ) : (
                      <p key={info.label} className="break-words text-sm text-white/70">
                        {info.label}
                      </p>
                    )
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* Footer Section */}
      <div className="relative border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-6 py-6 lg:flex-row">
          <div className="flex items-center gap-3 text-center lg:text-left">
            <Image src={leafIcon} alt="" height={30} />
            <p className="text-xs uppercase tracking-wider text-white/80 sm:text-sm">
              Anfords Bangladesh © {new Date().getFullYear()} | All Rights Reserved
            </p>
          </div>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-white/60">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-white">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-2">
            {socials.map(({ Icon, label, hover }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className={`grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:text-white ${hover}`}
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-brand-blue via-brand-green to-brand-mint" />
        {/* Developer Credit */}
        <p className="py-3 text-center text-xs uppercase tracking-wider text-white/40">
          Developed and maintained by CODEX 2.0 team
        </p>
      </div>
    </div>
  );
};

export default ContactSection;
