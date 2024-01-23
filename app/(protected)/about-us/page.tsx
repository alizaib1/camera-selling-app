"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const AboutUs = () => {
  const [state, setState] = useState("second");
  return (
    <div>
      <Link href="/">go back</Link>
      <Button size="lg" variant="destructive">
        My Button
      </Button>
    </div>
  );
};

export default AboutUs;
