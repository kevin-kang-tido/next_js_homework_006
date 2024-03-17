
import NavbarComponent from "./navbar/NavbarComponent";
import FooterComponent from "./footer/FooterComponent";
export default function Layout({children}) {
    return (
        <>
        <NavbarComponent/>
        <main> {children}</main>
        <FooterComponent/>
        </>
    )
  }