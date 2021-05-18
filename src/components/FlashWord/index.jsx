import React, { useState, useEffect } from "react";

export default function FlashWord({ flashWord, setFlashWord, testArr }) {
  const [wordTimer, setWordTimer] = useState(false);
  // Display word
  // Make word fade
  // Handle submit
  // Handle change

  useEffect(() => {
    setFlashWord(testArr[0]);
    const timer = setTimeout(() => {
      setWordTimer(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <p style={{ color: "red", visibility: !wordTimer ? "" : "hidden" }}>
        {flashWord}
      </p>
    </>
  );
}
