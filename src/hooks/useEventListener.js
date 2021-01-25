import { useRef, useEffect } from 'react';

export default function useEventListener(eventName, handler) {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventHandler = event => savedHandler.current(event);

    document.addEventListener(eventName, eventHandler);

    return () => {
      document.removeEventListener(eventName, eventHandler);
    };
  }, [eventName]);
}
