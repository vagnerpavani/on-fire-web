import NewsletterLabel from "../base/NewsletterLabel";

function NewslettersDisplay() {
  return (
    <div className="overflow-y-auto max-h-128 scroll-smooth ">
      <NewsletterLabel publishedAt="6 hours ago" publishedDay="17/02/2025" />
      <NewsletterLabel publishedAt="6 hours ago" publishedDay="17/02/2025" />
      <NewsletterLabel publishedAt="6 hours ago" publishedDay="17/02/2025" />
      <NewsletterLabel publishedAt="6 hours ago" publishedDay="17/02/2025" />
      <NewsletterLabel publishedAt="6 hours ago" publishedDay="17/02/2025" />
      <NewsletterLabel publishedAt="6 hours ago" publishedDay="17/02/2025" />
      <NewsletterLabel publishedAt="6 hours ago" publishedDay="17/02/2025" />
    </div>
  );
}

export default NewslettersDisplay;
