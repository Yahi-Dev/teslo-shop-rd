import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";
import { Product, Category } from '../../../../interfaces/product.interface';
import { ProductGrid, Title } from "@/components";


const seedProducts = initialData.products;

interface Props{
  params: {
    id: Category;
  }
}


export default function CategoryPage({params}: Props) {

  const {id} = params;

  const products = seedProducts.filter(product => product.gender === id);

  const labels: Record<Category, string> = {
    'men': 'Hombres',
    'women': 'Mujeres',
    'kid': 'Niños',
    'unisex': 'Unisex',

  }

  // if (id === 'kid') {
  //   notFound();
  // }

  return (
      <>
        <Title 
        title={`Articulos de ${(labels) [id]}`}
        subTitle="Todos los Productos"
        className="mb-2"/>

        <ProductGrid products={products} />
      </>  
  );
}