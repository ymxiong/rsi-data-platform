import React from 'react';
import { Button } from 'antd';
import styles from './index.module.css';
import type { LoginProps } from './types';

/**
 * 组件布局: 登录
 */
const LoginPage: React.FC<LoginProps> = () => {

  return (
    <>
      <div
        className={styles.div}
      >
        <Button
          className={styles.divButton0}
          type="primary"
        >
          {`运行`}
        </Button>
      </div>
    </>
  );
};

export default LoginPage;
