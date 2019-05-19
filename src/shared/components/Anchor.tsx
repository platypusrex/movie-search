import React, { AnchorHTMLAttributes } from 'react';

type AnchorProps = AnchorHTMLAttributes<any>;

export const Anchor: React.FC<AnchorProps> = ({ href, children, ...anchorProps }) => {
  if (href === 'N/A') {
    return null;
  }

  return (
    <a
      href={href}
      rel={anchorProps.rel || 'noopener noreferrer'}
      target={anchorProps.target || '_blank'}
      {...anchorProps}
    >
      {children}
    </a>
  );
};