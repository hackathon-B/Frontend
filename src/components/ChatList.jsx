import { Box, Drawer } from '@mui/material';

function ChatList() {
  return (
    <>
        <Box>
            <a>現在表示されているチャット</a>
        </Box>
        <Box
            sx={{
                    width: '100%',
                    backgroundColor: '#e0e0e0',
                    display: 'flex',
                    flexDirection: 'column',
                    overflowY: 'auto'
            }}
        >
            <a>チャットリスト</a>
            <a>hogehoge</a>
            <a>hogehoge</a>
            <a>hogehoge</a>
            <a>hogehoge</a>
        </Box>
    </>
  );
}

export default ChatList;