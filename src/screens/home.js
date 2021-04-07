import React from "react";
import Seo from "../shared/Seo";
import Navigation from "../shared/Navigaion";
import PaymentSec from "../components/PaymentSec";

function Home() {
  return (
    <React.Fragment>
      <Seo>
        <header>
          <div>
            <Navigation />
          </div>
          <PaymentSec/>
        </header>
      </Seo>
    </React.Fragment>
  );
}
export default Home;
