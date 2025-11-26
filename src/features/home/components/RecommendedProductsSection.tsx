import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { ProductCard } from "~/components/shared/ProductCard";
import { Button } from "~/components/ui/button";

const mockProducts = [
  {
    id: "1",
    name: "Product 1",
    category: "Category 1",
    description: "Description 1",
    price: 100000,
  },
  {
    id: "2",
    name: "Product 2",
    category: "Category 2",
    description: "Description 2",
    price: 200000,
  },
  {
    id: "3",
    name: "Product 3",
    category: "Category 3",
    description: "Description 3",
    price: 300000,
  },
  {
    id: "4",
    name: "Product 4",
    category: "Category 4",
    description: "Description 4",
    price: 400000,
  },
  {
    id: "5",
    name: "Product 5",
    category: "Category 5",
    description: "Description 5",
    price: 500000,
  },
];

export const RecommendedProductsSection = () => {
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
        {mockProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};
