import { PropsSVG } from '@/models/components/SVG';

const SVG = ({ children, width, height }: PropsSVG) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width={width}
            height={height}
        >
            {children}
        </svg>
    );
};

export { SVG };
