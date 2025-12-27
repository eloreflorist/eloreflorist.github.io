const items = [
    {
      title: "Flowers",
      image: "/flower.jpg",
      text: "Fresh local flowers available for pick up.",
    },
    {
      title: "Gifts",
      image: "/flower.jpg",
      text: "Floral bundles paired with curated goods.",
    },
    {
      title: "Weddings & Events",
      image: "/flower.jpg",
      text: "Bespoke floral designs for special moments.",
    },
  ];
  
  export default function Shop() {
    return (
      <section className="bg-green-700 px-4 py-20 text-white">
        <h3 className="mb-10 text-center text-2xl">SHOP</h3>
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="text-center">
              <img
                src={item.image}
                alt={item.title}
                className="mb-4 w-full object-cover"
              />
              <h4 className="mb-2 text-lg">{item.title}</h4>
              <p className="mb-4 text-sm">{item.text}</p>
              <button className="bg-pink-200 px-4 py-2 text-black text-sm">
                SHOP NOW
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }
  