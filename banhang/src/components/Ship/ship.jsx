import "./ship.css"
import PaidIcon from '@mui/icons-material/Paid';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
export default function Ship() {
    return (
        <div className="container-ship">
            <div className="buys">
                <div className="money">
            {/* <i className="fa-solid fa-sack-dollar"></i> */}
            <i><PaidIcon/></i>

                </div>
                <div className="title">
                <span className="">Mua nhiều giảm nhiều</span>
                </div>
                <div className="decription">
                <span className="decription-money">Giảm tới 50%</span>

                </div>

            </div>

            <div className="freeship">
            <div className="money">
            {/* <i classname="fa-solid fa-truck"></i> */}

            <LocalShippingIcon/>

                </div>
                <div className="title">
                <span className="">Miễn phí vận chuyển</span>
                </div>
                <div className="decription">
                <span className="decription-money">Phạm vi trong khoảng 5km</span>

                </div>
            </div>

            <div className="support">
            <div className="money">
                    <SupportAgentIcon/>
                </div>
                <div className="title">
                <span className="">Sẵn sàng hỗ trợ</span>
                </div>
                <div className="decription">
                <span className="decription-money">Chỉ cần liên hệ với chúng tôi</span>

                </div>
            </div>
        </div>
    )
}