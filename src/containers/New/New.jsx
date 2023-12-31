import React, { useRef, useState } from "react";
import "./New.css";
import NewItem from "../../components/NewItem/NewItem";
import { Link } from "react-router-dom";

const New = ({ data, topic, value, newData }) => {
  const [pressed, setPressed] = useState(false);
  const newContentRef = useRef(null);

  function handClick() {
    setPressed(!pressed);

    if (newContentRef.current && pressed) {
      newContentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      newContentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  const borderStyle = value ? { borderBottom: "1px solid #a9a9a9" } : {};
  return (
    <div className="new" ref={newContentRef}>
      <h1>{topic}</h1>
      <div style={borderStyle} className="new-content">
        <div className={pressed ? "show-all" : "new-arrivals"}>
          {data
            .filter((item) => item.new === newData)
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
        <div className="bottom">
          <button className="view-button" type="button" onClick={handClick}>
            {pressed ? "View Less" :"View All"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default New;
