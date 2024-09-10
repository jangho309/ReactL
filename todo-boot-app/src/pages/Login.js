import React from 'react';
import {
    Button,
    TextField,
    Link,
    Grid2,
    Container,
    Typography
} from '@mui/material';

const Login = () => {
  return (
    <Container component="main" maxWidth="xs" style={{marginTop: '8%'}}>
        <form>
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
                               autoFocus />
                </Grid2>
                <Grid2 item size={{xs: 12}}>
                    <TextField name='password'
                               variant='outlined'
                               required
                               fullWidth
                               id='password'
                               label='비밀번호'
                               autoFocus />
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
  )
}

export default Login