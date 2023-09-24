const scrollBehaviourHook = ({ className }) => {
    const element = document.querySelector(className);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

export default scrollBehaviourHook;

