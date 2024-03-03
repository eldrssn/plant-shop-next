/* eslint-disable react/display-name */
'use client';
import React, { FC, memo } from 'react';

import { COLORS } from '@/common/constants';
import { ColorsVarians } from '@/models/Product';

type PotsColorProps = {
  color?: ColorsVarians[];
  choosenColorIndex: number;
  setChoosenColorIndex: React.Dispatch<React.SetStateAction<number>>;
};

export const PotsColor: FC<PotsColorProps> = memo(
  ({ color, choosenColorIndex, setChoosenColorIndex }) =>
    color ? (
      <div className="flex flex-col gap-3">
        <p className="font-bold">
          Colour:{' '}
          <span className="font-normal">{color[choosenColorIndex]?.name}</span>
        </p>
        <ul className="flex gap-3">
          {color.map(({ name }, i) => (
            <li
              style={{ backgroundColor: COLORS[name] }}
              key={i}
              onClick={() => {
                setChoosenColorIndex(i);
              }}
              className={`w-7 h-7 rounded-full cursor-pointer border-4 
                hover:border-teal-700
                ${choosenColorIndex === i ? 'border-teal-700' : ''}`}
            ></li>
          ))}
        </ul>
      </div>
    ) : (
      <></>
    ),
  arePropsEqual
);

function arePropsEqual(oldProps: PotsColorProps, newProps: PotsColorProps) {
  return (
    !!oldProps.color &&
    !!newProps.color &&
    oldProps.color[oldProps.choosenColorIndex].name ===
      newProps.color[newProps.choosenColorIndex].name &&
    oldProps.choosenColorIndex === newProps.choosenColorIndex
  );
}
