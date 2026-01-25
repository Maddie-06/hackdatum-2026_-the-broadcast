
import React from 'react';

const OverlayEffects: React.FC = () => {
  return (
    <>
      <div className="fixed inset-0 scanlines opacity-30 pointer-events-none" />
      <div className="fixed inset-0 grain pointer-events-none" />
      <div className="fixed inset-0 vignette pointer-events-none" />
      
      {/* Light glow effects */}
      <div className="fixed -top-[20%] -left-[10%] w-[50%] h-[50%] bg-signalOrange/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="fixed -bottom-[20%] -right-[10%] w-[40%] h-[40%] bg-signalRed/5 blur-[150px] rounded-full pointer-events-none" />
    </>
  );
};

export default OverlayEffects;
