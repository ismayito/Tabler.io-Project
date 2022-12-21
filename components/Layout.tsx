
import Header from "./Header";
import Navbar from "./Navbar";
function Layout({children}:any) {
    return(
        <>
            <main className="bg-[#f1f5f9]">{children}
            </main>
            
        </>
    )
}

export default Layout;