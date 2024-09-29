import Link from "next/link"
export default function Header(){
    return(
        <div className="header">
            <ul className="header-buttons">
                <li className="button"><Link href= {"/"}>Home</Link></li>
                <li className="button"><Link href={"/about-us"}>About Us</Link></li>
                <li className="button"><Link href={"/contact-us"}>Contact Us</Link></li>
                <li className="button"><Link href={"/jobs"}>Jobs</Link></li>
            </ul>
        </div>
    )
}