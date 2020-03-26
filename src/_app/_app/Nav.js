import React from 'react';
import {
  Anchor,
  Box,
  Header,
  Nav as GrommetNav,
  Menu,
  ResponsiveContext
} from 'grommet';

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
    id: 'learn',
    href: '/learn',
    label: 'Learn'
  }
];

const Nav = ({ children }) => (
  <Header pad="medium">
    <Box
      direction="row"
      justify="between"
      alignSelf="center"
      gap="medium"
      pad={{ top: 'medium', horizontal: 'large' }}
    >
      {children}
    </Box>
    <ResponsiveContext.Consumer>
      {responsive =>
        responsive === 'small' ? (
          <Menu label="Click me" items={items} />
        ) : (
          <GrommetNav
            direction="row"
            pad={{ top: 'large', horizontal: 'xlarge' }}
          >
            <Anchor href="/" label="home" />
            <Anchor href="/data" label="data" />
            <Anchor href="/food" label="food" />
            <Anchor href="/learn" label="learn" />
            <Anchor href="/news" label="news" />
          </GrommetNav>
        )
      }
    </ResponsiveContext.Consumer>
  </Header>
);

export default Nav;
