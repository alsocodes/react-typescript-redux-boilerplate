import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { RouteInterface } from '../routes';
import SidebarGroup from '../SidebarGroup';
import SidebarItem from '../SidebarItem';

type Props = {
  accesses: string[];
  route: RouteInterface;
  setTogleMenu(boolean: boolean): void;
  collapse: string;
  setCollapse(string: string): void;
};
const SidebarRoute: FC<Props> = ({
  accesses,
  route,
  setTogleMenu,
  collapse,
  setCollapse,
}): JSX.Element | null => {
  const { pathname } = useLocation();

  if (!accesses?.includes(route.access)) {
    return null;
  }

  if (!route.childs) {
    return (
      <SidebarItem
        title={route.title}
        icon={route.icon}
        url={route.path}
        current={pathname === route.path}
        onClick={() => {
          setTogleMenu(false);
          setCollapse(route.title);
        }}
      />
    );
  }

  const isCollapsed = collapse === route.title;
  const isActive = isCollapsed || pathname.startsWith(route.path);

  return (
    <SidebarGroup
      title={route.title}
      icon={route.icon}
      setTogleMenu={setTogleMenu}
      active={isActive}
      isCollapsed={isCollapsed}
      setCollapse={setCollapse}>
      {route.childs.map((item, idx) => {
        if (item.access && !accesses?.includes(item.access)) {
          return null;
        }

        return (
          <SidebarItem
            key={`route-${route.title}-${idx}`}
            title={item.title}
            url={route.path + item.path}
            active={isActive}
            current={pathname === route.path + item.path}
          />
        );
      })}
    </SidebarGroup>
  );
};

export default SidebarRoute;
