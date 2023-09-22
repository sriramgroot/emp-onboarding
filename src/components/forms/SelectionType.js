import {
    Grid,
    FormControl, FormLabel, FormControlLabel, RadioGroup, Radio,
    FormHelperText
  } from "@mui/material";
  
  const SelectionType = (props) => {
    const { formik } = props;
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Type of Employment</FormLabel>
      <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
        <FormControlLabel value="fresher" control={<Radio />} label="Fresher" />
        <FormControlLabel value="experienced" control={<Radio />} label="Experienced" />
      </RadioGroup>
    </FormControl>
        </Grid>
        {formik.errors.submit && (
          <Grid item xs={12}>
            <FormHelperText error>
              {formik.errors.submit}
            </FormHelperText>
          </Grid>
        )}
      </Grid>
    )
  }
  
  export default SelectionType;