import React, { useState,useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import { Input, InputLabel, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import axios from 'axios';


function SearchBar() {

    const [input,setInput]=useState("")
    const [ads,setAds]=useState([])

    useEffect(()=>{
        //Debouncing - to minimize network calls
        let identifier=setTimeout(()=>{
            axios.get(`http://localhost:5000/ad/getallads?input=${input}`).then((response)=>{
          // console.log(response)
          setAds(response.data)
        })
        },500)

        return ()=>{
            clearTimeout(identifier)
        }
      },[input])

    const setData=(event)=>{
        setInput(event.target.value)
    }

  return (
    <div className="container" style={{marginBottom:"50px"}}>
      <FormControl style={{ margin: "30px" }}>
        <InputLabel htmlFor="input">Search Your Ad</InputLabel>
        <Input
          onChange={setData}
          name="input"
          value={input}
          id="input"
        />
      </FormControl>

      <Table>
      <TableHead>
            <TableRow>
              <TableCell>Company Name</TableCell>
              <TableCell>Primary Text</TableCell>
              <TableCell>Headline</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
        </TableHead>

        <TableBody>
            {ads.map((row)=>(
                <TableRow key={row._id}>
                    <TableCell>{row.companyId.name}</TableCell>
                    <TableCell>{row.primaryText}</TableCell>
                    <TableCell>{row.headline}</TableCell>
                    <TableCell>{row.description}</TableCell>
                </TableRow>
            ))}
      </TableBody>
      </Table>
    </div>
  );
}

export default SearchBar
