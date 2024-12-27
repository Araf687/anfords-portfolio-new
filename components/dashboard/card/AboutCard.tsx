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
import { AboutCardProps } from "@/types/data";
import Image from "next/image";

export function AboutCard({ data }: { data: AboutCardProps }): JSX.Element {
  return (
    <Card className="text-center shadow-none">
      <CardHeader className="flex items-center pb-3">
        <Image
          src={data?.image}
          alt="card-icon"
          height={data?.height || 80}
          width={data?.width || 80}
          className="mb-4"
        />
         <CardTitle className="font-semibold text-lg">{data?.title.toUpperCase()}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-wrap text-sm pt-2">{data?.description}</p>
      </CardContent>
    </Card>
  );
}
