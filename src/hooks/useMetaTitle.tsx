import { useEffect, useState } from 'react';

interface UseMetaTitleProps {
  initialTitle: string;
}

function useMetaTitle({ initialTitle }: UseMetaTitleProps) {
  const [title, setTitle] = useState(initialTitle);

  const updateTitle = (newTitle: string) => setTitle(newTitle);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return { title, updateTitle };
}

export default useMetaTitle;
