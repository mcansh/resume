import type { MetaFunction } from '@remix-run/core';

const meta: MetaFunction = () => ({ title: "Ain't nothing here" });

const FourOhFour: React.VFC = () => (
  <div>
    <h1>404</h1>
  </div>
);

export default FourOhFour;
export { meta };
