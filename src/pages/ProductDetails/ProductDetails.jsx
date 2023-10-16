import React, { useEffect, useState } from "react";
import MainLayout from "../../layout/MainLayout";
import Details from "../../containers/Details/Details";
import NewItem from "../../components/NewItem/NewItem";
import Review from "../../components/Review/Review";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { data } from "../../constants";
import "./ProductDetails.css";

const ProductDetails = () => {
  const params = useParams();
  const [reload, setReload] = useState(false);
  const [pressed, setPressed] = useState(false);
  
  function handClick() {
    setPressed(!pressed);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    if (reload) {
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
          <Link to="/">
            <p>Home</p> <i className="fa-solid fa-chevron-right"></i>
          </Link>
          <Link to="/shop">
            <p>Shop</p> <i className="fa-solid fa-chevron-right"></i>
          </Link>
          <Link to={`/${data.clothes[params.id].gender}`}>
            <p>{data.clothes[params.id].gender}</p> <i className="fa-solid fa-chevron-right"></i>
          </Link>
          <p>{data.clothes[params.id].type}</p>
        </div>
        <Details
          details={data.clothes[params.id]}
          current={data.clothes[params.id].imgUrls[0].pic}
        />
        <div className="product-reviews">
          <div className="top-reviews">
            <div className="left-reviews">
              <h2>All Reviews</h2>
              <p>({data.clothes[params.id].reviews.length})</p>
            </div>
            <div className="right-reviews"></div>
          </div>
          <div className="reviews-content">
            {data.clothes[params.id].reviews.map((item, index) => (
              <Review
                key={item + index}
                rate={item.rate}
                name={item.name}
                comment={item.comment}
                date="August 17, 2023"
              />
            ))}
          </div>

          <div className="bottom">
            <button className="view-button" type="button" onClick={handClick}>
              Load More Reviews
            </button>
          </div>
        </div>
        <div className="similar">
          <h1>YOU MAY ALSO LIKE</h1>
          <div className="similar-clothes">
            {data.clothes
              .filter(
                (item, index) =>
                  item.title !== data.clothes[params.id].title && 
                  index < 5
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
