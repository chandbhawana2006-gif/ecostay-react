/**
 * Modal Component
 * Props:
 * - isOpen
 * - onClose
 * - children
 */

export default function Modal({
  isOpen,
  onClose,
  children,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">

        {children}

        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>

      </div>
    </div>
  );
}