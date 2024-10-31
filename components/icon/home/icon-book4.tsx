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
            className={className}
            fill={fill}
            xmlns="http://www.w3.org/2000/svg">
            <mask
                id="mask0_2312_1095"
                style={{maskType:"alpha"}}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24">
                <rect width="24" height="24" fill={fill}/>
            </mask>
            <g mask="url(#mask0_2312_1095)">
                <path
                    d="M5 16.598C5.173 16.516 5.34983 16.4471 5.5305 16.3913C5.71117 16.3356 5.90617 16.3077 6.1155 16.3077H7.19225V4H6.1155C5.79933 4 5.53442 4.10867 5.32075 4.326C5.10692 4.54333 5 4.8065 5 5.1155V16.598ZM6.1155 21.5C5.389 21.5 4.77142 21.2476 4.26275 20.7428C3.75425 20.2379 3.5 19.6249 3.5 18.9038V5.1155C3.5 4.389 3.75425 3.77142 4.26275 3.26275C4.77142 2.75425 5.389 2.5 6.1155 2.5H13.25V4H8.69225V16.3077H15.3077V12.75H16.8077V17.8078H6.1155C5.8065 17.8078 5.54333 17.9126 5.326 18.1223C5.10867 18.3321 5 18.5921 5 18.9023C5 19.2122 5.10867 19.4727 5.326 19.6838C5.54333 19.8946 5.8065 20 6.1155 20H19V11.75H20.5V21.5H6.1155ZM17.5 11.75C17.5 10.2863 18.0091 9.04542 19.0273 8.02725C20.0454 7.00908 21.2863 6.5 22.75 6.5C21.2863 6.5 20.0454 5.99092 19.0273 4.97275C18.0091 3.95458 17.5 2.71367 17.5 1.25C17.5 2.71367 16.9909 3.95458 15.9727 4.97275C14.9546 5.99092 13.7137 6.5 12.25 6.5C13.7137 6.5 14.9546 7.00908 15.9727 8.02725C16.9909 9.04542 17.5 10.2863 17.5 11.75Z"
                    fill={fill}/>
            </g>
        </svg>

    );
};

export default IconAt;