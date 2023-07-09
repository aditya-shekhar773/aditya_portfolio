import React from 'react'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white w-full">
                <div className="container mx-auto px-4 sm:px-6 lg:px-10 lg:py-4">
                    <div className="flex items-center justify-between">
                        <a className="flex items-center" href="/">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" className="h-6 w-6">
                                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
                            </svg>
                            <p className="text-lg font-semibold ml-2 font-sarif mt-1">&lt;Adi/&gt;</p>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarContent">
                         {/* Add your menu items here  */}
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header