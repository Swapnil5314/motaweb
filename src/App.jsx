import { useState, useEffect } from "react";
import "./App.css";
import secretImg from "./assets/secret.jpg";
import { motion } from "framer-motion";

function HeartRain() {
  useEffect(() => {
    const container = document.createElement("div");
    container.className = "heart-container";
    document.body.appendChild(container);

    for (let i = 0; i < 60; i++) {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDelay = Math.random() * 2 + "s";
      heart.style.transform = `scale(${Math.random() + 0.5})`;
      container.appendChild(heart);

      setTimeout(() => heart.remove(), 5000);
    }

    return () => container.remove(); // Clean up
  }, []);

  return null;
}

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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-pink-300 transition-all duration-500 overflow-hidden">
      {!isUnlocked ? (
        <div className={`bg-white bg-opacity-70 backdrop-blur-md p-10 rounded-3xl shadow-2xl flex flex-col items-center gap-6 transition-all duration-500 ${shake ? "animate-shake" : ""}`}>
          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 font-[Bubblegum Sans]">Enter Password</h1>
          <input type="password" className="px-6 py-4 text-lg md:text-xl rounded-xl border border-pink-300 focus:outline-none focus:ring-4 focus:ring-pink-400 w-72 text-center" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSubmit()} placeholder="Enter secret code" />
          <button onClick={handleSubmit} className="bg-pink-500 hover:bg-pink-600 text-white text-lg md:text-xl font-semibold px-8 py-3 rounded-xl transition-all duration-300">Unlock</button>
          {error && <p className="text-red-500 text-base font-medium animate-fade-in">You entered wrong password</p>}
        </div>
      ) : (
        <>
          <HeartRain />
          <div className="flex flex-col items-center justify-center gap-4 animate-fade-in relative w-full">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 1 }}
              animate={{ opacity: 1, y: -300, scale: 0.5 }}
              transition={{ duration: 1.5, delay: 0.5, type: "spring" }}
              className="absolute z-10 text-center font-bold"
              style={{
                color: "#ffb01dff",
                fontSize: "3rem",
                fontWeight: "800",
              }}
            >
              I Love Youuu Mere Mote 💋😘
            </motion.div>

            <img src={secretImg} alt="Secret" className="rounded-xl shadow-2xl w-[90vw] max-w-md border-4 border-pink-200 mt-20" />
            <p className="text-xl font-semibold mt-4" style={{ color: "#ffffffff" }}>
              Welcome Meriii cutiee! ❤️
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
