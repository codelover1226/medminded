import {FC} from 'react';

interface IconAtProps {
    className?: string;
    fill?: string;
}

const IconAt : FC < IconAtProps > = ({
    className,
    fill = "#636262"
}) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg">
            <mask
                id="mask0_2312_1746"
                style={{maskType:"alpha"}}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24">
                <rect width="24" height="24"  fill={fill}/>
            </mask>
            <g mask="url(#mask0_2312_1746)">
                <path
                    d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM10 19V13H5V19H10ZM12 19H19V13H12V19ZM5 11H19V5H5V11Z"
                    fill={fill}/>
            </g>
        </svg>

    );
};

export default IconAt;
