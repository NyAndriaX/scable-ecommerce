import React from 'react';
import { styled } from 'styled-components';
import { useLocation, Link } from 'react-router-dom';
import { SidebarData } from './Sidebar/SidebarData';

const SidebarMenu = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  padding:0 0.1rem;
`;

const MenuItems = styled.li`
  display: flex;
  padding: 0.5rem 2rem;
  list-style: none;
  align-items: center;
  justify-content: start;
  border-left:2px solid white;

  &.active {
    border-left: 2px solid black;
  }
`;

const MenuItemsLinks = styled(Link)`
  //if I want to specify style paragraphe
`;

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();

  return pathname !== '/account' ? (
    <SidebarMenu>
      {SidebarData.map((item, index) => (
        <MenuItems
          key={index}
          className={pathname === item.path ? 'active' : ''}
        >
          <MenuItemsLinks to={item.path as string}>
            {item.title as string}
          </MenuItemsLinks>
        </MenuItems>
      ))}
    </SidebarMenu>
  ) : null;
};

export default Sidebar;
