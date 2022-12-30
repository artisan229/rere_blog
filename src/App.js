/*eslint-disable*/
import { useState } from 'react';
import './App.css';

function App() {

  const title = '강남 우동 맛집';
  const [post, setPost] = useState(['남자 코트 추천', 'Rust 독학', '강남 우동 맛집']);
  const [like, setLike] = useState(0)

  const changeLike = () => {
    setLike(like + 1)
  }

  const sortPost = () => {
    const copy = [...post]; // deep copy
    copy.sort();
    setPost(copy)
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{title}</h4>
      </div>
      <button onClick={sortPost}>정렬</button>
      <div className="list">
        <h4>{post[0]}
          <span onClick={changeLike}>👍</span>{like}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{post[1]}</h4>
        <p>2월 18일 발행</p>
      </div>
      <div className="list">
        <h4>{post[2]}</h4>
        <p>2월 19일 발행</p>
      </div>

      <Modal />
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
