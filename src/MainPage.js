import React from "react";

const MainPage = ({handleLogout}) => {
    return(
        <section className="MainPage">
            <nav>
                <h2> Welcome to Main Page</h2>
                <button onClick={handleLogout}>LogOut</button>
            </nav>
        </section>
    )
};

export default MainPage;