import { GoHomeFill } from 'react-icons/go';
import { BsCameraVideo } from 'react-icons/bs';
import { MdSubscriptions } from 'react-icons/md';
import { RiVideoAddFill } from 'react-icons/ri';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import Link from 'next/link';

const Sidebar = () => {
    return (<>

        <div className="sticky left-0 top-0 z-20 flex h-screen w-fit flex-col  pt-24 gap-4 items-center  max-md:hidden bg-white ">
            <div className="flex flex-col items-center justify-center">
            <Link href={`${process.env.PRODUCTION_URL}`}><GoHomeFill className="text-2xl text-red-700" /></Link>
                <span className="text-sm text-red-700">Home</span>
            </div>
            <div className="flex flex-col items-center justify-center">
                <BsCameraVideo className="text-2xl text-black" />
                <span className="text-sm text-black hover:font-bold">Shorts</span>
            </div>
            <div className="flex flex-col items-center justify-center">
                <MdSubscriptions className="text-2xl text-black" />
                <span className="text-sm text-black hover:font-bold">Subscriptions</span>
            </div>
            <div className="flex flex-col items-center justify-center">
                <RiVideoAddFill className="text-2xl text-black" />
                <span className="text-sm text-black hover:font-bold">Library</span>
            </div>
        </div>
        <div className="fixed rounded-t-3xl w-full py-3 shadow-xl  md:hidden bg-white lg:hidden xl:hidden flex items-center bottom-0  z-30 justify-around">
        <Link href={`${process.env.PRODUCTION_URL}`}><GoHomeFill className="text-2xl text-red-700" /></Link>
            <BsCameraVideo className="text-2xl text-black" />
            <AiOutlinePlusCircle className="text-3xl text-black"/>
            <MdSubscriptions className="text-2xl text-black" />
            <RiVideoAddFill className="text-2xl text-black" />
        </div>

    </>
    )
}

export default Sidebar