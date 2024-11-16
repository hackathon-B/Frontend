import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { callApi } from '../common/api.js';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';


function LoginPage() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");



    async function login(email,password){
        try {
            const response = await callApi('POST', `${BASE_URL}${API_URLS.LOGIN}`, {
                email,
                password,
              });
            return response; //トークン受け取る
        } catch(error){
            console.error(error)
        }
    }

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <Paper elevation={3} sx={{ marginTop: 8 }}>

                    <Typography variant="h5" gutterBottom sx={{ paddingBottom: '2rem' }}>
                        Login with e-mail
                    </Typography>

                    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <TextField
                            id="email"
                            label="e-mail"
                            variant="outlined"
                            type="email"
                            onChange={e => setEmail(e.target.value)}
                            fullWidth
                            required
                            InputLabelProps={{ required: false }}
                            sx={{ '& .MuiInputBase-input': { padding: '1ex' }}}
                        />

                        <TextField
                            id="password"
                            label="password"
                            variant="outlined"
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                            fullWidth
                            required
                            InputLabelProps={{ required: false }}
                            sx={{ '& .MuiInputBase-input': { padding: '1ex' }}}
                        />

                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, marginTop: 2 }}>

                            <Button variant="contained" color="primary" type="submit" sx={{ width: '16em' }}>
                                Login
                            </Button>

                            <Typography
                                component="a"
                                href="#"
                            >
                                パスワードを忘れた方はこちら
                            </Typography>

                        </Box>

                    </Box>
                </Paper>
            </Box>
        </>
    );
};

export default LoginPage;

