import React, { Suspense } from "react";
import useNearScreen from "../../Hooks/useNearScreen";
import Spinner from "../Spinner/Spinner";

const GoogleLocation = React.lazy(() =>
  import("./GoogleMap")
);

export default function GoogleMapComponent(){
    const { isNearScreen, fromRef } = useNearScreen({
        distance: "200px",
    });

    return (
        <section ref={fromRef}>
            <Suspense fallback={<Spinner />}>
              {isNearScreen ? <GoogleLocation/> : <Spinner />}
            </Suspense>
        </section>
    );
}