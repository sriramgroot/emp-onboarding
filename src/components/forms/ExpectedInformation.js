import { styled, Grid, Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

const UploadDocuments = (props) => {
	const { formik } = props;
	return (
		<Grid container spacing={2}>
			<Grid item xs={6}>
                <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                    Upload file
                    <VisuallyHiddenInput type="file" />
                </Button>
			</Grid>
			<Grid item xs={6}>
				
			</Grid>
			<Grid item xs={12}>
				
			</Grid>
			<Grid item xs={12}>
				
			</Grid>
		</Grid>
	);
};

export default UploadDocuments;
