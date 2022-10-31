import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

export function ItemCard(props) {
  return (
    <div className="col-md-4">
      <Link to={`/detail/${props.shoes.id}`}>
        <img
          src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`}
          alt=""
          width="80%"
        />
      </Link>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}원</p>
    </div>
  );
}
