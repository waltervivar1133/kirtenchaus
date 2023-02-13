import React, { useEffect, useState } from "react";

export const Message = () => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  if (!isVisible) {
    return null;
  }
  return (
    <div
      className="mb-4 rounded-lg bg-gray-500  p-4  text-sm text-white"
      role="alert"
    >
      <span className="font-medium">Mensaje enviado!</span> En breves momentos
      nos contactaremos contigo
    </div>
  );
};
