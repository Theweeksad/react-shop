import React, { Children } from "react";

const Layout = ({Children}) => {
    return(
        <div className="Layout">
            {Children}
        </div>
    );
}

export { Layout };
