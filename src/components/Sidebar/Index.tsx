import React from 'react';

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

const Sidebar = (): JSX.Element => {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer" className="drawer-overlay"></label>
      <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        <div className="form-control">
          <input
            type="text"
            placeholder="Pencarian ..."
            className="input w-full max-w-xs input-sm"
          />
        </div>
        <hr className="mb-4 mt-4" />
        <li className="menu-title">
          <span>Category</span>
        </li>
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
        <li className="menu-title">
          <span>Category</span>
        </li>
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
