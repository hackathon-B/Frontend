import { useState, useEffect } from 'react';
import { callApi } from '../common/api';
import { BASE_URL, API_URLS } from '../common/constants';
import UserAvatar from '../components/UserAvatar';
import UserModal from '../components/UserModal';


function UserPage() {
    const [user, setUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
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
                <div onClick={() => setIsModalOpen(true)} style={{ cursor: 'pointer' }}>
                    <UserAvatar user_icon={user?.user_icon} />
                </div>
            </div>
            <UserModal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                user={user || { user_icon: null }}
            />
        </div>
    );
};

export default UserPage;