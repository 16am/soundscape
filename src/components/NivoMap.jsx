// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/geo
import { ResponsiveGeoMap } from "@nivo/geo";
import { features } from "../data/features.js";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export function NivoMap() {
  return (
    <ResponsiveGeoMap
      borderWidth={0.5}
      features={features}
      enableGraticule={true}
      projectionRotation={[0, 0, 0]}
      fillColor="rgba(255, 255, 255, 0.8)"
      projectionTranslation={[0.000001001367146, 4.454975]}
      projectionScale={1521}
      borderColor="rgba(128, 128, 128, 0.3)"
      graticuleLineColor="rgba(255, 255, 255, 0.3)"
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    />
  );
}
