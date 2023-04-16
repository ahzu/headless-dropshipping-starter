import * as React from "react";
import { GetStaticProps } from "next";
import { orderBy, slice } from "lodash";

import { printful } from "../lib/printful-client";
import { formatVariantName } from "../lib/format-variant-name";
import { PrintfulProduct } from "../types";

import ProductGrid from "../components/ProductGrid";
import Banner from "../components/banner";

type ProductsPageProps = {
  products: PrintfulProduct[];
};


const ProductsPage: React.FC<ProductsPageProps> = ({ products }) => (
  <>
 <Banner />
    <div className="text-center pb-6 md:pb-12">
      <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">
        All Products
      </h1>
    </div>

    <ProductGrid products={products} />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const { result: productIds } = await printful.get("sync/products");

  const allProducts = await Promise.all(
    productIds.map(async ({ id }) => await printful.get(`sync/products/${id}`))
  );

  const products: PrintfulProduct[] = allProducts.map(
    ({ result: { sync_product, sync_variants } }) => ({
      ...sync_product,
      variants: sync_variants.map(({ name, ...variant }) => ({
        name: formatVariantName(name),
        ...variant,
      })),
    })
  );

  const sortedProducts = orderBy(products, "price", "asc");
  const limitedProducts = slice(sortedProducts, 0, 9);

  return {
    props: {
      products: limitedProducts,
    },
  };
};

export default ProductsPage;
