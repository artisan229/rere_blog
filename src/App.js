/*eslint-disable*/
import { useState } from 'react';
import './App.css';

function App() {

  const title = '강남 우동 맛집';
  const [post, setPost] = useState(['남자 코트 추천', 'Rust 독학', '강남 우동 맛집']);
  const [like, setLike] = useState(0)

  const changeLike = event => {
    setLike(like + 1)
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color: 'red'}}>{title}</h4>
      </div>
      <div className="list">
        <h4>{post[0]} <span onClick={changeLike}>👍</span>{like}</h4>
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
    </div>
  );
}

export default App;
