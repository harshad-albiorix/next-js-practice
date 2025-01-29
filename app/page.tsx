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
  const siteUrl = "https://next-js-practice-two-alpha.vercel.app";
  const ogImage = `${siteUrl}/og.png`;

  return {
    title: "next-js-practice",
    description: "A Next.js starter with Server-Side Generation",
    openGraph: {
      title: "next-js-practice",
      description: "A Next.js starter with Server-Side Generation",
      type: "website",
      url: siteUrl,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Next.js Practice Open Graph Image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image", // Twitter supports 'summary' or 'summary_large_image'
      title: "next-js-practice",
      description: "A Next.js starter with Server-Side Generation",
      site: "@your_twitter_handle", // Optional: Replace with your Twitter handle
      creator: "@your_twitter_handle", // Optional: Replace with creator's Twitter handle
      images: [ogImage], // Twitter image should be at least 300x157px
    },
    other: {
      "skype:image": ogImage,
      "slack:image": ogImage,
    },
  };
}
