import { useRouteData } from "@remix-run/react";
import type { Loader } from "@remix-run/data";
import { MetaFunction } from "@remix-run/core";

const loader: Loader = async () => {
  return {
    message: "this is awesome 😎",
  };
};

const meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!",
  };
};

const IndexPage: React.VFC = () => {
  let data = useRouteData();

  return (
    <div style={{ padding: "20px 0" }}>
      <p>
        <a href="https://remix.run/dashboard/docs">Check out the docs</a> to get
        started.
      </p>
      <p>Message from the loader: {data.message}</p>
    </div>
  );
};

export default IndexPage;
export { loader, meta };
