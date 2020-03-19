
import React from 'react' ;

const Counter = ({ value, onIncrement, onDecrement }) => {
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  ) ;
} ;

export default Counter ;

/*
import React from 'react';

const Counter = () => {

    return (
        <div>
        <h1>myCounter</h1> // 카운터를 표시해줄 부분
        <button>+</button> // 증감 버튼
        <button>-</button> // 감소 버튼
        </div>
    ) ;

} ;

export default Counter;
*/
