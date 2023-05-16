import React, { useState, useEffect } from 'react';

export function Clock() {
    const [time, setTime] = useState(new Date());
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      // Limpa o intervalo quando o componente é desmontado
      return () => clearInterval(interval);
    }, []);
  
    return <div className="clock">{time.toLocaleTimeString()}</div>;
  }
  