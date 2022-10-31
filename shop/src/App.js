// 스타일 파일
import "./App.css";
import stlyed from "styled-components";

// State
import { useState } from "react";

// router-library
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

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

let YellowBTn = stlyed.button`
  background : yellow;
  color : black;
  padding : 10px
`;

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();

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
            </>
          }
        ></Route>

        <Route
          path="/detail/:id"
          element={<Detail shoes={shoes}></Detail>}
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
