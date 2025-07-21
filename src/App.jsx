import { useState } from "react";
import "./App.css";
import secretImg from "./assets/secret.jpg";

function App() {
  const [input, setInput] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [shake, setShake] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (input === "0126") {
      setIsUnlocked(true);
    } else {
      setShake(true);
      setError(true);
      setTimeout(() => {
        setShake(false);
        setError(false);
      }, 500);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-pink-300 transition-all duration-500">
      {!isUnlocked ? (
        <div
          className={`bg-white bg-opacity-70 backdrop-blur-md p-10 rounded-3xl shadow-2xl flex flex-col items-center gap-6 transition-all duration-500 ${
            shake ? "animate-shake" : ""
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 font-[Bubblegum Sans]">
            Enter Password
          </h1>
          <input
            type="password"
            className="px-6 py-4 text-lg md:text-xl rounded-xl border border-pink-300 focus:outline-none focus:ring-4 focus:ring-pink-400 w-72 text-center"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            placeholder="Enter secret code"
          />
          <button
            onClick={handleSubmit}
            className="bg-pink-500 hover:bg-pink-600 text-white text-lg md:text-xl font-semibold px-8 py-3 rounded-xl transition-all duration-300"
          >
            Unlock
          </button>

          {error && (
            <p className="text-red-500 text-base font-medium animate-fade-in">
              You entered wrong password
            </p>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 animate-fade-in">
          <img
            src={secretImg}
            alt="Secret"
            className="rounded-xl shadow-2xl w-[90vw] max-w-md border-4 border-pink-200"
          />
          <p className="text-pink-700 text-xl font-semibold mt-4">
            Welcome! ❤️
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
