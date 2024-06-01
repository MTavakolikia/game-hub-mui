import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';

const PlatformIcon = ({ platforms = [] }) => {
    const iconMap = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe,
    };

    return (
        <ul className=" flex gap-2">
            {platforms.map((platform) => {
                const IconComponent = iconMap[platform.slug];
                return (
                    <li key={platform.id}>
                        <IconComponent color="gray" fontSize="" />
                    </li>
                );
            })}
        </ul>
    );
};

export default PlatformIcon;
