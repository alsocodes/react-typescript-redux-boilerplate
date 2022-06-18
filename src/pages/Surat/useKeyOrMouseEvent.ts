import { useEffect, useState } from 'react';

const useKeyOrMouseEvent = (targetKey: string, ref: any): boolean => {
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    if (ref.current === null) return;
    const downHandler = (e: KeyboardEvent) => {
      if (e.key === targetKey) {
        setKeyPressed(true);
      }
    };
    const upHandler = (e: KeyboardEvent) => {
      if (e.key === targetKey) {
        setKeyPressed(false);
      }
    };

    const el = ref.current;
    el.addEventListener('keydown', downHandler);
    el.addEventListener('keyup', upHandler);

    return () => {
      el.removeEventListener('keydown', downHandler);
      el.removeEventListener('keyup', upHandler);
    };
  }, [targetKey, ref]);

  return keyPressed;
};

export default useKeyOrMouseEvent;

// type Props = {
//   ref: HTMLDivElement;
// };
// const useKeyOrMouseEvent: FC<Props> = ({ ref }) => {
//   useEffect(() => {
//     if (gridDataRef.current !== null) {
//       // console.log('i am focused');
//       const el = gridDataRef.current;

//       const handleKeydown = (e: KeyboardEvent) => {
//         console.log(`i am key down ${e.key}`);
//       };

//       const handleClick = (e: MouseEvent) => {
//         console.log(`i am clicked`, e.target);
//         el.focus();
//         if (e.target !== null) {
//           if (e.target.classList.contains('dg-body-col')) {
//             console.log(e.target.parentNode.getAttribute('id'));
//           }
//         }
//       };

//       el.addEventListener('keydown', handleKeydown);
//       el.addEventListener('click', handleClick);

//       return () => {
//         el.removeEventListener('keydown', handleKeydown);
//         el.removeEventListener('click', handleClick);
//       };
//     }
//   }, [gridDataRef]);
// };

// export default KeyOrMouseEvent;
