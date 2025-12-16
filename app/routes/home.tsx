import type { Route } from "./+types/home";
import HomePage from "../pages/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Space Carnival - TinkerSpace" },
    { name: "description", content: "Celebrating three years of TinkerSpace" },
  ];
}

export default function Home() {
  return <HomePage />;
}
