import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Booking() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
        }
    }, [navigate]);
    const [booked, setBooked] = useState(false);
    const [phoneError, setPhoneError] = useState("");

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        destination: "",
        checkIn: "",
        checkOut: "",
        guests: 1,
    });

    const prices = {
        Nainital: 2500,
        Mussoorie: 3000,
        Auli: 4000,
        Ranikhet: 2200,
        Chopta: 2800,
        Munsiyari: 3500,
        Lansdowne: 2400,
        Kausani: 2600,
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "phone") {
            if (!/^\d*$/.test(value)) {
                setPhoneError("Phone number can contain digits only.");
            } else if (value.length > 10) {
                setPhoneError("Phone number cannot exceed 10 digits.");
            } else if (value.length > 0 && value.length < 10) {
                setPhoneError("Phone number must be exactly 10 digits.");
            } else {
                setPhoneError("");
            }
        }

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const calculateNights = () => {
        if (!formData.checkIn || !formData.checkOut) return 0;

        const start = new Date(formData.checkIn);
        const end = new Date(formData.checkOut);

        const diff = end - start;
        return Math.max(diff / (1000 * 60 * 60 * 24), 0);
    };

    const nights = calculateNights();

    const totalCost =
        nights * (prices[formData.destination] || 0);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !formData.firstName ||
            !formData.lastName ||
            !formData.email ||
            !formData.destination ||
            !formData.checkIn ||
            !formData.checkOut
        ) {
            alert("Please fill all required fields.");
            return;
        }

        if (!/^\d{10}$/.test(formData.phone)) {
            alert("Phone number must contain exactly 10 digits.");
            return;
        }

        setBooked(true);
    };

    if (booked) {
        return (
            <div className="max-w-3xl mx-auto py-20 text-center">
                <div className="bg-green-50 p-10 rounded-2xl shadow-lg">

                    <h1 className="text-5xl font-bold text-green-700 mb-4">
                        🎉 Booking Confirmed!
                    </h1>

                    <p className="text-lg text-gray-700">
                        Thank you,
                        <strong>
                            {" "}
                            {formData.firstName} {formData.lastName}
                        </strong>
                        .
                    </p>

                    <p className="mt-3 text-gray-600">
                        Your stay at{" "}
                        <strong>{formData.destination}</strong>
                        {" "}has been reserved successfully.
                    </p>

                    <div className="mt-6 bg-white p-6 rounded-lg shadow">
                        <p>
                            <strong>Guests:</strong> {formData.guests}
                        </p>

                        <p>
                            <strong>Check-In:</strong> {formData.checkIn}
                        </p>

                        <p>
                            <strong>Check-Out:</strong> {formData.checkOut}
                        </p>

                        <p>
                            <strong>Total Cost:</strong> ₹{totalCost}
                        </p>
                    </div>

                </div>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto py-10 px-4">

            <h1 className="text-4xl font-bold text-center text-green-700 mb-2">
                Book Your EcoStay
            </h1>

            <p className="text-center text-gray-600 mb-10">
                Explore beautiful destinations across Uttarakhand.
            </p>

            <div className="bg-white shadow-xl rounded-2xl p-8">

                <form
                    onSubmit={handleSubmit}
                    className="grid md:grid-cols-2 gap-6"
                >

                    <div>
                        <label className="block mb-2 font-medium">
                            First Name
                        </label>

                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                            placeholder="First Name"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Last Name
                        </label>

                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                            placeholder="Last Name"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Phone Number
                        </label>

                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                            placeholder="10-digit mobile number"
                        />

                        {phoneError && (
                            <p className="text-red-500 text-sm mt-1">
                                {phoneError}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Email Address
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                            placeholder="example@email.com"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Destination
                        </label>

                        <select
                            name="destination"
                            value={formData.destination}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                        >
                            <option value="">
                                Select Destination
                            </option>

                            <option>Nainital</option>
                            <option>Mussoorie</option>
                            <option>Auli</option>
                            <option>Ranikhet</option>
                            <option>Chopta</option>
                            <option>Munsiyari</option>
                            <option>Lansdowne</option>
                            <option>Kausani</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Guests
                        </label>

                        <input
                            type="number"
                            min="1"
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Check-In Date
                        </label>

                        <input
                            type="date"
                            name="checkIn"
                            value={formData.checkIn}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Check-Out Date
                        </label>

                        <input
                            type="date"
                            name="checkOut"
                            value={formData.checkOut}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                        />
                    </div>

                    <div className="md:col-span-2 bg-green-50 rounded-lg p-4">
                        <h3 className="font-bold text-green-700 mb-2">
                            Booking Summary
                        </h3>

                        <p>
                            Price per Night: ₹
                            {prices[formData.destination] || 0}
                        </p>

                        <p>Nights: {nights}</p>

                        <p className="font-bold mt-2">
                            Total Cost: ₹{totalCost}
                        </p>
                    </div>

                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
                        >
                            Confirm Booking
                        </button>
                    </div>

                </form>

            </div>
        </div>
    );
}