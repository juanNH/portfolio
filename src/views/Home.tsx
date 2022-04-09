import React from "react";
import BlogSection from "../components/views/home/blogSection/BlogSection";
import HomeHeader from "../components/views/home/homeHeader/HomeHeader";
import HomePersonSection from "../components/views/home/homePersonSection/HomePersonSection";
import MainLayOut from "../layouts/MainLayOut";

const Home = () => {
  return (
    <MainLayOut>
      <HomeHeader />
      <HomePersonSection />
      <BlogSection />
    </MainLayOut>
  );
};

export default Home;
