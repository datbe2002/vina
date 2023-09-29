import SliderBrand from "./SliderBrand"
import { extraForAutoSlider } from "../../../assets/brands/import"
import { extraForAutoSlider2 } from "../../../assets/brands/import"

const BrandCarouselAuto = () => {
    return (
        <>

            <div className="carousel-brand-title">
                BRANDS EVER COOPERATED
            </div>
            <SliderBrand brands={extraForAutoSlider} />
            <SliderBrand brands={extraForAutoSlider2} direction={"left"} />
        </>
    )
}

export default BrandCarouselAuto