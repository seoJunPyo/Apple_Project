// 스타일 파일
import "./App.css";
// import stlyed from "styled-components";

// State
import { createContext, useState } from "react";

// library
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import axios from "axios";

// Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// img & data
import bg from "./img/bg.png";
import data from "./data.js";

// import Pages
import { Detail } from "./pages/Detail.js";
import { ItemCard } from "./pages/ItemCard.js";
import { About } from "./pages/About.js";
import { Event, EventOne, EventTwo } from "./pages/Events.js";
import { getAxios } from "./pages/axios";

export let Context1 = createContext();

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [moreCount, setMoreCount] = useState(0);
  let [load, setLoad] = useState(false);
  let [stock] = useState([10, 11, 12]);

  return (
    <div className="App">
      <Navbar className="shop-nav-bar">
        <Container>
          <Navbar.Brand className="nav-logo">SHOP</Navbar.Brand>
          <Nav className="nav-in">
            <Nav.Link
              className="nav-item"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="nav-item"
              onClick={() => {
                navigate("/event");
              }}
            >
              Events
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div
                className="main-bg"
                style={{ backgroundImage: `url(${bg})` }}
              ></div>
              <div className="container">
                <div className="row">
                  {shoes.map(function (a, i) {
                    return <ItemCard shoes={a} i={i}></ItemCard>;
                  })}
                </div>
              </div>
              {load === true ? <div className="load">로딩중입니다.</div> : null}
              <button
                className="more"
                onClick={() => {
                  setLoad(true);
                  if (moreCount === 0) {
                    getAxios(setShoes, shoes, moreCount, setLoad);
                    setMoreCount(1);
                  } else if (moreCount === 1) {
                    getAxios(setShoes, shoes, moreCount, setLoad);
                    setMoreCount(2);
                  }
                }}
              >
                더보기
              </button>
            </>
          }
        ></Route>

        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ stock }}>
              <Detail shoes={shoes}></Detail>
            </Context1.Provider>
          }
        ></Route>
        <Route path="/about" element={<About></About>}>
          <Route path="member" element={<div>멤버임</div>}></Route>
          <Route path="location" element={<About></About>}></Route>
        </Route>
        <Route path="/event" element={<Event></Event>}>
          <Route path="one" element={<EventOne></EventOne>}></Route>
          <Route path="two" element={<EventTwo></EventTwo>}></Route>
        </Route>
        <Route path="*" element={<div>없는 페이지임</div>}></Route>
        <Route />
      </Routes>

      <div className="BackForwardBtn">
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          뒤로
        </button>
        <button
          onClick={() => {
            navigate(+1);
          }}
        >
          앞으로
        </button>
      </div>
    </div>
  );
}

export default App;
