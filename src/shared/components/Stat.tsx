import React from 'react';
import { Typography} from 'antd';
import { TypographyProps } from 'antd/lib/typography/Typography';
import styled from '../styled';

const StatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Label = styled(Typography.Title)<TypographyProps>`
  &.ant-typography {
    font-size: 12px;
    text-transform: uppercase;
  }
`;

interface StatProps {
  label: string;
  value: React.ReactNode;
}

export const Stat: React.FC<StatProps> = ({ label, value }) => {
  const statValue = typeof value === 'string' ? (
    <Typography.Text>{value}</Typography.Text>
  ) : value;
  return (
    <StatWrapper>
      <Label level={4}>{label}</Label>
      {statValue}
    </StatWrapper>
  );
};