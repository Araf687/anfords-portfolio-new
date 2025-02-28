import React from "react";
import Image from "next/image";
import contactBG from "@/assets/image/landing-page/contactBG.svg";
import phoneIcon from "@/assets/icons/landing-page/phoneIcon.svg";
import mailIcon from "@/assets/icons/landing-page/mailIcon.svg";
import socialLinkIcon from "@/assets/icons/landing-page/socialLinkIcon.svg";
import locationIcon from "@/assets/icons/landing-page/locationIcon.svg";

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
    <div className="bg-[#001F4E] py-10 text-white">
      {/* Top Section */}
      <div className="flex px-[100px] tracking-wide items-center gap-10">
        <div className="space-y-6 flex-1">
          <h1 className="text-6xl">Get In Touch</h1>
          <p className="text-justify">
            Have questions or need assistance? We’re here to help! Reach out to
            Anfords Bangladesh for any inquiries about our products, services,
            or partnerships. Our team is ready to assist you with prompt and
            reliable support. Let’s connect!
          </p>
        </div>
        <Image src={contactBG} alt="contact-background" height={400} />
      </div>

      {/* Contact Information Section */}
      <div className="bg-white text-black mt-12 px-[100px] py-16 flex flex-wrap justify-between">
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
    </div>
  );
};

export default ContactSection;
