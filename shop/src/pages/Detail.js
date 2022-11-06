import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Nav } from "react-bootstrap";
import { Context1 } from "../App.js";
import { useContext } from "react";

export function Detail(props) {
  let [number, setNumber] = useState(0);
  let [numberAlert, setNumberAlert] = useState(false);
  let [alert, setAlert] = useState(true);
  let [tab, setTab] = useState(0);
  let [fade, setFade] = useState("");

  let { stock } = useContext(Context1);

  useEffect(() => {
    setFade("end");
    return () => {
      setFade("");
    };
  }, []);

  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(a);
    };
  });

  useEffect(() => {
    if (isNaN(number)) {
      setNumberAlert(true);
    } else {
      setNumberAlert(false);
    }
  }, [number]);

  let { id } = useParams();
  let findItme = props.shoes.find((a) => String(a.id) === id);
  return (
    <div className={`container start ${fade}`}>
      {alert === true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              Number(id) + 1
            }.jpg`}
            width="100%"
            alt=""
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findItme.title}</h4>
          <p>{findItme.content}</p>
          <p>{findItme.price}원</p>
          <input
            type=""
            name=""
            id=""
            className="orderCount"
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
          <button className="btn btn-danger">주문하기</button>
          {numberAlert === true ? (
            <div className="alert alert-warning">그러지마세요</div>
          ) : null}
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              setTab(0);
            }}
          >
            메뉴0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              setTab(1);
            }}
          >
            메뉴1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-2"
            onClick={() => {
              setTab(2);
            }}
          >
            메뉴2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </div>
  );
}

function TabContent({ tab }) {
  let [fade, setFade] = useState("");
  let { stock } = useContext(Context1);

  useEffect(() => {
    let a = setTimeout(() => {
      setFade("end");
    }, 10);
    return () => {
      setFade("");
      clearTimeout(a);
    };
  }, [tab]);
  return (
    <div className={`start ${fade}`}>
      {[<div>{stock}</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  );
}

export default Detail;
