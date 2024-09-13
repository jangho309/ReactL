import React, { useCallback, useState } from "react";
import {Button, Container, Grid, TextField, Typography} from '@mui/material';
import { useDispatch } from "react-redux";
import { login } from "../apis/memberApis";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    });

    const dispatch = useDispatch();
    const navi = useNavigate();

    const changeTextField = useCallback((e) => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value
        })
    }, [loginForm]);

    const handleLogin = useCallback((e) => {
        e.preventDefault();

        dispatch(login(loginForm));

        navi('/');
    }, [loginForm, dispatch]);

    return (
        <Container component='div' maxWidth='xs' style={{marginTop: '8%'}}>
            <form onSubmit={handleLogin}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography component='h1' variant='h5'>
                            로그인
                        </Typography>
                    </Grid>
                    <Grid item xs={12} textAlign='right'>
                        <TextField
                            name='username'
                            variant='outlined'
                            required
                            id='username'
                            label='아이디'
                            autoFocus
                            fullWidth
                            value={loginForm.username}
                            onChange={changeTextField}
                        ></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name='password'
                            variant='outlined'
                            required
                            id='password'
                            label='비밀번호'
                            fullWidth
                            type='password'
                            value={loginForm.password}
                            onChange={changeTextField}
                        ></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            color='primary'>
                            로그인
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

export default Login;