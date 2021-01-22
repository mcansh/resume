import { Meta, Scripts, Styles, Routes } from "@remix-run/react";

const App: React.VFC = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Styles />
      </head>
      <body>
        <Routes />

        <Scripts />
      </body>
    </html>
  );
};

interface ErrorBoundaryProps {
  error: Error;
}

const ErrorBoundary: React.VFC<ErrorBoundaryProps> = ({ error }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Oops!</title>
      </head>
      <body>
        <div>
          <h1>App Error</h1>
          <pre>{error.message}</pre>
          <p>
            Replace this UI with what you want users to see when your app throws
            uncaught errors. The file is at <code>app/App.tsx</code>.
          </p>
        </div>

        <Scripts />
      </body>
    </html>
  );
};

export { App, ErrorBoundary };
