import { useState, useRef, useEffect } from "react";

const Dropdown = ({
  options = [],
  defaultValue = "",
  onChange = () => {},
  label = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue || options[0]);
  const dropdownRef = useRef(null);

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {label && <span className="mr-2">{label}</span>}

      {/* Trigger */}
      <div
        className="inline-flex items-center justify-between border px-3 py-1 cursor-pointer bg-white min-w-[140px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected}
        <span className="ml-2">▾</span>
      </div>

      {/* Options */}
      {isOpen && (
        <div className="absolute mt-1 w-full border bg-white shadow-md z-10">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className={`px-3 py-2 cursor-pointer hover:bg-gray-200 ${
                selected === option ? "bg-gray-300 font-medium" : ""
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;