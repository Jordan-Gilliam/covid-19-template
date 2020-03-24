import React from 'react';
import { Anchor, Box, Header, Nav, Menu, ResponsiveContext } from 'grommet';

const items = [
  {
    id: 'home',
    href: '/',
    label: 'Home'
  },
  {
    id: 'news',
    href: '/news',
    label: 'News'
  },
  {
    id: 'data',
    href: '/data',
    label: 'Data'
  },
  {
    id: 'food',
    href: '/food',
    label: 'Food'
  },
  {
    id: 'emergency',
    href: '/emergency',
    label: 'Emergency'
  }
];

const CollapsableNav = ({ children }) => (
  <Header pad="medium">
    <Box direction="row" align="center" gap="small">
      {children}
    </Box>
    <ResponsiveContext.Consumer>
      {responsive =>
        responsive === 'small' ? (
          <Menu label="Click me" items={items} />
        ) : (
          <Nav direction="row">
            <Anchor href="/" label="home" />
            <Anchor href="/news" label="news" />
            <Anchor href="/data" label="data" />
            <Anchor href="/food" label="food" />
            <Anchor href="/emergency" label="emergency" />
          </Nav>
        )
      }
    </ResponsiveContext.Consumer>
  </Header>
);
export default CollapsableNav;
