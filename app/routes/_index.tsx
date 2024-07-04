import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Welcome to Remix</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/quickstart"
            rel="noreferrer"
          >
            5m Quick Start
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/tutorial"
            rel="noreferrer"
          >
            30m Tutorial
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
          >
            Remix Docs
          </a>
        </li>
      </ul>
    <hr />
    <h1 className="text-3xl">My Profile</h1>
    <img src="img\4k-beautiful-colorful-abstract-wallpaper-photo.jpg" ></img>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>Name: Preewatin Prateepchamcharas</li>
        <li>Class: Information Technology</li>
        <li>E-mail: <a href="mailto : preewatin.pra@rmutto.ac.th ">Contact me.</a></li>
      </ul>
      
    </div>
  );
}
