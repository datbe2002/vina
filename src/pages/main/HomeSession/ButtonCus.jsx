import { Button } from 'antd'

const ButtonCus = () => {
    const scrollToAboutSession = () => {
        const aboutSessionElement = document.querySelector('.introduce');
        if (aboutSessionElement) {
            aboutSessionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className='custom-button'>
            <Button className='button-started' type="primary" onClick={scrollToAboutSession}>Get Started</Button>
        </div>
    )
}

export default ButtonCus