import { Reveal } from "@/components/motion/Reveal";
import Link from "next/link";
import Image from "next/image";

type InstagramPost = {
  id: string;
  shortcode: string;
  display_url: string;
  caption: string;
  timestamp: number;
};

async function getInstagramPosts(): Promise<InstagramPost[] | null> {
  try {
    const res = await fetch("https://www.instagram.com/api/v1/users/web_profile_info/?username=naam_transfer", {
      headers: {
        "x-ig-app-id": "936619743392459",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!res.ok) {
      console.warn("Instagram API returned an error (likely blocked). Status:", res.status);
      return null;
    }

    const data = await res.json();
    const edges = data?.data?.user?.edge_owner_to_timeline_media?.edges || [];

    const posts = edges.slice(0, 4).map((edge: any) => {
      const node = edge.node;
      const captionNode = node.edge_media_to_caption?.edges?.[0]?.node;
      
      return {
        id: node.id,
        shortcode: node.shortcode,
        display_url: node.display_url,
        caption: captionNode?.text || "",
        timestamp: node.taken_at_timestamp,
      };
    });

    return posts;
  } catch (error) {
    console.error("Error fetching Instagram posts:", error);
    return null;
  }
}

const FALLBACK_POSTS: InstagramPost[] = [
  {
    id: "1",
    shortcode: "DY16T6tEl9x",
    display_url: "/images/insta-post-1.jpg",
    caption: "Possession is more than just getting the keys. We complete the transfers that make it truly your home.",
    timestamp: Date.now(),
  },
  {
    id: "2",
    shortcode: "DYpDkQPkpaP",
    display_url: "/images/insta-post-2.jpg",
    caption: "Transfer with ease, live with peace of mind. We simplify utility name transfer so you can focus on what truly matters.",
    timestamp: Date.now(),
  },
  {
    id: "3",
    shortcode: "DYj368WjbQ9",
    display_url: "/images/insta-post-3.jpg",
    caption: "Myth vs Fact: Naam transfer of utilities is simple, fast and hassle-free with us.",
    timestamp: Date.now(),
  },
  {
    id: "4",
    shortcode: "DYTxqz2jjOc",
    display_url: "/images/insta-post-4.jpg",
    caption: "Biggest mistakes people make after property purchase. Avoid these common mistakes and ensure a hassle-free ownership experience.",
    timestamp: Date.now(),
  }
];

export async function InstagramFeed() {
  let posts = await getInstagramPosts();

  // If the API gets blocked or fails, we use fallback mock posts so the section stays visible
  if (!posts || posts.length === 0) {
    posts = FALLBACK_POSTS;
  }

  return (
    <section className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal trigger="scroll" className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-brand-primary uppercase tracking-wider">
            Stay Updated
          </h2>
          <p className="mt-2 text-balance text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl">
            Latest from Instagram
          </p>
          <p className="mt-4 text-lg text-foreground-dim">
            Follow us for the latest tips on property transfers, utility updates, and real customer stories.
          </p>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
          {posts.map((post, index) => (
            <Reveal
              key={post.id}
              trigger="scroll"
              delay={0.1 * index}
              y={20}
              className="group relative aspect-square w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-border/50 bg-brand-navy transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <Image 
                src={post.display_url}
                alt={post.caption.slice(0, 50)}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized // Since URLs are external and can expire
              />

              <Link 
                href={`https://www.instagram.com/p/${post.shortcode}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content shown only on hover */}
                <div className="relative mt-auto opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-3 py-1 text-xs font-semibold text-white shadow-md mb-3">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    View Post
                  </div>
                  <h3 className="text-sm font-medium text-white/90 line-clamp-3 leading-snug">{post.caption}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <Reveal trigger="scroll" y={10}>
                <Link 
                    href="https://www.instagram.com/naam_transfer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold text-brand-primary hover:text-brand-navy transition-colors"
                >
                    Follow @naam_transfer on Instagram <span aria-hidden="true">&rarr;</span>
                </Link>
            </Reveal>
        </div>
      </div>
    </section>
  );
}
