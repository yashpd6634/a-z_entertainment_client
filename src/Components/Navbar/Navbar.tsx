import { ArrowDropDown, Notifications, Search } from "@mui/icons-material"
import clasess from "./Navbar.module.css"
import { useState } from "react"

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    window.onscroll = () => {
        setIsScrolled(window.scrollY === 0 ? false : true);
        return () => (window.onscroll = null);
    }
    const navbar: string = `${clasess.navbar} ${isScrolled ? clasess.scrolled : ""}`;

  return (
    <div className={navbar}>
        <div className={clasess.container}>
            <div className={clasess.left}>
                <img src="https://scontent.fbho4-1.fna.fbcdn.net/v/t39.30808-6/300113770_172427958655823_271369692906077129_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Gz_ZnRjOBYgAX9uIhxq&_nc_ht=scontent.fbho4-1.fna&oh=00_AfBCDxZ_P7WJ4T3efl9HgdlGL437D5VLTm9n0XPKfWRCqQ&oe=65A91372" alt="" />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className={clasess.right}>
                <Search className={clasess.icon} />
                <span>KID</span>
                <Notifications className={clasess.icon} />
                <img src="https://scontent.fbho4-3.fna.fbcdn.net/v/t39.30808-6/324882457_722470442750122_721784158283606628_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=DG5RKFC_Q-0AX_L6kqn&_nc_ht=scontent.fbho4-3.fna&oh=00_AfCUw2xtIecfIj_y9lfCrfqal3MI_JG2vzxpGcNQYU5Z7Q&oe=65A779C5"/>
                <div className={clasess.profile}>
                    <ArrowDropDown className={clasess.icon} />
                    <div className={clasess.options}>
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar