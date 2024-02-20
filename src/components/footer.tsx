export function Footer() {
    return(
        <footer className="flex flex-col bg-royal-navy text-white pt-12 text-center w-full border-t-2 dark:border-yellow-500">
            <div className="justify-center space-x-2 items-center w-full pt-12 pb-4">
                <a
                    href="https://github.com/joriman"
                    target="_blank"
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal bg-gray-700 hover:bg-gray-800 text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                </a>
                <a
                    href="https://www.linkedin.com/in/jamoncjordan/"
                    target="_blank"
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal bg-blue-700 hover:bg-blue-800 text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                </a>
                <a
                    href="https://www.instagram.com/jordanistic"
                    target="_blank"
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal bg-pink-600 hover:bg-pink-700 text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M10.825091,2 L13.1738932,2 C14.8491598,2.00379146 15.2338099,2.01854561 16.1226982,2.059103 C17.187141,2.10765278 17.9141174,2.27672349 18.5502266,2.52395815 C19.2078518,2.77948955 19.7655588,3.12144192 20.3215589,3.67740233 C20.8775194,4.23340244 21.2194717,4.79110953 21.4750428,5.44873467 C21.7222377,6.08484389 21.8913085,6.81182019 21.9398582,7.87626307 C21.9869049,8.90737346 21.9992305,9.25998097 22,11.7357029 L22,12.2632942 C21.9992305,14.7389803 21.9869049,15.0915878 21.9398582,16.1226982 C21.8913085,17.187141 21.7222377,17.9141174 21.4750428,18.5502266 C21.2194717,19.2078518 20.8775194,19.7655588 20.3215589,20.3215589 C19.7655588,20.8775194 19.2078518,21.2194717 18.5502266,21.4750428 C17.9141174,21.7222377 17.187141,21.8913085 16.1226982,21.9398582 C15.0915878,21.9869049 14.7389803,21.9992305 12.2632942,22 L11.7357029,22 C9.25998097,21.9992305 8.90737346,21.9869049 7.87626307,21.9398582 C6.81182019,21.8913085 6.08484389,21.7222377 5.44873467,21.4750428 C4.79110953,21.2194717 4.23340244,20.8775194 3.67740233,20.3215589 C3.12144192,19.7655588 2.77948955,19.2078518 2.52395815,18.5502266 C2.27672349,17.9141174 2.10765278,17.187141 2.059103,16.1226982 C2.01854561,15.2338099 2.00379146,14.8491598 2,13.1738932 L2,10.825091 C2.00379146,9.14980144 2.01854561,8.76515134 2.059103,7.87626307 C2.10765278,6.81182019 2.27672349,6.08484389 2.52395815,5.44873467 C2.77948955,4.79110953 3.12144192,4.23340244 3.67740233,3.67740233 C4.23340244,3.12144192 4.79110953,2.77948955 5.44873467,2.52395815 C6.08484389,2.27672349 6.81182019,2.10765278 7.87626307,2.059103 C8.76515134,2.01854561 9.14980144,2.00379146 10.825091,2 L13.1738932,2 L10.825091,2 Z M12.733046,3.80115495 L11.2659442,3.80115495 C9.25857953,3.80324073 8.90746344,3.81583469 7.95839674,3.85913648 C6.98335214,3.90359743 6.45383012,4.06651507 6.10143736,4.20347069 C5.63463704,4.38488726 5.30149746,4.60159471 4.95156594,4.95156594 C4.60159471,5.30149746 4.38488726,5.63463704 4.20347069,6.10143736 C4.06651507,6.45383012 3.90359743,6.98335214 3.85913648,7.95839674 C3.81583469,8.90746344 3.80324073,9.25857953 3.80115495,11.2659442 L3.80115495,12.733046 C3.80324073,14.7403818 3.81583469,15.0914978 3.85913648,16.0405646 C3.90359743,17.0156091 4.06651507,17.5451311 4.20347069,17.8975239 C4.38488726,18.3643242 4.60163441,18.6974638 4.95156594,19.0473953 C5.30149746,19.3973665 5.63463704,19.614074 6.10143736,19.7954906 C6.45383012,19.9324462 6.98335214,20.0953638 7.95839674,20.1398247 C9.0127962,20.1879378 9.32902474,20.1981401 11.9995005,20.1981401 C14.6699365,20.1981401 14.9862047,20.1879378 16.0405646,20.1398247 C17.0156091,20.0953638 17.5451311,19.9324462 17.8975239,19.7954906 C18.3643242,19.614074 18.6974638,19.3973665 19.0473953,19.0473953 C19.3973665,18.6974638 19.614074,18.3643242 19.7954906,17.8975239 C19.9324462,17.5451311 20.0953638,17.0156091 20.1398247,16.0405646 C20.1879378,14.986046 20.1981401,14.6697381 20.1981401,11.9995005 C20.1981401,9.32922322 20.1879378,9.0129153 20.1398247,7.95839674 C20.0953638,6.98335214 19.9324462,6.45383012 19.7954906,6.10143736 C19.614074,5.63463704 19.3973665,5.30149746 19.0473953,4.95156594 C18.6974638,4.60159471 18.3643242,4.38488726 17.8975239,4.20347069 C17.5451311,4.06651507 17.0156091,3.90359743 16.0405646,3.85913648 C15.0914978,3.81583469 14.7403818,3.80324073 12.733046,3.80115495 Z M11.9995,6.99920128 C14.7610764,6.99920128 16.99976,9.23788484 16.99976,11.9995 C16.99976,14.7610764 14.7610764,16.99976 11.9995,16.99976 C9.23788484,16.99976 6.99920128,14.7610764 6.99920128,11.9995 C6.99920128,9.23788484 9.23788484,6.99920128 11.9995,6.99920128 Z M11.9995,8.75368323 C10.2068679,8.75368323 8.75368323,10.2068679 8.75368323,11.9995 C8.75368323,13.7920934 10.2068679,15.245278 11.9995,15.245278 C13.7920934,15.245278 15.245278,13.7920934 15.245278,11.9995 C15.245278,10.2068679 13.7920934,8.75368323 11.9995,8.75368323 Z M17.4164293,5.33244149 C18.1068302,5.33244149 18.6665198,5.89213105 18.6665198,6.58253201 C18.6665198,7.27293296 18.1068302,7.83258117 17.4164293,7.83258117 C16.7260697,7.83258117 16.1663801,7.27293296 16.1663801,6.58253201 C16.1663801,5.89213105 16.7260697,5.33244149 17.4164293,5.33244149 Z"/>                    
                        </svg>
                </a>
            </div>
            <div className=" max-w-[800px] m-auto">
                <p className="text-base p-5">&copy; 2023 Jamon Jordan. All Rights Reserved.</p>
            </div>
        </footer>
    )
    
}
