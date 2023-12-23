import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Formik, Form, Field } from 'formik';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal({ statusOpen, onCloseModal }) {
    const [open, setOpen] = React.useState(false);
    const contactWa = `https://api.whatsapp.com/send/?phone=6283863683761&app_absent=0`;

    React.useEffect(() => {
        setOpen(statusOpen);
    }, [statusOpen]);

    const handleClose = () => {
        setOpen(false);
        onCloseModal(); // Invoke the callback to update the parent state
    };

    const handleSendMessage = (values) => {
        const message = `Halo Dapoer Sakha, Saya ${values.nama}. Saya ingin memesan makanan berikut: ${values.pesanan}. Anda dapat menghubungi saya di Nomor Telepon: ${values.nomorHp} atau Email: ${values.email}.`;
        const encodedMessage = encodeURIComponent(message);
        console.log(message)
        const contactWaWithMessage = `${contactWa}&text=${encodedMessage}`;

        window.open(contactWaWithMessage, '_blank');

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
                    width: '90%',
                    maxWidth: '600px',
                }}>
                    <Typography sx={{ marginBottom: '20px' }} id="modal-modal-title" variant="h6" component="h2">
                        Form Pemesanan
                    </Typography>
                    <Formik
                        initialValues={{
                            nama: '',
                            nomorHp: '',
                            email: '',
                            pesanan: ''
                        }}
                        onSubmit={values => {
                            handleSendMessage(values);
                        }}
                    >
                        <Form>
                            <div className='flex flex-col gap-3'>
                                <div className='flex gap-5'>
                                    <Field
                                        name="nama"
                                        as={TextField}
                                        sx={{ width: '100%' }}
                                        label="Nama"
                                        variant="outlined"
                                    />
                                    <Field
                                        name="nomorHp"
                                        as={TextField}
                                        sx={{ width: '100%' }}
                                        label="No Phone"
                                        variant="outlined"
                                    />
                                </div>
                                <div className='w-full'>
                                    <Field
                                        name="email"
                                        as={TextField}
                                        sx={{ width: '100%' }}
                                        label="Email"
                                        variant="outlined"
                                    />
                                </div>
                                <div className='w-full mt-3'>
                                    <Field
                                        name="pesanan"
                                        as={TextField}
                                        sx={{ width: '100%', height: '100%' }}
                                        label="Pesanan Anda"
                                        multiline
                                        rows={8}
                                        variant="outlined"
                                    />
                                </div>
                                <div className='mt-3'>
                                    <Button type="submit" variant="contained" color="primary">
                                        Kirim Pesan
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    </Formik>
                </Box>
            </Modal>
        </div>
    );
}
