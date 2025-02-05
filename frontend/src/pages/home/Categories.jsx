import { Link } from "react-router-dom";
import category1 from "../../assets/accessories1.png"
import category2 from "../../assets/accessories2.png"
import category3 from "../../assets/accessories3.png"
import category4 from "../../assets/accessories4.png"

const Categories = () => {
    const categories = [
        {name: 'Accessories', path: 'accessories', image: category1 },
        {name: 'Shoes', path: 'shoes', image: category2 },
        {name: 'Clothes', path: 'clothes', image: category3 },
        {name: 'Gallery', path: 'gallery', image: category4 }
    ]
  return (
    <>
      <div className="product__grid">
        {
            categories.map((category) => (
                <Link key={category.name} to={`/categories/${category.path}`} className="categories__card">
                    <img src={category.image} alt={category.name} />
                    <h4>{category.name}</h4>
                </Link>
            ))
        }
      </div>
    </>
  );
};

export default Categories;
