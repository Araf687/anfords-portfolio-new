import React from "react";
import Image from "next/image";
import contactBG from "@/assets/image/landing-page/contactBG.svg";
import phoneIcon from "@/assets/icons/landing-page/phoneIcon.svg";
import mailIcon from "@/assets/icons/landing-page/mailIcon.svg";
import socialLinkIcon from "@/assets/icons/landing-page/socialLinkIcon.svg";
import locationIcon from "@/assets/icons/landing-page/locationIcon.svg";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionDescription from "@/components/ui/SectionDescription";
import leafIcon from "@/assets/icons/landing-page/leaf1.svg";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const ContactSection = () => {
  const contactLinkData = [
    {
      icon: phoneIcon,
      title: "Phone Number",
      data: ["+880-2-9353698", "+880-2-8314671"],
    },
    {
      icon: mailIcon,
      title: "Email",
      data: ["info@anfordslimited.com", "anfordsbangladeshlimited.com"],
    },
    {
      icon: locationIcon,
      title: "Location",
      data: ["7/1 New Eskaton Road, Ghaus Nagar, Dhaka-1000, Bangladesh"],
    },
    {
      icon: socialLinkIcon,
      title: "Social Links",
      data: [
        "facebook.com/anfordsbangladesh",
        "linkedin.com/company/anfords-bangladesh",
      ],
    },
  ];

  return (
    <div className="bg-[#001F4E] pt-10 text-white tracking-wide">
      {/* Top Section */}
      <div className="flex px-[80px] tracking-wide items-center gap-10">
        <div className="space-y-6">
          <SectionHeading bgVarient="dark">Get In Touch</SectionHeading>
          <SectionDescription className="lg:pr-[60px]">
            {" "}
            Have questions or need assistance? We’re here to help! Reach out to
            <span className="text-[#2E9EFF]"> Anfords Bangladesh </span>for any
            inquiries about our products, services, or partnerships. Our team is
            ready to assist you with prompt and reliable support. Let’s connect!
          </SectionDescription>
        </div>
        <Image src={contactBG} alt="contact-background" height={300} />
      </div>

      {/* Contact Information Section */}
      <div className="bg-white text-black mt-12 px-[100px] py-10 flex flex-wrap justify-between">
        {contactLinkData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center px-6 w-[22%]"
          >
            <div className="flex flex-col items-center text-center">
              <Image
                src={item.icon}
                alt={item.title}
                height={50}
                className="mb-3 mx-auto"
              />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <div className="space-y-1">
                {item.data.map((info, idx) => (
                  <p key={idx} className="text-gray-700">
                    {info}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center py-5 px-[80px] border-b-2 border-green-600">
  <div className="flex items-center gap-3">
    <Image src={leafIcon} alt="leafIcon" height={30} />
    <p className="uppercase">
      Anfords Bangladesh © 2025 | All Rights Reserved
    </p>
  </div>
  <div className="flex space-x-6">
    <a
      href="#"
      className="group text-gray-400 transition duration-300"
      aria-label="Facebook"
    >
      <Facebook className="w-6 h-6 group-hover:text-[#1877F2]" />
    </a>

    <a
      href="#"
      className="group text-gray-400 transition duration-300"
      aria-label="Twitter"
    >
      <Twitter className="w-6 h-6 group-hover:text-[#1DA1F2]" />
    </a>

    <a
      href="#"
      className="group text-gray-400 transition duration-300"
      aria-label="Instagram"
    >
      <Instagram className="w-6 h-6 group-hover:text-[#E1306C]" />
    </a>

    <a
      href="#"
      className="group text-gray-400 transition duration-300"
      aria-label="YouTube"
    >
      <Youtube className="w-6 h-6 group-hover:text-[#FF0000]" />
    </a>
  </div>
</div>

      <p className="py-2 text-center text-sm text-gray-400 uppercase">
        Developed and maintain by CODEX 2.0 team
      </p>
    </div>
  );
};

export default ContactSection;
