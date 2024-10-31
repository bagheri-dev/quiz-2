import React from "react";
import MovieForm from "../components/MovieForm";
import MovieTable from "../components/MovieTable";
import Header from "../components/Header";
import SectionTranding from "../components/SectionTranding";
import SectionLike from "../components/SectionLike";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <MovieForm />
        <MovieTable />
        <SectionTranding />
        <SectionLike />
      </div>
    </>
  );
};

export default Home;
