import { fetcher } from "../../lib/fetcher";
import { PRODUCT_QUERY } from "../../lib/wordpress/api"; // query method from api
import Link from "next/link"; // can send user to next link
import React, { useState } from 'react';


const second_page = ({allProducts}) =>{ // display
    const products = allProducts;
    return(
        <div className="container bg-slate-800 text-white">
            <div>
                <p>↓test↓</p>
                <Navbar>
                    <NavItem id="testButton"/>
                    <NavItem id="menu"><DropdownMenu></DropdownMenu></NavItem>
                    <NavItem id="account">
                        
                        <p>TESTTTT</p>
                    </NavItem>
                </Navbar>
                
                <div className="p-8 text-center">
                    <h1 className="text-white text-5xl font-bold">Here is the Title</h1>
                    <h2 className="text-slate-200 text-2xl italic">...and some description</h2>
                </div>
            </div>
            <main className="main">
            
                <div className="grid">
                    {products.map((product)=>{
                        return(
                            <div className="p-5 w-1/3" key={product.slug}>
                                <div className="container overflow-hidden">
                                    <img className="rounded-lg hover:scale-125" src={product.image.sourceUrl} alt=""/>
                                </div>
                                <p className="text-blue-300 text-xs ">{product.type}</p>
                                <h3 className="hover:text-white text-blue-200">{product.name}</h3>
                                <div className="text-blue-800 bg-gray-300" dangerouslySetInnerHTML={{__html:product.description}}/>
                                <p className="text-blue-300">Rate: {product.averageRating}</p>
                            </div>
                        )
                    })}
                </div>
            </main>
        </div>
    )
}

export default second_page;

export async function getStaticProps(){
    const response = await fetcher(PRODUCT_QUERY);
    const allProducts = response.data.products.nodes;

    return {
        props: {allProducts},
        revalidate: 1, 
    };
}


function DropdownMenu(){
    
    function DropdownItem(props){
        <a href='#' className="menu-item">
            <span className="icon-button">{props.leftIcon}</span>
            {props.children}
            <span className="icon-right">{props.rightIcon}</span>
        </a>
    }

    return (
        <div className="dropdown">
            <p>item 1</p>
            <p>item 2</p>
            <a href='#' >item 3</a>
            <DropdownItem>TestItem</DropdownItem>
            <DropdownItem leftIcon="left" rightIcon="right">

            </DropdownItem>
        </div>
    )
}

function Navbar(props){
    return (
        <nav className="navbar">
            <ul className="navbar-nav">{props.children}</ul>
        </nav>
    )
}

function NavItem(props) {

    const [open, setOpen] = useState(); // open = boolean, is menu open? setOpen = function

    return (
        <li className="nav-item">
            <a href = "#" className="icon-button" onClick={()=>setOpen(!open)}>
                {props.id}
            </a>

            {open && props.children}
        </li>
    )
}