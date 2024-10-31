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
            width="40"
            height="40"
            viewBox="0 0 40 40"
            className={className}
            fill={fill}
            xmlns="http://www.w3.org/2000/svg">
            <mask
                id="mask0_2312_956"
                style={{maskType:"alpha"}}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="40"
                height="40">
                <rect width="40" height="40" fill={fill}/>
            </mask>
            <g mask="url(#mask0_2312_956)">
                <path
                    d="M19.9999 22.3749C18.8055 22.3749 17.8055 21.9455 16.9999 21.0866C16.1944 20.228 15.7916 19.1852 15.7916 17.9583V7.49992C15.7916 6.34242 16.2005 5.35867 17.0183 4.54867C17.836 3.73839 18.8291 3.33325 19.9974 3.33325C21.1658 3.33325 22.1596 3.73839 22.9791 4.54867C23.7985 5.35867 24.2083 6.34242 24.2083 7.49992V17.9583C24.2083 19.1852 23.8055 20.228 22.9999 21.0866C22.1944 21.9455 21.1944 22.3749 19.9999 22.3749ZM18.7499 34.9999V29.3333C15.8055 29.0277 13.3333 27.7916 11.3333 25.6249C9.33325 23.4583 8.33325 20.9027 8.33325 17.9583H10.8333C10.8333 20.486 11.7262 22.611 13.512 24.3333C15.2978 26.0555 17.4576 26.9166 19.9912 26.9166C22.5248 26.9166 24.6874 26.0555 26.4791 24.3333C28.2708 22.611 29.1666 20.486 29.1666 17.9583H31.6666C31.6666 20.9027 30.6666 23.4583 28.6666 25.6249C26.6666 27.7916 24.1944 29.0277 21.2499 29.3333V34.9999H18.7499ZM19.9999 19.8749C20.4999 19.8749 20.9096 19.6874 21.2291 19.3124C21.5485 18.9374 21.7083 18.486 21.7083 17.9583V7.49992C21.7083 7.0277 21.5445 6.63186 21.217 6.31242C20.8895 5.99297 20.4838 5.83325 19.9999 5.83325C19.516 5.83325 19.1103 5.99297 18.7828 6.31242C18.4553 6.63186 18.2916 7.0277 18.2916 7.49992V17.9583C18.2916 18.486 18.4513 18.9374 18.7708 19.3124C19.0902 19.6874 19.4999 19.8749 19.9999 19.8749Z"
                    fill={fill}/>
            </g>
        </svg>

    );
};

export default IconAt;
