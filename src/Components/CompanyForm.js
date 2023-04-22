import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import { Input, InputLabel, Button } from "@mui/material";
import axios from "axios";

function CompanyForm() {
  const [inpval, setInpval] = useState({
    companyName: "",
    companyURL: "",
    PrimaryText: "",
    headline: "",
    description: "",
    CTA: "",
    ImageURL: "",
  });

  const setData = (e) => {
    setInpval({ ...inpval, [e.target.name]: e.target.value });
  };

  const submitHandler = async (event) => {
    // event.preventDefault()
    console.log(inpval);
    const response = await axios.post(
      `http://localhost:5000/company/add-data`,
      inpval
    );
    setInpval({
      companyName: "",
      companyURL: "",
      PrimaryText: "",
      headline: "",
      description: "",
      CTA: "",
      ImageURL: "",
    });
  };

  return (
    <div className="container">
      <FormControl style={{margin:"5px"}}>
        <InputLabel htmlFor="company-name">Company Name</InputLabel>
        <Input onChange={setData} name="companyName" value={inpval.companyName} id="company-name"/>
        </FormControl>
        <FormControl style={{margin:"5px"}}>
        <InputLabel htmlFor="company-url">Company Url</InputLabel>
        <Input onChange={setData} name="companyURL" value={inpval.companyURL} id="company-url"/>
        </FormControl>
        <br/>
        <FormControl style={{margin:"5px"}}>
        <InputLabel htmlFor="primary-text">Primary Text</InputLabel>
        <Input onChange={setData} name="PrimaryText" value={inpval.PrimaryText} id="primary-text"/>
        </FormControl>
        <FormControl style={{margin:"5px"}}>
        <InputLabel htmlFor="headline">Headline</InputLabel>
        <Input onChange={setData} name="headline" value={inpval.headline} id="headline"/>
        </FormControl>
        <FormControl style={{margin:"5px"}}>
        <InputLabel htmlFor="description">Description</InputLabel>
        <Input onChange={setData} name="description" value={inpval.description} id="description"/>
        </FormControl>
        <FormControl style={{margin:"5px"}}>
        <InputLabel htmlFor="cta">CTA</InputLabel>
        <Input onChange={setData} name="CTA" value={inpval.CTA} id="cta"/>
        </FormControl>
        <FormControl style={{margin:"5px"}}>
        <InputLabel htmlFor="image-url">Image URL</InputLabel>
        <Input onChange={setData} name="ImageURL" value={inpval.ImageURL} id="image-url"/>
        </FormControl>
        <br/>
        <Button onClick={submitHandler} variant="contained">Submit</Button>
    </div>

    
  );
}

export default CompanyForm;
