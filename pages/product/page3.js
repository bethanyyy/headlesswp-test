import { fetcher } from "../../lib/fetcher";
import { PRODUCT_QUERY } from "../../lib/wordpress/api"; // query method from api
import Link from "next/link"; // can send user to next link

const page3 = ({allProducts}) =>{ // display
    const products = allProducts;
    return(
        <div className="bg-slate-800 text-slate-200 py-6">
            
            <div className="md:flex justify-center">
                
                <div className="flex-initial justfiy-center md:w-1/4">
                    <nav className="py-2">
                        <div class="flex justify-end px-8 cursor-pointer md:hidden" id="burger">
                            <svg class="w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </div>
                        
                        <ul className="hidden md:block" id="menu">
                            <li className="py-1">
                                <a href="#" className="px-2 flex justify-end hover:border-r-4 hover:border-purple-400 focus:border-r-4 focus:border-purple-400">
                                    <span>Search</span>
                                    <svg class="w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </a>
                            </li>
                            <li className="py-1">
                                <a href="#" className="px-2 flex justify-end hover:border-r-4 hover:border-purple-400 focus:border-r-4 focus:border-purple-400">
                                    <span>Filter</span>
                                    <svg class="w-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                                    </svg>
                                </a>
                            </li>
                            <li className="py-1">
                                <a href="#" className="px-2 flex justify-end hover:border-r-4 hover:border-purple-400 focus:border-r-4 focus:border-purple-400">
                                    <span>Contact</span>
                                    <svg class="w-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <main className="px-16 flex-initial md:w-3/4">
                    <header>
                        <h2 className="text-white text-4xl font-semi-bold">Art Assets</h2>
                        <h3 className="2xl font-semi-bold">2D</h3>
                    </header>

                    <div>
                        <h4 className="font-bold mt-12 pb-2 border-b border-purple-500 text-purple-500">New Texture</h4>

                        <div className="mt-8 lg:grid grid-cols-3 gap-6">
                            {products.map((product)=>{
                                return(
                                    <div key={product.id}>
                                        <div className="bg-slate-400 rounded overflow-hidden shadow-md relative">
                                            <Link href={'/product/' + product.slug}>
                                                <div className="overflow-hidden">
                                                    <img src={product.image.sourceUrl} alt="" className="w-full h-36 object-cover hover:scale-125 duration-500"/>
                                                </div>
                                            </Link>
                                            <div className="m-4">
                                                <span>{product.name}</span>
                                                <br></br>
                                                <span>{product.price}</span>
                                                <span className="font-light block text-xs" dangerouslySetInnerHTML={{__html:product.description}}></span>
                                            </div>
                                            <div>
                                                <span className="bg-green-400 text-slate-100 text-xs uppercase font-bold rounded-full p-2 absolute ml-2 mr-2 top-2">Sale!</span>
                                            </div>
                                        </div>
                                        <br></br>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                
                </main>
            

            </div>
        </div>
        
    )
}

export default page3;

export async function getStaticProps(){
    const response = await fetcher(PRODUCT_QUERY);
    const allProducts = response.data.products.nodes;

    return {
        props: {allProducts},
        revalidate: 1, 
    };
}

/*
const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', ()=>{
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    }else{
        menu.classList.add('hidden');
    }
}) //<script src="burger.js"></script>
*/