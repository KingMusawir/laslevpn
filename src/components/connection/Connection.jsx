import React from 'react';
import { UserIcon } from '@heroicons/react/20/solid';
import { MapPinIcon } from '@heroicons/react/20/solid';
import { ServerStackIcon } from '@heroicons/react/20/solid';

function Connection() {
  const Users = (props) => {
    return (
      <div className='user '>
        <div className='flex gap-20 text-2xl py-8 px-32'>
          <div className='icon'>{props.icon}</div>
          <div className='icon-info flex flex-col gap-2'>
            <div className='font-bold'>{props.number}</div>
            <p className='icon-para'>{props.para}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='display container rounded-2xl flex flex-col lg:flex-row justify-center p-16 mb-40 divide-y lg:divide-x-2'>
      <Users icon={<UserIcon />} number='90+' para='Users' />
      <div className='borderlr'>
        <Users icon={<MapPinIcon />} number='30+' para='Locations' />
      </div>
      <Users icon={<ServerStackIcon />} number='50+' para='Servers' />
    </div>
  );
}

export default Connection;
