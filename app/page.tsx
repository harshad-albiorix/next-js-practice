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

export async function generateMetadata() {
  return {
    title: "next-js-practice",
    description: "A Next.js starter with Server-Side Generation",
    openGraph: {
      title: "next-js-practice",
      description: "A Next.js starter with Server-Side Generation",
      type: "website",
      url: "https://next-js-practice-two-alpha.vercel.app",
      images: [
        {
          url: "https://next-js-practice-two-alpha.vercel.app/og.png",
          width: 1200,
          height: 630,
          alt: "Next.js Practice Open Graph Image",
        },
      ],
    },
  };
}
