import cssfile from './About.module.css';
import headshot from './../../images/Mark Tao_Headshot.jpg';

const About = () => {
    return (
        <div className={cssfile.About}>
            <div className={cssfile.Welcome}>
                <text>
                    Welcome to Mark's Website
                </text>
            </div>
            <div className={cssfile.Headshot}>
                <img className={cssfile.headshot} src={headshot} alt={headshot}>
                </img>
                <caption>
                    This is a headshot of me!
                </caption>
            </div>
        </div>
    );
}

export default About;