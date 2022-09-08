import React from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
    const Search = () =>{
        window.addEventListener("scroll", function(){
            const search = this.document.querySelector(".search")
            search.classList.toggle("active", window.scroll > 100)
        } )
    }
    return (
        <>
            <section className='search'>
                <div className='container c_flex'>
                    <div className='logo width'>
                        <p>Ecommerce-Store</p>
                    </div>
                
                <div className='search-box f_flex'>
                    <i className="fa fa-search"></i>
                    <input type="text" placeholder='Search and hit enter....'/>
                    <span>All Catagory</span>
                </div>
                <div className='icon f_flex width'>
                 <i className="fa fa-user icon_circle"></i>
                 <div className='card'>
                    <Link to="/card">
                        <i className="fa fa-shopping-bag icon_circle"></i>
                        <span>0</span>
                    </Link>
                 </div>
                </div>
             </div>
            </section>
            
        </>
    );
};

export default Search;