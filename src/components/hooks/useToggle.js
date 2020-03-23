import React from 'react';
const noop = () => {};

function toggleReducer(state, { type }) {
  switch (type) {
    case useToggle.types.toggle: {
      return { on: !state.on };
    }
    default: {
      throw new Error(`Unsupported type: ${type}`);
    }
  }
}

function useToggle({ reducer = toggleReducer, onChange = noop } = {}) {
  const { current: initialState } = React.useRef({ on: false });
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const on = state.on;

  const toggle = () => onChange(dispatch({ type: useToggle.types.toggle }));

  return {
    on,
    toggle
  };
}

useToggle.reducer = toggleReducer;
useToggle.types = {
  toggle: 'toggle'
};

export default useToggle;