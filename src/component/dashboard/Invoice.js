// import React, { useEffect, useState } from 'react';
// import { db } from '../../firebase';
// import { getFirestore,collection, getDocs, deleteDoc,doc } from 'firebase/firestore'; // Import deleteDoc from Firestore
// import { useNavigate } from 'react-router-dom';

// const Invoice = () => {
//     // const[data,setData]=useState()
//     const [invoices, setInvoices] = useState([]);
//     const navigate=useNavigate([])

//     useEffect(() => {
//         getData();
//     }, []);
//     const getData = async () => {
//         try {
            
//             const querySnapshot = await getDocs(collection(db,'invoices'));
//             const fetchedInvoices = querySnapshot.docs.map(doc => ({
//                 id: doc.id,
//                 ...doc.data()
//             }));
//             setInvoices(fetchedInvoices);  // Assuming setInvoices is a function to set state or update state
//         } catch (error) {
//             console.error('Error fetching invoices: ', error);
//         }
//     }
    

//     // const getData = async () => {
//     //     try {
//     //         const querySnapshot = await getDocs(collection(db, 'invoices'));
//     //         const fetchedInvoicess = querySnapshot.docs.map(doc => ({
//     //             id: doc.id,
//     //             ...doc.data()
//     //         }));
//     //         setInvoices(fetchedInvoicess);
//     //     } catch (error) {
//     //         console.error('Error fetching invoices: ', error);
//     //     }
//     // };

//     // const deleteInvoice = async (id) => {
//     //     const isSure = window.confirm('Are you sure you want to delete?');
//     //     if (isSure) {
//     //         try {
//     //             await deleteDoc(doc(db, 'invoices', id));
//     //             // Remove the deleted invoice from state
//     //             setInvoices(prevInvoices => prevInvoices.filter(invoice => invoice.id !== id));
//     //         } catch (error) {
//     //             console.error('Error deleting invoice: ', error);
//     //             window.alert('Something went wrong while deleting.');
//     //         }
//     //     }
//     // };
//     const deleteInvoice = async (id, setInvoices) => {
//         const isSure = window.confirm('Are you sure you want to delete?');
        
//         if (!isSure) {
//             return; // If user cancels the delete operation, exit function
//         }
    
//         try {
//             // Delete the invoice from Firestore
//             await deleteDoc(doc(db, 'invoices', id));
            
//             // Remove the deleted invoice from state
//             setInvoices(prevInvoices =>
//                 prevInvoices.filter(invoice => invoice.id !== id)
//             );
            
//             window.alert('Invoice deleted successfully.');
//         } catch (error) {
//             console.error('Error deleting invoice: ', error);
//             window.alert('Something went wrong while deleting.');
//         }
//     };

//     return (
//         <div>
//             <h2>Invoices</h2>
//             <p>hello</p>
//             <ul>
//                 {invoices.map((data) => (
//                     <li key={data.id}>
//                         <p>ID: {data.id}</p>
//                         <p>To: {data.to}</p>
//                         <p>Phone: {data.phone}</p>
//                         <p>Address: {data.address}</p>
//                         <p>Total: {data.total}</p>
//                         <p>Date: {data.date.toDate().toLocaleDateString()}</p>
//                         <button onClick={() =>{deletedata(data.id)}} className='delete-btn'>Delete</button>
//                         <button onClick={() =>{navigate('/dashboard/dataDetail',{state:data})}} className='delete -btn view btn'>view</button>
//                         <hr />
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Invoice;
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { getFirestore,collection, getDocs, deleteDoc,doc } from 'firebase/firestore'; // Import deleteDoc from Firestore
import { useNavigate } from 'react-router-dom';

const Invoice = () => {
    // const[data,setData]=useState()
    const [invoices, setInvoices] = useState([]);
    const navigate=useNavigate([])

    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        try {
            
            const querySnapshot = await getDocs(collection(db,'invoices'));
            const fetchedInvoices = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setInvoices(fetchedInvoices);  // Assuming setInvoices is a function to set state or update state
        } catch (error) {
            console.error('Error fetching invoices: ', error);
        }
    }
    

    // const getData = async () => {
    //     try {
    //         const querySnapshot = await getDocs(collection(db, 'invoices'));
    //         const fetchedInvoicess = querySnapshot.docs.map(doc => ({
    //             id: doc.id,
    //             ...doc.data()
    //         }));
    //         setInvoices(fetchedInvoicess);
    //     } catch (error) {
    //         console.error('Error fetching invoices: ', error);
    //     }
    // };

    // const deleteInvoice = async (id) => {
    //     const isSure = window.confirm('Are you sure you want to delete?');
    //     if (isSure) {
    //         try {
    //             await deleteDoc(doc(db, 'invoices', id));
    //             // Remove the deleted invoice from state
    //             setInvoices(prevInvoices => prevInvoices.filter(invoice => invoice.id !== id));
    //         } catch (error) {
    //             console.error('Error deleting invoice: ', error);
    //             window.alert('Something went wrong while deleting.');
    //         }
    //     }
    // };
    const deleteInvoice = async (id, setInvoices) => {
        const isSure = window.confirm('Are you sure you want to delete?');
        
        if (!isSure) {
            return; // If user cancels the delete operation, exit function
        }
    
        try {
            // Delete the invoice from Firestore
            await deleteDoc(doc(db, 'invoices', id));
            
            // Remove the deleted invoice from state
            // setInvoices(prevInvoices =>
            //     prevInvoices.filter(invoice => invoice.id !== id)
            // );
            
            // window.alert('Invoice deleted successfully.');
        } catch (error) {
           
            window.alert('Something went wrong while deleting.');
        }
    };

    return (
        <div>
            <h2>Invoices</h2>
            <p>hello</p>
            <ul>
                {invoices.map((invoice) => (
                    <li key={invoice.id}>
                        <p>ID: {invoice.id}</p>
                        <p>To: {invoice.to}</p>
                        <p>Phone: {invoice.phone}</p>
                        <p>Address: {invoice.address}</p>
                        <p>Total: {invoice.total}</p>
                        <p>Date: {invoice.date.toDate().toLocaleDateString()}</p>
                        <button onClick={() =>{deleteInvoice(invoice.id)}} className='delete-btn'>Delete</button>
                        <button onClick={() =>{navigate('/dashboard/invoiceDetail',{state:invoice})}} className='delete -btn view btn'>view</button>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Invoice;
