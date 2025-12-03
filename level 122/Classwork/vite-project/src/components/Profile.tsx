import type { ProfileProps } from "./types";

export default function Profile({ user, social }: ProfileProps) {
  return (
    <div className="p-4 border w-64">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>
      <hr className="my-2" />
      <p>
        GitHub: <a href={social.github}>{social.github}</a>
      </p>
      <p>
        Twitter: <a href={social.twitter}>{social.twitter}</a>
      </p>
    </div>
  );
}
