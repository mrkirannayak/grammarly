import React from "react";
import UnlockPremium from "../components/UnlockPremium";
import UpgradeGrammarlyPremium from "../components/UpgradeGrammarlyPremium";
import CustomersReport from "../components/CustomersReport";

const Inner = () => {
  return (
    <>
      <CustomersReport />
      <UnlockPremium />
      <UpgradeGrammarlyPremium />
    </>
  );
};

export default Inner;
