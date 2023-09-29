/* eslint-disable react/prop-types */
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const LoadingSpin = ({ size, color }) => {
    const antIcon = (
        <LoadingOutlined
            style={{
                fontSize: size,
                color: color || 'white'
            }}
            spin
        />
    );
    return (
        <Spin indicator={antIcon} />
    )
}

export default LoadingSpin