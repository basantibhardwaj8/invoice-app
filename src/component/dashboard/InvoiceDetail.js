import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './InvoiceDetail.css';
import img1 from '../../assets/basanti.jpg';

const InvoiceDetail = () => {
  const location = useLocation();
  console.log(location)
  //hu
  //  const [data,setData]=useState(location.state)
   //hu
   const [invoice,setinvoice]=useState(location.state)
  // console.log(location.state)
  // const initialData = location.state || {};
  // const [data, setData] = useState(initialData);

  const products = invoice.products || [];
  const [companyName, setCompanyName] = useState(localStorage.getItem('cName') || '');
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [photoURL, setPhotoURL] = useState(localStorage.getItem('photoURL') || '');

  const printInvoice = () => {
    const input = document.getElementById('invoice');

    html2canvas(input)
      .then((canvas) => {
        const imageData = canvas.toDataURL('basanti.jpg', 1.0);
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'pt',
          format: [612, 719] // Adjust as needed for your layout
        });

        const imgWidth = 595; // A4 width in points
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imageData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('invoice.pdf');
      })
      .catch((error) => {
        console.error('Error generating PDF:', error);
      });
  };

  return (
    <div className='invoice-wrapper'>
      <div>
        <button onClick={printInvoice} className='print-btn'>
          Print Invoice
        </button>
      </div>
      <div className='invoice-header'>
        <div className='company-detail'>
          <img className='company-logo' alt='logo' src={img1} />
          <p>{companyName}</p>
          <p>{email}</p>
        </div>
        <div className='customer-details'>
          <h1>Invoice</h1>
          <div className='customer-info'>
            <p><strong>To:</strong> {invoice.to || ''}</p>
            <p><strong>Phone:</strong> {invoice.phone || ''}</p>
            <p><strong>Address:</strong> {invoice.address || ''}</p>
          </div>
        </div>
      </div>
      <div id='invoice'>
        <table className='product-table'>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {invoice.products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.qty}</td>
                <td>{product.price * product.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div> // Corrected closing tag
  );
};

export default InvoiceDetail;
