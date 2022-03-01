import '../App.css';
import { PageHeader } from "antd";
import { Content } from 'antd/lib/layout/layout.js';
import TempLogo from "../Assests/WhatstheTemp.png";


function Heading() {
    return (
        <PageHeader>
            <Content >
                <div style={{ backgroundColor: "#8c52ff" }}>
                    <img src={TempLogo} alt="" className="img-header" />
                </div>
            </Content>
        </PageHeader>
    )
}

export default Heading;