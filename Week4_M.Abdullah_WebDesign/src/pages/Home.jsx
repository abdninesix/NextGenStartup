import heroImg from '../assets/hero.jpg';
import menuItems from '../menuItems';

function Home() {
  const featuredItems = menuItems.filter((item) => item.featured);

  return (
    <>
      {/* Hero Section */}
      <section
        className="-mx-8 md:-mx-16 lg:-mx-32 xl:-mx-48 w-screen h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="bg-black/60 p-8 rounded-md text-center max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to NextGenBites</h1>
          <p className="mb-6 text-lg">Delicious food. Cozy vibes. Unforgettable taste.</p>
          <a
            href="/menu"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md text-lg transition"
          >
            Explore Menu
          </a>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-16 px-4 md:px-12 mb-10 mt-10">
        <h2 className="text-4xl font-bold text-center mb-10">Featured Dishes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
