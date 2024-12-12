import { useEffect, useState } from 'react';
// 共通
import { API_URLS } from '../common/constants';
import { callApi } from '../common/api';
// MUI コンポーネント
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: '#CCC',
	dark: {
		bgcolor: '#333',
	},
	border: '2px solid #000',
	boxShadow: 24,
	pt: 2,
	px: 4,
	pb: 3,
};

export function DictionaryEditor({ open, handleClose, selectedDictId, onDictionaryAdd }) {
	const [dict, setDict] = useState({});
	const [postDictData, setPostDictData] = useState({
		term: '',
		definition: ''
	});
	const theme = useTheme();
	const [openSnackbar, setOpenSnackbar] = useState(false);
	const [snackbarMessage, setSnackbarMessage] = useState('');

	// handleDescriptionChange��数を追加
	const handleDescriptionChange = (event) => {
		setPostDictData({
			...postDictData,
			definition: event.target.value
		});
	};

	// タイトルの変更ハンドラーも追加
	const handleTitleChange = (event) => {
		setPostDictData({
			...postDictData,
			term: event.target.value
		});
	};

	//selectedDictIdがある場合は    GET_DICT: (id) => `/api/dictionary/${id}`, で辞書情報を取得する
	//取得した内容はsetDictで辞書情報を更新する
	//ない場合はそのまま空欄
	useEffect(() => {
		const endpoint = API_URLS.GET_DICT(selectedDictId);
		if (!selectedDictId) return;
		callApi('GET', endpoint)
			.then(response => {
				console.log(response.data);
				setDict(response.data);
			})
			.catch(error => {
				console.error(error);
			});
	},[selectedDictId]) 

	 //辞書を新規作成/更新する
	 //selectedDictIdがある場合はPUTで更新する
	 //ない場合はPOSTで新規作成する
	 const postDict = () => {
		const method = selectedDictId ? 'PUT' : 'POST';
		const endpoint = selectedDictId ? API_URLS.UPDATE_DICT(selectedDictId) : API_URLS.ADD_DICT;
	
		callApi(method, endpoint, postDictData)
		.then(response => {
			console.log(response.data);
			setDict(response.data);
			if (!selectedDictId && onDictionaryAdd) {
				onDictionaryAdd(response.data);
			}
			setSnackbarMessage(selectedDictId ? '更新しました' : '作成しました');
			setOpenSnackbar(true);
			handleClose();
		})
		.catch(error => {
			console.error(error);
			setSnackbarMessage('エラーが発生しました');
			setOpenSnackbar(true);
		});
	};

	const handleSnackbarClose = () => {
		setOpenSnackbar(false);
	};

	return (
	<Modal  sx={style} open={open} onClose={handleClose}>
		<Box sx={{ 
			display: 'flex',
			flexDirection: 'column',
			gap: 2
		}}>
			<h2>Dictionary Editor</h2>
			<TextField label="Title" value={postDictData.term} onChange={handleTitleChange} />
			<TextField
				placeholder="辞書登録内容を入力してください"
				value={postDictData.definition}
				onChange={handleDescriptionChange}
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
			<Button variant="contained" color="primary" onClick={postDict}>登録</Button>
			<Snackbar
				open={openSnackbar}
				autoHideDuration={3000}
				onClose={handleSnackbarClose}
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			>
				<Alert 
					onClose={handleSnackbarClose} 
					severity="success" 
					sx={{ width: '100%' }}
				>
					{snackbarMessage}
				</Alert>
			</Snackbar>
		</Box>
	</Modal> );
}

export default DictionaryEditor;