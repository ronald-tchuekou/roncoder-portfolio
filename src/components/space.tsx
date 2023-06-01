import React, {FC} from 'react';

type SpaceProps = {
    height?: number
};

const Space: FC<SpaceProps> = (props) => {
    const {height = 40} = props

    return (
        <div
            style={{height}}
            className={`w-full`}/>
    );
};

export default Space
