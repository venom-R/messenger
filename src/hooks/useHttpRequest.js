import { useCallback, useState, useRef, useEffect } from 'react';

function useHttpRequest(request, initialState = null) {
  const [response, setResponse] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const isCancelled = useRef(false);

  const send = useCallback(
    async (...args) => {
      setError(null);
      setLoading(true);
      try {
        const data = await request(...args);
        if (!isCancelled.current) {
          setResponse(data);
          setLoading(false);
        }
        return data;
      } catch (error) {
        if (!isCancelled.current) {
          setError(error);
          setLoading(false);
        }
        throw error;
      }
    },
    [request],
  );

  const cancel = useCallback(() => {
    isCancelled.current = true;
  }, []);

  useEffect(() => {
    return () => {
      cancel();
    };
  }, [cancel]);

  return { response, loading, error, send, cancel };
}

export default useHttpRequest;
