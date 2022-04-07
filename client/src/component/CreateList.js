import React , {useEffect, useState} from 'react'
import listPic from '../images/image.png'
import FileBase from 'react-file-base64'

// style sheet
import '../style/Createlist.css'
import { CreateListforProduct } from '../Services/ServicesApi'




const CreateList = () => {
 
    let inputData = {
        ListName : '',
        ListImage : ''
    }

    const [Listdata , setListdata] = useState(inputData)
    const [Image , setImage] = useState('')
    const [File , setFile] = useState('')

 

    const listName = (e) => {
        setListdata({...Listdata , [e.target.name]:e.target.value})
    }

    const gitImage = () => {
        if(Image !== ''){
            let imageUrl = {ListImage:Image[0].base64}
            Listdata.ListImage = imageUrl.ListImage
        }
    }
    const CheckForImage = () => {
        if(Image !== ''){
            setFile(Image[0].base64)
        }
    }
    
    useEffect(() => {
        CheckForImage()
    }, [Image])

    const gitListData = () => {
        if(!Listdata.ListName){
            alert('Enter List name')
        }
        else{
            gitImage()
            CreateListforProduct(Listdata)
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        }
        
    }

  return (
    <div className='container-lg'>
        <div className='d-flex flex-column align-items-center mt-5'>
        <div className='list-name col-lg-6 col-md-8 col-12 mb-3'>
            <input type='text' placeholder='List Name' value={Listdata.ListName} name='ListName' onChange={(e) => listName(e)} className='form-control input fs-5 mb-2'/>
            <FileBase type='file' name='ProductImage' value={Listdata.ListImage} multiple='false' onDone={(base) => setImage(base)}/>
        </div>
        <div className='col-lg-6 border'>
            <img src={File || listPic} alt='List Pic' className='img-fluid w-100 listImage'/>
        </div>
        <button onClick={gitListData} className='p-2 ps-5 pe-5 mt-2 rounded text-white bg-danger' >Add</button>
        </div>
    </div>
  )
}

export default CreateList