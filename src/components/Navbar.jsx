const Navbar = () => {

    return (
        <>
        <div className="navbar flex pt-4 px-10 justify-between">
            <img className="cursor-pointer" src="./images/logo.png" alt="logo" />
            <div className="navlinks flex gap-10 items-end font-semibold cursor-pointer">
                <ul className="navlink">Home</ul>
                <ul className="navlink">About</ul>
                <ul className="navlink">Contact</ul>
            </div>
        </div>
        </>
    )
}
export default Navbar