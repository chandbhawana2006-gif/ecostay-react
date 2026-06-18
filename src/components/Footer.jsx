export default function Footer() {
    return (
        <footer className="bg-green-900 text-white mt-12">

            <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">

                <div>
                    <h2 className="text-2xl font-bold">
                        🌿 EcoStay
                    </h2>

                    <p className="mt-3 text-green-100">
                        Sustainable travel experiences across the beautiful destinations of Uttarakhand.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-3">
                        Quick Links
                    </h3>

                    <ul className="space-y-2 text-green-100">
                        <li>Home</li>
                        <li>About</li>
                        <li>Booking</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-3">
                        Contact
                    </h3>

                    <ul className="space-y-2 text-green-100">
                        <li>📍 Uttarakhand, India</li>
                        <li>📞 +91 98765 43210</li>
                        <li>📧 ecostay@gmail.com</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-3">
                        Follow Us
                    </h3>

                    <div className="flex flex-col gap-2 text-green-100">

                        <a href="#" className="hover:text-white">
                            📷 Instagram-official_EcoStay
                        </a>

                        <a href="#" className="hover:text-white">
                            📘 Facebook-official_EcoStay
                        </a>

                    </div>
                </div>

            </div>

            <div className="border-t border-green-800 text-center py-4 text-green-200">
                © 2026 EcoStay. All Rights Reserved.
            </div>

        </footer>
    );
}