import Link from "next/link"
import ResponsiveDiv from "./ResponsiveDiv"
import { MdLanguage } from "react-icons/md";
import { PiCurrencyDollar } from "react-icons/pi";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import footerSm from "../../assets/icons/footerSm.jpg"
import Image from "next/image";
import styles from '../custom_styles/DotList.module.css';

const footerItems = [
    {
        id: 1,
        name: 'Support',
        subItems: [
            { sub_name: 'Help Center', sub_link: '/' },
            { sub_name: 'AirCover', sub_link: '/' },
            { sub_name: 'Anti Discrimination', sub_link: '/' },
            { sub_name: 'Disability Support', sub_link: '/' },
            { sub_name: 'Cancellation Options', sub_link: '/' },
            { sub_name: 'Report Neighbourhood Concern', sub_link: '/' }
        ]
    },
    {
        id: 2,
        name: 'Hosting',
        subItems: [
            { sub_name: 'Airbnb Your Home', sub_link: '/' },
            { sub_name: 'AirCover for Hosts', sub_link: '/' },
            { sub_name: 'Hosting Resources', sub_link: '/' },
            { sub_name: 'Community Forum', sub_link: '/' },
            { sub_name: 'Hosting Responsibly', sub_link: '/' },
            { sub_name: 'Airbnb-Friendly Apartments', sub_link: '/' },
            { sub_name: 'Join a Free Hosting Class', sub_link: '/' }
        ]
    },
    {
        id: 3,
        name: 'Airbnb',
        subItems: [
            { sub_name: 'Newsroom', sub_link: '/' },
            { sub_name: 'New Features', sub_link: '/' },
            { sub_name: 'Careers', sub_link: '/' },
            { sub_name: 'Investors', sub_link: '/' },
            { sub_name: 'Gift Cards', sub_link: '/' },
            { sub_name: 'Airbnb.org Emergency Stays', sub_link: '/' }
        ]
    }

]
const lowerItmes = [
    {
        name: 'Terms',
        sub_link: '#'
    },
    {
        name: 'Sitemap',
        sub_link: '#'
    },
    {
        name: 'Privacy',
        sub_link: '#'
    }

]

const Footer = () => {
    return (
        <ResponsiveDiv>
            <div className="w-full border-t border-grayBorder text-sm font-medium">
                {/* upper */}
                <div className="grid grid-cols-1 md:grid-cols-3 px-8 py-16 w-full ">
                    {
                        footerItems.map((item) => {
                            return (
                                <div key={item.id} className="flex flex-col justify-start items-start">
                                    <h1 className="font-semibold mb-2">{item.name}</h1>
                                    <ul className="flex flex-col justify-start items-start  gap-2">
                                        {
                                            item.subItems.map((subItem, index) => <li className="hover:underline" key={index}><Link href={subItem.sub_link}>{subItem.sub_name}</Link></li>)
                                        }
                                    </ul>

                                </div>
                            )
                        })
                    }

                </div>
                {/* lower */}
                <div className="w-full flex justify-between items-center px-4 py-6 border-t border-grayBorder">
                    {/* lower left */}
                    <div className="flex justify-start items-center gap-2">
                        <p>© 2024 Airbnb, Inc.</p>
                        <ul className={` ${styles.customList} flex justify-start items-center`}>
                            {
                                lowerItmes.map((item, index) => <><li className="hover:underline ml-3" key={index}><Link href={item.sub_link}>{item.name}</Link></li></>)
                            }
                        </ul>
                        <ul className={styles.customList}>
                            <li className="hover:underline" ><Link className="flex justify-center items-center gap-1" href={'#'}>Your Privacy Choices<Image src={footerSm} height={10} width={30} alt="smic" /></Link></li>
                        </ul>
                    </div>
                    {/* lower right */}
                    <div className="flex justify-end items-center gap-4">
                        <div className="flex justify-center items-center gap-2 border-none cursor-pointer">
                            <MdLanguage />
                            <p className="hover:underline">English</p>
                        </div>
                        <div className="flex justify-center items-center gap-1 border-none cursor-pointer">
                            <PiCurrencyDollar />
                            <p className="hover:underline">USD</p>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <IoLogoFacebook className="cursor-pointer size-7" />
                            <FaTwitterSquare className="cursor-pointer size-6" />
                            <FaInstagramSquare className="cursor-pointer size-7" />
                        </div>

                    </div>

                </div>

            </div>
        </ResponsiveDiv>

    )
}

export default Footer