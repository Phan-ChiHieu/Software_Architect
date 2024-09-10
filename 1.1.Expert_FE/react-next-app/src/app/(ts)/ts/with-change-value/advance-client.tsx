"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

const initialValues = {
  url: "",
  asin: "",
  image: "",
  photo: "",
};

export default function AdvanceClient() {
  const [localValues, setLocalValues] = useState(initialValues);
  const [selectedValue, setSelectedValue] = useState<keyof typeof localValues>("image");

  // Updated handlers
  const isSelected = useMemo(
    () => ({
      image: selectedValue === "image",
      url: selectedValue === "url",
      asin: selectedValue === "asin",
      photo: selectedValue === "photo",
    }),
    [selectedValue]
  );

  const handleChangeOption = useCallback((value: keyof typeof initialValues) => {
    setLocalValues((prev) => ({
      ...initialValues,
      [value]: prev[value],
    }));
    setSelectedValue(value);
  }, []);

  const handleChange = (key: keyof typeof localValues) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValues((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const handleOptionChange = useCallback((option: keyof typeof initialValues) => () => handleChangeOption(option), [handleChangeOption]);

  console.log("localValues", localValues);
  console.log("selectedValue >>>>", selectedValue);

  // Refs for inputs
  const inputRefs = {
    image: useRef<HTMLInputElement>(null),
    url: useRef<HTMLInputElement>(null),
    asin: useRef<HTMLInputElement>(null),
    photo: useRef<HTMLInputElement>(null),
  };

  // Focus the selected input
  useEffect(() => {
    inputRefs[selectedValue].current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValue]);

  return (
    <div>
      <h1>AdvanceClient</h1>
      {/* <form>
        <div className="bg-black" onClick={() => handleChangeOption("image")}>
          <input type="checkbox" value="image" checked={isSelected.image} onChange={handleOptionChange("image")} />
          <input
            ref={inputRefs.image} // Thêm ref cho input
            className="border-solid border-2 border-zinc-700"
            type="text"
            value={localValues.image}
            onChange={handleChange("image")}
            placeholder="Image"
          />
        </div>
        <br />
        <div className="bg-black" onClick={() => handleChangeOption("url")}>
          <input type="checkbox" value="url" checked={isSelected.url} onChange={handleOptionChange("url")} />
          <input
            ref={inputRefs.url} // Thêm ref cho input
            className="border-solid border-2 border-zinc-700"
            type="text"
            value={localValues.url}
            onChange={handleChange("url")}
            placeholder="Url"
          />
        </div>
        <br />
        <div className="bg-black" onClick={() => handleChangeOption("asin")}>
          <input type="checkbox" value="asin" checked={isSelected.asin} onChange={handleOptionChange("asin")} />
          <input
            ref={inputRefs.asin} // Thêm ref cho input
            className="border-solid border-2 border-zinc-700"
            type="text"
            value={localValues.asin}
            onChange={handleChange("asin")}
            placeholder="Image"
          />
        </div>
        <br />
        <div className="bg-black" onClick={() => handleChangeOption("photo")}>
          <input type="checkbox" value="photo" checked={isSelected.photo} onChange={handleOptionChange("photo")} />
          <input
            ref={inputRefs.photo} // Thêm ref cho input
            className="border-solid border-2 border-zinc-700"
            type="text"
            value={localValues.photo}
            onChange={handleChange("photo")}
            placeholder="Photo"
          />
        </div>
      </form> */}
      <form>
        {Object.entries(isSelected).map(([key, isSelected]) => {
          const inputRef = inputRefs[key as keyof typeof inputRefs];
          const localValue = localValues[key as keyof typeof localValues];
          const handleChangeOptionKey = key as keyof typeof localValues;
          const handleOptionChangeKey = key as keyof typeof localValues;
          const handleChangeKey = key as keyof typeof localValues;
          const placeholder = key.charAt(0).toUpperCase() + key.slice(1);

          return (
            <div key={key} className="bg-black" onClick={() => handleChangeOption(handleChangeOptionKey)}>
              <input type="checkbox" value={key} checked={isSelected} onChange={handleOptionChange(handleOptionChangeKey)} />
              <input
                ref={inputRef} // Thêm ref cho input
                className="border-solid border-2 border-zinc-700"
                type="text"
                value={localValue}
                onChange={handleChange(handleChangeKey)}
                placeholder={placeholder}
              />
            </div>
          );
        })}
      </form>
    </div>
  );
}
