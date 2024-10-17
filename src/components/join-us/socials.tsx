import Link from 'next/link';
import { ICONS } from '@/data/icons'

const Socials = () => {
    return (
        <div className="p-6 rounded-lg text-center border-isa-dark-red border-2 bg-gray-300">
            <h2 className="text-xl font-semibold mb-4 text-isa-dark-yellow ">Follow our socials</h2>
            <div className="flex justify-center space-x-6">
                {ICONS.map((item, index) => (
                <Link href={item.link} key={index} passHref>
                    <div className="cursor-pointer text-gray-800 w-8 h-8">
                        <item.icon className="w-8 h-8" />
                    </div>
                </Link>
                ))}
            </div>
        </div>
      );
};
  

  export default Socials;