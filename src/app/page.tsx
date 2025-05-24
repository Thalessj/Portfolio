"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingScreen from "@/app/loadingScreen";

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [showLoading, setShowLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setShowLoading(false);
            router.push("/portfolio/home");
          }, 800);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [router]);

  if (!showLoading) return null;

  return <LoadingScreen progress={progress} />;
}
