import {NewPostView} from './NewPost.view.tsx';
import {useNewPost} from './hooks/useNewPost.ts';

export const NewPost = () => {
  const {
    title,
    imageURL,
    link,
    content,
    setTitle,
    setImageURL,
    setLink,
    setContent,
    isValid,
    addNewArticle,
  } = useNewPost();

  return (
    <NewPostView
      title={title}
      imageURL={imageURL}
      link={link}
      content={content}
      setTitle={setTitle}
      setImageURL={setImageURL}
      setLink={setLink}
      setContent={setContent}
      isValid={isValid}
      addNewArticle={addNewArticle}
    />
  );
};
