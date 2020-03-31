import React from "react";
import Footer from "../components/footer.js";
import NavHeader from "../components/navheader"

export default ({ children }) => (    
    <div>
        <NavHeader />
        {children}
        <Footer />
    </div>
)


