"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import contactUsImg from "@/assets/image/contact us/contact-us2.jpg";
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

  return (
    <div className="max-w-6xl mx-auto p-8">
      <p className="text-2xl mb-3">Contact Us</p>
      <div >
      <div className="relative h-[300px] w-full mb-3">
          <Image
            src={contactUsImg} // replace with your image path or variable
            alt="Contact Us"
            layout="fill"
            objectFit="cover"
            className="rounded-lg" // Optional: Add any additional styling like border-radius
          />
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default ContactForm;
