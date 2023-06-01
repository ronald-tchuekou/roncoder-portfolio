import React, {FC, PropsWithChildren} from 'react';

type BGContainerProps = {
    maxWidth?: number
};

const BGContainer: FC<PropsWithChildren<BGContainerProps>> = (props) => {
    const {children, maxWidth = 1300} = props

    return (
        <div
            style={{maxWidth}}
            className={`w-full m-auto`}>
            {children}
        </div>
    );
};

export default BGContainer
