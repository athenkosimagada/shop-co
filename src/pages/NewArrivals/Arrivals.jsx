import React, { useEffect } from "react";
import MainLayout from "../../layout/MainLayout";
import New from "../../containers/New/New";
import { data } from "../../constants";
import { Link } from "react-router-dom";
import "./Arrivals.css";

const Arrivals = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MainLayout>
      <div className="arrivals">
        <div className="navigation">
          <Link to="/">
            <p>Home</p> <i className="fa-solid fa-chevron-right"></i>
          </Link>
          <p>New Arrivals</p>
        </div>
        <New
          id="new-arrivals"
          key={1}
          data={data.clothes}
          topic="NEW ARRIVALS"
          value={true}
          newData={true}
        />
      </div>
    </MainLayout>
  );
};

export default Arrivals;
