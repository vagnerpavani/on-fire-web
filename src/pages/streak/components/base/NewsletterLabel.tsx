type Props = {
  publishedAt: string;
  publishedDay: string;
};

function NewsletterLabel({ publishedAt, publishedDay }: Props) {
  return (
    <div className="bg-brand-alt-yellow w-96 p-2 flex flex-col items-start justify-center rounded-xl my-2">
      <p className="font-sans-alt">{publishedAt}</p>
      <p className="font-sans-alt font-semibold">{publishedDay}</p>
    </div>
  );
}

export default NewsletterLabel;
