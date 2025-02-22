import dayjs from "dayjs";
import NewsletterLabel from "../base/NewsletterLabel";

type Props = {
  posts: Post[];
};

function NewslettersDisplay({ posts }: Props) {
  return (
    <div className="overflow-y-auto max-h-128 scroll-smooth ">
      {posts.map((post, i) => {
        return (
          <NewsletterLabel
            title={post.title}
            publishedDay={dayjs(post.publishedAt).format("DD/MM/YYYY")}
            key={i}
          />
        );
      })}
    </div>
  );
}

export default NewslettersDisplay;
