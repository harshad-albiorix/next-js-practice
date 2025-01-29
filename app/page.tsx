import { Users } from "@/components";
interface User {
  id: number;
  name: string;
}

const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
};

export default async function Home() {
  const users: User[] = await getUsers();
  return <Users users={users} />;
}

export async function generateMetadata({ params }) {
  return {
    title: "next-ssg",
    description: "A Next.js starter with Server-Side Generation",
    openGraph: {
      title: "next-ssg",
      description: "A Next.js starter with Server-Side Generation",
      type: "website",
      url: "https://next-ssg.vercel.app",
      image: "https://next-ssg.vercel.app/og-image.png",
    },
  };
}
