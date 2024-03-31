import HeroSection from "../component/HeroSection.js";
import ImproveSkills from "../component/ImproveSkills.js";
import QouteSection from "../component/QouteSection.js";
import ChiefsSection from "../component/ChiefsSection.js";

export default function Home(){
    return(
        <div>
            <HeroSection/>
            <ImproveSkills/>
            <QouteSection/>
            <ChiefsSection/>

        </div>
    )
}