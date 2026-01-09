"use client";

import { ChevronLeft } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      variant="outline"
      size="icon"
      className="bg-background absolute top-6 left-5 rounded-full"
      onClick={() => router.back()}
    >
      <ChevronLeft />
    </Button>
  );
};

export default BackButton;
