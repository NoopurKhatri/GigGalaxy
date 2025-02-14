import React from "react"
import "./Orders.scss"
import { Link } from "react-router-dom";

const Orders = () => {

    const currentUser = {
        id:1,
        username:"John Doe",
        isSeller:true
    };

    return (
        <div className="orders">
            <div className="container">
                <div className="title">
                    <h1>Orders</h1>
                </div>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
                        <th>Contact</th>
                    </tr>
                    <tr>
                        <td><img className="img" src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        </td>
                        <td>Gig1</td>
                        <td>88</td>
                        <td>John Doe</td>
                        <td><img className="delete" src="/img/message.png" alt="" /></td>
                    </tr>
                    <tr>
                        <td>
                            <img
                                className="img"
                                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
                        </td>
                        <td>Ai generated concept art</td>
                        <td>120.<sup>99</sup></td>
                        <td>John Doe</td>
                        <td>
                            <img className="delete" src="./img/message.png" alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img
                                className="img"
                                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
                        </td>
                        <td>High quality digital character</td>
                        <td>79.<sup>99</sup></td>
                        <td>John Doe</td>
                        <td>
                            <img className="delete" src="./img/message.png" alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img
                                className="img"
                                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
                        </td>
                        <td>Illustration hyper realistic painting</td>
                        <td>119.<sup>99</sup></td>
                        <td>John Doe</td>
                        <td>
                            <img className="delete" src="./img/message.png" alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img
                                className="img"
                                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
                        </td>
                        <td>Original ai generated digital art</td>
                        <td>59.<sup>99</sup></td>
                        <td>John Doe</td>
                        <td>
                            <img className="delete" src="./img/message.png" alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img
                                className="img"
                                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
                        </td>
                        <td>Text based ai generated art</td>
                        <td>110.<sup>99</sup></td>
                        <td>John Doe</td>
                        <td>
                            <img className="delete" src="./img/message.png" alt="" />
                        </td>
                    </tr>


                </table>
            </div>
        </div>
    );
}

export default Orders;