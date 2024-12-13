import React from 'react'
import { Link } from 'react-router-dom';
function Footer
() {
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                  
                    <div className="mb-6 md:mb-0">

                        <Link to="/" className="flex items-center">
                            <img
                                src="data:image/jpeg;base64,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"
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </Link>

                    </div>



                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>



                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/Shravani-std"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline">
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>




                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        
                    </div>
                </div>


                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2023
                        <a href="https://hiteshchoudhary.com/" className="hover:underline">
                            hiteshchoudhary
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link to="#" className="text-gray-500 hover:text-gray-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 21 16"
                            >
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 17"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Dribbble account</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer


