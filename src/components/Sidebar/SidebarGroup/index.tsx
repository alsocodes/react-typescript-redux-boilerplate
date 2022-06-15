import React, { FC, useRef } from 'react';
import { IconType } from 'react-icons';
import { RouteInterface } from '../routes';
import SidebarItem from '../SidebarItem';

type Props = {
  title: string;
  icon: IconType;
  // children?: JSX.Element | JSX.Element[] | null;
  active: boolean;
  setTogleMenu(boolean: boolean): void;
  isCollapsed: boolean;
  setCollapse(string: string): void;
};

const SidebarGroup: FC<Props> = ({
  title,
  icon,
  children,
  active,
  setTogleMenu,
  isCollapsed,
  setCollapse,
}) => {
  const childrenRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <SidebarItem
        title={title}
        icon={icon}
        chevron={isCollapsed}
        onClick={() => setCollapse(title)}
        active={active}
      />
      <div
        className="overflow-hidden"
        style={{
          transition: 'all 0.5s',
          opacity: isCollapsed ? 1.0 : 0,
          maxHeight: isCollapsed
            ? childrenRef.current !== null
              ? childrenRef.current.clientHeight
              : 0
            : 0,
        }}>
        <div ref={childrenRef} onClick={() => setTogleMenu(false)}>
          {children}
        </div>
      </div>
    </>
  );
};

export default SidebarGroup;
