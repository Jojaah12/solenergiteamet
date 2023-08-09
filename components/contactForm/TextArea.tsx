import React from "react";

interface TextAreaProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error: boolean;
  errorMessage: string;
  placeholder: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  id,
  name,
  label,
  value,
  onChange,
  error,
  errorMessage,
  placeholder,
}) => {
  return (
    <div className="p-2 w-full">
      <div className="relative">
        <label className="leading-7 text-sm text-gray-600">
          {label}
        </label>
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full bg-gray-100 bg-opacity-50 rounded border ${
            error ? "border-red-500" : "border-gray-300"
          } focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}
        />
        {error && (
          <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default TextArea;
