import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Creative Photo`;
    }, [title]);
};
export default useTitle;
