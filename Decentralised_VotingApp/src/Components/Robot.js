// import Spline from '@splinetool/react-spline';

// export default function App() {
//   return (
//     <Spline scene="https://prod.spline.design/JryX9RdgyWuUf8pG/scene.splinecode" />
//   );
// }
import React, { Suspense } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function Robot() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://prod.spline.design/JryX9RdgyWuUf8pG/scene.splinecode" >
        </Spline>
      </Suspense>
    </div>
  );
}