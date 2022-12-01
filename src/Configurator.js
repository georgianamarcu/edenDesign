import { Grid } from "./Grid";
import { Suspense } from "react";
import { SpotCurve } from "./PlugElements";

export default function Configurator({ state, elementsOnCanvas, room }) {
  return (
    <>
      <Grid scale={500}>
        <Suspense fallback={null}>
          {room}
          {elementsOnCanvas}
        </Suspense>
      </Grid>
    </>
  );
}
