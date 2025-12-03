import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { toRupiah } from "~/lib/format";

const placeholderImageUrl =
  "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpcnR8ZW58MHx8MHx8fDA%3D";

const ProductDetailPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 min-h-[80vh] flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="aspect-[4/3] overflow-hidden rounded-xl">
          <div className="relative w-full h-full">
            <Image
              src={placeholderImageUrl}
              alt="Product Image"
              unoptimized
              fill
              className="object-cover group-hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-4 justify-between">
          <div className="space-y-4">
            <Badge variant="secondary">Category Name</Badge>
            <h1 className="text-3xl font-bold">Product Name</h1>
            <h3 className="text-3xl font-bold text-primary">
              {toRupiah(100000)}
            </h3>

            <Separator />

            <div className="space-y-1">
              <h5 className="font-medium">Description</h5>
              <p className="text-muted-foreground text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </p>
            </div>
          </div>

          <Button variant="default" size="lg" className="w-full">
            <ShoppingCart className="size-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
