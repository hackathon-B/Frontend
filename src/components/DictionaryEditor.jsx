import {useEffect} from 'react';
// 共通
import { API_URLS } from '../common/constants';
import { callApi } from '../common/api';
// MUI コンポーネント
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


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

export function DictionaryEditor({ open, handleClose, dictId }) {
  const [dict, setDict] = useState(null);

  useEffect(() => {
    const endpoint = API_URLS.GET_DICT(dictId);
    if (!dictId) return;
    callApi('GET', endpoint)
      .then(response => {
        console.log(response.data);
        setDict(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  },[dictId])

  const postDict = () => {
    const endpoint = API_URLS.UPDATE_DICT(dictId);
    callApi('PUT', endpoint, dict)
      .then(response => {
        console.log(response.data);
        handleClose();
        msgClear();
      })
      .catch(error => {
        console.error(error);
      });
  }

  const msgClear = () => {
    setDict(null);
  }
  return (

<Modal  sx={style} open={open} onClose={handleClose}>
  <Box>
    <h2>Dictionary Editor</h2>
    <TextField label="Title" value={dict?.title} />
    <TextField label="Description" value={dict?.description} />
    <Button variant="contained" color="primary" onClick={postDict}>Save</Button>
  </Box>
</Modal> );
}

export default DictionaryEditor;