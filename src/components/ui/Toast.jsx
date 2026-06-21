/**
 * Toast Component
 * Props:
 * - message
 */

export default function Toast({ message }) {
  return (
    <div className="bg-green-600 text-white px-4 py-3 rounded-lg shadow-md">
      {message}
    </div>
  );
}