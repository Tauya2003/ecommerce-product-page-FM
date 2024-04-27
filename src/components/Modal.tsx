import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import sneakerImage from "../images/image-product-1.jpg";
import { IconButton, Stack } from '@mui/material';
import { Close, NavigateBefore, NavigateNext } from '@mui/icons-material';
import { useState } from 'react';
import thumbnail1 from "../images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../images/image-product-4-thumbnail.jpg";

export default function BasicModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [selectedThumbnail, setSelectedThumbnail] = useState(thumbnail1);

    return (
        <div>
            <Box
                onClick={handleOpen}
                sx={{
                    borderRadius: { md: "1rem" },
                    overflow: "hidden",
                    height: { md: "350px" },
                    width: { md: "350px" },
                }}
            >
                <img src={sneakerImage} alt="sneaker" style={{ width: "100%" }} />
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"

                sx={{ display: 'grid', placeItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
            >
                <Stack sx={{ width: 420, outline: 'none', gap: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                        <Close
                            onClick={handleClose}
                            sx={{ color: '#ffffff', transition: 'all .3s', '&:hover': { color: 'hsl(26, 100%, 55%)', cursor: 'pointer' } }} />
                    </Box>

                    <Box
                        sx={{
                            height: "420px",
                            width: "420px",
                            position: "relative",
                        }}
                    >
                        <img src={sneakerImage} alt="sneaker" style={{ width: "100%", borderRadius: '1rem' }} />

                        {[<NavigateBefore />, <NavigateNext />].map((icn, index) => (
                            <IconButton
                                key={index}
                                sx={{
                                    position: "absolute",
                                    top: "calc(50% - 1rem)",
                                    left: index == 0 ? '-1.3rem' : '',
                                    right: index == 1 ? "-1.3rem" : '',
                                    backgroundColor: "white",
                                    borderRadius: "50%",
                                    height: "2.5rem",
                                    width: "2.5rem",
                                    color: "hsl(220, 13%, 13%)",
                                    transition: "all .3s",

                                    "&:hover": {
                                        backgroundColor: "white",
                                        color: "hsl(26, 100%, 55%)",
                                    },
                                }}
                            >
                                {icn}
                            </IconButton>
                        ))}
                    </Box>

                    <Stack direction={'row'} sx={{ width: '100%', justifyContent: 'space-evenly' }}>
                        {[thumbnail1, thumbnail2, thumbnail3, thumbnail4].map((thumbnail, idx) => (
                            <Box
                                key={idx}
                                onClick={() => setSelectedThumbnail(thumbnail)}
                                sx={{
                                    height: "75px",
                                    width: "75px",
                                    borderRadius: ".5rem",
                                    overflow: "hidden",
                                    cursor: "pointer",
                                    border: "2px solid",
                                    borderColor: thumbnail === selectedThumbnail ? 'hsl(26, 100%, 55%)' : 'transparent',
                                    transition: "0.3s linear",
                                    position: 'relative',

                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: thumbnail === selectedThumbnail ? '#fffa' : 'transparent',
                                        transition: '0.3s linear',

                                        "&:hover": {
                                            backgroundColor: thumbnail !== selectedThumbnail ? '#fff7' : '#fffa',
                                        }


                                    }}
                                />
                                <img
                                    src={thumbnail}
                                    alt="thumbnail"
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </Box>
                        ))}
                    </Stack>
                </Stack>
            </Modal>
        </div >
    );
}
