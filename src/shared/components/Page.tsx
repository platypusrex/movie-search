import React from 'react';
import styled from '../styled';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto;
  padding: 24px;
  width: 100%;
  
  @media screen and (max-width: 768px) {
    padding: 24px 18px;
  }
  
  @media screen and (max-width: 576px) {
    padding: 24px 12px;
  }
`;

const PageTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  line-height: 46px;
`;

interface PageProps {
  title?: string;
}

export const Page: React.FC<PageProps> = ({ title, children }) => (
  <PageWrapper>
    {title && <PageTitle>{title}</PageTitle>}

    {children}
  </PageWrapper>
);