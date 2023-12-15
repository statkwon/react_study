import React, { useContext } from 'react';
import ColorContext from './CH15Color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const CH15SelectColors = () => {
  const { actions } = useContext(ColorContext);

  return (
    <div>
      <h3>색상을 선택하세요.</h3>
      <div style={{ display: 'flex' }}>
        {colors.map(color => (
          <div
            key={color}
            style={{ background: color, width: '24px', height: '24px', cursor: 'pointer' }}
            onClick={() => actions.setColor(color)}
            onContextMenu={e => {
              e.preventDefault();
              actions.setSubcolor(color);
            }}
          />
        ))}
      </div>
      <hr/>
    </div>
  );
};

export default CH15SelectColors;
