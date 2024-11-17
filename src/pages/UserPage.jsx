import { useState, useEffect } from 'react';
import { callApi } from '../common/api';
import { BASE_URL, API_URLS } from '../common/constants';
import { Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

function UserPage() {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        const fetchUser = async () => {
            const response = await callApi('GET', `${BASE_URL}${API_URLS.USER}`)
            setUser(response.user);
        }
        fetchUser();
    }, []);

    return (
        <div className="w-full min-h-screen p-4">
            <div className="flex justify-end">
                {user?.icon_url ? (
                    <Avatar 
                        src={user.icon_url}
                        alt="ユーザーアイコン"
                        sx={{ width: 56, height: 56 }}
                    />
                ) : (
                    <Avatar sx={{ width: 56, height: 56 }}>
                        <PersonIcon />
                    </Avatar>
                )}
            </div>
        </div>
    );
};

export default UserPage;