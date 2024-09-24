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

const Join = () => {
    const navi = useNavigate();

    const join = useCallback(async (username, password) => {
        try {
            const response = await axios.post('http://localhost:9090/members/join',
                {username: username, password: password}
            );

            if(response.data.item && response.data.statusCode === 201) {
                alert("회원가입 완료됐습니다. 로그인 페이지로 이동합니다.");
                navi("/login");
            }
        } catch(e) {
            if(e.response.data.statusMessage === 'already exist username') {
                alert('이미 존재하는 아이디입니다.');
                return;
            }
        }
    }, [navi]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        join(formData.get("username"), formData.get("password"));
    }, [join]);

  return (
    <Container component="main" maxWidth="xs" style={{marginTop: '8%'}}>
        <form onSubmit={handleSubmit}>
            <Grid2 container spacing={2}>
                <Grid2 item size={{xs: 12}}>
                    <Typography component='h1' variant='h5'>
                        회원가입
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
                        회원가입
                    </Button>
                </Grid2>
            </Grid2>
            <Grid2 container justifyContent='flex-end'>
                <Grid2 item>
                    <Link href='/login' variant='body2'>
                        이미 계정이 있습니까? 로그인하세요.
                    </Link>
                </Grid2>
            </Grid2>
        </form>
    </Container>
  );
};

export default Join;