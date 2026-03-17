import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Download Now
                            <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download now
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="data:image/png;base64,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" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://www.pexels.com/photo/spring-picnic-in-sunlit-park-setting-32128848/" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>
        </div>
    );
}