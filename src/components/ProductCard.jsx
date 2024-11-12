import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const products = [
  {
    category: "Bicycles",
    image: "/modelk.png",
    title: "Kyro X26 MTB - Model K",
    price: 350.0,
  },
  {
    category: "Bicycles",
    image: "/herosectionbike.jpg",
    title: "Kyro X26 MTB - Model X",
    price: 350.0,
  },
  {
    category: "Bicycles",
    image: "/modely.png",
    title: "Kyro X26 MTB - Model Y",
    price: 350.0,
  },
  {
    category: "Bicycles",
    image: "/model z white.jpg",
    title: "Kyro X26 MTB - Model Z",
    price: 350.0,
  },
];

const ProductCard = () => {
  return (
    <section className="bg-slate-50 py-1 px-5">
      <div className="mx-auto">
        <h3 className="text-7xl font-extrabold mb-12 mt-12 text-center font-['Roboto'] italic">
          New Arrivals
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 mb-12">
          {products.map((product, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-48 w-full object-cover mb-0"
                />
                <span className="text-gray-400 font-bold text-xs mt-0 mb-5">
                  {product.category}
                </span>
                <h4 className="text-lg font-extrabold mt-3 font-['Roboto'] italic">
                  {product.title}
                </h4>
                <div className="flex space-x-1 mb-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={10}
                      className="text-gray-600 text-base font-bold"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm font-bold">
                  ${product.price.toFixed(2)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
