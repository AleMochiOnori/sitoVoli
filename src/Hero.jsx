import aereo from './images/aereo.png';

const Hero = () => {
    const heroStyle = {
        backgroundImage: `url(${aereo})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '300px',
        width: '100%'
    };

    return <div style={heroStyle}></div>;
};

export default Hero;
