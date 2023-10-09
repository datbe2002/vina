/* eslint-disable react/prop-types */
const SliderBrand = ({ brands, direction }) => {
    return (
        <div className={`carousel-brand-wrapper ${direction}`}>
            <div className="slider">
                <div className="slider-track">
                    {brands.map((p, index) => (
                        <ImgBrandLoop p={p} key={`brand-${index}`} />
                    ))}
                    {brands.map((p, index) => (
                        <ImgBrandLoop p={p} key={`logo-${index}`} />
                    ))}
                </div>
            </div>
        </div>
    )
}

const ImgBrandLoop = ({ p }) => {
    return <div className="slide">
        <img src={p} alt="logo" />
    </div>
}

export default SliderBrand