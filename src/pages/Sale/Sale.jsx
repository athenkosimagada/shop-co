import React, { useEffect } from "react";
import MainLayout from "../../layout/MainLayout";
import { data } from "../../constants";
import { Link } from "react-router-dom";
import NewItem from "../../components/NewItem/NewItem";
import "./Sale.css";

const Sale = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MainLayout>
      <div className="sale">
        <div className="navigation">
          <Link to="/">
            <p>Home</p> <i className="fa-solid fa-chevron-right"></i>
          </Link>
          <p>On Sale</p>
        </div>
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
      </div>
    </MainLayout>
  );
};

export default Sale;
