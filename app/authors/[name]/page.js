import { getDocuments } from "@/lib/doc";
import { getDocumentsByAuthor } from "@/utils/doc-util";
import ContentDisplay from './../../../components/ContentDisplay';

const AuthorPage = ({params}) => {
  const {name} = params;
  const documents = getDocuments();
  const authorDocuments = getDocumentsByAuthor(documents, name);
  return (
    <div>
       <ContentDisplay id={authorDocuments[0].id} />
    </div>
  )
}

export default AuthorPage
