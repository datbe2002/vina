/* eslint-disable react/prop-types */
const SliderBrand = ({ brands, direction }) => {
    return (
        <div className={`carousel-brand-wrapper ${direction}`}>
            <div className="slider">
                <div className="slider-track">
                    {brands.map((p, index) => (
                        <div key={index} className="slide">
                            <img src={p} alt="logo" />
                        </div>
                    ))}
                    {brands.map((p, index) => (
                        <div key={index} className="slide">
                            <img src={p} alt="logo" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SliderBrand