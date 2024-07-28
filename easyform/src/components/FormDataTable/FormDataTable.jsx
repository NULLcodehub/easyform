import React, { useEffect, useState } from 'react';
import './FormTable.css'

const FormDataTable =({formData}) => {


    
    const [data,setData]=useState('')
    const [columns,setColumns]=useState([])
    const [columnData,setColumnsData]=useState([])
    // setData(formData)
    

    useEffect(() => {
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
    // console.log(data[0].projectname)
    
    // useEffect(()=>{
       
    // },[formData])
    

    // console.log(columns)
    // console.log(columnData)

    

    return (
        <>
            {data && <h1 className='text-xl uppercase'>{data[0].projectname}</h1>}

            {data ? 
            
                <div className='overflow-x-auto'>
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