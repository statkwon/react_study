import React from 'react';
import CH15ColorBox from './CH15ColorBox';
import CH15SelectColors from './CH15SelectColors';
import { ColorProvider } from './CH15Color';

const Ch15Context = () => {
  return (
    <div>
      <h2>CH15Context</h2>
      <ColorProvider>
        <CH15SelectColors/>
        <CH15ColorBox/>
      </ColorProvider>
    </div>
  );
};

export default Ch15Context;