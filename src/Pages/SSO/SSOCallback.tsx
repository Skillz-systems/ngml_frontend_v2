import { useCallbackMutation } from '@/Redux/Features/Auth/ssoAuthService';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { setCredentials } from '@/Redux/Features/Auth/authSlice';
import { useAppDispatch } from '@/Redux/hooks';
import { ToastContainer } from 'react-toastify';


interface User {
    email: string;
    name: string;
    status: string;
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
            }
            dispatch(setCredentials(response));
            if (response.user.status === '0') {

                // dispatch(setCredentials(data));
                console.log(0);
                navigate('/sso/redirect');
                // return
                // navigate('/sso/redirect');
            }

            if (response.user.status === '1') {
                console.log(1)
                navigate('/admin');
            }
            if (response.user.status === '2') {
                console.log(2)
                navigate('/sso/redirect');
            }
        } catch (err) {
            console.error('SSO Callback error:', err);
        }
    };



    if (isLoading) {
        return <div>Processing login...</div>;
    }

    if (error) {
        return (
            <div>
                <h2>Authentication Error</h2>
                <p>{error}</p>
                <button onClick={() => navigate('/sso')}>Return to Login</button>
            </div>
        );
    }

    return <div>

        <div className="min-h-screen flex flex-col logingradient-bg w-[100%]">
            <ToastContainer />
            Completing authentication...
        </div>
    </div>
};

export default SSOCallback;