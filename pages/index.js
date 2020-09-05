import Link from "next/link";
import fs from "fs";

export default function Home({ slugs }) {
  return (
    <div>
      <main>
        {slugs.map((slug) => {
          return (
            <div key={slug}>
              <Link href="/blog/[slug]" as={"/blog/" + slug}>
                <a>{"/blog/" + slug}</a>
              </Link>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");

  return {
    props: {
      slugs: files.map((filename) => filename.replace(".md", "")),
    },
  };
};
