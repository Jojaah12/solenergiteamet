interface TextAreaProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; // Corrected type
  error?: boolean;
  errorMessage?: string;
  className?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  error,
  className,
}) => {
  return (
    <div className={`p-2 w-full ${className ? className : ""}`}>
      <div className="relative">
        <label className="leading-7 text-sm text-gray-600">
          {label}
        </label>
        <textarea
          id={id}
          name={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full h-32 bg-gray-100 bg-opacity-50 rounded border ${
            error ? "border-red-500" : "border-gray-300"
          } focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}
        />
        {error && (
          <p className="text-xs text-red-500 mt-1">{error}</p>
        )}
      </div>
    </div>
  );
};

export default TextArea;
