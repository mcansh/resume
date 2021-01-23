import { Meta, Scripts, Styles, Routes } from '@remix-run/react';

const App: React.VFC = () => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
      />
      <Meta />
      <Styles />
    </head>
    <body>
      <Routes />
      <Scripts />
    </body>
  </html>
);

interface ErrorBoundaryProps {
  error: Error;
}

const ErrorBoundary: React.VFC<ErrorBoundaryProps> = ({ error }) => (
  <html lang="en" className="h-full">
    <head>
      <meta charSet="utf-8" />
      <title>Oops!</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
      />
      <Styles />
    </head>
    <body className="grid h-full p-4 mx-auto font-mono text-center text-white max-w-prose place-items-center bg-blue-screen">
      <div className="space-y-4">
        <h1 className="inline-block py-1 text-4xl font-semibold bg-white text-blue-screen">
          Uncaught Exception!
        </h1>
        <p>
          If you are not the developer, please click back in your browser and
          try again.
        </p>
        <pre className="py-2 border-4 border-white border-solid">
          {error.message}
        </pre>
        <p>
          There was an uncaught exception in your application. Check the browser
          console and/or server console to inspect the error.
        </p>
      </div>

      <Scripts />
    </body>
  </html>
);

export { App, ErrorBoundary };
