import Link from "next/link";
import Image from "next/image";
import FeedbackForm from "../footer/feedbackform";

const Footer = () => {
    return (
            <div className="h-8 p-4 pt-0 mt-auto text-center dark:text-white-dark ltr:sm:text-left rtl:sm:text-right">
                <ul className="flex justify-center">
                    <li className="mx-[30px]"><Link href={'/resources'}>Resources</Link></li>
                    <li className="mx-[30px]"><Link href={'/termsofservice'}>Terms Of Service</Link></li>
                    <li className="mx-[30px]"><Link href={'/privacypolicy'}>Privacy Policy</Link></li>
                    <li className="mx-[30px]"><Link href={'/contactus'}>Contact Us</Link></li>
                </ul>
                <div className="absolute right-[50px] top-[-20px]">
                    <Link href={""}><Image src={"/assets/images/stack_star.svg"} alt="ok" width={50} height={50}/></Link>
                </div>
                <FeedbackForm/>
            </div>
    );
};

export default Footer;
