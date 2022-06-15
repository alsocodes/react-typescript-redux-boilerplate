import React, { FC, useEffect, useReducer, useRef, useState } from 'react';
import useKeyPress from './useKeypress';
import { RouteInterface, routes } from './routes';
import SidebarItem from './SidebarItem';
import SidebarRoute from './SidebarRoute';

// const NavItem = ({ url, title, icon: Icon, active, current, chevron, onClick }) => {
//   const body = (
//     <div
//       className={`flex px-6 h-12 items-center text-sm ${styles.navItem} cursor-pointer`}
//       style={{
//         backgroundColor: current ? '#ffecab' : 'transparent',
//         opacity: active || current ? 1.0 : 0.5,
//         transition: 'all 0.2s linear',
//       }}
//       onClick={onClick}>
//       <span className="w-10">{Icon && <Icon fontSize={24} />}</span>
//       <span className="flex-1">{title}</span>
//       {chevron != null &&
//         (chevron === true ? (
//           <IoChevronUp fontSize={18} />
//         ) : (
//           <IoChevronDown fontSize={18} />
//         ))}
//     </div>
//   );

//   return url != null ? <Link to={url}>{body}</Link> : body;
// };

// const NavGroup = ({
//   title,
//   icon,
//   children,
//   active,
//   setTogleMenu,
//   isCollapsed,
//   setCollapse,
// }) => {
//   const childrenRef = useRef();

//   return (
//     <>
//       <NavItem
//         title={title}
//         icon={icon}
//         chevron={isCollapsed}
//         onClick={() => setCollapse(title)}
//         active={active}
//       />
//       <div
//         className="overflow-hidden"
//         style={{
//           transition: 'all 0.5s',
//           opacity: isCollapsed ? 1.0 : 0,
//           maxHeight: isCollapsed ? childrenRef.current?.clientHeight : 0,
//         }}>
//         <div ref={childrenRef} onClick={() => setTogleMenu(false)}>
//           {children}
//         </div>
//       </div>
//     </>
//   );
// };

// const NavRoute = ({ accesses, route, setTogleMenu, collapse, setCollapse }) => {
//   const { pathname } = useLocation();

//   if (!accesses?.includes(route.access)) {
//     return null;
//   }

//   if (!route.childs) {
//     return (
//       <NavItem
//         title={route.title}
//         icon={route.icon}
//         url={route.path}
//         current={pathname === route.path}
//         onClick={() => {
//           setTogleMenu(false);
//           setCollapse(route.title);
//         }}
//       />
//     );
//   }

//   const isCollapsed = collapse === route.title;
//   const isActive = isCollapsed || pathname.startsWith(route.path);

//   return (
//     <NavGroup
//       title={route.title}
//       icon={route.icon}
//       setTogleMenu={setTogleMenu}
//       active={isActive}
//       isCollapsed={isCollapsed}
//       setCollapse={setCollapse}>
//       {route.childs.map((item, idx) => {
//         if (item.access && !accesses?.includes(item.access)) {
//           return null;
//         }

//         return (
//           <NavItem
//             key={`route-${route.title}-${idx}`}
//             title={item.title}
//             url={route.path + item.path}
//             active={isActive}
//             current={pathname === route.path + item.path}
//           />
//         );
//       })}
//     </NavGroup>
//   );
// };

type Props = {
  isShow: boolean;
  setIsShow(bool: boolean): void;
};

const Sidebar: FC<Props> = ({ isShow, setIsShow }): JSX.Element => {
  const initialState = { selectedIndex: -1 };
  // const bListMenu = [
  //   'Surat Permohonan',
  //   'Surat Kuasa',
  //   'Surat Penawaran',
  //   'Internal Memo',
  //   'Surat Peringatan',
  // ];

  const bListMenu: RouteInterface[] = [...routes];
  const [listMenu, setListMenu] = useState([...bListMenu]);
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case 'arrowUp':
        return {
          selectedIndex:
            state.selectedIndex > 0 ? state.selectedIndex - 1 : listMenu.length - 1,
        };
      case 'arrowDown':
        return {
          selectedIndex:
            state.selectedIndex < listMenu.length - 1 ? state.selectedIndex + 1 : 0,
        };
      case 'select':
        return { selectedIndex: action.payload };
      default:
        throw new Error();
    }
  };

  const SidebarArea = useRef(null);
  const SearchInput = useRef<HTMLInputElement>(null);
  const arrowUpPressed = useKeyPress('ArrowUp');
  const arrowDownPressed = useKeyPress('ArrowDown');
  const escapePressed = useKeyPress('Escape');
  const enterPressed = useKeyPress('Enter');
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (arrowUpPressed && isShow) {
      dispatch({ type: 'arrowUp' });
    }
  }, [arrowUpPressed]);

  useEffect(() => {
    if (arrowDownPressed && isShow) {
      dispatch({ type: 'arrowDown' });
    }
  }, [arrowDownPressed]);

  useEffect(() => {
    if (escapePressed && isShow) {
      setIsShow(false);
    }
  }, [escapePressed]);

  useEffect(() => {
    if (enterPressed && isShow) {
      console.log('enter');
    }
  }, [enterPressed]);

  useEffect(() => {
    if (isShow) {
      if (null !== SearchInput.current) SearchInput.current.focus();
      setInputValue('');
    }
  }, [isShow]);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    const timer = setTimeout(() => {
      // console.log(inputValue, bListMenu);
      if (inputValue === '') setListMenu([...bListMenu]);
      else
        setListMenu(
          bListMenu.filter((item) =>
            item.title.toLowerCase().includes(inputValue.toLowerCase()),
          ),
        );
    }, 200);

    return () => clearTimeout(timer);
  }, [inputValue]);

  return (
    <div className="drawer-side" ref={SidebarArea}>
      <label htmlFor="my-drawer" className="drawer-overlay"></label>
      <div className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        <div className="form-control">
          <input
            ref={SearchInput}
            autoFocus
            type="text"
            placeholder="Pencarian ..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="input w-full max-w-xs input-sm"
          />
        </div>
        <hr className="mb-4 mt-4" />
        {/* <ul className=""> */}
        <li className="menu-title">
          <span>Menu</span>
        </li>
        {listMenu.map((item: RouteInterface, i: number): JSX.Element => {
          // return (
          //   <SidebarRoute
          //     key={`route-${i}`}
          //     route={item}
          //     setTogleMenu={setTogleMenu}
          //     accesses={accesses}
          //     collapse={collapse}
          //     setCollapse={onCollapse}
          //   />
          // );
          const { title, icon, path } = item;
          return (
            <li
              key={title}
              onClick={() => {
                dispatch({ type: 'select', payload: i });
              }}
              className={`${i === state.selectedIndex && 'bg-gray-300'}`}
              role="button"
              aria-pressed={i === state.selectedIndex}
              tabIndex={0}>
              <a>{title}</a>
            </li>
          );
        })}
        {/* </ul> */}
      </div>
    </div>
  );
};

export default Sidebar;
