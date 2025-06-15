import { Title } from "@/components/ui/text";
import { getCategories } from "@/sanity/queries";
import React from "react";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const categories = await getCategories();
  const { slug } = await params;
  return (
    <div className="py-10">
      <Container>
        <Title>
          Items Organized by Category:{" "}
          <span className="font-bold text-emerald-600 capitalize tracking-wide">
            {slug && slug}
          </span>
        </Title>
      </Container>
    </div>
  );
};

export default CategoryPage;
