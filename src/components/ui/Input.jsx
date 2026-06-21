
export default function Input({
  placeholder,
  value,
  onChange,
}) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 rounded-lg p-2"
    />
  );
}