import React, {useState} from 'react';
import Avatar from 'react-avatar-edit';
import { Dialog } from 'primereact/dialog';
// import {Button} from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import img from '../../public/profile.png';
import './profile.css';

const Profile = () => {
    const [image, setImage] = useState("");
    const [imageCrop, setImageCrop] = useState(false);
    const [src, setSrc] = useState(false);
    const [profile, setProfile] = useState([]);
    const [preview, setPreview] = useState(false);
    const [width, setWidth] = React.useState()
    const [height, setHeight] = React.useState()
    const [w, setW] = React.useState()
    const [h, setH] = React.useState()


    React.useEffect(() => {
      // let w = 
      setWidth(getComputedStyle(document.documentElement).getPropertyValue('--profile-width'));
      setHeight(getComputedStyle(document.documentElement).getPropertyValue('--profile-height'));

    }, [])

    React.useEffect(() => {
        setW(getComputedStyle(document.documentElement).getPropertyValue('--avater-width'));
        setH(getComputedStyle(document.documentElement).getPropertyValue('--avater-height'));
  
      }, [])

    const profileFinal = profile.map((item) => item.preview);

    const onClose = () => {
        setPreview(null);
    };

    const onCrop = (view) => {
        setPreview(view);
    };
    const saveCropImage = () => {
        setProfile([...profile, {preview}]);
        setImageCrop(false)
        
    }
    
  return (
    <div className='content'>
        <div className='profile'>
            <img 
            style={{
                width: width,
                height: height,
                borderRadius: "50%",
                objectFit: "cover",
                border: "4px solid green",
            }}
            onClick ={ () => setImageCrop(true)}
            src={profileFinal.length ? profileFinal : img } 
            alt='' 
            />

            <Dialog
                className='dialog'
                visible={imageCrop}
                header={() => {
                    <p htmlFor='' className='header'>
                        Update Profile
                    </p>
                }}
                onHide = {() => setImageCrop(false)}
                >
                    <div className='confirmationContent'>
                        <Avatar
                            width={300}
                            height={300}
                            onCrop={onCrop}
                            onClose={onClose}
                            src={src}
                            shadingColor={'#474649'}
                            backgroundColor={"#474649"}
                        />
                        <div >
                    
                                <button className='crop'
                                    onClick={saveCropImage}
                                    text="save"
                                />
                                <button/>
                      
                        </div>
                    </div>

                    </Dialog>

            <InputText 
            type="file" 
            accept='/image/"'
            style={{ display: "none" }}

            onChange={(event)=>{
                const file = event.target.files[0];
                if(file && file.type.substring(0,5) === "image"){
                    setImage(file);
                }else{
                    setImage(null) 
                }
            }}
            />
        </div>
    </div>

  )
}

export default Profile