import React, { useEffect } from "react";
import MainLayout from "../../layout/MainLayout";
import { data } from "../../constants";
import { Link } from "react-router-dom";
import NewItem from "../../components/NewItem/NewItem";

const Sale = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MainLayout>
      <div className="show-all">
        {data.clothes
          .filter((item) => item.discount > 0)
          .map((item) => (
            <Link to={`/shop/${item.id}`} key={item.id}>
              <NewItem
                imgUrl={item.imgUrls[0].pic}
                title={item.title}
                price={item.price}
                rate={item.rate}
                discount={item.discount}
              />
            </Link>
          ))}
      </div>
    </MainLayout>
  );
};

export default Sale;
