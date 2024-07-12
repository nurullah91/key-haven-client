import React from "react";
import { Helmet } from "react-helmet-async";
import { TProduct, useGetAllProductsQuery } from "../../redux/api/productsApi";
import Loading from "../../components/Loading";
import ProductCard from "../../components/ProductCard";
import SectionHeader from "../../components/SectionHeader";
import Container from "../../components/Container";

const Products: React.FC = () => {
  const { data, isLoading } = useGetAllProductsQuery({});
  if (isLoading) {
    return <Loading />;
  }

  console.log(data);
  return (
    <Container>
      <Helmet>
        <title>Key Haven | Products</title>
      </Helmet>
      <SectionHeader
        title="Our Products"
        description="Checkout our latest featured products  and all of our mechanical keyboard and enjoy your typing with latest mechanical keyboard"
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-6">
        {data?.data?.map((product: TProduct) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </Container>
  );
};

export default Products;
