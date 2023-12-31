import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion'
import contactImage from '../../assets/pics/contactlogo.png';
import { submitForm } from '../../redux/slice/blogSlice';
import './contact.scss';
import ContactForm from './ContactForm';
import useScrollToTop from '../../hooks/useScrollToTop'
const ContactPage = () => {
    useScrollToTop()
    const dispatch = useDispatch()
    const loading = useSelector(state => state.blog.loading)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (formData) => {
        dispatch(submitForm(formData));
        resetForm();
    };

    const resetForm = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    const contactVariant = {
        hidden: {
            opacity: 0,
            y: '5rem'
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.5,
                duration: 0.8,
                delay: 0.3
            }
        }
    }

    const headerVariant = {
        hidden: {
            opacity: 0,
            x: '-5rem'
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                bounce: 0.5,
                duration: 0.8,
            }
        }
    }

    return (

        <div className='contact-page'>
            <motion.div variants={headerVariant} initial="hidden" animate="visible" className='contact-image-container'>
                <img src={contactImage} alt='Contact' className='contact-image' />
            </motion.div>
            <motion.div variants={contactVariant} initial="hidden" animate="visible" className='contact-container'>
                <h1 className='contact-tilte'>CONTACT US</h1>
                <ContactForm
                    formData={formData}
                    setFormData={setFormData}
                    onSubmit={handleSubmit}
                    loading={loading} />
            </motion.div>
        </div>
    );
};


export default ContactPage;
