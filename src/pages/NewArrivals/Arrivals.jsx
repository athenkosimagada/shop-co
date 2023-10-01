import React, { useEffect } from "react";
import MainLayout from "../../layout/MainLayout";
import New from "../../containers/New/New";
import { data } from "../../constants";

const Arrivals = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MainLayout>
      <New
        id="new-arrivals"
        key={1}
        data={data.clothes}
        topic="NEW ARRIVALS"
        value={true}
        newData={true}
      />
    </MainLayout>
  );
};

export default Arrivals;
