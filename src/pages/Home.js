import React from "react";
import BannerSection from "../components/BannerSection";
import UnlockPremium from "../components/UnlockPremium";
import GetJobDone from "../components/GetJobDone";
import UpgradeGrammarlyPremium from "../components/UpgradeGrammarlyPremium";
import CustomersReport from "../components/CustomersReport";

const Home = () => {
  return (
    <>
      <BannerSection />
      <UnlockPremium />
      <GetJobDone />
      <CustomersReport />
      <UpgradeGrammarlyPremium />
    </>
  );
};

export default Home;
