import React from 'react';

/**
 * AuthContainer is a styled container component designed for authentication-related content.
 * It includes responsive design styles and a round logo image.
 *
 * @param {object} props - React props for the AuthContainer component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the container.
 * @param {string} [props.backgroundColor] - Background color of the container. Default is 'rgba(255, 255, 255, 0.5)'.
 * @param {string} [props.width] - Width of the container. Default is '400px'.
 * @param {string} [props.height] - Height of the container. Default is 'auto'.
 * @returns {React.FC} Returns the AuthContainer component.
 */

interface AuthContainerProps {
    children: React.ReactNode;
    backgroundColor?: string;
    width?: string;
    height?: string;
}

const AuthContainer: React.FC<AuthContainerProps> = ({
    children,
    backgroundColor = 'rgba(255, 255, 255, 0.5)',
    width = '400px',
    height = 'auto',
}) => {
    return (
        <div
            className="flex justify-center items-center min-h-screen"
            style={{ backgroundColor }}
        >
            <div
                className="max-w-560 w-full mx-auto p-20 shadow-md rounded-[20px] flex flex-col items-center relative"
                style={{ width, height }}
            >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img
                        src="assets/nnpclogo.png"
                        alt="NGML Logo"
                        className="w-20 h-20 rounded-full"
                    />
                </div>
                {children}
            </div>
        </div>
    );
};

export default AuthContainer;