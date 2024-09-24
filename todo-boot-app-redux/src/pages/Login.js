import React, { useCallback } from 'react';
import {
    Button,
    TextField,
    Link,
    Grid2,
    Container,
    Typography
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { member_login } from '../slices/memberSlice';

const Login = () => {
    const navi = useNavigate();
    const dispatch = useDispatch();

    const login = useCallback(async (username, password) => {
        try {
            const response = await axios.post('http://localhost:9090/members/login',
                {username: username, password: password}
            );

            if(response.data.item && response.data.statusCode === 200) {
                sessionStorage.setItem("ACCESS_TOKEN", response.data.item.token);
                dispatch(member_login(response.data.item));
                navi("/");
            }
        } catch(e) {
            if(e.response.data.statusMessage === 'username not exist') {
                alert("존재하지 않는 사용자입니다.");
                return;
            }

            if(e.response.data.statusMessage === 'wrong password') {
                alert("비밀번호가 틀렸습니다.");
                return;
            }
        }
    }, [navi]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        login(formData.get("username"), formData.get("password"));
    }, [login]);

  return (
    <Container component="main" maxWidth="xs" style={{marginTop: '8%'}}>
        <form onSubmit={handleSubmit}>
            <Grid2 container spacing={2}>
                <Grid2 item size={{xs: 12}}>
                    <Typography component='h1' variant='h5'>
                        로그인
                    </Typography>
                </Grid2>
                <Grid2 item size={{xs: 12}}>
                    <TextField name='username'
                               variant='outlined'
                               required
                               fullWidth
                               id='username'
                               label='아이디'
                               autoFocus/>
                </Grid2>
                <Grid2 item size={{xs: 12}}>
                    <TextField name='password'
                               variant='outlined'
                               required
                               fullWidth
                               id='password'
                               label='비밀번호'
                               autoFocus
                               type='password'/>
                </Grid2>
                <Grid2 item size={{xs: 12}}>
                    <Button type='submit'
                            fullWidth
                            variant='contained'
                            color='primary'>
                        로그인
                    </Button>
                </Grid2>
            </Grid2>
            <Grid2 container justifyContent='flex-end'>
                <Grid2 item>
                    <Link href='/join' variant='body2'>
                        계정이 없으시면 여기서 회원가입하세요.
                    </Link>
                </Grid2>
            </Grid2>
        </form>
    </Container>
  );
};

export default Login;