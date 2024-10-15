import { useCallbackMutation } from '@/Redux/Features/Auth/ssoAuthService';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { Button } from '@/Components';
import { setCredentials } from '@/Redux/Features/Auth/authSlice';
import { useAppDispatch } from '@/Redux/hooks';
import { ToastContainer } from 'react-toastify';
import images from '../../assets/index';


interface User {
    email: string;
    name: string;
    status: number | string;
    updated_at: string;
    created_at: string;
    id: number;

}

interface RegistrationResponse {
    message: string;
    user: User;
    access_token: string;
}


const SSOCallback = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null);
    const [sendCode, { isLoading, isSuccess }] = useCallbackMutation();

    const dispatch = useAppDispatch();

    useEffect(() => {
        const code = searchParams.get('code');

        if (code) {
            handleCallback(code);
        } else {
            setError('No authorization code found in URL');
        }
    }, [searchParams]);

    const handleCallback = async (code: string) => {
        try {
            const response = await sendCode({ code }).unwrap() as RegistrationResponse;
            if (isSuccess) {
                console.log('response', response)
                alert('Successs')
            }
            dispatch(setCredentials(response));
            if (response.user.status == 0) {
                // alert('0')

                console.log(0);
                // navigate('/sso/redirect');
                return
                // navigate('/sso/redirect');
            }

            if (response.user.status == 1) {

                // alert('1')
                console.log(1)
                navigate('/admin');
            }
            if (response.user.status == 2) {
                // alert('2')
                console.log(2)
                navigate('/sso/redirect');
            }
        } catch (err) {
            // alert('err')
            console.error('SSO Callback error:', err);
        }
    };



    // if (isLoading) {
    //     return (

    //         <div className="min-h-screen flex items-center justify-center flex-col bg-white w-[100%]">
    //             <ToastContainer />

    //             <img src={images.ngmlSquare} className='w-full h-full' alt="loader" />

    //             {/* <div className="animate-pulse text-white text-xl">

    //                 Processing ....
    //             </div> */}
    //         </div>

    //         // <div className="min-h-screen flex items-center justify-center flex-col logingradient-bg w-[100%]">
    //         //     <ToastContainer />

    //         //     <div className="animate-pulse text-white text-xl">

    //         //         Processing ....
    //         //     </div>
    //         // </div>
    //     )
    // }

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white w-full h-full">
                <ToastContainer />
                <div
                    className="absolute inset-0 bg-contain bg-center bg-no-repeat w-full h-full"
                    style={{ backgroundImage: `url(${images.ngmlBlank})` }}
                >
                    {/* <div className="absolute inset-0 flex items-center justify-center">
                        <div className="animate-pulse text-white text-xl">
                            Processing...
                        </div>
                    </div> */}
                </div>
            </div>
        );
    }

    if (error) {
        return (

            <div className="min-h-screen flex flex-col items-center justify-center logingradient-bg w-[100%]">
                <ToastContainer />

                <div className="text-white text-xl">

                    Completing authentication...
                    <h2>Authentication Error</h2>
                    <p>{error}</p>

                    <Button
                        type="primary"
                        label='Return to Login'
                        action={() => navigate('/sso')}
                        color="#FFFFFF"
                        width="100%"
                        height="48px"
                        fontSize="16px"
                        radius="32px"
                    />
                </div>
            </div>

        );
    }

    return <div>

        <div className="min-h-screen flex flex-col items-center justify-center logingradient-bg w-[100%]">
            <ToastContainer />

            <div className="animate-pulse text-white text-xl">
                Completing authentication...
            </div>
        </div>
    </div>
};

export default SSOCallback;