import { NavLink } from "react-router-dom";
import { ArrowPrevIcon, ArrowNextIcon, SearchIcon, HeartIcon, PlusIcon } from "../components/Icons/Icons";
import banner from '../assets/banner.png';
import Product from "../components/Product/Product";


const HomePage = () => {
    return (
        <>
            <section className="slider">
                <div className="wrapper">
                    <div className="slides">
                        <div className="slide" style={{
                            backgroundColor: "#F4EFE9"
                        }}>
                            <div className="slides__left">
                                <h2>Stan Smith, Forever!</h2>
                                <NavLink className="button xl" to="/">Купить</NavLink>
                            </div>
                            <div className="slides__right">
                                <img src={banner} alt="Stan Smith" />
                            </div>
                        </div>
                    </div>
                    <div className="control">
                        <button className="prev">
                            <ArrowPrevIcon />
                        </button>
                        <button className="next">
                            <ArrowNextIcon />
                        </button>
                    </div>
                </div>
            </section>
            <section className="section catalog">
                <header className="section-header">
                    <h2 className="section__title">Все кроссовки</h2>
                    <div className="search-box">
                        <div>
                            <SearchIcon size={22} />
                        </div>
                        <input type="text" placeholder="Поиск..." />
                    </div>
                </header>
                <div className="products">
                    <Product />
                </div>
            </section>
        </>
    );
}

export default HomePage;