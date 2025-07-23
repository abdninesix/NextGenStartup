function About() {
  return (
    <section className="py-16 px-4 md:px-12 lg:px-24">
      {/* Restaurant Story */}
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-700 leading-relaxed">
          NextGenBites was founded with a passion for food and a dream of creating a warm, welcoming space where
          people could enjoy unforgettable flavors. What started as a small family kitchen has grown into a
          beloved local gem — serving up love on every plate.
        </p>
      </div>

      {/* Mission and Values */}
      <div className="mb-16 text-center max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-3 text-red-600">Our Mission</h3>
        <p className="text-gray-700 leading-relaxed">
          We believe in fresh ingredients, bold flavors, and creating a dining experience that feels like home.
          Our mission is to bring people together through food and foster a sense of community around the table.
        </p>
      </div>

      {/* Meet the Team */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-8">Meet Our Chefs</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-52 h-52 object-cover rounded-full mb-4"
              />
              <h4 className="text-lg font-semibold">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const team = [
  {
    name: 'Chef Maria Gomez',
    role: 'Head Chef',
    image: 'https://plus.unsplash.com/premium_photo-1661778091956-15dbe6e47442?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Chef Akira Sato',
    role: 'Sushi Specialist',
    image: 'https://images.unsplash.com/photo-1595257841889-eca2678454e2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Chef Luca Moretti',
    role: 'Pasta Expert',
    image: 'https://plus.unsplash.com/premium_photo-1687697860459-e4a751f80f1d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default About;
