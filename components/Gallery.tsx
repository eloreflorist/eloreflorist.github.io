export default function Gallery() {
    return (
      <section className="bg-pink-200 py-16">
        <h3 className="mb-8 text-center text-xl">
          LET’S BE FRIENDS – FOLLOW US
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {["/gallery1.jpg", "/gallery2.jpg", "/gallery3.jpg", "/gallery4.jpg"].map(
            (img) => (
              <img key={img} src={img} alt="" className="w-full object-cover" />
            )
          )}
        </div>
      </section>
    );
  }
  