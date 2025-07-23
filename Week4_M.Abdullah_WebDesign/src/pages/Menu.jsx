import { useState } from 'react';
import DishCard from '../components/DishCard';
import menuItems from '../menuItems';
import { Star } from 'lucide-react';

const categories = ['All', 'Appetizers', 'Mains', 'Desserts', 'Drinks'];

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems =
    selectedCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-16 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-10">Our Menu</h2>

      {/* Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === cat
                ? 'bg-red-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            } transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div key={item.id} className="relative">
            {item.featured && (
              <div className="absolute top-2 right-2 bg-yellow-400 text-white p-1 rounded-full shadow-md z-10">
                <Star className="w-4 h-4" />
              </div>
            )}
            <DishCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
