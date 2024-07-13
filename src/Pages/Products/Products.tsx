import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { TProduct, useGetAllProductsQuery } from "../../redux/api/productsApi";
import Loading from "../../components/Loading";
import ProductCard from "../../components/ProductCard";
import SectionHeader from "../../components/SectionHeader";
import Container from "../../components/Container";

const Products: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const { data, isLoading } = useGetAllProductsQuery({
    page: currentPage,
    limit: productsPerPage,
  });

  const totalProducts = data?.totalProducts || 0;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Container>
      {/* dynamic title */}
      <Helmet>
        <title>Key Haven | Products</title>
      </Helmet>
      {/* Section header */}
      <SectionHeader
        title="Our Products"
        description="Checkout our latest featured products  and all of our mechanical keyboard and enjoy your typing with latest mechanical keyboard"
      />

      {/* Product search and filter */}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-6">
        {data?.data?.map((product: TProduct) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button
          disabled={currentPage === 1}
          onClick={() =>
            setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
          }
          className="btn myPrimaryBtn"
        >
          Previous
        </button>
        <span className="mx-4">
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
          }
          className="btn myPrimaryBtn"
        >
          Next
        </button>
      </div>
    </Container>
  );
};

export default Products;
