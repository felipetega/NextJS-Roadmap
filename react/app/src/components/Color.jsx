import React, { useState, useEffect } from 'react';

export function Color() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    fetch('http://colormind.io/api/', {
      method: 'POST',
      body: JSON.stringify({ model: 'default' }),
    })
      .then(response => response.json())
      .then(data => {
        const [c1, c2, c3, c4, c5] = data.result;
        const hexColors = [c1, c2, c3, c4, c5].map(c => rgbToHex(c));
        setColors(hexColors);
      })
      .catch(error => {
        console.error('Erro ao obter as cores:', error);
      });
  }, []);

  const rgbToHex = rgb => {
    const [r, g, b] = rgb;
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  };

  return (
    <div>
      {colors.map((hex, index) => (
        <div key={index} style={{ backgroundColor: hex }}>
          {hex}
        </div>
      ))}
    </div>
  );
}