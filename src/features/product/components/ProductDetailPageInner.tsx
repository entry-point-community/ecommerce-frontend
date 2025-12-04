"use client";

import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { toRupiah } from "~/lib/format";
import { useSelfHealingSlug } from "../hooks/useSelfHealingSlug";

type ProductDetailPageInnerProps = {
  id: string;
  name: string;
  imageUrl: string;
  category: string;
  description: string;
  price: number;
};

export const ProductDetailPageInner = (props: ProductDetailPageInnerProps) => {
  useSelfHealingSlug({ id: props.id, name: props.name });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Product Image */}
      <div className="aspect-[4/3] overflow-hidden rounded-xl">
        <div className="relative w-full h-full">
          <Image
            src={props.imageUrl}
            alt={props.name}
            unoptimized
            fill
            className="object-cover group-hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-col gap-4 justify-between">
        <div className="space-y-4">
          <Badge variant="secondary">{props.category}</Badge>
          <h1 className="text-3xl font-bold">{props.name}</h1>
          <h3 className="text-3xl font-bold text-primary">
            {toRupiah(props.price)}
          </h3>

          <Separator />

          <div className="space-y-1">
            <h5 className="font-medium">Description</h5>
            <p className="text-muted-foreground text-sm">{props.description}</p>
          </div>
        </div>

        <Button variant="default" size="lg" className="w-full">
          <ShoppingCart className="size-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
