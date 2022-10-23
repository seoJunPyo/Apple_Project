/* eslint-disable */

import { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 제목변경] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);
  let [좋아요, 좋아요변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [input, setInput] = useState("");
  let date = String(new Date());
  let [inputDate, setInputDate] = useState([date, date, date]);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "여자 코트 추천";
          제목변경(copy);
        }}
      >
        제목바꾸기
      </button>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy.sort();
          제목변경(copy);
        }}
      >
        가나다 정렬
      </button>

      {/* <div className="list">
        <h4
          onClick={() => {
            modal == false ? setModal(true) : setModal(false);
          }}
        >
          {글제목[0]}{" "}
          <span
            onClick={() => {
              좋아요변경(좋아요 + 1);
            }}
          >
            ❤️
          </span>{" "}
          {좋아요}
        </h4>
        <p>2월 17일 발행</p>
      </div> */}

      {글제목.map((a, i) => {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                modal == false ? setModal(true) : setModal(false);
                setTitle(i);
              }}
            >
              {글제목[i]}{" "}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...좋아요];
                  copy[i] += 1;
                  좋아요변경(copy);
                }}
              >
                ❤️
              </span>{" "}
              {좋아요[i]}
            </h4>
            <p>{inputDate[i]}</p>
            <button
              onClick={() => {
                let titleCopy = [...글제목];
                let likeCopy = [...좋아요];
                titleCopy.splice(i, 1);
                likeCopy.splice(i, 1);
                제목변경(titleCopy);
                좋아요변경(likeCopy);
                setModal(false);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      <div className="input-container">
        <input
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            let titleCopy = [...글제목];
            let likeCopy = [...좋아요];
            let dateCopy = [...inputDate];

            input.length > 1 ? titleCopy.unshift(input) : null;
            input.length > 1 ? likeCopy.unshift(0) : null;
            input.length > 1 ? dateCopy.unshift(String(new Date())) : null;
            console.log(dateCopy);

            setInputDate(dateCopy);
            제목변경(titleCopy);
            좋아요변경(likeCopy);
          }}
        >
          추가
        </button>
        <button
          onClick={() => {
            let copy = [...글제목];
            copy.splice(0);
            제목변경(copy);
          }}
        >
          전체삭제
        </button>
      </div>

      {modal == true ? <Modal 글제목={글제목} title={title} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}

export default App;
