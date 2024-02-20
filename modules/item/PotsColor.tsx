'use client';
import { COLORS } from '@/common/constants';
import { ColorsVarians } from '@/models/Product';
import React, { FC, useState } from 'react';

type PotsColorProps = {
  color?: ColorsVarians;
};
export const PotsColor: FC<PotsColorProps> = ({ color }) => {
  const [chosenColor, setChosenColor] = useState(color?.[0].name);

  if (!color) {
    return <></>;
  }

  return (
    <>
      {color && (
        <div className="flex flex-col gap-3">
          <p className="font-bold">
            Colour: <span className="font-normal">{chosenColor}</span>
          </p>
          <ul className="flex gap-3">
            {color.map(({ name }, i) => (
              <li
                style={{ backgroundColor: COLORS[name] }}
                key={i}
                onClick={() => setChosenColor(name)}
                className={`w-7 h-7 rounded-full cursor-pointer border-4 
                hover:border-teal-700
                ${chosenColor === name ? 'border-teal-700' : ''}`}
              ></li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
