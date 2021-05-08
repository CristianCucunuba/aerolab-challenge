export default function Hero() {
  return (
    <div
      className="relative w-full bg-gray-300 bg-cover h-96"
      style={{
        backgroundImage: "url(/images/header.png)",
      }}>
      <div className="flex items-end h-full max-w-6xl mx-auto">
        <h1 className="pb-12 text-5xl font-bold text-white">Electronics</h1>
      </div>
    </div>
  );
}
