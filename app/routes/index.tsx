import { MetaFunction } from "@remix-run/core";

const meta: MetaFunction = () => {
  return {
    title: "Resume | Logan McAnsh",
    description: "My Resume",
  };
};

const IndexPage: React.VFC = () => {
  return (
    <div className="px-4 py-4 mx-auto max-w-prose">
      <header className="flex items-center pb-2 mb-2 space-x-4 space-y-1 border-b-2 border-yellow-500 border-solid">
        <img
          src="https://avatars.githubusercontent.com/u/11698668?s=320&u=14a201dea37b6bdabaccd76ff4e2664b8e337052&v=4"
          className="w-40 h-40 rounded-full"
          alt="Logan McAnsh"
        />
        <div>
          <h1 className="text-4xl font-semibold">Logan McAnsh</h1>
          <a href="mailto:logan+resume@mcan.sh">logan+resume@mcan.sh</a>
        </div>
      </header>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold">Skills</h2>
          <ul className="flex flex-wrap gap-2">
            <li className="px-2 py-1 text-white bg-indigo-600 rounded">
              Node.js
            </li>
            <li className="px-2 py-1 text-white bg-indigo-600 rounded">
              Rest APIs
            </li>
            <li className="px-2 py-1 text-white bg-indigo-600 rounded">
              GraphQL
            </li>
            <li className="px-2 py-1 text-white bg-indigo-600 rounded">
              React
            </li>
            <li className="px-2 py-1 text-white bg-indigo-600 rounded">
              Next.js
            </li>
            <li className="px-2 py-1 text-white bg-indigo-600 rounded">
              Remix Run
            </li>
            <li className="px-2 py-1 text-white bg-indigo-600 rounded">
              TypeScript
            </li>
            <li className="px-2 py-1 text-white bg-indigo-600 rounded">
              TailwindCSS
            </li>
            <li className="px-2 py-1 text-white bg-indigo-600 rounded">
              Accessibility
            </li>
            <li className="px-2 py-1 text-white bg-indigo-600 rounded">
              Performance
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Experience</h2>
          <ul className="pl-6">
            <li>
              <div>
                <h3 className="text-lg font-medium">Powerley</h3>
                <span className="block">Web Developer</span>
                <time dateTime={new Date(2016, 4, 4).toISOString()}>
                  May 2016
                </time>{" "}
                - <time dateTime={new Date().toISOString()}>Present</time>
                <ul className="pl-6 list-disc">
                  <li>First member of the web team</li>
                  <li>
                    Created and maintained a suite of web experiences included
                    in our mobile apps, including{" "}
                    <a
                      href="https://powerley.com/the-voice-of-the-home-infographic-the-powerley-advisor/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Advisor
                    </a>
                    , a home profile tool to better let us know about your home,
                    and a help center.
                  </li>
                  <li>
                    Created a suite of utility functions used across our web
                    experiences
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
export { meta };
