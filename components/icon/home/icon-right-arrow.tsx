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
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6.52022 7.93689L6.87377 7.58333L6.52022 7.22978L0.64522 1.35478C0.545609 1.25517 0.5 1.14668 0.5 1C0.5 0.853317 0.545609 0.744832 0.64522 0.64522C0.744832 0.545609 0.853317 0.5 1 0.5C1.14668 0.5 1.25517 0.545609 1.35478 0.64522L7.58395 6.87439C7.69306 6.9835 7.76262 7.09231 7.80416 7.20032C7.85146 7.3233 7.875 7.44993 7.875 7.58333C7.875 7.71673 7.85146 7.84337 7.80416 7.96634C7.76262 8.07436 7.69306 8.18317 7.58395 8.29228L1.35478 14.5214L1.70833 14.875L1.35478 14.5214C1.25517 14.6211 1.14668 14.6667 1 14.6667C0.853317 14.6667 0.744832 14.6211 0.64522 14.5214C0.545608 14.4218 0.5 14.3133 0.5 14.1667C0.5 14.02 0.545608 13.9115 0.64522 13.8119L6.52022 7.93689Z"
                fill="#8797DF"
                stroke="#8B8A91"/>
        </svg>

    );
};

export default IconAt;