import { Container } from "@/components/Container";
import { ProductDetailPage } from "@/components/ProductDetailPage";
import { products } from "@/constants/products";
import { Product } from "@/types/products";
import { Metadata } from "next";
import { redirect } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const product = products.find((p) => p.slug === slug) as Product | undefined;
  if (product) {
    return {
      title: `${product.title} | Om Chavda`,
      description: product.description,
    };
  } else {
    return {
      title: "Projects | Om Chavda",
      description: "Explore my portfolio of projects and work samples.",
    };
  }
}

export default function SingleProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    redirect("/projects");
  }
  return (
    <Container>
      <ProductDetailPage product={product} />
    </Container>
  );
}
