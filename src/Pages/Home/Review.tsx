// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import SectionHeader from "../../components/SectionHeader";
import { useGetAllReviewQuery } from "../../redux/api/reviewsApi";
import Loading from "../../components/Loading";
import { IoLocationSharp } from "react-icons/io5";

const Review = () => {
  const { data, isLoading } = useGetAllReviewQuery();
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="my-12">
      <SectionHeader
        title={"Our Customers Review"}
        description="Read testimonials from our satisfied customers who love their new mechanical keyboards. Hear their stories and see why we are the top choice. Join our community of enthusiasts."
      />

      <div className="text-white my-6">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          {data?.data?.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="md:flex gap-6 lg:border-l-4 border-l-2 border-blue-500">
                <div className="flex flex-col justify-between bg-blue-900 p-10">
                  <div className="text-start">
                    <h1 className="text-9xl">❝</h1>
                    <h1 className="text-4xl mb-2 font-semibold">
                      {review.name}
                    </h1>
                    <div className="flex items-center justify-start gap-3">
                      <IoLocationSharp /> {review.location}
                    </div>
                  </div>

                  <p className=" w-3/4 text-justify mt-4">{review.review}</p>

                  <div className="flex gap-2 items-end">
                    <h1 className="text-xl text-slate-100">Ratings: </h1>
                    <h1 className="mt-6">
                      {" "}
                      <Rating
                        style={{ maxWidth: 150 }}
                        value={review.rating}
                        readOnly
                      />
                    </h1>
                  </div>
                </div>
                <div className="w-[425px] h-[475px]">
                  <img className="w-full" src={review.image} alt="Guest" />
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* <SwiperSlide>
            <div className="md:flex gap-6 border-l-2 border-orange-500">
              <div className="flex flex-col justify-between bg-blue-900/30 p-10">
                <div>
                  <h1 className="text-9xl">❝</h1>
                  <h1 className="text-4xl mb-2 font-semibold">Sarah Chen</h1>
                  <h1 className="text-2xl text-slate-200">
                    Home Cook Extraordinaire
                  </h1>
                </div>

                <p className=" w-3/4 text-justify">
                  Your recipes have turned me into a culinary star at home! The
                  step-by-step guides make it easy to replicate authentic
                  Chinese flavors. My family can&apos;t get enough, and
                  we&apos;ve made cherished memories around your dishes. Thank
                  you for making me a kitchen hero!
                </p>

                <div className="flex gap-2 items-end">
                  <h1 className="text-2xl text-slate-100">Summarized</h1>
                  <h1 className="">_ by Admin </h1>
                </div>
              </div>
              <img className="w-full" src="{guest2}" alt="Guest" />
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
