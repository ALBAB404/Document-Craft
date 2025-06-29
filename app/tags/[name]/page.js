import { getDocuments } from "@/lib/doc";
import { getDocumentsByTag } from "@/utils/doc-util";
import ContentDisplay from './../../../components/ContentDisplay';

const TagPage = ({params}) => {
  const {name} = params;
  const documents = getDocuments();
  const tagDocuments = getDocumentsByTag(documents, name);
  return (
    <div>
      <ContentDisplay id={tagDocuments[0].id} />
    </div>
  )
}

export default TagPage
