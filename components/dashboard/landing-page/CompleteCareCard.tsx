import Image, { StaticImageData } from "next/image";
import React from "react";

const CompleteCareCard = ({
  data,
}: {
  data: { image: StaticImageData; title: string; description: string };
}) => {
  const { title, description, image } = data;

  return (
    <div className="space-y-3 text-center w-full flex flex-col items-center justify-center">
      <Image src={image} alt="card-icon" className="mb-4" height={100} />
      <h3 className="text-xl font-semibold">{title}</h3>
      {/* <p>{description}</p> */}
    </div>
  );
};

export default CompleteCareCard;
