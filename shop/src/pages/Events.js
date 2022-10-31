import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

export function Event() {
  let navigate = useNavigate();
  return (
    <>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
      <button onClick={() => navigate("one")}>이벤트 하나</button>
      <button onClick={() => navigate("two")}>이벤트 둘</button>
    </>
  );
}

export function EventOne() {
  return <p>첫 주문시 양배추즙 서비스</p>;
}

export function EventTwo() {
  return <p>생일기념 쿠폰받기</p>;
}
