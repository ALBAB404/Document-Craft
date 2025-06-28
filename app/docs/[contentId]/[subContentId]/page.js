import ContentDisplay from "@/components/ContentDisplay";


const SubContentPage = ({params}) => {
  const {contentId, subContentId} = params;
  return (
    <div>
      <ContentDisplay id={subContentId} />
    </div>
  )
}

export default SubContentPage
