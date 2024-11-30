import { useState, useContext } from 'react';
import { useCookies } from 'react-cookie';
import { AuthContext } from '../store.jsx';
import { useNavigate } from 'react-router-dom';
// 共通
import { callApi } from '../common/api.js';
import { API_URLS } from '../common/constants.js';
// MUI
import { Box, TextField, Button, Typography, Paper, Link } from '@mui/material';

function LoginPage() {
    const { setUserInfo } = useContext(AuthContext);
    const [, setCookies] = useCookies(['token']);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ 
        email: "",
        password: "",
        submit: ""
    });

    // メールアドレスの検証
    const validateEmail = (email) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!email) {
            return "メールアドレスを入力してください";
        }
        if (!emailRegex.test(email)) {
            return "正しいメールアドレスの形式で入力してください";
        }
        return "";
    };

    // パスワードの検証
    const validatePassword = (password) => {
        if (!password) {
            return "パスワードを入力してください"
        }
        if (password.length < 8) {
            return "パスワードは8文字以上で入力してください";
        }
        return "";
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        // フォーム送信時のバリデーション
        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);

        setErrors({
            email: emailError,
            password: passwordError
        });

        // エラーがある場合は送信しない
        if (emailError || passwordError) {
            return;
        }

        try {
            const response = await callApi('POST', `${API_URLS.LOGIN}`, {
                email,
                password,
            });

            if (response && response.token) {
                // トークンをcookieに保存（オブジェクトではなく文字列として保存）
                setCookies('token', response.token, {
                    path: '/',
                    maxAge: 3600 * 24 * 7,
                    sameSite: 'none',
                    secure: true
                });

                // ローザー情報を取得して設定
                const userData = await callApi('GET', API_URLS.GET_USER, null, response.token);
                setUserInfo(userData);

                // ログイン成功後、ホームページへ遷移
                navigate('/');
            } else {
                setErrors(prev => ({
                    ...prev,
                    submit: "ログインに失敗しました"
                }));
            } 
        } catch (error) {
            console.error('ログインエラー：', error); 
            setErrors(prev => ({
                ...prev,
                submit: "ログインに失敗しました。もう一度お試しください。"
            }));
        }
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <Paper elevation={8} sx={{ padding: '40px'  }}>
                <Typography variant="h3" gutterBottom sx={{ 
                    paddingBottom: '1em', 
                    textAlign: 'center', 
                    fontFamily: "'Bubblegum Sans', cursive", 
                    color: 'black',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                }}>
                    Fucabo
                </Typography>

                <Box component="form" onSubmit={handleLogin} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px' }}>
                    <TextField
                        id="email"
                        label="e-mail"
                        variant="outlined"
                        type="email"
                        value={email}
                        onChange={e => {
                            setEmail(e.target.value); // 入力値をステートに設定
                            setErrors(prev => ({      // エラー状態を更新
                                ...prev,              // 既存のエラー状態を維持
                                email: "",            // メールアドレスのエラーをクリア
                                submit: ""            // 送信時のエラーもクリア
                            }));
                        }}
                        error={!!errors.email}        // エラーの有無を真偽値に変換
                        helperText={errors.email}     // エラーメッセージを表示
                        fullWidth
                        required                      // フィールドを必須項目に設定
                        autoComplete='email'          // ブラウザに保存されていれば使用する
                        InputLabelProps={{ required: false }}  // ラベルの*は非表示
                        sx={{ height: '40px'}}
                    />

                    <TextField
                        id="password"
                        label="password"
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value);
                            setErrors(prev => ({
                                ...prev,
                                password: "",
                                submit: ""
                            }));
                        }}
                        error={!!errors.password}
                        helperText={errors.password}
                        fullWidth
                        required
                        autoComplete='current-password'
                        InputLabelProps={{ required: false }}
                        sx={{ height: '40px' }}
                    />

                    {errors.submit && (
                        <Typography
                            color='error' 
                            sx={{ mb: 2, textAlign: 'center' }}
                        >
                            {errors.submit}
                        </Typography>
                    )}

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em', marginTop: 2 }}>
                        <Button variant="contained" color="primary" type="submit" sx={{ width: '16em' }}>
                            Login
                        </Button>
                        <Button variant="contained" color="success" type="submit" onClick={() => navigate('/signUp')} sx={{ width: '16em' }}>
                            新規登録
                        </Button>
                        <Link
                            href="#"
                            sx={{
                                fontSize: '0.875rem',
                            }}
                        >
                            パスワードを忘れた方はこちら
                        </Link>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

export default LoginPage;

