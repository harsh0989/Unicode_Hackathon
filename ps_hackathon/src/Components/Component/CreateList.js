import { Button, Card, CardContent, Grid } from '@mui/material'
import React, { useState } from 'react'
import TextField from "@mui/material/TextField";
import '../Css/CreateList.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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
    const [list, setList] = useState({ item: '', quantity: '', units: '', maxBudget: '', category: '', details: '' });
    const [items, setItems] = useState([]);
    const [listPermanentValues, setListPermanentValues] = useState('');
    const [editSingleItem, setEditSingleItem] = useState('Add');

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
        if (list.item && list.quantity && list.units && list.maxBudget && list.category && list.details) {
            const newRequirement = { ...list, id: new Date().getTime().toString() };
            setItems([...items, newRequirement]);
            setList({ item: '', quantity: '', units: '', maxBudget: '', category: '', details: '' })
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
        setList({ item: selectedItem.item, quantity: selectedItem.quantity, units: selectedItem.units, maxBudget: selectedItem.maxBudget, category: selectedItem.category, details: selectedItem.details })
        setItems(filteredItems);
    }

    return (
        <>
            <div className="createList" style={{ width: '100vw', marginTop: '2%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Card sx={{ width: '90vw' }}>
                    <CardContent>
                        <Grid container>
                            <Grid item md={6}>
                                <TextField margin="normal" sx={{ width: '95%' }} required id="listName" label="List Name" name="listName" value={list.listName} onChange={handleNameAndDue} />
                            </Grid>
                            <Grid item md={6} sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                                <TextField margin="normal" sx={{ width: '95%' }} required id="dueDate" label="Due Date" name="dueDate" value={list.dueDate} onChange={handleNameAndDue} />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3} columns={15}>
                            <Grid item md={2}>
                                <TextField margin="normal" sx={{ width: '95%', fontFamily: 'Readex Pro, sans-serif' }} required id="item" label="Item" name="item" value={list.item} onChange={handleChange} />
                            </Grid>
                            <Grid item md={2}>
                                <TextField margin="normal" sx={{ width: '95%', fontFamily: 'Readex Pro, sans-serif' }} required id="quantity" label="Quantity" name="quantity" value={list.quantity} onChange={handleChange} />
                            </Grid>
                            <Grid item md={2}>
                                <TextField margin="normal" sx={{ width: '95%', fontFamily: 'Readex Pro, sans-serif' }} required id="units" label="Units" name="units" value={list.units} onChange={handleChange} />
                            </Grid>
                            <Grid item md={2}>
                                <TextField margin="normal" sx={{ width: '95%', fontFamily: 'Readex Pro, sans-serif' }} required id="maxBudget" label="Max Budget" name="maxBudget" value={list.maxBudget} onChange={handleChange} />
                            </Grid>
                            <Grid item md={2}>
                                <TextField margin="normal" sx={{ width: '95%', fontFamily: 'Readex Pro, sans-serif' }} required id="category" label="Category" name="category" value={list.category} onChange={handleChange} />
                            </Grid>
                            <Grid item md={4}>
                                <TextField margin="normal" sx={{ width: '95%', fontFamily: 'Readex Pro, sans-serif' }} required id="details" label="Details" name="details" value={list.details} onChange={handleChange} />
                            </Grid>
                            <Grid item md={1} mt={2} >
                                <Button onClick={addToList} style={AddBtn}>{editSingleItem}</Button>
                            </Grid>
                        </Grid>
                        <p style={{ fontFamily: 'Readex Pro, sans-serif', fontWeight: '800', color: '#454C59' }}>Your List</p>
                        {
                            items.map((itemInList) => {
                                return <>
                                    <Grid container spacing={3} columns={15} mb={2} key={itemInList.id}>
                                        <Grid item md={2}>
                                            <p className="listItems">{itemInList.item}</p>
                                        </Grid>
                                        <Grid item md={2}>
                                            <p className="listItems">{itemInList.quantity}</p>
                                        </Grid>
                                        <Grid item md={2}>
                                            <p className="listItems">{itemInList.units}</p>
                                        </Grid>
                                        <Grid item md={2}>
                                            <p className="listItems">{itemInList.maxBudget}</p>
                                        </Grid>
                                        <Grid item md={2}>
                                            <p className="listItems">{itemInList.category}</p>
                                        </Grid>
                                        <Grid item md={4}>
                                            <p className="listItems">{itemInList.details}</p>
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
                            <Button style={button} sx={{ textTransform: 'capitalize' }}>Create List</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default CreateList
