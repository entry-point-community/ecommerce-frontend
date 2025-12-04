import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { slugify } from "~/lib/utils";

type useSelfHealingSlugParams = {
  id: string;
  name: string;
};

export const useSelfHealingSlug = (params: useSelfHealingSlugParams) => {
  const router = useRouter();

  const selfHealProductUrl = () => {
    const productNameSlug = slugify(params.name);

    const slug = `${productNameSlug}-${params.id}`;

    router.replace(`/products/${slug}`);
  };

  useEffect(() => {
    selfHealProductUrl();
  }, []);
};
