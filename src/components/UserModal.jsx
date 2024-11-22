import { Box, Modal, Typography } from '@mui/material';
import UserAvatar from './UserAvatar';
import PropTypes from 'prop-types';

export default function UserModal({ open, onClose, user}) {
    return (
        <Modal 
            open={open} 
            onClose={onClose}
        >
            <Box sx={{
                position: 'absolute',
                top: '0px',
                right: '0px',
                width: 300,
                bgcolor: 'black',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <UserAvatar user_icon={user.user_icon} />
                <Typography variant="h6" color="white">アカウント情報</Typography>
                <Typography variant="body1" color="white">ユーザー名: {user.name}</Typography>
                <Typography variant="body1" color="white">メールアドレス: {user.email}</Typography>
                <Typography variant="body1" color="white">デフォルトモデル: {user.default_model_id}</Typography>
            </Box>
        </Modal>
    )
}

UserModal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    user: PropTypes.shape({
        user_icon: PropTypes.string,
        name: PropTypes.string,
        email: PropTypes.string,
        default_model_id: PropTypes.number,
    }),
}