import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import heroImage from "~/assets/hero.webp";
import { Button } from "~/components/ui/button";

const HeroImage = () => {
  return (
    <div className="w-full h-full absolute inset-0 -z-10">
      <Image
        src={heroImage}
        alt="Hero Image"
        unoptimized
        fill
        className="object-cover bg-linear-to-l from-primary to-secondary"
      />

      <div className="absolute inset-0 bg-linear-to-r from-20% from-secondary to-transparent w-full h-full"></div>
    </div>
  );
};

export const HeroSection = () => {
  return (
    <section className="w-full min-h-[600px] relative flex flex-col justify-center">
      <HeroImage />

      <div className="flex flex-col gap-6 container mx-auto px-4">
        <h1 className="text-5xl font-black leading-16">
          Discover Your Next <br />{" "}
          <span className="text-primary"> Favorite Product</span>
        </h1>

        <p className="max-w-lg">
          Shop the latest tech and gadgets at unbeatable prices. Quality
          products delivered to your door.
        </p>

        <Link href="/products">
          <Button variant="default" size="lg">
            Shop Now
            <ArrowRightIcon className="size-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
};
