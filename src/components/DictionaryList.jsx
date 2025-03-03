import { useState, useEffect } from 'react';
import DictionaryEditor from './DictionaryEditor';
// 共通
import { API_URLS } from '../common/constants';
import { callApi } from '../common/api';
// MUI
import Tooltip from '@mui/material/Tooltip'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';



const DictList = ({ userId }) => {
    const [dictionaries, setDictionaries] = useState([]);
    const [currDict, setCurrDict] = useState(null);
    const [selectedDictId, setSelectedDictId] = useState(null);
    //ハンドラ
    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    useEffect(() => {
        const endpoint = API_URLS.GET_DICT_LIST;
        callApi('GET', endpoint, null)
        .then(response => {
            console.log(response);
            setDictionaries(response.dictionaries.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)));
        })
        .catch(error => {
            console.error(error);
            })
    }, [userId]);

    // メニューボタン 開く
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currTarget);
    };
    // メニューボタン 閉じる
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    // 辞書 -選択-
    const handleDictSelect = (dictionary_id) => {
        const selectedDict = dictionaries.find(dict => dict.id === dictionary_id);
        setCurrDict(selectedDict);
        console.log('dictListからを渡しました', selectedDict);
    };
    
    /*
    useEffect((dictId) => {
        console.log('DictListのcurrDict', currDict);
        setSelectedDictId(dictId);
    }, [currDict]);
    */

    // モーダルを開く 辞書編集
    const handleEditDict = (selectedDictId) => {
        console.log(`Editing dict ${selectedDictId}`);
        handleMenuClose();
        setSelectedDictId(selectedDictId);
        setIsEditorOpen(true); // モーダルを開く
    };

    // モーダルを閉じる
    const handleEditorClose = () => {
        setIsEditorOpen(false);
    };
    
    // 辞書 -削除-
    const handleDeleteClick = (selectedDictId) => {
        setSelectedDictId(selectedDictId);
        setOpenDeleteDialog(true);
        handleMenuClose();
    };

    // 新しい辞書を追加する関数
    const addDictionary = (newDict) => {
        setDictionaries(prevList => ({
            dictionaries: [newDict, ...(prevList.dictionaries || [])]
        }));
    };



    return (
        <div className="
            h-full min-h-[120px] max-h-full 
            rounded-md border border-gray-500
            overflow-auto flex-1
        ">
            {/* 辞書リストのヘッダー 現在選択中の辞書 */}
            <div className="
                flex items-center justify-between
                sticky top-0 z-10 h-10 rounded-md
                bg-primary-light dark:bg-primary-dark
                border-b border-gray-500
                ">
                <p className={`
                    truncate px-3 text-sm flex-1
                    text-text-light dark:text-text-dark
                `}>
                    {currDict?.dict_title || 'マイ辞書を選択してください'}
                </p>

                {/* 別ウィンドウで開く */}
                <Tooltip title="展開">
                    <IconButton
                        color="inherit"
                        size="medium"
                        aria-label="new-dict"
                        onClick={() => setIsEditorOpen(true)}
                        sx={{ 
                            width: '40px', 
                            height: '40px',
                            
                        }}
                    >
                        <LibraryAddOutlinedIcon sx={{ color: 'white' }}/>
                    </IconButton>
                </Tooltip>
            </div>

            {/* 辞書リストの本体 */}
            <div className="bg-secondary-light dark:bg-secondary-dark">
                {dictionaries?.length > 0 ? (
                    // 辞書リストのアイテム マッピング
                    dictionaries.map((dict) => (
                        <div
                            key={dict.id}
                            // 辞書リストのアイテムをクリックした時の処理
                            onClick={() => handleDictSelect(dict.id)}
                            // マウスオーバー時の背景色
                            // 現在選択中の辞書の背景色
                                className={`
                                flex items-center justify-between
                                px-3 py-0
                                cursor-pointer
                                hover:bg-gray-400 dark:hover:bg-gray-600
                                ${currDict?.id === dict.id ? 'bg-gray-300 dark:bg-gray-700' : ''}
                            `}
                        >
                            {/* 辞書タイトル */}
                            <span className="truncate max-w-[200px] text-sm text-gray-800 dark:text-gray-200">
                                {dict.term}
                            </span>

                            {/* メニューボタン */}
                            <button className={`
                                p-1
                                opacity-0
                                ${currDict?.id === dict.id ? 'opacity-100' : 'opacity-0'}
                                transition-opacity
                            `}>
                            <MoreVertIcon 
                                className="w-5 h-5 text-gray-300 dark:text-gray-700" 
                                aria-label="dict-list-menu" 
                                onClick={handleMenuOpen}
                            />
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                                sx={{
                                    '& .MuiPaper-root': {
                                        backgroundColor: (theme) => 
                                            theme.palette.mode === 'dark' ? '#333' : '#fff',
                                        color: (theme) => 
                                            theme.palette.mode === 'dark' ? '#fff' : '#000'
                                    }
                                }}
                            >
                                <MenuItem onClick={() => handleEditDict(dict.id)}>編集</MenuItem>
                                <MenuItem onClick={() => handleDeleteClick(dict.id)}>削除</MenuItem>
                            </Menu>
                            </button>
                        </div>
                    ))
                ) : (
                    <div className="
                        flex items-center justify-center h-full
                        text-sm text-gray-500
                    ">
                        履歴がありません
                    </div>
                )}
            </div>

            {/* DictionaryEditor モーダルを展開 条件付きでレンダリングしている */}
            {isEditorOpen && (
                <DictionaryEditor 
                    open={isEditorOpen} 
                    handleClose={handleEditorClose} 
                    selectedDictId={selectedDictId}
                    onDictionaryAdd={addDictionary}
                />
            )}
        </div>
    );
};

export default DictList;