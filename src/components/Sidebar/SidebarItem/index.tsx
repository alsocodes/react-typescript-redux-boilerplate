import React, { FC } from 'react';
import { IconType } from 'react-icons';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

type Props = {
  url?: string;
  title: string;
  icon?: IconType;
  active?: boolean;
  current?: boolean;
  chevron?: boolean;
  onClick?(): void;
};
const SidebarItem: FC<Props> = ({
  url,
  title,
  icon: Icon,
  active,
  current,
  chevron,
  onClick,
}) => {
  const body = (
    <div
      className={`flex px-6 h-12 items-center text-sm ${styles.navItem} cursor-pointer`}
      style={{
        backgroundColor: current ? '#ffecab' : 'transparent',
        opacity: active || current ? 1.0 : 0.5,
        transition: 'all 0.2s linear',
      }}
      onClick={onClick}>
      <span className="w-10">{Icon && <Icon fontSize={24} />}</span>
      <span className="flex-1">{title}</span>
      {chevron != null &&
        (chevron === true ? (
          <IoChevronUp fontSize={18} />
        ) : (
          <IoChevronDown fontSize={18} />
        ))}
    </div>
  );

  return url != null ? <Link to={url}>{body}</Link> : body;
};

export default SidebarItem;
