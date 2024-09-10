import React from 'react';
import {
    Button,
    TextField,
    Link,
    Grid2,
    Container,
    Typography
} from '@mui/material';

const Join = () => {
  return (
    <Container component="main" maxWidth="xs" style={{marginTop: '8%'}}>
        <form>
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
  )
}

export default Join