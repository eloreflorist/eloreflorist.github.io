import SocialFeed from "@/components/social/SocialFeed";
import Testimonials from "@/components/social/Testimonials";
import flowerProducts from "@/data/flowers.json";
import { instagramPosts, instagramProfile, threadsPosts, threadsProfile, type SocialItem } from "@/lib/socialFeeds";

const inStock = flowerProducts.filter((product) => product.inStock && product.images?.[0]);

const threadsFeed: SocialItem[] = threadsPosts.map((post, index) => {
  const product = inStock[index + 4];
  return {
    ...post,
    href: product ? `/flowers/${product.slug}` : post.href,
    image: product?.images?.[0],
  };
});

export default function HomeSocialFeeds() {
  return (
    <div className="mt-14 space-y-12">
      <SocialFeed
        id="instagram-posts"
        title="INSTAGRAM FEED"
        intro="Èlore Florist in Surabaya posts new bouquets on Instagram. These arrangements can be ordered from the studio in Surabaya."
        profileUrl={instagramProfile}
        profileName="@eloreflorist on Instagram"
        items={instagramPosts}
      />
      <SocialFeed
        id="threads-posts"
        title="THREADS"
        intro="Recent Threads posts from Èlore Florist, the flower studio in Surabaya."
        profileUrl={threadsProfile}
        profileName="@eloreflorist on Threads"
        items={threadsFeed}
      />
      <Testimonials />
    </div>
  );
}
