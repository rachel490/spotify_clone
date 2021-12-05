import { signIn, useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import spotifyApi from '../lib/spotify';



function useSpotify() {

    const { data:session, status } = useSession();

    useEffect(() => {
        if (session) {
            // If refresh access token attempt fails, direct user to login page
            if (session.error === 'RefreshAccessTokenError') {
                signIn();
            }

            spotifyApi.setAccessToken(session.user.accessToken);
        }
    }, [session])
    return spotifyApi
}

export default useSpotify

