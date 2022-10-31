import { useParams } from "react-router-dom";

export function Detail(props) {
  let { id } = useParams();
  let findItme = props.shoes.find((a) => a.id == id);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              Number(id) + 1
            }.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findItme.title}</h4>
          <p>{findItme.content}</p>
          <p>{findItme.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}
