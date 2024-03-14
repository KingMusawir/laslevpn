import React from 'react';
import { UserIcon } from '@heroicons/react/20/solid';
import { MapPinIcon } from '@heroicons/react/20/solid';
import { ServerStackIcon } from '@heroicons/react/20/solid';

function Connection() {
  const Users = (props) => {
    return (
      <div className='user '>
        <div className='users-body'>
          <div className='icon'>{props.icon}</div>
          <div className='icon-info'>
            <div className='icon-number'>{props.number}</div>
            <p className='icon-para'>{props.para}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='display container'>
      <Users icon={<UserIcon />} number='90+' para='Users' />
      <div className='borderlr'>
        <Users icon={<MapPinIcon />} number='30+' para='Locations' />
      </div>
      <Users icon={<ServerStackIcon />} number='50+' para='Servers' />
    </div>
  );
}

export default Connection;
