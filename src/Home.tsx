import { Facebook } from "lucide-react"; // Remove unused imports
import { useEffect, useState } from "react";
import Lottie from "lottie-react";

const Home = () => {
  const [animationData, setAnimationData] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetch(
      "https://lottie.host/7e6be830-39e9-41d9-a18e-bb817696645e/ZUxUCLEQD5.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setAnimationData(data);
        setLoading(false); // Stop loading after data fetch
      })
      .catch((error) => {
        console.error("Error loading Lottie animation:", error);
        setLoading(false); // Stop loading even in case of an error
      });
  }, []);
  //Arghyaghosh.
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 animate-gradient-x"></div>
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-radial from-white/20 to-transparent animate-pulse-slow"></div>
      </div>
      <div className="relative z-10 min-h-screen flex justify-center">
        <div className="w-full max-w-7xl p-4 md:p-8 flex flex-col justify-between">
          <div>
            <header className="mb-8 md:mb-16">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 mr-2 flex justify-center items-center rounded-md">
                  <span className="text-white font-bold">A</span>
                </div>
                <span className="text-xl font-semibold">Arghyaghosh.com</span>
              </div>
            </header>
            <main className="flex flex-col-reverse md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 mt-10 md:mt-0">
                  Under
                  <br />
                  Construction
                </h1>
                <p className="text-xl mb-6">Magic is going to happen 🤩...</p>
              </div>
              <div className="w-full max-w-md md:max-w-lg">
                {loading ? ( // Show a loading indicator
                  <p>Loading animation...</p>
                ) : (
                  animationData && (
                    <Lottie
                      animationData={animationData}
                      loop={true}
                      autoplay={true}
                      style={{ width: "100%", height: "auto" }}
                    />
                  )
                )}
              </div>
            </main>
          </div>
          <footer className="mt-8 md:mt-16">
            <div className="flex justify-end space-x-4">
              <a
                href={`/app`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                <p>/App</p>
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Home;