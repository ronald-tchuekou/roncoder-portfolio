import React, {FC, PropsWithChildren} from 'react';

type ContainerProps = {
    maxWidth?: number
};

const Container: FC<PropsWithChildren<ContainerProps>> = (props) => {
    const {children, maxWidth = 1400} = props

    return (
        <div
            style={{maxWidth}}
            className={`px-5 md:px-8 lg:px-10 w-full m-auto`}>
            {children}
        </div>
    );
};

export default Container
