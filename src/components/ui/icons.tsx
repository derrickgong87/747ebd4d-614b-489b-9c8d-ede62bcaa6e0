
import React from "react";

export const WechatIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.5,4C5.36,4 2,6.69 2,10C2,11.89 3.08,13.56 4.78,14.66L4,17L6.5,15.5C7.39,15.81 8.37,16 9.41,16C9.15,15.37 9,14.7 9,14C9,10.69 12.13,8 16,8C16.09,8 16.18,8 16.26,8.01C15.19,5.69 12.5,4 9.5,4M6.5,7A1,1 0 0,1 7.5,8A1,1 0 0,1 6.5,9A1,1 0 0,1 5.5,8A1,1 0 0,1 6.5,7M11.5,7A1,1 0 0,1 12.5,8A1,1 0 0,1 11.5,9A1,1 0 0,1 10.5,8A1,1 0 0,1 11.5,7M16,9C12.69,9 10,11.13 10,14C10,16.87 12.69,19 16,19C16.67,19 17.31,18.9 17.91,18.7L20,20L19.38,18.06C20.95,17.08 22,15.63 22,14C22,11.13 19.31,9 16,9M14,11.5A1,1 0 0,1 15,12.5A1,1 0 0,1 14,13.5A1,1 0 0,1 13,12.5A1,1 0 0,1 14,11.5M18,11.5A1,1 0 0,1 19,12.5A1,1 0 0,1 18,13.5A1,1 0 0,1 17,12.5A1,1 0 0,1 18,11.5Z" />
  </svg>
);

export const WechatPayIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.5,4C5.36,4 2,6.69 2,10C2,11.89 3.08,13.56 4.78,14.66L4,17L6.5,15.5C7.39,15.81 8.37,16 9.41,16C9.15,15.37 9,14.7 9,14C9,10.69 12.13,8 16,8C16.09,8 16.18,8 16.26,8.01C15.19,5.69 12.5,4 9.5,4M6.5,7A1,1 0 0,1 7.5,8A1,1 0 0,1 6.5,9A1,1 0 0,1 5.5,8A1,1 0 0,1 6.5,7M11.5,7A1,1 0 0,1 12.5,8A1,1 0 0,1 11.5,9A1,1 0 0,1 10.5,8A1,1 0 0,1 11.5,7M16,9C12.69,9 10,11.13 10,14C10,16.87 12.69,19 16,19C16.67,19 17.31,18.9 17.91,18.7L20,20L19.38,18.06C20.95,17.08 22,15.63 22,14C22,11.13 19.31,9 16,9M14,11.5A1,1 0 0,1 15,12.5A1,1 0 0,1 14,13.5A1,1 0 0,1 13,12.5A1,1 0 0,1 14,11.5M18,11.5A1,1 0 0,1 19,12.5A1,1 0 0,1 18,13.5A1,1 0 0,1 17,12.5A1,1 0 0,1 18,11.5Z" />
  </svg>
);

export const AIDetectionIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    className={className}
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
    <path d="M8 9H9.5V15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 15V9H16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 15L14.5 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ShieldIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" />
  </svg>
);

export const SpeedIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z" />
    <path d="M12 16.5L16 11H13V7.5H11V11H8L12 16.5Z" fill="currentColor" />
  </svg>
);
