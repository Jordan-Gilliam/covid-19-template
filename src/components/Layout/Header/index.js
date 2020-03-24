import React from 'react';
import {
  Anchor,
  Box,
  Header,
  Nav,
  Menu,
  ResponsiveContext
} from 'grommet';
import items from './items';

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
