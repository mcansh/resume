import type { HeadersFunction, MetaFunction } from '@remix-run/core';
import type { Loader } from '@remix-run/data';
import { useRouteData } from '@remix-run/react';

const meta: MetaFunction = () => ({
  title: 'Resume | Logan McAnsh',
  description: 'My Resume',
});

const loader: Loader = () => ({ date: new Date() });

const headers: HeadersFunction = () => ({
  'cache-control': 'max-age=600',
  'x-hello-recruiters': '1',
});

const skills: Array<string> = [
  'Node.js',
  'Rest APIs',
  'GraphQL',
  'React',
  'Next.js',
  'Remix Run',
  'TypeScript',
  'TailwindCSS',
  'Accessibility',
  'Performance',
  'ES2015+',
  'Git',
  'Automated Testing',
];

interface LoaderData {
  date: string;
}

const IndexPage: React.VFC = () => {
  const data = useRouteData<LoaderData>();

  return (
    <div className="h-full border-t-8 border-indigo-600 border-solid">
      <div className="py-4 mx-auto max-w-prose">
        <header className="flex flex-col items-center px-4 pb-2 mb-2 space-x-4 space-y-1 text-center sm:flex-row sm:text-left">
          <img
            src="https://avatars.githubusercontent.com/u/11698668?s=320&u=14a201dea37b6bdabaccd76ff4e2664b8e337052&v=4"
            className="w-32 h-32 rounded-full sm:w-40 sm:h-40"
            alt="Logan McAnsh"
          />
          <div>
            <h1 className="text-4xl font-semibold">Logan McAnsh</h1>
            <a
              className="transition-colors duration-75 ease-in-out text-blueGray-600 hover:text-blueGray-300"
              href="mailto:logan+resume@mcan.sh"
            >
              logan+resume@mcan.sh
            </a>
          </div>
        </header>

        <div className="px-4 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold">Skills</h2>
            {/* safari doesn't support gap on flex containers, so we need to add a margin to each flex child and set a negative margin on the parent */}
            <ul className="flex flex-row flex-wrap -mx-1">
              {skills.map(skill => (
                <li
                  key={skill}
                  className="px-2 py-1 m-1 tracking-wide text-white bg-indigo-600 rounded-md"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Experience</h2>
            <ul>
              <li>
                <div className="space-y-2">
                  <div>
                    <h3 className="text-xl font-medium">Powerley</h3>
                    <span>
                      <span className="block text-lg sm:mr-2 sm:inline-block">
                        Web Developer
                      </span>
                      <time dateTime="2016-05-04T00:00:00.000Z">May 2016</time>{' '}
                      - <time dateTime={data.date}>Present</time>
                    </span>
                    <ul className="pl-6 list-disc">
                      <li>First member of the web team</li>
                      <li>
                        Created and maintained a suite of modern white label web
                        applications with Next.js to be included in our mobile
                        apps for 7+ clients.
                      </li>
                      <li>
                        Implemented a suite of utility functions used across our
                        web experiences
                      </li>
                      <li>Designed Sketch plugins</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium">Key achievement:</h4>
                    <p>
                      Quickly became the second most used feature of our app
                      behind the page your dropped in at after logging in.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Certificates</h2>
            <ul className="pl-6 list-disc">
              <li>CIW Internet Business Associate (2014)</li>
              <li>CIW Web Site Development Associate (2015)</li>
              <li>Testing JavaScript (2019)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
export { meta, loader, headers };
