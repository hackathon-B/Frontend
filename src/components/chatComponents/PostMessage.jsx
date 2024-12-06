import { useState } from 'react'
// 共通
import { callApi } from '../../common/api';
import { API_URLS } from '../../common/constants';
// mui
import { IconButton, Tooltip, TextField, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { theme } from '../../common/theme';

const PostMessage = ({ chatId, msgCallback }) => {

    const [msg, setMsg] = useState('');
    const [aiModelId, setAiModelId] = useState(1);
    // AIモデルのオプション
    const aiModels = [
        { id: 1, name: 'ChatGPT-4o' },
        { id: 2, name: 'claude-3.5-sonnet' },
        // 必要に応じて追加
    ];
  
    const handleKeyPress = (event) => {
        // Windows の場合は ctrlKey、Mac の場合は metaKey (Command)
        if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
            event.preventDefault();  // デフォルトの改行を防ぐ
            handleSendMessage();
        }
    };
    
    const handleSendMessage = () => {
            if (!msg.trim()) return;

        const endpoint = chatId 
            ? API_URLS.POST_MESSAGE(chatId)  // 既存のチャット
            : API_URLS.POST_MESSAGE(0);      // 新規チャット

        const payload = { 
            message_text: msg, 
            ai_model_id: parseInt(aiModelId, 10)
        };

        callApi('POST', endpoint, payload)
            .then(response => {
                console.log('メッセージ送信成功:', response);
                msgCallback(response);
                // メッセージを空にする nullを使用しないのは、メッセージが空の場合にエラーが発生するため
                setMsg('');
            })
            .catch(error => {
                console.error('メッセージ送信エラー:', error);
            });
      };

  
    const handleModelChange = (event) => {
        setAiModelId(event.target.value);
    };
  
    return (
        <Box 
            sx={{ 
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'flex-start',
                height: 'auto',
                width: '100%',
                px: 8,
                py: 1,
                backgroundColor: 'secondary-light',
                dark: {
                backgroundColor: 'secondary-dark',
            },
            gap: { xs: 2, md: 2 }
        }}
    >
        {/* プルダウン AIモデル選択 */}
        <FormControl 
            variant="outlined"
            size="small"
            sx={{ 
                minWidth: '80px',
                '& .MuiInputBase-root': {  // Selectコンポーネントのサイズを小さく
                    height: '15px',
                },
                '& .MuiOutlinedInput-input': {  // 入力テキストのサイズを小さく
                    padding: '2px 2px',
                    fontSize: '10px',
                }
            }}
        >
            <InputLabel 
                id="ai-model-label" 
                sx={{ 
                    fontSize: '10px',
                    transform: 'translate(20px, -6px) scale(0.75)',  // ラベルの位置を調整
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
                    '& .MuiOutlinedInput-input': {  // 入力部分の余白を調整
                        padding: '6px 2px',
                        fontSize: '10px',
                    },

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
            value={msg}
            onChange={(event) => setMsg(event.target.value)}
            onKeyDown={handleKeyPress}
            variant="outlined"
            fullWidth
            multiline
            maxRows={4}
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
                    padding: '15px',
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
                    color: 'white',
                    backgroundColor: 'gray',
                    '&:hover': {
                        backgroundColor: 'gray',
                    },
                    dark: {
                        backgroundColor: 'gray-700',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'darkgray',
                        },
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