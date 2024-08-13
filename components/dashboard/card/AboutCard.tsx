import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AboutCardProps } from "@/types/main";
import Image from "next/image";

export function AboutCard({ data }: { data: AboutCardProps }): JSX.Element {
  return (
    <Card className="text-center bg-green-50">
      <CardHeader className="flex items-center pb-3">
        <Image
          src={data?.image}
          alt="card-icon"
          height={60}
          width={60}
          className="mb-4"
        />
         <CardTitle className="font-semibold text-md">{data?.title.toUpperCase()}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 text-wrap">{data?.description}</p>
      </CardContent>
    </Card>
  );
}
