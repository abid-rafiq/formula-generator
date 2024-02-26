import { Button, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import logo from '../../assets/images/logo-white.png';
import { Facebook,Instagram,LinkedIn } from '@mui/icons-material';

import './footer.css';

const Footer = () => {
    return (
        <footer className='ntt__footer'>
            <div className='ntt__footer-top'>
                <div className='container'>
                    <div className='ntt__footer-top-wrapper'>
                        <div className='ntt__footer-column ntt__footer-column-1'>
                            <div className='ntt__footer-column-1-wrapper'>
                                <div className='ntt__footer-detail'>
                                    <div className='ntt__footer-logo'>
                                        <img src={logo} alt='Logo' />
                                    </div>
                                    <div className='ntt__footer-description'>
                                        <p>Lorem ipsum dolor sit amet consectetur. Auctor tempor pretium aliquam neque.</p>
                                    </div>
                                </div>
                                <div className='ntt__footer-signup-form'>
                                    <FormControl size='small' variant="outlined" sx={{ width: "calc(100% - 101px)" }}>
                                        <InputLabel htmlFor="outlined-adornment-password" sx={{ color: '#000' }}>Email</InputLabel>
                                        <OutlinedInput
                                            type={'email'}
                                            sx={{ height: 38, paddingRight: 0, background: "#fff", color: "#000" }}
                                            label="Email"
                                        />
                                    </FormControl>
                                    <Button variant="contained" disableElevation color='primary' size="medium" sx={{ background: "#00254F", textTransform: "none", height: 38, minWidth: 101 }}>
                                        Sign Up
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className='ntt__footer-column ntt__footer-column-2'>
                            <p className='ntt__footer-column-title'>Title</p>
                            <ul className='ntt__footer-column-links-wrapper'>
                                <li className='ntt__footer-column-link'>Subtitle</li>
                                <li className='ntt__footer-column-link'>Subtitle</li>
                                <li className='ntt__footer-column-link'>Subtitle</li>
                                <li className='ntt__footer-column-link'>Subtitle</li>
                            </ul>
                        </div>
                        <div className='ntt__footer-column ntt__footer-column-3'>
                            <p className='ntt__footer-column-title'>Title</p>
                            <ul className='ntt__footer-column-links-wrapper'>
                                <li className='ntt__footer-column-link'>Subtitle</li>
                                <li className='ntt__footer-column-link'>Subtitle</li>
                                <li className='ntt__footer-column-link'>Subtitle</li>
                                <li className='ntt__footer-column-link'>Subtitle</li>
                            </ul>
                        </div>
                        <div className='ntt__footer-column ntt__footer-column-4'>
                            <p className='ntt__footer-column-title'>Title</p>
                            <ul className='ntt__footer-column-links-wrapper'>
                                <li className='ntt__footer-column-link'>Subtitle</li>
                                <li className='ntt__footer-column-link'>Subtitle</li>
                                <li className='ntt__footer-column-link'>Subtitle</li>
                                <li className='ntt__footer-column-link'>Subtitle</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{borderColor: "#D9D9D9" }} />
            <div className='ntt__footer-bottom'>
                <div className='container'>
                    <div className='ntt__footer-bottom-wrapper'>
                        <div className='ntt__footer-email'><a href="mailto:contact@nttdata.com">contact@nttdata.com</a></div>
                        <div className='ntt__footer-contact'><a href="tel:+39876765444">+3 9876 765 444</a></div>
                        <div className='ntt__footer-social'>
                            <ul className='ntt__footer-social-wrapper'>
                                <li className='ntt__footer-social-icon'><Instagram fontSize='medium'/></li>
                                <li className='ntt__footer-social-icon'><Facebook fontSize='medium'/></li>
                                <li className='ntt__footer-social-icon'><LinkedIn fontSize='medium'/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer