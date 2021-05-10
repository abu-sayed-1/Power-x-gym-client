import React from 'react';
import './MembershipCreated.css';
// import Membership from "../../../images/ImageAndIcon/completed.png"

const MembershipCreated = () => {
    return (
        <section className="memberShip_created">
            <div className="member_content 
                        d-flex align-items-center 
                        justify-content-center"
            >
                <div>
                    <h3 className="pb-2">Membership Created Successfully.</h3>
                    <a className="d-flex justify-content-center" href="/">Go to the home page</a>
                </div>
            </div>
        </section>
    );
};

export default MembershipCreated;