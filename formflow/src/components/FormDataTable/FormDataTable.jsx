import React, { useEffect, useState } from 'react';
import './FormTable.css'
import {ClipLoader} from 'react-spinners'

const FormDataTable =({formData}) => {


    
    const [data,setData]=useState('')
    const [columns,setColumns]=useState([])
    const [columnData,setColumnsData]=useState([])
    const [loader,setLoader]=useState(false)
    // setData(formData)
    

    useEffect(() => {
        setLoader(true)
        setData(formData);
        if (formData && formData.length > 0) {
            const form = formData[0].form_data;
            if (form && form.length > 0) {
                const nonEmptyData = form.filter(item => Object.keys(item).length > 0);
                if (nonEmptyData.length > 0) {
                    const cols = ["no", ...Object.keys(nonEmptyData[0])];
                    setColumns(cols);
                    setColumnsData(nonEmptyData);
                    
                } else {
                    setColumns([]);
                    setColumnsData([]);
                }
            } else {
                setColumns([]);
                setColumnsData([]);
            }
        } else {
            setColumns([]);
            setColumnsData([]);
        }
    }, [formData]);


    return (
        <>
            {/* {loader ? <ClipLoader size={20}/>: "no data yet"} */}
            {data && <h1 className='text-xl uppercase'>{data[0].projectname} <span className='text-xs font-bold'>submissions</span></h1>}

            

            {data ? 
            
                <div className='overflow-scroll'>
                    <table className='w-full text-left divide-y'>
                        <thead className='uppercase'>
                            <tr className='p-2'>
                            {columns.map((col, index) => (
                                <th key={index} className='p-4'>{col}</th>
                            ))}
                            </tr>
                        </thead>
                        <tbody>
                        {columnData.map((item, rowIndex) => (
                            <tr key={rowIndex} className=''>
                                <td className='p-3'>{rowIndex + 1}</td>
                                    {columns.slice(1).map((col, colIndex) => (
                                <td key={colIndex} className='p-3'>{item[col]}</td>
                                ))}
                            </tr>
            ))}
                        </tbody>
                    </table>
                </div>
                :
                <div>no data</div>
            
            
            
            
            
            }
        
        </>
    );
};

export default FormDataTable;