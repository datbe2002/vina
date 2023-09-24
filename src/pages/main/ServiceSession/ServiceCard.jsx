/* eslint-disable react/prop-types */
import ShowInfo from './ShowInfo'

const ServiceCard = ({ serviceCard }) => {
    return (
        <div className='loop-card-info'>
            {serviceCard?.map((dat, index) => (
                <ShowInfo key={index} index={index} dat={dat} />
            ))}
        </div>
    )
}

export default ServiceCard