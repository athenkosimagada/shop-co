import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Details from "../containers/Details/Details";
import NewItem from "../components/NewItem/NewItem";
import Review from "../components/Review/Review";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { data } from "../constants";
import "./ProductDetails.css";

const ProductDetails = () => {
  const params = useParams();
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (reload) {
      // Delay the reload by 100 milliseconds for a smoother transition
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  }, [params.id, reload]);

  const handleLinkClick = () => {
    setReload(true);
  };

  return (
    <MainLayout>
      <div className="product-page">
        <div className="navigation">
          {/* ... */}
        </div>
        <Details
          data={data.clothes[params.id]}
          current={data.clothes[params.id].imgUrls[0].pic}
        />
         <div className="product-reviews">
            <div className="top-reviews">
                <div className="left-reviews">
                <h2>All Reviews</h2>
                <p>({data.clothes[params.id].reviews.length})</p>
                </div>
                <div className="right-reviews">

                </div>
            </div>
            <div className="reviews-content">
            {data.clothes[params.id].reviews.map((item, index) => (
                    <Review key={item + index} rate={item.rate} name={item.name} comment={item.comment} date='August 17, 2023'/>
              ))}
            </div>
        </div>
        <div className="similar">
          <h1>YOU MAY ALSO LIKE</h1>
          <div className="similar-clothes">
            {data.clothes
              .filter(
                (item) =>
                  item.type === data.clothes[params.id].type &&
                  item.title !== data.clothes[params.id].title
              )
              .map((item) => (
                <Link
                  to={`/shop/${item.id}`}
                  key={item.id}
                  onClick={handleLinkClick} // Call the function on click
                >
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
      </div>
    </MainLayout>
  );
};

export default ProductDetails;
