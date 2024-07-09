import React, { useState, useEffect } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase'; // Assuming this correctly imports your Firestore instance
import { useNavigate } from 'react-router-dom';
// import {useHistory} from '/react-router-dom'
const NewInvoice = () => {
    const [to, setTo] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [qty, setQty] = useState('0');
    const [total, setTotal] = useState(0);
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();
    

    // const history=useHistory()

    // Function to add a new product to the invoice
    const addProduct = () => {
        const newPrice = parseFloat(price);
        const newQty = parseFloat(qty);
        const id = product.length + 1;

        // Adding the new product to the product array
        setProduct([...product, { id, name, price: newPrice, qty: newQty }]);

        // Resetting input fields after adding product
        setName('');
        setPrice('');
        setQty('0');
    };

    // Function to save the invoice to Firestore
    const saveProduct = async () => {
        console.log("add button is clicked")
        navigate('/dashboard/Invoice');
        try {
            const docRef = await addDoc(collection(db, 'invoices'), {
                to,
                phone,
                address,
                products: product,
                total,
                date: Timestamp.fromDate(new Date())
            });
            console.log('Document written with ID: ', docRef.id);
            window.alert('Invoice saved successfully.');
            navigate('/dashboard/Invoice'); // Navigate after successful save
        } catch (error) {
            console.error('Error adding document: ', error);
            window.alert('Something went wrong while saving the invoice.');
        }
    };

       
    //    try {
    //     const docRef = await addDoc(collection(db, 'invoices'), {
    //         to,
    //         phone,
    //         address,
    //         products: product,
    //         total,
    //         date: Timestamp.fromDate(new Date())
    //     });
    //     console.log('Document written with ID: ', docRef.id);
    // } catch (error) {
    //     console.error('Error adding document: ', error);
    // }
    // }
    // useEffect hook to calculate the total invoice amount whenever 'product' state changes
    useEffect(() => {
        let calculatedTotal = 0;
        product.forEach(item => {
            calculatedTotal += item.price * item.qty;
        });
        setTotal(calculatedTotal);
    }, [product]);

    return (
        <div>
            <h2 className='new-invoice-form'>New Invoice</h2>

            {/* Button to save the product */}
            <button onClick={saveProduct} className='btn' type='button'>
                Saveinvoice
            </button>

            {/* Form for entering invoice details */}
            <form className='new-invoice-form' onSubmit={(e) => e.preventDefault()}>
                <div className='first-row'>
                    <input onChange={(e) => setTo(e.target.value)} placeholder='To' value={to} />
                    <input onChange={(e) => setPhone(e.target.value)} placeholder='Phone' value={phone} />
                    <input onChange={(e) => setAddress(e.target.value)} placeholder='Address' value={address} />
                </div>
                <div className='first-row'>
                    <input onChange={(e) => setName(e.target.value)} placeholder='Product Name' value={name} />
                    <input onChange={(e) => setPrice(e.target.value)} placeholder='Price' value={price} />
                    <input onChange={(e) => setQty(e.target.value)} type='number' placeholder='Quantity' value={qty} />
                </div>
                {/* Button to add product to the invoice */}
                <button onClick={addProduct} className='btn' type='button'>
                    Add Product
                </button>
            </form>

            {/* Displaying list of products added to the invoice */}
            <div className='product-wrapper'>
                <div className='product-list'>
                    <p>s. No</p>
                    <p>Product Name</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                </div>
                {/* Mapping through 'product' state to display each product */}
                {product.map((data, index) => (
                    <div className='product-list' key={index}>
                        <p>{index + 1}</p>
                        <p>{data.name}</p>
                        <p>{data.price}</p>
                        <p>{data.qty}</p>
                        <p>{data.qty * data.price}</p>
                    </div>
                ))}
                {/* Displaying the total amount of the invoice */}
                <div className='total-wrapper'>
                    <p>Total: {total}</p>
                </div>
            </div>
        </div>
    );
};

export default NewInvoice;
