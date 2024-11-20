import React from "react";
import CafeGallery from "../blocks/cafe-gallery/cafe-gallery";
import Buy from "../blocks/buy/buy";

function BuyPage({ slides, buyOptions }) {
  return (
    <React.Fragment>
      <CafeGallery slides={slides} />
      <Buy buyOptions={buyOptions} />
    </React.Fragment>
  );
}

export default BuyPage;