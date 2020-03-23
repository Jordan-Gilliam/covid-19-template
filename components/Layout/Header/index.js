import React from 'react';
import {
  Anchor,
  Box,
  Button,
  Header,
  Nav,
  Menu,
  ResponsiveContext
} from 'grommet';
import items from './items';

const CollapsableNav = ({ on, toggleCallback }) => (
  <Header pad="medium">
    <Box direction="row" align="center" gap="small">
      <Button
        primary
        color={on ? 'accent-3' : ''}
        label={!on ? 'Light' : 'Dark'}
        onClick={toggleCallback}
      />
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
