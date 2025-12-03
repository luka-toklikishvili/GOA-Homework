import Profile from "./components/Profile";
import type { User, Social } from "./components/types";

export default function App() {
  const user: User = {
    name: "Luka Toklikishvili",
    age: 22,
    city: "Tbilisi",
  };

  const social: Social = {
    github: "https://github.com/luka-toklikishvili/GOA-Homework/",
    twitter: "https://twitter.com/luka",
  };

  return (
    <div className="flex justify-center">
      <Profile user={user} social={social} />
    </div>
  );
}

