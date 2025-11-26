"use client";

import { ShoppingCartIcon } from "lucide-react";
import { Button } from "../ui/button";
import { toRupiah } from "~/lib/format";
import Image from "next/image";
import Link from "next/link";

const placeholderImageUrl =
  "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpcnR8ZW58MHx8MHx8fDA%3D";

type ProductCardProps = {
  name: string;
  category: string;
  description: string;
  price: number;
  imageUrl?: string;
  id: string;
};

export const ProductCard = (props: ProductCardProps) => {
  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert("Add to cart");
  };

  return (
    <Link href={`/products/${props.id}`}>
      <div className="rounded-xl border flex flex-col gap-4 aspect-[4/3] overflow-clip group hover:shadow-xl transition-all duration-300">
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={placeholderImageUrl}
            alt="Product Image"
            unoptimized
            fill
            className="object-cover group-hover:scale-105 transition-all duration-300"
          />
        </div>

        <div className="flex flex-col gap-4 p-4">
          {/* Title and Category */}
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">{props.category}</p>
            <h3 className="text-lg font-bold">{props.name}</h3>
          </div>

          {/* Short Description */}
          <p className="text-sm text-muted-foreground line-clamp-2">
            {props.description}
          </p>

          {/* Price and CTA */}
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold">{toRupiah(props.price)}</p>

            <Button variant="default" onClick={handleAddToCart}>
              <ShoppingCartIcon className="size-4" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};
