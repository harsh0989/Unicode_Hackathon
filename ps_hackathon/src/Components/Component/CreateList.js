import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import TextField from "@mui/material/TextField";
import '../Css/CreateList.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useHistory } from 'react-router-dom';



const button = {
    marginLeft: '-1vw',
    alignItems: 'center',
    width: '44vw',
    backgroundColor: '#0950D5',
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    height: '56px',
    marginTop: '2%',
    marginBottom: '2%'
}

const AddBtn = {
    backgroundColor: '#0950D5', color: '#88898F', height: '80%', alignItems: 'center', backgroundColor: '#0950D5',
    color: '#FFFFFF',
    fontFamily: 'Poppins',
}

function CreateList() {
    const [id, setID] = useState()
    const history = useHistory();
    const [list, setList] = useState({ name: '', quantity: '', units: '', max_budget: '', industry_category: '', description: '' });
    const [items, setItems] = useState([]);
    const [listPermanentValues, setListPermanentValues] = useState({ listName: '', dueDate: '' });
    const [editSingleItem, setEditSingleItem] = useState('Add');
    const [saveListAndDue, setSaveListAndDue] = useState({})

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setList({ ...list, [name]: value })
    }

    const handleNameAndDue = (e) => {
        const name = e.target.name
        const value = e.target.value
        setListPermanentValues({ ...listPermanentValues, [name]: value })
    }

    const addToList = (e) => {
        e.preventDefault();
        if (list.name && list.quantity && list.units && list.max_budget && list.industry_category && list.description) {
            const newRequirement = { ...list, id: new Date().getTime().toString() };
            setItems([...items, newRequirement]);
            setList({ name: '', quantity: '', units: '', max_budget: '', industry_category: 'Category', description: '' })
            setEditSingleItem('Add');

        }
    }

    const deleteItem = (id) => {
        const newList = items.filter((singleItems) => singleItems.id !== id);
        setItems(newList);
    }

    const editItem = (id) => {
        setEditSingleItem('Edit');
        const filteredItems = items.filter(filterItem => filterItem.id !== id);
        const selectedItem = items.find(findItem => findItem.id === id);
        console.log(selectedItem);
        setList({ name: selectedItem.name, quantity: selectedItem.quantity, units: selectedItem.units, max_budget: selectedItem.max_budget, industry_category: selectedItem.industry_category, description: selectedItem.description })
        setItems(filteredItems);
    }
    const [message, setMessage] = useState('');
    const postListNameAndDue = () => {
        let token = localStorage.getItem('Token');
        console.log(token)

        var axios = require('axios');
        var FormData = require('form-data');
        var data = new FormData();
        data.append('name', listPermanentValues.listName);
        data.append('deadline ', listPermanentValues.dueDate);

        var config = {
            method: 'post',
            url: 'https://vismay9.pythonanywhere.com/req-doc/',
            headers: {
                'Authorization': `Token ${token}`,
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(response.data);
                setSaveListAndDue(response.data)
                console.log(saveListAndDue);
                if (response.status) {
                    setMessage('List Name created')
                    setTimeout(() => {
                        setMessage(null)
                    }, 3000);
                }
                setID(response.data.id)
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    const postWholeList = () => {
        let token = localStorage.getItem('Token');
        console.log(token)
        var axios = require('axios');
        var data = JSON.stringify(items);

        var config = {
            method: 'post',
            url: `https://vismay9.pythonanywhere.com/req-doc/${id}/items/`,
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json',
            },
            data: data
        };
        console.log(config.url)

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                if (response.status) {
                    history.push({ pathname: '/quotations', state: { id: id } })
                } else {
                    console.log('error');
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <>
            <div className="createList" style={{ width: '100vw', marginTop: '2%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Grid container sx={{ width: '90vw', backgroundColor: 'white', marginBottom: '2%', padding: '1%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px' }} columns={14}>
                    <Grid item md={6} xs={10} sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start' }}>
                        <TextField margin="normal" sx={{ width: '95%' }} required id="listName" label="List Name" name="listName" value={listPermanentValues.listName} onChange={handleNameAndDue} />
                    </Grid>
                    <Grid item md={6} xs={10} sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start' }}>
                        <TextField margin="normal" sx={{ width: '95%' }} required id="dueDate Outlined secondary" label="Due Date" name="dueDate" type='date' value={listPermanentValues.dueDate} onChange={handleNameAndDue} />
                    </Grid>
                    {/* <Grid item md={1}></Grid> */}
                    <Grid item md={2} xs={10} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingTop: '5px' }}><Button style={{ width: '95%', backgroundColor: '#0950D5', color: 'white', height: '80%', alignItems: 'center', fontFamily: 'poppins', marginTop: '%%', height: '56px' }} onClick={postListNameAndDue}>Save</Button></Grid>
                    <Typography id='message' sx={{ color: '#0EC576', fontFamily: 'poppins', padding: '0.5%' }}>{message}</Typography>
                </Grid>
                <Card sx={{ width: '90vw' }}>
                    <CardContent>
                        <Grid container spacing={3} columns={15}>
                            <Grid item md={2} xs={15}>
                                <TextField margin="normal" sx={{ width: '95%', fontFamily: 'Readex Pro, sans-serif' }} required id="name" label="Item" name="name" value={list.name} onChange={handleChange} />
                            </Grid>
                            <Grid item md={2} xs={15}>
                                <TextField margin="normal" sx={{ width: '95%', fontFamily: 'Readex Pro, sans-serif' }} required id="quantity" label="Quantity" name="quantity" value={list.quantity} onChange={handleChange} />
                            </Grid>
                            <Grid item md={2} xs={15}>
                                <TextField margin="normal" sx={{ width: '95%', fontFamily: 'Readex Pro, sans-serif' }} required id="units" label="Units" name="units" value={list.units} onChange={handleChange} />
                            </Grid>
                            <Grid item md={2} xs={15}>
                                <TextField margin="normal" sx={{ width: '95%', fontFamily: 'Readex Pro, sans-serif' }} required id="max_budget" label="Max Budget" name="max_budget" value={list.max_budget} onChange={handleChange} />
                            </Grid>
                            <Grid item md={2} xs={15}>
                                <Box sx={{ minWidth: '95%', fontFamily: 'Readex Pro, sans-serif', marginTop: '10%' }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                        <Select
                                            required id="industry_category" label="Category" name="industry_category" value={list.industry_category}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={'CT'}>Clothing and Textiles (CT)</MenuItem>
                                            <MenuItem value={'PCP'}>Petroleum, Chemicals and Plastics (PCP)</MenuItem>
                                            <MenuItem value={'ECT'}>Electronics, Computers and Transportation (ECT)</MenuItem>
                                            <MenuItem value={'FP'}>Food Production (FP)</MenuItem>
                                            <MenuItem value={'MM'}>Metal Manufacturing (MM)</MenuItem>
                                            <MenuItem value={'WLP'}>Wood, Leather and Paper (WLP)</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Grid>
                            <Grid item md={4} xs={15}>
                                <TextField margin="normal" sx={{ width: '95%', fontFamily: 'Readex Pro, sans-serif' }} required id="description" label="Details" name="description" value={list.description} onChange={handleChange} />
                            </Grid>
                            <Grid item md={1} mt={2} xs={15} >
                                <Button onClick={addToList} style={AddBtn} sx={{ width: '100%' }}>{editSingleItem}</Button>
                            </Grid>
                        </Grid>
                        <p style={{ fontFamily: 'Readex Pro, sans-serif', fontWeight: '800', color: '#454C59' }}>Your List</p>
                        {
                            items.map((itemInList) => {
                                return <>
                                    <Grid container spacing={3} columns={15} mb={2} key={itemInList.id}>
                                        <Grid item md={2}>
                                            <p className="listItems">{itemInList.name}</p>
                                        </Grid>
                                        <Grid item md={2}>
                                            <p className="listItems">{itemInList.quantity}</p>
                                        </Grid>
                                        <Grid item md={2}>
                                            <p className="listItems">{itemInList.units}</p>
                                        </Grid>
                                        <Grid item md={2}>
                                            <p className="listItems">{itemInList.max_budget}</p>
                                        </Grid>
                                        <Grid item md={2}>
                                            <p className="listItems">{itemInList.industry_category}</p>
                                        </Grid>
                                        <Grid item md={4}>
                                            <p className="listItems">{itemInList.description}</p>
                                        </Grid>
                                        <Grid item md={1} mt={2} sx={{ width: '100%' }}>
                                            <Grid container sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <Grid item md={12} mt={2} sx={{ width: '40px' }}>
                                                    <EditIcon sx={{ width: '20px', height: '20px', marginRight: '5px', color: '#0EC576' }} onClick={() => editItem(itemInList.id)} />
                                                    <DeleteIcon sx={{ width: '20px', height: '20px', color: '#EA4C89' }} onClick={() => deleteItem(itemInList.id)} />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </>
                            })
                        }
                        <div className="btnContainer" style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '2vw', alignItems: 'center', height: '66px' }}>
                            <Button style={button} sx={{ textTransform: 'capitalize' }} onClick={postWholeList}>Create List</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default CreateList
