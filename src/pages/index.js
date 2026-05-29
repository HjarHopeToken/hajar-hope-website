export default function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-center">Welcome to HAJAR</h1>
        </div>
      </header>
      <main className="py-10">
        <section className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Faith, Charity, and Innovation</h2>
          <p className="text-lg text-gray-700">
            HAJAR is a faith-driven community project focused on helping individuals achieve their dreams through blockchain technology.
          </p>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2026 HAJAR Hope Project. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}