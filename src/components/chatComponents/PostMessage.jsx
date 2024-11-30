import { useState } from 'react'
// 共通
import { callApi } from '../../common/api';
import { API_URLS } from '../../common/constants';
// mui
import { IconButton, Tooltip, TextField, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { theme } from '../../common/theme';

const PostMessage = ({ chatId, messageCallback }) => {

    const [message, setMessage] = useState('');
    const [aiModelId, setAiModelId] = useState(1);
    // AIモデルのオプション
    const aiModels = [
        { id: 1, name: 'ChatGPT-4o' },
        { id: 2, name: 'claude-3.5-sonnet' },
        // 必要に応じて追加
    ];

      const handleSendMessage = () => {
        if (!message.trim()) return;

        const specificChatId = chatId || 0;
        const endpoint = `${API_URLS.POST_MESSAGE(specificChatId)}`;
        const payload = { 
            message_text: message, 
            ai_model_id: parseInt(aiModelId, 10)
        };
  
        callApi('POST', endpoint, payload)
        .then(response => {
          console.log('メッセージ送信成功:', response);
          messageCallback(response);
          setMessage('');
        })
        .catch(error => {
          console.error('メッセージ送信エラー:', error);
        });
      };
  
      const handleKeyPress = (e) => {
          // Windows の場合は ctrlKey、Mac の場合は metaKey (Command)
          if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
              e.preventDefault();  // デフォルトの改行を防ぐ
              handleSendMessage();
          }
      };
  
      const handleModelChange = (e) => {
          setAiModelId(e.target.value);
      };
  
  return (
    <Box 
        sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            height: 'auto',
            width: '100%',
            px: 8,
            py: 1,
            bgcolor: theme.palette.background.default,
            gap: { xs: 2, md: 2 }
        }}
    >
        <FormControl 
            variant="outlined"
            size="small"
            sx={{ 
                minWidth: '120px',
                '& .MuiInputBase-root': {  // Selectコンポーネントのサイズを小さく
                    height: '15px',
                },
                '& .MuiOutlinedInput-input': {  // 入力テキストのサイズを小さく
                    padding: '7px 2px',
                    fontSize: '10px',
                }
            }}
        >
            <InputLabel 
                id="ai-model-label" 
                sx={{ 
                    fontSize: '10px',
                    color: theme.palette.text.primary
                }}
            >
                AI model
            </InputLabel>
            <Select
                labelId="ai-model-label"
                id="ai-model-select"
                value={aiModelId}
                onChange={handleModelChange}
                label="AI model"
                sx={{
                    color: theme.palette.text.primary
                }}
                MenuProps={{
                    PaperProps: {
                        sx: {
                            bgcolor: theme.palette.background.default
                        }
                    }
                }}
            >
                {aiModels.map((model) => (
                    <MenuItem 
                        key={model.id} 
                        value={model.id}
                        sx={{
                            fontSize: '10px',
                            bgcolor: theme.palette.background.default,
                            color: theme.palette.text.primary
                        }}
                    >
                        {model.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>

        <TextField
            placeholder="メッセージを入力してください"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            variant="outlined"
            fullWidth
            multiline
            maxRows={2}
            sx={{
                width: '100%',
                borderRadius: '0.375rem',
                border: '1px solid',
                borderColor: 'grey.500',
                textAlign: 'left',
                verticalAlign: 'top',
                color: theme.palette.text.primary,
                overflow: 'auto',
                flex: 1,
                '& .MuiInputBase-input': {
                    textAlign: 'left',
                    verticalAlign: 'top',
                    padding: '10px',
                }
            }}
            InputLabelProps={{
                sx: {
                    color:theme.palette.text.primary
                }
            }}
        />

        <Tooltip title="送信 (Ctrl + Enter)">
            <IconButton 
                onClick={handleSendMessage}
                aria-label="送信"
                sx={{ 
                    backgroundColor: 'primary.main',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: 'primary.dark',
                    },
                    marginLeft: 2,
                    width: 36,
                    height: 36,
                }}
            >
                <SendIcon />
            </IconButton>
        </Tooltip>
    </Box>
  )
}

export default PostMessage;