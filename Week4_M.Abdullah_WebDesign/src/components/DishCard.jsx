function DishCard({ item }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      <img src={item.image} alt={item.name} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
        <div className="text-red-600 font-bold mt-2">{item.price}</div>
      </div>
    </div>
  );
}

export default DishCard;
