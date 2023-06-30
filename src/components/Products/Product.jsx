import MainHeader from "../pop-ups/MainHeader";
import { Products } from "../../Constants/constants";
import "./product.css";
import { NavLink, useParams } from "react-router-dom";

const Product = () => {
  const { item } = useParams();
  const product = [
    "shirt",
    "t-shirt",
    "sport-shoes",
    "formal-shoes",
    "formal-pant",
    "jeans",
  ];
  return (
    <div className="product dashboard">
      <MainHeader title="Product">World's Best Product</MainHeader>
      <main>
        <div className="category">
          <ul>
            {product.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink to={item}>{item}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        {item !== undefined && (
          <div className="product-data">
            <div className="grid">
              <ul>
                <li>Product Name</li>
                <li>
                  Sold <small>in this month</small>
                </li>
                <li>
                  Stock <small>in this this year</small>
                </li>
                <li>
                  Expire <small>Sale End Date</small>
                </li>
              </ul>
              <ul>
                <li>{item}</li>
                <li>
                  {Products[0][item]["sold"]}
                  <small>unit</small>
                </li>
                <li>
                  {Products[0][item]["stock"]}
                  <small>unit</small>{" "}
                </li>
                <li>{Products[0][item]["Date"]}</li>
              </ul>
            </div>
            <div className="image-container">
              {Products[0][item]["url"].map((image, index) => {
                return (
                  <div
                    key={index}
                    style={{ backgroundImage: `url(${image})` }}
                    title={` ${item}-${index+1}`}
                    className="item-image"
                  ></div>
                );
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Product;
