import React from "react";
import SectionHeader from "../../components/SectionHeader";
import { TProduct, useGetAllProductsQuery } from "../../redux/api/productsApi";
import Loading from "../../components/Loading";
import ProductCard from "../../components/ProductCard";

const FeaturedProducts: React.FC = () => {
  const { data, isLoading } = useGetAllProductsQuery({ limit: 6, page: 1 });
  if (isLoading) {
    return <Loading />;
  }
  console.log(data?.data);
  return (
    <div>
      <SectionHeader
        title="Featured Keyboard"
        description="Checkout our latest featured products and enjoy your typing with latest mechanical keyboard"
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-6">
        {data?.data?.map((product: TProduct) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
