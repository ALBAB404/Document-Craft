import { getDocumentContent } from "@/lib/doc";
import Link from "next/link";
import Tag from "./Tag";

const ContentDisplay = async ({ id }) => {
  const content = await getDocumentContent(id);
  console.log(content);
  return (
      <article class="prose dark:prose-invert">
          <h1>{content.title}</h1>
          <div className="">
             <span>Published on: {content.date}</span> by { " " } 
             <Link href={`/docs/${content.author}`}>{content.author}</Link> from this  {" "}
             <Link href={`/docs/${content.category}`}>{content.category} Category</Link>
          </div>
          <div className="mt-10">
             {
               content.tags && content.tags.map((tag) => (
                 <Tag key={tag} tag={tag} />
               ))
             }
          </div>
            <div className="mt-10 lead" dangerouslySetInnerHTML={{ __html: content.contentHtml }} />
      </article>
  );
};

export default ContentDisplay;
