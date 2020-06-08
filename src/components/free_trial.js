import React from "react";
import "./free_trial.css"   

export default () => {
    return (
        <div className="free-trial">
            <span className="checkmarks">
                <ul className="checkmarks">
                    <li className="checkmarks-item">
                        <span className="checkmarks-icon"></span>
                        <span>30天全功能免费试用</span>
                    </li>
                    <li className="checkmarks-item">
                        <span className="checkmarks-icon"></span>
                        <span className="">5分钟安装</span>
                    </li>
                    <li className="checkmarks-item">
                        <span className="checkmarks-icon"></span>
                        <span className="">满意再付款</span>
                    </li>
                </ul>
            </span>
        </div>

    )
}
