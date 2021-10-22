import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isSidebarShown, setIsSidebarShown] = useState(false);
    const [isModalShown, setIsModalShown] = useState(false);

    const showSidebar = () => {
        setIsSidebarShown(true);
    };

    const hideSidebar = () => {
        setIsSidebarShown(false);
    };

    const showModal = () => {
        setIsModalShown(true);
    };

    const hideModal = () => {
        setIsModalShown(false);
    };

    return (
        <AppContext.Provider
            value={{
                isSidebarShown,
                isModalShown,
                showSidebar,
                hideSidebar,
                showModal,
                hideModal,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

//* Custom Hook
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
