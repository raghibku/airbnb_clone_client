import ResponsiveDiv from "./ResponsiveDiv"
import { MdLanguage } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import logo from '../../assets/icons/logo (1).png'
import avatar from '../../assets/icons/avatar.png'
import Image from "next/image"
import Link from "next/link"

const navlinks = [
    {
        id: 1,
        btn_name: "Stays",
        btn_link: "/"
    },
    {
        id: 2,
        btn_name: "Experiences",
        btn_link: "/"
    }
]

const Navbar = () => {
    return (
        <ResponsiveDiv>
            <div className="w-full flex justify-between items-center md:px-16 md:py-4">
                {/* left */}
                <div className="cursor-pointer">
                    <Image
                        src={logo}
                        height={64}
                        width={118}
                        alt="navbar logo"
                    />
                </div>

                {/* middle */}
                <div className="flex justify-center items-center gap-4">
                    {
                        navlinks.map((item) =>
                            <Link className="px-4 py-2 rounded-full hover:bg-btn-hover" key={item.id} href={item.btn_link}>{item.btn_name}</Link>
                        )
                    }

                </div>

                {/* right */}
                <div className="flex justify-center items-center ">
                    <Link className="px-4 py-2 rounded-full hover:bg-btn-hover" href={'/'}>Airbnb Your Home</Link>
                    <Link className="px-3 py-2 rounded-full hover:bg-btn-hover" href={'/'}>
                        <MdLanguage />
                    </Link>
                    {/* <button className="px-4 py-2 rounded-full hover:shadow-custom border border-grayBorder flex justify-center items-center gap-2"> */}
                    <div className="dropdown dropdown-bottom dropdown-end  ">
                        <div tabIndex={0} role="button" className="btn px-4 py-2 rounded-full hover:shadow-custom border border-grayBorder flex justify-center items-center gap-2 h-12 min-h-0 hover:bg-white bg-white">
                            <IoMenu className="" />
                            <Image
                                src={avatar}
                                height={30}
                                width={30}
                                alt="user image"
                            />
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><a>Sign Up</a></li>
                            <li className="pb-2 border-b border-grayBorder"><a>Log in</a></li>
                            <li className="pt-2"><a>Gift Cards</a></li>
                            <li><a>Airbnb Your Home</a></li>
                            <li><a>Host an Experience</a></li>
                            <li><a>Help Center</a></li>
                        </ul>
                    </div>



                </div>
            </div>
        </ResponsiveDiv>
    )
}

export default Navbar