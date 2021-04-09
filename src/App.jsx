import React, { useEffect, useRef, useState } from 'react';
import Grid from './components/Grid';
import CubedSpheres8 from './groups/CubedSpheres8';
import OutlineEffect from './effects/OutlineEffect';

const settings = {
    outlineEffect: false,
};

const App = () => {
    const cubeSpheres8 = useRef();

    // eslint-disable-next-line no-unused-vars
    const [reload, setReload] = useState();

    useEffect(() => {
        setReload(1);
    }, []);

    return (
        <>
            {cubeSpheres8.current && settings.outlineEffect && (
                <OutlineEffect objects={cubeSpheres8.current.children} />
            )}
            <Grid />
            <CubedSpheres8 ref={cubeSpheres8} position={[0, 0, 0]} />
        </>
    );
};

export default App;
