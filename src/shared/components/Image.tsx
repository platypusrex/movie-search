import React from 'react';
import filmPlaceholder from '../../assets/film_placeholder.png';
import styled from '../styled';

const Img = styled.img<{height?: number}>`
  height: ${p => p.height ? p.height : 320}px;
  width: 100%;
  object-fit: fill;
  
  @media only screen and (max-width: 576px) {
    height: 440px;
  }
`;

interface Props {
  url: string;
  alt: string;
  height?: number;
}

export const Image: React.FC<Props> = ({ url, alt, height }) => {
  const imageSrc = (url: string) => {
    return url !== 'N/A' ? url : filmPlaceholder;
  };

  const onError = (e: any) => {
    e.target.src = filmPlaceholder;
  };

  return (
    <Img src={imageSrc(url)} alt={alt} onError={onError} height={height}/>
  );
};