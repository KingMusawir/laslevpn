import React, { useState } from 'react';
import '../../../App.css';
import ButtonProp from '../../button/ButtonProp';

function List(props) {
  return (
    <div>
      <div className='pricing'>
        <div>
          <img src={props.icon} alt='' />
          <div className='price-plan'>{props.plan}</div>
        </div>

        <ul className='pricing-list' style={{ marginBottom: props.margin }}>
          {/* Conditionally render the image based on the existence of the list prop */}
          {props.list1 && (
            <li>
              <img src={props.done} /> <span>{props.list1}</span>
            </li>
          )}
          {props.list2 && (
            <li>
              <img src={props.done} /> <span>{props.list2}</span>
            </li>
          )}
          {props.list3 && (
            <li>
              <img src={props.done} /> <span>{props.list3}</span>
            </li>
          )}
          {props.list4 && (
            <li>
              <img src={props.done} /> <span>{props.list4}</span>
            </li>
          )}
          {props.list5 && (
            <li>
              <img src={props.done} /> <span>{props.list5}</span>
            </li>
          )}
          {props.list6 && (
            <li>
              <img src={props.done} /> <span>{props.list6}</span>
            </li>
          )}
        </ul>

        <h3 className='price-amount'>{props.amount}</h3>
        {props.showButton && (
          <ButtonProp value={props.value} isLast={props.isLast} />
        )}
      </div>
    </div>
  );
}

export default List;
