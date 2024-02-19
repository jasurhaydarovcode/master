import "./style.css"
import "../../../css/GlobalCss/style.css"
import SocialCard from "../socialcard";
    

function Globecard() {
    return (
        <div className="head">
            <div className="relative">
                <div className="and">
                    <SocialCard />
                </div>
                <a className="and2" href="https://t.me/Abdulaziz_saidov">
                    <div className="bg-white rounded-2xl flex items-center p-2 w-64 cardd ">
                    <i class="fa-brands fa-instagram rounded-full w-12 h-12 mr-3 text-5xl"></i>
                        <div>
                            <div className="font-semibold text-sm">Abdul Aziz</div>
                            <div className="text-xs text-gray-500">@abdulazizsaidov_</div>
                        </div>
                    </div>
                </a>
                <div className="headcard absolute"></div>
                <div className="absolute-card1 "></div>
                <div className="absolute-card2 "></div>
                <div className="absolute-card3 headshadow"></div>
                <div className="absolute-card4 "></div>
            </div>
        </div>
    );
}

export default Globecard;