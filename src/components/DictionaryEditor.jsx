import LaunchIcon from '@mui/icons-material/Launch'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'

const DictionaryEditor = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      border: '1px solid #ccc',
      borderRadius: '4px',
    }}>
      {/* タイトル入力 */}
      <textarea
        placeholder="Dictionary Title"
        maxLength={100}  // 100文字まで
        style={{
          flex: '0 0 auto',
          minHeight: '39px',
          maxHeight: '100px',
          padding: '0.5rem',
          resize: 'vertical',
          backgroundColor: '#ffffff',
          border: '1px solid #ccc',
          fontFamily: 'inherit'
        }}
      />
      
      <Tooltip title="サイドバーを開く">
        <IconButton 
            size="medium"
            sx={{ width: '40px', height: '40px'}}
          >
            <LaunchIcon />
        </IconButton>
      </Tooltip>

      {/* 説明入力 */}
      <textarea
        placeholder="Dictionary Description"
        style={{
          flex: '1 1 auto',
          minHeight: '39px',
          padding: '0.5rem',
          resize: 'none',
          backgroundColor: '#ffffff',
          border: '1px solid #ccc',
          fontFamily: 'inherit'
        }}
      />
    </div>
  );
};

export default DictionaryEditor