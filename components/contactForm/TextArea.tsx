interface TextAreaProps {
  id: string;
  label: string;
  placeholder: string;
}

const TextArea = ({ id, label, placeholder }: TextAreaProps) => {
  return (
    <div className="p-2 w-full">
      <div className="relative">
        <label className="leading-7 text-sm text-gray-600">
          {label}
        </label>
        <textarea
          id={id}
          name={id}
          placeholder={placeholder}
          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        ></textarea>
      </div>
    </div>
  );
};

export default TextArea;
