"use client";

import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import {
  ProductCard,
  ProductCardSkeleton,
} from "~/components/shared/ProductCard";
import { Button } from "~/components/ui/button";
import { ProductSortBy, useGetProducts } from "../api/getProducts";
import { Activity } from "react";

export const RecommendedProductsSection = () => {
  const { data: products, isLoading: productsIsLoading } = useGetProducts({
    input: {
      sort: ProductSortBy.RECOMMENDED,
      limit: 6,
    },
  });

  return (
    <section className="w-full container mx-auto px-4 space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-black">Recommended Products</h2>
          <p className="text-muted-foreground text-sm">
            Handpicked products just for you
          </p>
        </div>

        <Link href="/products">
          <Button variant="ghost">
            View All
            <ArrowRightIcon className="size-4" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Activity mode={products ? "visible" : "hidden"}>
          {products?.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              category={product.category?.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </Activity>

        <Activity mode={productsIsLoading && !products ? "visible" : "hidden"}>
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
        </Activity>
      </div>
    </section>
  );
};
