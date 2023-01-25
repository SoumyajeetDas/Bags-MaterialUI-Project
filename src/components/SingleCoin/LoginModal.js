import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { UserAuth } from '../../context/AuthContext';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {
        sm:400,
        xs:280
    },
    // width:400,
    backgroundImage: "linear-gradient(to bottom right, #ff9800, #fff)",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
};

export default function LoginModal() {

    const { open, handleClose } = UserAuth();


    return (

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-description" sx={{
                        textAlign: "center",
                        fontFamily: "'Unbounded', cursive",
                    }}>
                        Kindly login to check the details
                    </Typography>
                </Box>
            </Modal>


    );
}