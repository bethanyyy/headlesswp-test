import React from "react";
import { fetcher } from "../lib/fetcher";
import { FIRST_FIVE_PRODUCTS } from "../lib/wordpress/api";
import ProductsCard from "../components/ProductsCard";

const products = ({ products }) => {
  return (
    <div>
      <h3 className="bg-pink-200 p-2 text-xl text-center uppercase">
        First Five Products
      </h3>
      <div className="bg-nekopurple py-2 grid grid-cols-3 gap-10">
        {products?.map((product) => (
          <ProductsCard key={product.node.id} product={product} />
        ))}
      </div>
      <div className="my-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque maiores
        tenetur aperiam, culpa illo nesciunt ipsa. Error quaerat, illum porro
        aut fuga labore recusandae, odit voluptatem tenetur maiores facilis a!
        Minima ducimus alias incidunt aliquam quisquam odio. Repudiandae
        asperiores harum voluptates, consequuntur laborum numquam cumque, ullam
        odio aperiam saepe corrupti! Tempore odit eveniet consectetur! Odio,
        repellendus? Nemo unde eius quis! Fuga odio, culpa dolorem pariatur
        reprehenderit nihil necessitatibus sed laborum sunt, provident quae eius
        animi repellendus quas earum sequi vel. Eligendi et ipsum velit sint
        maxime ex culpa hic quod? Consequatur, facilis deserunt rerum ex
        repellendus natus harum sint commodi temporibus magnam accusamus
        consectetur eligendi labore perferendis porro asperiores ratione sed
        velit, sunt enim animi provident? Possimus minus maxime provident?
        Doloremque cupiditate commodi soluta earum ea! Aperiam consequuntur vel
        tenetur sapiente eius blanditiis quia atque asperiores, dolorum nulla
        nobis, repellendus fugit commodi ut? Distinctio, provident temporibus
        illum voluptatum adipisci sed. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Impedit ullam odio dolorum aliquid eaque iure pariatur
        aspernatur quam doloribus architecto cum dignissimos, ratione atque
        corrupti quisquam, maiores distinctio illum beatae? Modi alias sapiente
        inventore quasi rem beatae corporis tempore assumenda nemo ipsam nihil
        aspernatur nesciunt, deserunt, suscipit quod impedit est dignissimos!
        Aspernatur quos a exercitationem eaque eveniet fugit provident
        repudiandae? Dolores, fugit. Numquam temporibus, ipsam praesentium amet
        aliquam veniam quo voluptatum repudiandae modi optio magni natus,
        expedita quidem itaque. Dolor fugiat exercitationem eos quis fuga illo
        nam consequuntur alias quibusdam. Dolores ad excepturi optio repellat,
        laboriosam, dicta odio nihil et officiis placeat laborum recusandae
        aliquam amet velit quo dolorum eum facere similique ab nisi
        necessitatibus nemo? Cupiditate eos tempora eveniet! Perspiciatis
        numquam unde non error illo. Illo quis qui culpa nemo ea sint mollitia
        laudantium quaerat dolore illum! Doloremque veritatis voluptas sapiente
        deleniti sed repudiandae ut commodi reprehenderit rem nam.
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const response = await fetcher(FIRST_FIVE_PRODUCTS);
  const products = response.data.products.edges || [];

  console.log(products);

  return {
    props: { products },
  };
};

export default products;
