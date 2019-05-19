import { useEffect } from 'react';
import { message } from 'antd';

export function useLoading (loading: boolean) {
  useEffect(() => {
    if (loading) {
      message.loading('Content loading...')
    } else {
      message.destroy();
    }
  }, [loading])
}