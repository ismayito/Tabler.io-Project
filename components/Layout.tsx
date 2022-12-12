
import Header from "./Header";
import Navbar from "./Navbar";
function Layout({children}:any) {
    return(
        <>
            <Header></Header>
            {/* <Navbar/> */}
            <main>{children}</main>
        </>
    )
}

export default Layout;