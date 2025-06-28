import ContentDisplay from "@/components/ContentDisplay";

const ContentPage = ({ params }) => {
  const { contentId } = params;

  return (
    <div>
      <ContentDisplay id={contentId} />
    </div>
  )
}

export default ContentPage
