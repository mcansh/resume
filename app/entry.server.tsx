import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import type { EntryContext } from '@remix-run/core';
import Remix from '@remix-run/react/server';

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const markup = ReactDOMServer.renderToString(
    <Remix context={remixContext} url={request.url} />
  );

  const cspSettings = {
    'default-src': ['none'],
    'style-src': ["'self'", "'unsafe-inline'"],
    'script-src': ["'self'", "'unsafe-inline'", 'https://kiwi.mcan.sh'],
    'font-src': ["'self'"],
    'img-src': ["'self'", 'data:', 'https://kiwi.mcan.sh'],
    'manifest-src': ["'self'"],
  };

  const csp = Object.entries(cspSettings)
    .map(([key, val]) => `${key} ${val.join(' ')}`)
    .join('; ');

  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: {
      ...Object.fromEntries(responseHeaders),
      'Content-Type': 'text/html',
      'Content-Security-Policy': csp,
    },
  });
}
