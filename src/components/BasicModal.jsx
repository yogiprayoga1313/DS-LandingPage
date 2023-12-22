import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IoMdArrowRoundForward } from "react-icons/io";
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal({ statusOpen, onCloseModal }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    
    const contactWa = `https://api.whatsapp.com/send/?phone=6282214899172&text=Hello+Aksara%2C+I%27m+%5Byour-name-here%5D+from+%5Byour-company%2Fstartup-name%5D+is+looking+for+%5Bwebsite%2Fmobile+apps%5D+Developer.&app_absent=0`

    React.useEffect(() => {
        setOpen(statusOpen);
    }, [statusOpen]);

    const handleClose = () => {
        setOpen(false);
        onCloseModal(); // Invoke the callback to update the parent state
    };

    const handleSendMessage = () => {
        
        // Logika untuk mengirim pesan, bisa ditambahkan di sini
        // Misalnya: validasi input, pengiriman pesan ke server, dll.
        console.log('Pesan telah dikirim!');
        handleClose(); // Menutup modal setelah mengirim pesan (opsional)
    };

    return (
        <div>
            <Modal
                open={statusOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box sx={{
                    ...style,
                    width: '90%', // Mengatur lebar modal menjadi 90% dari lebar layar
                    maxWidth: '600px', // Lebar maksimum modal
                }}>
                    <Typography sx={{ marginBottom: '20px' }} id="modal-modal-title" variant="h6" component="h2">
                        Form Pemesanan
                    </Typography>
                    {/* <div>
                        <button onClick={handleClose}>
                            Close disini
                        </button>
                    </div> */}
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-5'>
                            <TextField sx={{ width: '100%' }} id="outlined-basic" label="Nama" variant="outlined" />
                            <TextField sx={{ width: '100%' }} id="outlined-basic" label="No Phone" variant="outlined" />
                        </div>
                        <div className='w-full'>
                            <TextField sx={{ width: '100%' }} id="outlined-basic" label="Email" variant="outlined" />
                        </div>
                        <div className='w-full mt-3'>
                            <TextField
                                sx={{ width: '100%', height: '100%' }}
                                id="outlined-multiline-static"
                                label="Pesanan Anda"
                                multiline
                                rows={8}
                                variant="outlined"
                            />
                        </div>
                        <div className='mt-3'>
                            <Button href={contactWa} variant="contained" color="primary" onClick={handleSendMessage}>
                                Kirim Pesan
                            </Button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
