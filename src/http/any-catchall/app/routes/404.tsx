import { MetaFunction } from "@remix-run/core";

const meta: MetaFunction = () => {
  return { title: "Ain't nothing here" };
};

const FourOhFour: React.VFC = () => {
  return (
    <div>
      <h1>404</h1>
    </div>
  );
};

export default FourOhFour;
export { meta };
