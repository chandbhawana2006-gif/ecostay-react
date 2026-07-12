import { useState } from "react";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Registration Successful!");
                window.location.href = "/login";
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Server Error");
        }
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background:
                    "linear-gradient(135deg, #E8F5E9 0%, #F1F8E9 50%, #FFFFFF 100%)",
                padding: "20px",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "430px",
                    background: "#fff",
                    padding: "35px",
                    borderRadius: "20px",
                    boxShadow: "0 10px 35px rgba(0,0,0,0.12)",
                }}
            >
                <h1
                    style={{
                        textAlign: "center",
                        color: "#2E7D32",
                        marginBottom: "5px",
                        fontSize: "34px",
                    }}
                >
                    🌿 EcoStay
                </h1>

                <h2
                    style={{
                        textAlign: "center",
                        marginBottom: "8px",
                        color: "#333",
                    }}
                >
                    Create Account
                </h2>

                <p
                    style={{
                        textAlign: "center",
                        color: "#777",
                        marginBottom: "25px",
                    }}
                >
                    Join EcoStay and explore beautiful eco destinations.
                </p>

                <form onSubmit={handleSignup}>
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={inputStyle}
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={inputStyle}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={inputStyle}
                    />

                    <button
                        type="submit"
                        style={buttonStyle}
                        onMouseOver={(e) =>
                            (e.target.style.background = "#43A047")
                        }
                        onMouseOut={(e) =>
                            (e.target.style.background = "#66BB6A")
                        }
                    >
                        Create Account
                    </button>
                </form>

                <div
                    style={{
                        textAlign: "center",
                        marginTop: "25px",
                        color: "#666",
                    }}
                >
                    Already have an account?{" "}
                    <a
                        href="/login"
                        style={{
                            color: "#43A047",
                            textDecoration: "none",
                            fontWeight: "bold",
                        }}
                    >
                        Login
                    </a>
                </div>
            </div>
        </div>
    );
}

const inputStyle = {
    width: "100%",
    padding: "14px",
    marginBottom: "18px",
    borderRadius: "10px",
    border: "1px solid #C8E6C9",
    outline: "none",
    fontSize: "15px",
    boxSizing: "border-box",
    background: "#FAFAFA",
};

const buttonStyle = {
    width: "100%",
    padding: "14px",
    border: "none",
    borderRadius: "10px",
    background: "#66BB6A",
    color: "#fff",
    fontSize: "17px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
};

export default Signup;