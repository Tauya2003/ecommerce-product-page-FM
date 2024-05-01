import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { IconButton, Stack } from '@mui/material';
import { Close, NavigateBefore, NavigateNext } from '@mui/icons-material';
import { useState } from 'react';


interface BasicModalProps {
    selectedImage: {
        image: string;
        thumbnail: string;
    }
    images: {
        image: string;
        thumbnail: string;
    }[]
}

export default function BasicModal({ selectedImage, images }: BasicModalProps) {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    const [selectedImg, setSelectedImg] = useState(selectedImage.image)
    const [selectedThumbnail, setSelectedThumbnail] = useState(selectedImage.thumbnail);

    const handleOpen = () => {
        setOpen(true)
        setSelectedImg(selectedImage.image)
        setSelectedThumbnail(selectedImage?.thumbnail)
    };

    const handleNext = () => {
        for (let i = 0; i < images.length; i++) {
            if (images[i]?.image === selectedImg) {
                setSelectedImg(images[i + 1]?.image ?? images[0]?.image)
                setSelectedThumbnail(images[i + 1]?.thumbnail ?? images[0]?.thumbnail)
                break;
            }
        }
    }

    const handlePrevious = () => {
        for (let i = 0; i < images.length; i++) {
            if (images[i]?.image === selectedImg) {
                setSelectedImg(images[i - 1]?.image ?? images[images.length - 1].image)
                setSelectedThumbnail(images[i - 1]?.thumbnail ?? images[images.length - 1].thumbnail)
                break;
            }
        }
    }

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
                <img src={selectedImage.image} alt="sneaker" style={{
                    width: "100%",
                    transition: 'all .3s',
                }} />
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"

                sx={{
                    display: { xs: 'none', md: 'grid' }, placeItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.75)'
                }}
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
                        <img src={selectedImg} alt="sneaker" style={{ width: "100%", borderRadius: '1rem' }} />

                        {[<NavigateBefore />, <NavigateNext />].map((icn, index) => (
                            <IconButton
                                onClick={index !== 0 ? handleNext : handlePrevious}
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
                        {images.map((image, idx) => (
                            <Box
                                key={idx}
                                onClick={() => {
                                    setSelectedImg(image?.image)
                                    setSelectedThumbnail(image?.thumbnail)
                                }}
                                sx={{
                                    height: "75px",
                                    width: "75px",
                                    borderRadius: ".5rem",
                                    overflow: "hidden",
                                    cursor: "pointer",
                                    border: "2px solid",
                                    borderColor: image?.thumbnail === selectedThumbnail ? 'hsl(26, 100%, 55%)' : 'transparent',
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
                                        backgroundColor: image?.thumbnail === selectedThumbnail ? '#fffa' : 'transparent',
                                        transition: '0.3s linear',

                                        "&:hover": {
                                            backgroundColor: image?.thumbnail !== selectedThumbnail ? '#fff7' : '#fffa',
                                        }


                                    }}
                                />
                                <img
                                    src={image?.thumbnail}
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
