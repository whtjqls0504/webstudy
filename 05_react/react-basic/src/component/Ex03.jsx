import React from 'react';
import { Link } from 'react-router-dom';
import { person } from '../data/person';

const Ex03 = () => {
  return (
    <div className='ex03'>
      <h1>Ex03</h1> 
      <br/>
      <h4>Path Variable</h4>
      <Link to={{
        // 프로퍼티(pathname) : 값
        pathname: '/pathvariable/name/홍길동/age/20'
      }}>링크1</Link>
      <br/>
      <Link to={{
        // person 값 가져오기
        pathname: `/pathvariable/name/${person.name}/age/${person.age}`
      }}>링크2</Link>

    </div>
  );
};

export default Ex03;