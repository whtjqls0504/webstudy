import React from 'react';

const Ex02 = (props) => {
  /*
    props : 다른컴포넌트(부모)가 전달한 파라미터(값)를 저장할 때 사용하는 매개변수
  */

  /*
    구조 분해
    const {변수1, 변수2, 변수3} = 객체;
  */
  const {name, age} = props.per;

  return (
    <div className='ex02'>
      <h1>Ex02</h1>
      <div>{name}, {age}</div>
    </div>
  );
};

export default Ex02;