 import React, { useState } from 'react';

const Ex05 = () => {

  // state 변수 활용하기
  
  // state 변수 이름 : count
  // state 변수 초기값 : 0
  // state 변수 값을 바꾸려면 setCount() 함수를 호출한다.
  const [count, setCount] = useState(0);


  return (
    <div className='ex05'> 
      <h1>Ex05</h1>
      <button onClick={() =>{ setCount(count + 1)}}>클릭</button>
      <div>도대체 {count}번이나 클릭하는 이유가 뭔데? 너 뭐 인성문제잇어?</div>
    </div>
  );
};

export default Ex05;