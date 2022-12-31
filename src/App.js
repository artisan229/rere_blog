
import { useState } from 'react';
import './App.css';

function App() {

  const title = 'ReactBlog';
  const [post, setPost] = useState(['남자 코트 추천', 'Rust 독학', '강남 우동 맛집']);
  const [like, setLike] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);

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
      {
        post.map((t, i) => {
          return (
            <div className="list">
              <h4>{t} <span onClick={() => {
                const copy = [...like];
                copy[i] = copy[i] + 1;
                setLike(copy)
              }}>따봉 👍 {like[i]}</span></h4>
              <p>2월 19일 발행</p>
            </div>
          );
        })
      }
      <button onClick={() => { setModal(!modal) }}>모달창</button>
      {
        modal === true ?
          <Modal /> :
          null
      }
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
