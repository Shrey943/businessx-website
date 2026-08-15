import { ImageResponse } from "next/og";
import { loadGoogleFont } from "@/lib/og-font";
import { getPost, posts } from "@/content/blog/posts";

export const alt = "BusinessX blog post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  const title = post?.title ?? "BusinessX Blog";
  const bold = await loadGoogleFont("Poppins:wght@800", `BusinessX${title}`);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0C2027 0%, #0081B3 100%)",
          padding: "70px",
          fontFamily: "Poppins",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "#00A9E0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 800,
              color: "#0C2027",
            }}
          >
            X
          </div>
          <div style={{ fontSize: 28, fontWeight: 800, color: "white" }}>
            BusinessX Blog
          </div>
        </div>
        <div
          style={{
            fontSize: 54,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.15,
            maxWidth: 960,
          }}
        >
          {title}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Poppins", data: bold, weight: 800, style: "normal" }],
    }
  );
}
