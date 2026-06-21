import { useState } from "react";
import {
  Button,
  Input,
  Modal,
  Toast,
  Loader,
} from "../components/ui";

export default function ComponentsDemo() {
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-8">

      <h1 className="text-4xl font-bold text-center text-green-700 mb-10 dark:text-green-400">
        UI Components
      </h1>

      <div className="max-w-3xl mx-auto space-y-8">

        {/* Button Demo */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">
            Button Component
          </h2>

          <Button
            text="Click Me"
            onClick={() => alert("Button clicked!")}
          />
        </div>

        {/* Input Demo */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">
            Input Component
          </h2>

          <Input
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <p className="mt-3 dark:text-white">
            You typed: {name}
          </p>
        </div>

        {/* Modal Demo */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">
            Modal Component
          </h2>

          <Button
            text="Open Modal"
            onClick={() => setShowModal(true)}
          />

          <Modal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          >
            <h2 className="text-xl font-bold">
              Welcome to EcoStay
            </h2>

            <p className="mt-2">
              This is a reusable Modal component.
            </p>
          </Modal>
        </div>

        {/* Toast Demo */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">
            Toast Component
          </h2>

          <Button
            text="Show Toast"
            onClick={() => {
              setShowToast(true);

              setTimeout(() => {
                setShowToast(false);
              }, 3000);
            }}
          />

          {showToast && (
            <div className="mt-4">
              <Toast message="Booking Successful!" />
            </div>
          )}
        </div>

        {/* Loader Demo */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">
            Loader Component
          </h2>

          <Loader />
        </div>

      </div>
    </div>
  );
}