import React, { useContext } from 'react';
import ColorContext from './CH15Color';

const Ch15ColorBox = () => {
  const { state } = useContext(ColorContext);

  return (
    <>
      <div style={{width: '64px', height: '64px', background: state.color}}/>
      <div style={{width: '32px', height: '32px', background: state.subcolor}}/>
    </>
  );
};

export default Ch15ColorBox;
