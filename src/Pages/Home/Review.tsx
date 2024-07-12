// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import SectionHeader from "../../components/SectionHeader";
import { useGetAllReviewQuery } from "../../redux/api/reviewsApi";
import Loading from "../../components/Loading";

const Review = () => {
  const { data, isLoading } = useGetAllReviewQuery();
  if (isLoading) {
    return <Loading />;
  }

  console.log(data);
  return (
    <div className="w-11/12 lg:w-9/12 mx-auto">
      <SectionHeader
        title={"Our Customers Review"}
        description="Our guest comes from our different countries and different Restaurant. Best chinese Chef in the world and gave us their consultations. They share their experience and advice"
      />

      <div className="text-white">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <div className="md:flex gap-6 border-l-2 border-orange-500">
              <div className="flex flex-col justify-between bg-blue-900/30 p-10">
                <div>
                  <h1 className="text-9xl">❝</h1>
                  <h1 className="text-4xl mb-2 font-semibold">Sarah Chen</h1>
                  <h1 className="text-2xl text-slate-200">
                    Home Cook Extraordinaire
                  </h1>
                </div>

                <p className=" w-3/4 text-justify mt-4">
                  Your recipes have turned me into a culinary star at home! The
                  step-by-step guides make it easy to replicate authentic
                  Chinese flavors. My family can&apos;t get enough, and
                  we&apos;ve made cherished memories around your dishes. Thank
                  you for making me a kitchen hero!
                </p>

                <div className="flex gap-2 items-end">
                  <h1 className="text-2xl text-slate-100">Summarized</h1>
                  <h1 className="mt-6">_ by Admin </h1>
                </div>
              </div>
              <img className="w-full" src="{guest1}" alt="Guest" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
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
          </SwiperSlide>

          <SwiperSlide>
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
              <img className="w-full" src="{guest3}" alt="Guest" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
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
              <img className="w-full" src="{guest4}" alt="Guest" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
