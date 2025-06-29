import { getDocuments } from "@/lib/doc";
import { getDocumentsByCategory } from "@/utils/doc-util";
import ContentDisplay from './../../../components/ContentDisplay';

const CategoryPage = ({params}) => {
  const {name} = params;
  const documents = getDocuments();
  const categoryDocuments = getDocumentsByCategory(documents, name);
  return (
    <div>
      <ContentDisplay id={categoryDocuments[0].id} />
    </div>
  )
}

export default CategoryPage
