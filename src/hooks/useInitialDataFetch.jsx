import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getBlog, getBlogDateOnly, getAllContact, getAllContactDateOnly } from '../redux/slice/blogSlice'; // Import your actions

function useInitialDataFetch() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBlog());
        dispatch(getBlogDateOnly());
        dispatch(getAllContact());
        dispatch(getAllContactDateOnly());
    }, [dispatch]);
}

export default useInitialDataFetch;
