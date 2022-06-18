import { FC, useEffect, useState } from 'react';

type Props = {
  ref: HTMLDivElement;
};
const KeyOrMouseEvent: FC<Props> = ({ ref }) => {
  useEffect(() => {
    if (gridDataRef.current !== null) {
      // console.log('i am focused');
      const el = gridDataRef.current;

      const handleKeydown = (e: KeyboardEvent) => {
        console.log(`i am key down ${e.key}`);
      };

      const handleClick = (e: MouseEvent) => {
        console.log(`i am clicked`, e.target);
        el.focus();
        if (e.target !== null) {
          if (e.target.classList.contains('dg-body-col')) {
            console.log(e.target.parentNode.getAttribute('id'));
          }
        }
      };

      el.addEventListener('keydown', handleKeydown);
      el.addEventListener('click', handleClick);

      return () => {
        el.removeEventListener('keydown', handleKeydown);
        el.removeEventListener('click', handleClick);
      };
    }
  }, [gridDataRef]);
};

export default KeyOrMouseEvent;
