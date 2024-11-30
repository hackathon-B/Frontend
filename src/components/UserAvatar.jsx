import { Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PropTypes from 'prop-types';

export default function UserAvatar({ user_icon = null }) {
    return user_icon ? (
        <Avatar 
            src={user_icon}
            alt="ユーザーアイコン"
            sx={{ width: 56, height: 56 }}
        />
    ) : (
        <Avatar sx={{ width: 56, height: 56 }}>
            <PersonIcon />
        </Avatar>
    )
}

UserAvatar.propTypes = {
    user_icon: PropTypes.string,
}