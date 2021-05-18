import React, { useState, useEffect } from "react";

export default function FlashWord({ flashWord, wordTimer, setWordTimer }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setWordTimer(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, [flashWord]);

  return (
    <>
      <p style={{ color: "red", visibility: !wordTimer ? "" : "hidden" }}>
        {flashWord}
      </p>
    </>
  );
}
