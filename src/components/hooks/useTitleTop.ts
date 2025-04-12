import { useEffect } from "react";

export const useTitleTop = (title: string) => {
  useEffect(() => {
    document.title = `${title}| BIKE STORE`;
    window.scrollTo(0, 0);
  }, [title]);
};
